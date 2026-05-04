import { Link, Route, Routes, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
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

const sourceUrl =
  "https://resources.anthropic.com/hubfs/Building%20Effective%20AI%20Agents-%20Architecture%20Patterns%20and%20Implementation%20Frameworks.pdf";

const quickPoints = [
  "Built for people who need the big ideas fast",
  "Focused on agent patterns, tradeoffs, and practical decisions",
  "Designed as a companion to the original guide, not a replacement for it",
];

const visitorGuidance = [
  {
    label: "Suggested Path",
    text: "Start with the summary, compare patterns next, then use the decision framework when you need a recommendation.",
  },
  {
    label: "Best For",
    text: "Engineering leaders, product teams, technical educators, and curious builders exploring agent design choices.",
  },
];

function HomePage() {
  return (
    <main className="shell home-shell">
      <section className="hero">
        <p className="eyebrow">Better Software Foundation</p>
        <h1>Building Effective AI Agents</h1>
        <p className="hero-copy">
          Three interactive experiences for readers who want the core ideas,
          architecture choices, and decision logic from Anthropic&apos;s guide
          without having to work through the entire document in one sitting.
        </p>
        <div className="hero-actions">
          <Link className="primary-link" to="/summary">
            Start with the summary
          </Link>
          <a
            className="secondary-link"
            href="https://better-software-foundation.com"
          >
            Visit live site
          </a>
        </div>
      </section>

      <section className="highlights-panel">
        {quickPoints.map((item) => (
          <div key={item} className="highlight-pill">
            {item}
          </div>
        ))}
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
        {visitorGuidance.map((item) => (
          <div key={item.label}>
            <p className="panel-label">{item.label}</p>
            <p className="panel-text">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="source-panel">
        <p className="panel-label">About This Project</p>
        <p className="panel-text">
          This site translates the ideas from Anthropic&apos;s{" "}
          <em>Building Effective AI Agents</em> into a more visual,
          interactive, and time-efficient format for public learning.
        </p>
      </section>

      <footer className="site-footer">
        <p className="footer-text">
          Source:{" "}
          <a href={sourceUrl} target="_blank" rel="noreferrer">
            Anthropic, &quot;Building Effective AI Agents: Architecture Patterns and Implementation Frameworks&quot; (PDF)
          </a>
        </p>
      </footer>
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
      <Analytics />
    </div>
  );
}
