import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import { useScrollToTop } from "../hooks/useScrollToTop";

type Props = {
  caseId: "telemeet" | "carea" | "store-intelligence" | "airdomo" | "system-akvile";
  role?: string;
  children: ReactNode;
  next: ReactNode;
  footMeta: string;
};

export default function CaseLayout({ caseId, role, children, next, footMeta }: Props) {
  useScrollToTop();
  useReveal();

  return (
    <div className="case-page" data-case={caseId}>
      <header className="author">
        <div className="author-inner">
          <div className="who">
            <div className="who-avatar">KP</div>
            <div>
              <div className="who-name">Kanita Polimac</div>
              <div className="who-role">{role ?? "Product Designer"}</div>
            </div>
          </div>
          <Link className="back-link" to="/">
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M9 6H3M5 9L3 6l2-3" />
            </svg>
            Index
          </Link>
        </div>
      </header>

      <main className="wrap">{children}</main>

      {next}

      <footer className="foot">
        <div className="foot-inner">
          <div>© 2026 Kanita Polimac</div>
          <div>{footMeta}</div>
          <div>
            <Link to="/">↩ Back to index</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
