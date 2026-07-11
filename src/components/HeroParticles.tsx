import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GPUComputationRenderer } from "three/addons/misc/GPUComputationRenderer.js";

// Ported from https://github.com/cullenwebber/three-particles (curl-noise GPGPU swarm)

const CURL_GLSL = /* glsl */ `
vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}

float mod289(float x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
    return mod289(((x*34.0)+1.0)*x);
}

float permute(float x) {
    return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

float taylorInvSqrt(float r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

vec4 grad4(float j, vec4 ip) {
    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
    vec4 p,s;

    p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
    p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
    s = vec4(lessThan(p, vec4(0.0)));
    p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;

    return p;
}

#define F4 0.309016994374947451

vec4 simplexNoiseDerivatives (vec4 v) {
    const vec4  C = vec4( 0.138196601125011,0.276393202250021,0.414589803375032,-0.447213595499958);

    vec4 i  = floor(v + dot(v, vec4(F4)) );
    vec4 x0 = v -   i + dot(i, C.xxxx);

    vec4 i0;
    vec3 isX = step( x0.yzw, x0.xxx );
    vec3 isYZ = step( x0.zww, x0.yyz );
    i0.x = isX.x + isX.y + isX.z;
    i0.yzw = 1.0 - isX;
    i0.y += isYZ.x + isYZ.y;
    i0.zw += 1.0 - isYZ.xy;
    i0.z += isYZ.z;
    i0.w += 1.0 - isYZ.z;

    vec4 i3 = clamp( i0, 0.0, 1.0 );
    vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
    vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

    vec4 x1 = x0 - i1 + C.xxxx;
    vec4 x2 = x0 - i2 + C.yyyy;
    vec4 x3 = x0 - i3 + C.zzzz;
    vec4 x4 = x0 + C.wwww;

    i = mod289(i);
    float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
    vec4 j1 = permute( permute( permute( permute (
             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));


    vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

    vec4 p0 = grad4(j0,   ip);
    vec4 p1 = grad4(j1.x, ip);
    vec4 p2 = grad4(j1.y, ip);
    vec4 p3 = grad4(j1.z, ip);
    vec4 p4 = grad4(j1.w, ip);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    p4 *= taylorInvSqrt(dot(p4,p4));

    vec3 values0 = vec3(dot(p0, x0), dot(p1, x1), dot(p2, x2));
    vec2 values1 = vec2(dot(p3, x3), dot(p4, x4));

    vec3 m0 = max(0.5 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
    vec2 m1 = max(0.5 - vec2(dot(x3,x3), dot(x4,x4)), 0.0);

    vec3 temp0 = -6.0 * m0 * m0 * values0;
    vec2 temp1 = -6.0 * m1 * m1 * values1;

    vec3 mmm0 = m0 * m0 * m0;
    vec2 mmm1 = m1 * m1 * m1;

    float dx = temp0[0] * x0.x + temp0[1] * x1.x + temp0[2] * x2.x + temp1[0] * x3.x + temp1[1] * x4.x + mmm0[0] * p0.x + mmm0[1] * p1.x + mmm0[2] * p2.x + mmm1[0] * p3.x + mmm1[1] * p4.x;
    float dy = temp0[0] * x0.y + temp0[1] * x1.y + temp0[2] * x2.y + temp1[0] * x3.y + temp1[1] * x4.y + mmm0[0] * p0.y + mmm0[1] * p1.y + mmm0[2] * p2.y + mmm1[0] * p3.y + mmm1[1] * p4.y;
    float dz = temp0[0] * x0.z + temp0[1] * x1.z + temp0[2] * x2.z + temp1[0] * x3.z + temp1[1] * x4.z + mmm0[0] * p0.z + mmm0[1] * p1.z + mmm0[2] * p2.z + mmm1[0] * p3.z + mmm1[1] * p4.z;
    float dw = temp0[0] * x0.w + temp0[1] * x1.w + temp0[2] * x2.w + temp1[0] * x3.w + temp1[1] * x4.w + mmm0[0] * p0.w + mmm0[1] * p1.w + mmm0[2] * p2.w + mmm1[0] * p3.w + mmm1[1] * p4.w;

    return vec4(dx, dy, dz, dw) * 49.0;
}

#define snoise4 simplexNoiseDerivatives

vec3 curl( in vec3 p, in float noiseTime, in float persistence ) {

    vec4 xNoisePotentialDerivatives = vec4(0.0);
    vec4 yNoisePotentialDerivatives = vec4(0.0);
    vec4 zNoisePotentialDerivatives = vec4(0.0);

    for (int i = 0; i < 3; ++i) {

        float twoPowI = pow(2.0, float(i));
        float scale = 0.5 * twoPowI * pow(persistence, float(i));

        xNoisePotentialDerivatives += snoise4(vec4(p * twoPowI, noiseTime)) * scale;
        yNoisePotentialDerivatives += snoise4(vec4((p + vec3(123.4, 129845.6, -1239.1)) * twoPowI, noiseTime)) * scale;
        zNoisePotentialDerivatives += snoise4(vec4((p + vec3(-9519.0, 9051.0, -123.0)) * twoPowI, noiseTime)) * scale;
    }

    return vec3(
        zNoisePotentialDerivatives[1] - yNoisePotentialDerivatives[2],
        xNoisePotentialDerivatives[2] - zNoisePotentialDerivatives[0],
        yNoisePotentialDerivatives[0] - xNoisePotentialDerivatives[1]
    );

}
`;

const SIMULATION_FRAG = /* glsl */ `
${CURL_GLSL}

uniform sampler2D textureDefaultPosition;
uniform float uTime;
uniform float uSpeed;
uniform float uDieSpeed;
uniform float uCurlSize;
uniform float uDeltaFrames;

void main() {
	vec2 uv = gl_FragCoord.xy / resolution.xy;

	vec4 positionInfo = texture2D(texturePosition, uv);
	vec3 position = positionInfo.xyz;
	float life = positionInfo.a - uDieSpeed * uDeltaFrames;

	if (life < 0.0) {
		vec4 defaultPosition = texture2D(textureDefaultPosition, uv);
		position = defaultPosition.xyz;
		life = 0.5 + fract(defaultPosition.w * 21.4131 + uTime);
	} else {
		vec3 flow = curl(position * uCurlSize, uTime, 0.1 + (1.0 - life) * 0.1);

		flow /= length(flow) + 1e-4;

		position += flow * uSpeed * uDeltaFrames;
	}

	gl_FragColor = vec4(position, life);
}
`;

const PARTICLES_VERT = /* glsl */ `
#include <common>
#include <shadowmap_pars_vertex>

uniform sampler2D texturePosition;
uniform sampler2D particleDataTexture;
uniform float uPointSize;
uniform vec3 uLightDirection;

attribute vec2 reference;

varying float vLife;
varying vec3 vColor;
varying vec3 vLightDir;
varying vec3 vViewDir;

const vec3 PALETTE[5] = vec3[5](
	vec3(0.973, 0.863, 0.357),  // accent gold #F8DC5B
	vec3(1.0, 0.95, 0.62),      // light gold
	vec3(0.85, 0.62, 0.15),     // deep amber
	vec3(0.98, 0.75, 0.25),     // warm gold
	vec3(0.96, 0.9, 0.75)       // pale champagne
);

void main() {
	vec4 positionInfo = texture2D(texturePosition, reference);
	vec4 particleData = texture2D(particleDataTexture, reference);
	float sizeRandom = mix(0.5, 2.0, particleData.r);
	vLife = positionInfo.w;
	vColor = PALETTE[int(particleData.g + 0.5)];

	vec3 transformed = positionInfo.xyz;
	vec3 transformedNormal = vec3(0.0, 0.0, 1.0);
	vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
	vec4 mvPosition = viewMatrix * worldPosition;

	vLightDir = normalize((viewMatrix * vec4(uLightDirection, 0.0)).xyz);
	vViewDir = normalize(-mvPosition.xyz);

	#include <shadowmap_vertex>

	gl_PointSize = uPointSize * sizeRandom / length(mvPosition.xyz) * smoothstep(0.0, 0.3, vLife);
	gl_Position = projectionMatrix * mvPosition;
}
`;

const PARTICLES_FRAG = /* glsl */ `
#include <common>
#include <packing>

uniform bool receiveShadow;
uniform vec3 shadowColor;

#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

varying float vLife;
varying vec3 vColor;
varying vec3 vLightDir;
varying vec3 vViewDir;

uniform float shadowBlurRadius;

#define SHADOW_BLUR_TAPS 12

float shadowRotationNoise( vec2 p ) {
    return fract( 52.9829189 * fract( dot( p, vec2( 0.06711056, 0.00583715 ) ) ) );
}

float getBlurredShadowMask() {
    #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
        if ( ! receiveShadow ) return 1.0;

        DirectionalLightShadow shadow = directionalLightShadows[ 0 ];
        vec4 baseCoord = vDirectionalShadowCoord[ 0 ];

        vec2 texel = ( 1.0 / shadow.shadowMapSize ) * shadowBlurRadius * baseCoord.w;

        float phi = shadowRotationNoise( gl_FragCoord.xy ) * 6.28318530718;
        float sum = 0.0;

        for ( int i = 0; i < SHADOW_BLUR_TAPS; i++ ) {

            float r = sqrt( ( float( i ) + 0.5 ) / float( SHADOW_BLUR_TAPS ) );
            float theta = float( i ) * 2.39996323 + phi;
            vec2 off = r * vec2( cos( theta ), sin( theta ) );

            vec4 coord = baseCoord;
            coord.xy += off * texel;
            sum += getShadow(
                directionalShadowMap[ 0 ],
                shadow.shadowMapSize,
                shadow.shadowIntensity,
                shadow.shadowBias,
                shadow.shadowRadius,
                coord
            );
        }
        return sum / float( SHADOW_BLUR_TAPS );
    #else
        return 1.0;
    #endif
}

void main() {

    vec2 uv = gl_PointCoord * 2.0 - 1.0;
    uv.y = -uv.y;

    float r2 = dot(uv, uv);

    if (r2 > 1.0) discard;

    vec3 normal = vec3(uv, sqrt(max(0.0, 1.0 - r2)));

    vec3 lightDir = normalize(vLightDir);
    vec3 viewDir = normalize(vViewDir);

    float NdotL = dot(normal, lightDir);
    float diffuse = max(NdotL * 0.5 + 0.5, 0.0);
    diffuse *= diffuse;

    vec3 halfDir = normalize(lightDir + viewDir);
    float specular = pow(max(dot(normal, halfDir), 0.0), 48.0);

    float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 1.0);

    float shadowMask = getBlurredShadowMask();
    shadowMask = pow(shadowMask, 3.0);

    vec3 ambient = vColor * 0.5;
    vec3 diffuseTerm = vColor * (0.8 * diffuse);
    vec3 specularTerm = vec3(1.0) * (0.6 * specular);
    vec3 rimTerm = vColor * (0.4 * fresnel);

    vec3 color = ambient + (diffuseTerm + specularTerm + rimTerm) * shadowMask;

    float shadowAmount = 1.0 - shadowMask;
    color = mix(color, shadowColor, shadowAmount );


    gl_FragColor = vec4(color, 1.0);
}
`;

const DEPTH_VERT = /* glsl */ `
uniform sampler2D texturePosition;
uniform float uPointSize;
uniform float uDepthOffset;

attribute vec2 reference;

varying float vLife;

void main() {
	vec4 positionInfo = texture2D(texturePosition, reference);
	vLife = positionInfo.w;

	vec4 mvPosition = modelViewMatrix * vec4(positionInfo.xyz, 1.0);
	mvPosition.z += uDepthOffset;

	gl_PointSize = uPointSize;
	gl_Position = projectionMatrix * mvPosition;
}
`;

const DEPTH_FRAG = /* glsl */ `
#include <common>
#include <packing>

varying float vLife;

void main() {

	if (vLife < 0.01) discard;

	vec2 coord = gl_PointCoord - 0.5;
	if (dot(coord, coord) > 0.25) discard;

	gl_FragColor = packDepthToRGBA(gl_FragCoord.z);
}
`;

const RADIUS = 40;
const REFERENCE_ASPECT = 16 / 9;

function getCameraDistance(aspect: number) {
  const base = 250;
  if (aspect >= REFERENCE_ASPECT) return base;
  return Math.min(base * (REFERENCE_ASPECT / aspect), 350);
}

function getPointSize(aspect: number) {
  const base = 3000;
  if (aspect >= REFERENCE_ASPECT) return base;
  return base * Math.max(aspect / REFERENCE_ASPECT, 0.75);
}

type Props = {
  hostRef: React.RefObject<HTMLElement>;
};

export default function HeroParticles({ hostRef }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let width = host.clientWidth;
    let height = host.clientHeight;
    let aspect = width / height;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: false,
        alpha: true,
      });
    } catch {
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, aspect, 1, 1000);
    camera.position.z = getCameraDistance(aspect);
    scene.add(camera);

    const lightDirection = new THREE.Vector3(-0.5, 1, 0).normalize();
    const light = new THREE.DirectionalLight(0xffffff, 1.0);
    light.position.copy(lightDirection).multiplyScalar(RADIUS * 4);
    light.castShadow = true;
    const b = RADIUS * 3;
    const shadowCam = light.shadow.camera;
    shadowCam.left = -b;
    shadowCam.right = b;
    shadowCam.top = b;
    shadowCam.bottom = -b;
    shadowCam.near = RADIUS;
    shadowCam.far = RADIUS * 8;
    shadowCam.updateProjectionMatrix();
    light.shadow.mapSize.set(1024, 1024);
    light.shadow.bias = 0.0;
    light.shadow.radius = 10;
    scene.add(light);
    scene.add(light.target);

    // GPGPU position simulation
    const SIZE = window.innerWidth < 768 ? 256 : 512;
    const gpuCompute = new GPUComputationRenderer(SIZE, SIZE, renderer);

    const positionTexture = gpuCompute.createTexture();
    const defaultPositionTexture = gpuCompute.createTexture();
    const particleDataTexture = gpuCompute.createTexture();

    const positionData = positionTexture.image.data as Float32Array;
    const defaultData = defaultPositionTexture.image.data as Float32Array;
    const particleData = particleDataTexture.image.data as Float32Array;

    for (let i = 0; i < positionData.length; i += 4) {
      const r = Math.cbrt(Math.random()) * RADIUS;
      const phi = (Math.random() * 2 - 1) * Math.PI * 0.5;
      const theta = Math.random() * Math.PI * 2;

      const x = r * Math.cos(theta) * Math.cos(phi);
      const y = r * Math.sin(phi);
      const z = r * Math.sin(theta) * Math.cos(phi);
      const life = Math.random();

      positionData[i] = defaultData[i] = x;
      positionData[i + 1] = defaultData[i + 1] = y;
      positionData[i + 2] = defaultData[i + 2] = z;
      positionData[i + 3] = defaultData[i + 3] = life;

      particleData[i] = Math.pow(Math.random(), 5.0);
      particleData[i + 1] = Math.floor(Math.random() * 5);
    }
    defaultPositionTexture.needsUpdate = true;

    const positionVariable = gpuCompute.addVariable(
      "texturePosition",
      SIMULATION_FRAG,
      positionTexture,
    );

    Object.assign(positionVariable.material.uniforms, {
      textureDefaultPosition: { value: defaultPositionTexture },
      uTime: { value: 0 },
      uSpeed: { value: 1.0 },
      uDieSpeed: { value: 0.015 },
      uCurlSize: { value: 0.015 },
      uDeltaFrames: { value: 1.0 },
    });

    gpuCompute.setVariableDependencies(positionVariable, [positionVariable]);

    const gpuError = gpuCompute.init();
    if (gpuError !== null) {
      renderer.dispose();
      return;
    }

    // Points mesh
    const count = SIZE * SIZE;
    const positions = new Float32Array(count * 3);
    const references = new Float32Array(count * 2);
    for (let i = 0; i < count; i++) {
      references[i * 2] = (i % SIZE) / SIZE;
      references[i * 2 + 1] = Math.floor(i / SIZE) / SIZE;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("reference", new THREE.BufferAttribute(references, 2));

    const material = new THREE.ShaderMaterial({
      lights: true,
      uniforms: THREE.UniformsUtils.merge([
        THREE.UniformsLib.lights,
        {
          texturePosition: { value: null },
          particleDataTexture: { value: particleDataTexture },
          uPointSize: { value: getPointSize(aspect) },
          uLightDirection: { value: lightDirection },
          shadowColor: { value: new THREE.Color(0x4a3608) },
          shadowBlurRadius: { value: 2.0 },
        },
      ]),
      vertexShader: PARTICLES_VERT,
      fragmentShader: PARTICLES_FRAG,
      blending: THREE.NoBlending,
    });

    const points = new THREE.Points(geometry, material);
    points.frustumCulled = false;
    points.castShadow = true;
    points.receiveShadow = true;

    const depthMaterial = new THREE.ShaderMaterial({
      uniforms: {
        texturePosition: { value: null },
        uPointSize: { value: 1.5 },
        uDepthOffset: { value: RADIUS * 0.05 },
      },
      vertexShader: DEPTH_VERT,
      fragmentShader: DEPTH_FRAG,
    });
    points.customDepthMaterial = depthMaterial;

    scene.add(points);

    // Camera rig (mouse parallax)
    const pointer = { x: 0, y: 0 };
    const xLimit = [-200, 200];
    const yLimit = [-150, 150];
    const smoothTime = 0.25;
    const lookTarget = new THREE.Vector3(0, 0, 0);

    const onMouseMove = (e: MouseEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Slow motion on press
    let timeScale = 1.0;
    let targetTimeScale = 1.0;
    const enterSlowMotion = () => {
      targetTimeScale = 0.15;
    };
    const exitSlowMotion = () => {
      targetTimeScale = 1.0;
    };
    host.addEventListener("pointerdown", enterSlowMotion);
    window.addEventListener("pointerup", exitSlowMotion);
    window.addEventListener("pointercancel", exitSlowMotion);

    // Resize
    const onResize = () => {
      width = host.clientWidth;
      height = host.clientHeight;
      aspect = width / height;
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      camera.aspect = aspect;
      camera.position.z = getCameraDistance(aspect);
      camera.updateProjectionMatrix();
      material.uniforms.uPointSize.value = getPointSize(aspect);
    };
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(host);

    // Animation loop
    const clock = new THREE.Clock();
    let scaledElapsed = 0;
    let raf = 0;

    const animate = () => {
      const delta = clock.getDelta();

      const ease = Math.min(delta * 12.0, 1.0);
      timeScale += (targetTimeScale - timeScale) * ease;

      const scaledDelta = delta * timeScale;
      scaledElapsed += scaledDelta;

      // camera rig
      const damp = 1.0 - Math.exp(-delta / smoothTime);
      const rangeX = (xLimit[1] - xLimit[0]) / 2;
      const targetX = Math.max(
        xLimit[0],
        Math.min(xLimit[1], pointer.x * rangeX),
      );
      camera.position.x += (targetX - camera.position.x) * damp;
      const rangeY = (yLimit[1] - yLimit[0]) / 2;
      const targetY = Math.max(
        yLimit[0],
        Math.min(yLimit[1], pointer.y * rangeY),
      );
      camera.position.y += (targetY - camera.position.y) * damp;
      camera.lookAt(lookTarget);

      // simulation
      const uniforms = positionVariable.material.uniforms;
      uniforms.uTime.value = scaledElapsed;
      uniforms.uDeltaFrames.value = Math.min(scaledDelta * 60.0, 4.0);
      gpuCompute.compute();

      const posTex =
        gpuCompute.getCurrentRenderTarget(positionVariable).texture;
      material.uniforms.texturePosition.value = posTex;
      depthMaterial.uniforms.texturePosition.value = posTex;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      host.removeEventListener("pointerdown", enterSlowMotion);
      window.removeEventListener("pointerup", exitSlowMotion);
      window.removeEventListener("pointercancel", exitSlowMotion);
      gpuCompute.dispose();
      geometry.dispose();
      material.dispose();
      depthMaterial.dispose();
      particleDataTexture.dispose();
      defaultPositionTexture.dispose();
      scene.remove(points);
      renderer.dispose();
    };
  }, [hostRef]);

  return <canvas ref={canvasRef} className="hero-particles" aria-hidden="true" />;
}
