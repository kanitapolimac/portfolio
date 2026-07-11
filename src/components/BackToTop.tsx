import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`back-to-top${visible ? " show" : ""}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M7 12V2M3 6l4-4 4 4" />
      </svg>
    </button>
  );
}
