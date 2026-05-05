import { Link, Route, Routes, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import SourceBadge from "./components/SourceBadge";
import {
  routeArchitecture,
  sourceRegistry,
  synthesisPrinciples,
  terminologyCrosswalk,
} from "./content/synthesisModel";
import ExecutiveSummary from "../ai-agent-executive-summary.jsx";
import ArchitecturePatterns from "../ai-agent-architecture-patterns.jsx";
import DecisionFramework from "../ai-agent-decision-framework.jsx";
import FoundationsAndGuardrails from "./FoundationsAndGuardrails";

const quickPoints = [
  "Built for people who need the big ideas fast",
  "Now expanding toward a synthesis of Anthropic and OpenAI guidance",
  "Focused on patterns, tradeoffs, implementation foundations, and practical decisions",
];

const visitorGuidance = [
  {
    label: "Suggested Path",
    text: "Start with the summary, use the decision framework to qualify the workflow, then move into patterns and foundations.",
  },
  {
    label: "Best For",
    text: "Engineering leaders, product teams, technical educators, and curious builders exploring agent design choices.",
  },
];

const liveExperiences = routeArchitecture.filter((item) => item.status === "live");
const sourceList = [sourceRegistry.anthropic, sourceRegistry.openai];

function PlannedExperiencePage({ title, summary, plannedSections, sourceIds }) {
  return (
    <main className="shell" style={{ display: "grid", gap: 22 }}>
      <section className="hero">
        <p className="eyebrow">Planned Experience</p>
        <h1 style={{ maxWidth: "none" }}>{title}</h1>
        <p className="hero-copy">{summary}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 18 }}>
          {sourceIds.map((sourceId) => (
            <SourceBadge key={sourceId} sourceId={sourceId} />
          ))}
        </div>
      </section>

      <section className="guidance-panel">
        <div>
          <p className="panel-label">Why this page exists</p>
          <p className="panel-text">
            This route is part of the new synthesis architecture. It will help
            bridge the current Anthropic-focused app with OpenAI&apos;s practical
            implementation guidance.
          </p>
        </div>
        <div>
          <p className="panel-label">Planned sections</p>
          <div className="panel-text">
            {plannedSections.map((section) => (
              <p key={section} style={{ margin: "0 0 6px" }}>
                {section}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function HomePage() {
  return (
    <main className="shell home-shell">
      <section className="hero">
        <p className="eyebrow">Better Software Foundation</p>
        <h1>Building Effective AI Agents</h1>
        <p className="hero-copy">
          An interactive guide that began as an adaptation of Anthropic&apos;s
          framework and is now evolving into a synthesized learning experience
          across Anthropic and OpenAI guidance on agent design, implementation,
          and safety.
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
        {routeArchitecture.map((item) => (
          <article key={item.path} className="experience-card">
            <p className="card-kicker">{item.title}</p>
            <p className="card-text">{item.description}</p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginTop: 14,
                marginBottom: 18,
              }}
            >
              {item.sourceIds.map((sourceId) => (
                <SourceBadge key={sourceId} sourceId={sourceId} />
              ))}
            </div>
            {item.status === "live" ? (
              <Link className="card-link" to={item.path}>
                Open experience
              </Link>
            ) : (
              <Link className="card-link" to={item.path}>
                View roadmap preview
              </Link>
            )}
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
          This site is shifting from a single-source interactive adaptation into
          a comparative learning product. The current milestone establishes the
          synthesis foundation: shared attribution, route architecture,
          terminology mapping, and planned experiences.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 }}>
          <SourceBadge sourceId="anthropic" />
          <SourceBadge sourceId="openai" />
          <SourceBadge sourceId="synthesis" />
        </div>
      </section>

      <section className="guidance-panel">
        <div>
          <p className="panel-label">Synthesis principles</p>
          <div className="panel-text">
            {synthesisPrinciples.map((item) => (
              <p key={item} style={{ margin: "0 0 8px" }}>
                {item}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="panel-label">Sample term crosswalk</p>
          <div className="panel-text">
            {terminologyCrosswalk.slice(0, 3).map((item) => (
              <p key={item.concept} style={{ margin: "0 0 10px" }}>
                <strong>{item.concept}:</strong> {item.canonical}
              </p>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        {sourceList.map((source) => (
          <p key={source.id} className="footer-text">
            Source:{" "}
            <a href={source.url} target="_blank" rel="noreferrer">
              {source.label}, &quot;{source.title}&quot;
            </a>
          </p>
        ))}
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
          {liveExperiences.map((item) => (
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
  const compare = routeArchitecture.find((item) => item.path === "/compare");

  return (
    <div className="app-frame">
      <SiteNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/summary" element={<ExecutiveSummary />} />
        <Route path="/patterns" element={<ArchitecturePatterns />} />
        <Route path="/decision" element={<DecisionFramework />} />
        <Route path="/foundations" element={<FoundationsAndGuardrails />} />
        <Route
          path="/compare"
          element={
            <PlannedExperiencePage
              title={compare.title}
              summary={compare.description}
              plannedSections={compare.plannedSections}
              sourceIds={compare.sourceIds}
            />
          }
        />
      </Routes>
      <Analytics />
    </div>
  );
}
