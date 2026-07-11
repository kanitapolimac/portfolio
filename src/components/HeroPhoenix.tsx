export default function HeroPhoenix() {
  return (
    <div className="hero-phoenix" aria-hidden="true">
      <div className="phoenix-flight">
        <div className="phoenix-sprite">
          <svg
            className="ph ph-a"
            viewBox="0 0 100 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6,32 C 20,10 34,8 44,22" />
              <path d="M56,22 C 66,8 80,10 94,32" />
              <path d="M44,22 Q 50,26 56,22" />
              <path
                d="M50,26 L 58,36 M50,26 L 54,40 M50,26 L 46,38"
                strokeWidth="1.5"
                opacity="0.75"
              />
            </g>
          </svg>
          <svg
            className="ph ph-b"
            viewBox="0 0 100 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6,20 C 20,38 34,40 44,26" />
              <path d="M56,26 C 66,40 80,38 94,20" />
              <path d="M44,26 Q 50,22 56,26" />
              <path
                d="M50,22 L 58,36 M50,22 L 54,40 M50,22 L 46,38"
                strokeWidth="1.5"
                opacity="0.75"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
