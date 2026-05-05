import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SourceBadge from "./components/SourceBadge";
import { glossaryTerms, sourceRegistry } from "./content/synthesisModel";

const categoryOrder = [
  "Core concept",
  "Behavior layer",
  "Implementation",
  "Architecture",
  "Safety",
  "Operations",
  "Synthesis",
];

const sourceOptions = [
  { id: "all", label: "All terms" },
  { id: "anthropic", label: "Anthropic-led" },
  { id: "openai", label: "OpenAI-led" },
  { id: "synthesis", label: "Synthesis terms" },
];

export default function GlossaryPage() {
  const [activeSource, setActiveSource] = useState("all");
  const [query, setQuery] = useState("");

  const filteredTerms = useMemo(() => {
    return glossaryTerms
      .filter((item) => {
        const matchesSource =
          activeSource === "all" || item.sourceIds.includes(activeSource);
        const search = query.trim().toLowerCase();
        const matchesQuery =
          !search ||
          item.term.toLowerCase().includes(search) ||
          item.definition.toLowerCase().includes(search) ||
          item.note.toLowerCase().includes(search);
        return matchesSource && matchesQuery;
      })
      .sort((a, b) => {
        const categoryDiff =
          categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category);
        if (categoryDiff !== 0) return categoryDiff;
        return a.term.localeCompare(b.term);
      });
  }, [activeSource, query]);

  const groupedTerms = useMemo(() => {
    return categoryOrder
      .map((category) => ({
        category,
        items: filteredTerms.filter((item) => item.category === category),
      }))
      .filter((group) => group.items.length > 0);
  }, [filteredTerms]);

  return (
    <div
      style={{
        fontFamily: "'Georgia', 'Cambria', serif",
        background: "#F7F4EE",
        minHeight: "100vh",
        padding: "32px 24px",
        color: "#1f1f1f",
      }}
    >
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <div style={{ marginBottom: 28, borderBottom: "3px solid #1f1f1f", paddingBottom: 18 }}>
          <p
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 11,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#777",
              margin: "0 0 8px",
            }}
          >
            Glossary
          </p>
          <h1 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 8px", lineHeight: 1.15 }}>
            Glossary of Core Terms
          </h1>
          <p style={{ fontSize: 14, color: "#666", margin: 0, fontStyle: "italic" }}>
            A shared vocabulary for the terms that matter most across Anthropic&apos;s and OpenAI&apos;s guides.
          </p>
        </div>

        <div
          style={{
            marginBottom: 24,
            padding: 20,
            background: "#fff",
            borderRadius: 12,
            border: "1px solid #E0DCD6",
          }}
        >
          <p
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 11,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#888",
              margin: "0 0 10px",
            }}
          >
            How To Use This Page
          </p>
          <p style={{ margin: "0 0 14px", fontSize: 15, lineHeight: 1.65, color: "#333" }}>
            Use this glossary when a term appears in one guide, appears differently in the other, or carries more than one meaning depending on context. The source badges show whether a term is primarily Anthropic, OpenAI, shared across both, or a synthesis term used by this app.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            <SourceBadge sourceId="anthropic" />
            <SourceBadge sourceId="openai" />
            <SourceBadge sourceId="both" />
            <SourceBadge sourceId="synthesis" />
          </div>
        </div>

        <div
          style={{
            marginBottom: 24,
            padding: 20,
            background: "#fff",
            borderRadius: 12,
            border: "1px solid #E0DCD6",
            display: "grid",
            gap: 14,
          }}
        >
          <div>
            <label
              htmlFor="glossary-search"
              style={{
                display: "block",
                marginBottom: 8,
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 12,
                fontWeight: 700,
                color: "#555",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Search terms
            </label>
            <input
              id="glossary-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by term or definition"
              style={{
                width: "100%",
                minHeight: 44,
                padding: "0 14px",
                borderRadius: 10,
                border: "1px solid #D5CFC6",
                fontSize: 14,
                fontFamily: "'Helvetica Neue', sans-serif",
                background: "#FCFBF8",
              }}
            />
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {sourceOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveSource(option.id)}
                style={{
                  padding: "8px 14px",
                  borderRadius: 999,
                  border:
                    activeSource === option.id
                      ? "1.5px solid #1f1f1f"
                      : "1px solid #D5CFC6",
                  background: activeSource === option.id ? "#fff" : "#F8F5F0",
                  color: "#333",
                  fontFamily: "'Helvetica Neue', sans-serif",
                  fontSize: 12,
                  fontWeight: activeSource === option.id ? 700 : 500,
                  cursor: "pointer",
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gap: 22 }}>
          {groupedTerms.map((group) => (
            <section
              key={group.category}
              style={{
                padding: 22,
                background: "#fff",
                borderRadius: 12,
                border: "1px solid #E0DCD6",
              }}
            >
              <h2 style={{ margin: "0 0 16px", fontSize: 20, color: "#1f1f1f" }}>
                {group.category}
              </h2>
              <div style={{ display: "grid", gap: 14 }}>
                {group.items.map((item) => (
                  <article
                    key={item.term}
                    style={{
                      padding: 16,
                      borderRadius: 10,
                      background: "#F8F5F0",
                      border: "1px solid #ECE4D8",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: 12,
                        flexWrap: "wrap",
                        marginBottom: 10,
                      }}
                    >
                      <div>
                        <h3 style={{ margin: "0 0 4px", fontSize: 18, color: "#1f1f1f" }}>
                          {item.term}
                        </h3>
                        <p
                          style={{
                            margin: 0,
                            fontSize: 11,
                            color: "#777",
                            fontFamily: "'Helvetica Neue', sans-serif",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                          }}
                        >
                          {item.category}
                        </p>
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                        {item.sourceIds.map((sourceId) => (
                          <SourceBadge key={`${item.term}-${sourceId}`} sourceId={sourceId} />
                        ))}
                      </div>
                    </div>
                    <p style={{ margin: "0 0 8px", fontSize: 14, lineHeight: 1.65, color: "#333" }}>
                      {item.definition}
                    </p>
                    <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: "#666" }}>
                      {item.note}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div
          style={{
            marginTop: 24,
            padding: 18,
            background: "#fff",
            borderRadius: 12,
            border: "1px solid #E0DCD6",
          }}
        >
          <p
            style={{
              fontFamily: "'Helvetica Neue', sans-serif",
              fontSize: 11,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#888",
              margin: "0 0 12px",
            }}
          >
            Continue Fast
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 12,
            }}
          >
            <Link to="/foundations" style={{ padding: "12px 14px", background: "#F8F5F0", borderRadius: 8, textDecoration: "none" }}>
              <p style={{ margin: "0 0 6px", fontWeight: 700, fontSize: 13, color: "#333" }}>
                Apply the terms
              </p>
              <p style={{ margin: 0, fontSize: 13, color: "#555", lineHeight: 1.5 }}>
                Open Foundations & Guardrails if you want to see how these terms appear in implementation guidance.
              </p>
            </Link>
            <Link to="/compare" style={{ padding: "12px 14px", background: "#F8F5F0", borderRadius: 8, textDecoration: "none" }}>
              <p style={{ margin: "0 0 6px", fontWeight: 700, fontSize: 13, color: "#333" }}>
                Compare the language
              </p>
              <p style={{ margin: 0, fontSize: 13, color: "#555", lineHeight: 1.5 }}>
                Open Compare for the crosswalk between Anthropic&apos;s and OpenAI&apos;s terminology.
              </p>
            </Link>
            <Link to="/patterns" style={{ padding: "12px 14px", background: "#F8F5F0", borderRadius: 8, textDecoration: "none" }}>
              <p style={{ margin: "0 0 6px", fontWeight: 700, fontSize: 13, color: "#333" }}>
                See them in context
              </p>
              <p style={{ margin: 0, fontSize: 13, color: "#555", lineHeight: 1.5 }}>
                Open Architecture Patterns to see how terms like manager, handoff, and collaboration affect real design choices.
              </p>
            </Link>
          </div>
        </div>

        <div style={{ marginTop: 28, textAlign: "center", fontSize: 11, color: "#777", fontFamily: "'Helvetica Neue', sans-serif" }}>
          <p style={{ margin: "0 0 6px" }}>
            Sources:{" "}
            <a href={sourceRegistry.anthropic.url} target="_blank" rel="noreferrer" style={{ color: "inherit", fontWeight: 700 }}>
              Anthropic guide
            </a>
            {" · "}
            <a href={sourceRegistry.openai.url} target="_blank" rel="noreferrer" style={{ color: "inherit", fontWeight: 700 }}>
              OpenAI guide
            </a>
          </p>
          <p style={{ margin: 0 }}>
            Definitions on this page are editorial summaries designed to make the two guides easier to read together.
          </p>
        </div>
      </div>
    </div>
  );
}
