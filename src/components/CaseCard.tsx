import { Link } from "react-router-dom";
import Arrow from "./Arrow";

type Props = {
  to: string;
  num: string;
  title: string;
  problem: string;
  tags: string[];
  metric: { num: string; lab: string };
  link?: string;
  img: { src: string; alt: string; style?: React.CSSProperties };
  variant: "tall" | "wide-feature" | "half";
  frameStyle?: React.CSSProperties;
};

export default function CaseCard({
  to,
  num,
  title,
  problem,
  tags,
  metric,
  link = "Read case study",
  img,
  variant,
  frameStyle,
}: Props) {
  const variantClass =
    variant === "tall" ? "case-tall" :
    variant === "wide-feature" ? "case-wide case-feature" :
    "case-half";

  return (
    <Link className={`case ${variantClass} reveal`} to={to}>
      <div className="case-frame" style={frameStyle}>
        <img src={img.src} alt={img.alt} style={img.style} />
      </div>
      <div className="case-meta">
        <div className="case-num">{num}</div>
        <div>
          <h3>{title}</h3>
          <p className="case-problem">{problem}</p>
          <div className="case-tags">
            {tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
          <div className="case-metric">
            <div className="num">{metric.num}</div>
            <div className="lab">{metric.lab}</div>
          </div>
          <div className="case-link">
            {link}
            <Arrow />
          </div>
        </div>
      </div>
    </Link>
  );
}
