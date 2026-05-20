import { Link } from "react-router-dom";

type Single = {
  to: string;
  label: string;
  title: React.ReactNode;
};

const NextArrow = () => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M8 16h18M20 9l7 7-7 7" />
  </svg>
);

export function NextCase({ to, label, title }: Single) {
  return (
    <section className="next">
      <div className="wrap">
        <Link to={to}>
          <span className="lab">{label}</span>
          <span className="title">{title}</span>
          <NextArrow />
        </Link>
      </div>
    </section>
  );
}

export function NextCaseGrid({ items }: { items: Single[] }) {
  return (
    <section className="next">
      <div className="wrap">
        <div className="next-grid">
          {items.map((it) => (
            <Link key={it.to} to={it.to}>
              <div className="lab">{it.label}</div>
              <div className="title">
                <span>{it.title}</span>
                <NextArrow />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
