import { useEffect, useState } from "react";

const sections = [
  { id: "work", num: "01", label: "Work" },
  { id: "about", num: "02", label: "About" },
  { id: "experience", num: "03", label: "Experience" },
  { id: "ai", num: "04", label: "AI" },
];

export default function Nav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="brand" href="#top">
          <span className="dot" />
          Kanita Polimac
          <small>· KP</small>
        </a>
        <div className="nav-links">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? "active" : undefined}
            >
              <span className="num">{s.num}</span>
              {s.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact">
            Book a call →
          </a>
        </div>
      </div>
    </nav>
  );
}
