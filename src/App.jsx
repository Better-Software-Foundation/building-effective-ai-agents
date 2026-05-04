import { Link, Route, Routes, useLocation } from "react-router-dom";
import ExecutiveSummary from "../ai-agent-executive-summary.jsx";
import ArchitecturePatterns from "../ai-agent-architecture-patterns.jsx";
import DecisionFramework from "../ai-agent-decision-framework.jsx";

const experiences = [
  {
    path: "/summary",
    title: "Executive Summary",
    description:
      "A fast-reading version of the guide with key principles, watchouts, and the clearest takeaways.",
  },
  {
    path: "/patterns",
    title: "Architecture Patterns",
    description:
      "Explore the main agent patterns, compare their tradeoffs, and see when hybrid approaches make sense.",
  },
  {
    path: "/decision",
    title: "Decision Framework",
    description:
      "Answer four questions to get a practical recommendation, a fallback option, and a likely evolution path.",
  },
];

function HomePage() {
  return (
    <main className="shell home-shell">
      <section className="hero">
        <p className="eyebrow">Interactive Guide</p>
        <h1>Building Effective AI Agents</h1>
        <p className="hero-copy">
          Three interactive experiences designed for busy readers who want the
          core ideas, architecture choices, and decision logic without reading a
          full whitepaper.
        </p>
      </section>

      <section className="card-grid">
        {experiences.map((item) => (
          <article key={item.path} className="experience-card">
            <p className="card-kicker">{item.title}</p>
            <p className="card-text">{item.description}</p>
            <Link className="card-link" to={item.path}>
              Open experience
            </Link>
          </article>
        ))}
      </section>

      <section className="guidance-panel">
        <div>
          <p className="panel-label">Suggested Order</p>
          <p className="panel-text">
            Start with the summary, compare patterns next, then use the
            decision framework for a recommendation.
          </p>
        </div>
        <div>
          <p className="panel-label">Deploy Shape</p>
          <p className="panel-text">
            This app is a static Vite + React site, which makes it inexpensive
            and straightforward to host on Vercel.
          </p>
        </div>
      </section>
    </main>
  );
}

function SiteNav() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <Link className="brand" to="/">
          Better Software Foundation
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <Link className={location.pathname === "/" ? "active" : ""} to="/">
            Home
          </Link>
          {experiences.map((item) => (
            <Link
              key={item.path}
              className={location.pathname === item.path ? "active" : ""}
              to={item.path}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
      {isHome && <div className="nav-divider" />}
    </header>
  );
}

export default function App() {
  return (
    <div className="app-frame">
      <SiteNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/summary" element={<ExecutiveSummary />} />
        <Route path="/patterns" element={<ArchitecturePatterns />} />
        <Route path="/decision" element={<DecisionFramework />} />
      </Routes>
    </div>
  );
}
