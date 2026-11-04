import { useState } from "react";
import Committee from "./Committee";

const nav = [
  ["About", "/#about"],
  ["Dates", "/#dates"],
  ["Registration", "/#registration"],
  ["Committees", "/committees"],
  ["Advisory Committee", "/#advisory-committee"],
  ["Contact", "/#contact"],
];

export default function CommitteePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="/#top" aria-label="IM3-2027 home">
            <img src="/logo2.webp" alt="Pimpri Chinchwad University" />
          </a>

          <nav
            className={menuOpen ? "nav-links open" : "nav-links"}
            aria-label="Primary navigation"
          >
            {nav.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>

          <a className="nav-cta" href="/#tracks">
            <span>Call for papers</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <Committee />
    </>
  );
}
 