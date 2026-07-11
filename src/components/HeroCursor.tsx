import { useEffect, useRef } from "react";

type Props = {
  hostRef: React.RefObject<HTMLElement>;
};

export default function HeroCursor({ hostRef }: Props) {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches) return;

    let targetX = 0;
    let targetY = 0;
    let ringX = 0;
    let ringY = 0;
    let seeded = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const rect = host.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      if (!seeded) {
        ringX = targetX;
        ringY = targetY;
        seeded = true;
        host.classList.add("cursor-active");
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${targetX}px, ${targetY}px)`;
      }
    };

    const onLeave = () => {
      host.classList.remove("cursor-active");
      host.classList.remove("cursor-hot");
      seeded = false;
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      if (el && el.closest("a, button, .hover-target")) {
        host.classList.add("cursor-hot");
      } else {
        host.classList.remove("cursor-hot");
      }
    };

    const tick = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    host.addEventListener("mousemove", onMove);
    host.addEventListener("mouseleave", onLeave);
    host.addEventListener("mouseover", onOver);

    return () => {
      cancelAnimationFrame(raf);
      host.removeEventListener("mousemove", onMove);
      host.removeEventListener("mouseleave", onLeave);
      host.removeEventListener("mouseover", onOver);
      host.classList.remove("cursor-active");
      host.classList.remove("cursor-hot");
    };
  }, [hostRef]);

  return (
    <>
      <div ref={ringRef} className="hero-cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="hero-cursor-dot" aria-hidden="true" />
    </>
  );
}
