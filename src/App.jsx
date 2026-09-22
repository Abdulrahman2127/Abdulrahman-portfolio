import { useEffect, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Code2, Globe2, Menu, X } from "lucide-react";
import PortfolioSection from "./components/PortfolioSection";
import Dashboard from "./components/DevDashboard";
import { copy } from "./data/copy";
import "./App.css";

export default function App() {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem("portfolio-language") === "ar" ? "ar" : "en";
    } catch {
      return "en";
    }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const t = copy[language];
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.title = `${t.name} — ${t.role}`;
    document.querySelector('meta[name="description"]').content = t.intro;
    try {
      localStorage.setItem("portfolio-language", language);
    } catch {
      /* Storage is optional. */
    }
  }, [language, t]);
  useEffect(() => {
    if (location.hash)
      document.getElementById(location.hash.slice(1))?.scrollIntoView();
  }, [location]);
  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <header className="site-header">
        <div className="container nav-shell">
          <Link
            className="wordmark"
            to="/#home"
            onClick={() => setMenuOpen(false)}
          >
            <span className="brand-icon">
              <Code2 size={20} />
            </span>
            {t.name}
            <span className="brand-dot">.</span>
          </Link>
          <nav
            id="navigation"
            aria-label={t.navigation}
            className={menuOpen ? "navigation is-open" : "navigation"}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setMenuOpen(false);
                document.getElementById("menu-toggle").focus();
              }
            }}
          >
            {["home", "about", "projects", "skills", "contact"].map((id) => (
              <Link
                key={id}
                to={`/#${id}`}
                onClick={() => setMenuOpen(false)}
                aria-current={
                  location.pathname === "/" &&
                  (location.hash || "#home") === `#${id}`
                    ? "location"
                    : undefined
                }
              >
                {t.nav[id]}
              </Link>
            ))}
          </nav>
          <div className="nav-controls">
            <button
              className="language-button"
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              aria-label={
                language === "en"
                  ? "Switch to Arabic"
                  : "التبديل إلى الإنجليزية"
              }
            >
              <Globe2 size={16} />
              <span lang={language === "en" ? "ar" : "en"}>
                {language === "en" ? "العربية" : "English"}
              </span>
            </button>
            <button
              id="menu-toggle"
              className="menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="navigation"
              aria-label={menuOpen ? t.closeMenu : t.openMenu}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
      <main id="main">
        <Routes>
          <Route
            path="/"
            element={<PortfolioSection language={language} t={t} />}
          />
          <Route
            path="/Dashboard"
            element={<Dashboard language={language} />}
          />
          <Route
            path="*"
            element={
              <div className="container not-found">
                <p>404</p>
                <h1>{t.notFound}</h1>
                <Link className="button" to="/">
                  {t.nav.home}
                </Link>
              </div>
            }
          />
        </Routes>
      </main>
      <footer className="container footer">
        <p>
          {t.name} <span>— {t.role}</span>
        </p>
        <p>
          © {new Date().getFullYear()} · {t.rights}
        </p>
        <a href="#main">{t.top} ↑</a>
      </footer>
    </>
  );
}
