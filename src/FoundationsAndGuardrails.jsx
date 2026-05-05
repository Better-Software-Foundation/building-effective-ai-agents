import { Link } from "react-router-dom";
import { useState } from "react";
import SourceBadge from "./components/SourceBadge";

const openaiSourceUrl = "https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf";
const anthropicSourceUrl =
  "https://resources.anthropic.com/hubfs/Building%20Effective%20AI%20Agents-%20Architecture%20Patterns%20and%20Implementation%20Frameworks.pdf";

const quickTakeaways = [
  "Not every LLM workflow is an agent.",
  "Start with strong foundations before adding orchestration.",
  "Guardrails and human intervention are part of the design, not cleanup work.",
];

const sections = [
  {
    id: "definition",
    title: "What Is An Agent?",
    sourceIds: ["openai"],
    content: [
      {
        type: "quote",
        text: "Agents are systems that independently accomplish tasks on your behalf.",
      },
      {
        type: "text",
        text: "OpenAI frames an agent as a system where the model manages workflow execution, chooses tools dynamically, and can recognize when to continue, stop, or return control to a person.",
      },
      {
        type: "text",
        text: "That is more specific than simply embedding an LLM in software. A chatbot, classifier, or one-shot generator is not automatically an agent just because a model is involved.",
      },
    ],
  },
  {
    id: "when",
    title: "When Should You Build One?",
    sourceIds: ["openai", "synthesis"],
    content: [
      {
        type: "criterion",
        title: "Complex decision-making",
        text: "Use agents where judgment, ambiguity, and context-sensitive decisions are central to the workflow.",
      },
      {
        type: "criterion",
        title: "Difficult-to-maintain rules",
        text: "Use agents when traditional rule systems have become brittle, expensive, or overloaded with exceptions.",
      },
      {
        type: "criterion",
        title: "Heavy unstructured data reliance",
        text: "Use agents when the work depends on interpreting natural language, documents, screenshots, PDFs, or conversation history.",
      },
      {
        type: "note",
        text: "If none of these are true, a deterministic workflow may be simpler, cheaper, and easier to govern.",
      },
    ],
  },
  {
    id: "foundation",
    title: "Foundation Stack",
    sourceIds: ["openai", "anthropic", "synthesis"],
    content: [
      {
        type: "layer",
        title: "Model",
        text: "The reasoning engine. OpenAI emphasizes choosing for accuracy first, then optimizing for cost and latency after you establish a baseline.",
      },
      {
        type: "layer",
        title: "Tools",
        text: "The system reach. OpenAI breaks tools into data, action, and orchestration categories; Anthropic reinforces that tool quality shapes what the agent can reliably accomplish.",
      },
      {
        type: "layer",
        title: "Instructions / Skills",
        text: "The behavior layer. OpenAI focuses on explicit instructions and routines; Anthropic extends that into richer reusable skills that package expertise and workflow patterns.",
      },
      {
        type: "note",
        text: "The practical synthesis is simple: strengthen model choice, tool design, and behavior guidance before you reach for more agents.",
      },
    ],
  },
  {
    id: "instructions",
    title: "Instruction Design",
    sourceIds: ["openai"],
    content: [
      {
        type: "tip",
        title: "Use existing documents",
        text: "Policies, SOPs, support scripts, and KB articles often convert well into agent routines.",
      },
      {
        type: "tip",
        title: "Break dense tasks down",
        text: "Smaller steps reduce ambiguity and improve the model's ability to follow procedural logic.",
      },
      {
        type: "tip",
        title: "Define clear actions",
        text: "Each step should map to a specific action, question, or output so the model has less room to improvise incorrectly.",
      },
      {
        type: "tip",
        title: "Capture edge cases",
        text: "Include branches for missing information, unclear requests, or risky scenarios instead of assuming the happy path.",
      },
    ],
  },
  {
    id: "guardrails",
    title: "Guardrails & Human Intervention",
    sourceIds: ["openai", "anthropic", "synthesis"],
    content: [
      {
        type: "guardrail",
        title: "Input and relevance checks",
        text: "Use scope checks, safety classifiers, moderation, and rules-based protections to keep requests inside the intended operating area.",
      },
      {
        type: "guardrail",
        title: "Tool safeguards",
        text: "Rate tools by risk. High-impact or irreversible actions should trigger stronger checks or a human pause.",
      },
      {
        type: "guardrail",
        title: "Output validation",
        text: "Check outputs for safety, policy alignment, and sensitive data exposure before they leave the system.",
      },
      {
        type: "guardrail",
        title: "Human intervention",
        text: "Escalate when the system exceeds retry thresholds, reaches low confidence, or attempts high-risk actions such as refunds, payments, or destructive changes.",
      },
      {
        type: "note",
        text: "Anthropic adds a complementary reminder here: observability is what lets you understand when these controls are actually working in production.",
      },
    ],
  },
];

export default function FoundationsAndGuardrails() {
  const [activeSection, setActiveSection] = useState("definition");
  const section = sections.find((item) => item.id === activeSection);

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
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div
          style={{
            marginBottom: 28,
            borderBottom: "3px solid #1f1f1f",
            paddingBottom: 18,
          }}
        >
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
            Foundations & Guardrails
          </p>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 700,
              margin: "0 0 8px",
              lineHeight: 1.15,
            }}
          >
            Foundations & Guardrails
          </h1>
          <p style={{ fontSize: 14, color: "#666", margin: 0, fontStyle: "italic" }}>
            The implementation layer of the synthesis: what an agent is, when to
            use one, how to structure it, and how to keep it safe.
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
            30-Second Summary
          </p>
          <p style={{ margin: "0 0 14px", fontSize: 15, lineHeight: 1.65, color: "#333" }}>
            OpenAI adds the clearest implementation-first framing in the current
            synthesis: define whether the workflow should be an agent at all,
            build around model, tools, and behavior guidance, and layer
            guardrails plus human intervention before scaling autonomy.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
            <SourceBadge sourceId="openai" />
            <SourceBadge sourceId="anthropic" />
            <SourceBadge sourceId="synthesis" />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: 10,
            }}
          >
            {quickTakeaways.map((item) => (
              <div
                key={item}
                style={{
                  padding: "12px 14px",
                  background: "#F8F5F0",
                  borderRadius: 8,
                }}
              >
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.5, color: "#444" }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
          {sections.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              style={{
                padding: "7px 14px",
                border: activeSection === item.id ? "1.5px solid #1f1f1f" : "1px solid #D5CFC6",
                borderRadius: 6,
                background: activeSection === item.id ? "#fff" : "transparent",
                color: activeSection === item.id ? "#1f1f1f" : "#666",
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 12,
                fontWeight: activeSection === item.id ? 700 : 500,
                cursor: "pointer",
              }}
            >
              {item.title}
            </button>
          ))}
        </div>

        {section && (
          <div
            style={{
              minHeight: 340,
              background: "#fff",
              border: "1px solid #E0DCD6",
              borderRadius: 12,
              padding: 24,
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
              {section.sourceIds.map((sourceId) => (
                <SourceBadge key={sourceId} sourceId={sourceId} />
              ))}
            </div>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#1f1f1f",
                margin: "0 0 20px",
                borderBottom: "2px solid #D8CFC1",
                paddingBottom: 10,
                display: "inline-block",
              }}
            >
              {section.title}
            </h2>

            {section.content.map((item, index) => {
              if (item.type === "quote") {
                return (
                  <div
                    key={index}
                    style={{
                      padding: "18px 22px",
                      marginBottom: 18,
                      borderLeft: "4px solid #0F5132",
                      background: "#EDF7F1",
                      borderRadius: "0 8px 8px 0",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        fontSize: 18,
                        fontStyle: "italic",
                        color: "#18402B",
                        lineHeight: 1.5,
                        fontWeight: 500,
                      }}
                    >
                      "{item.text}"
                    </p>
                  </div>
                );
              }

              if (item.type === "text") {
                return (
                  <p
                    key={index}
                    style={{ fontSize: 14, color: "#555", lineHeight: 1.7, margin: "0 0 14px" }}
                  >
                    {item.text}
                  </p>
                );
              }

              if (item.type === "note") {
                return (
                  <div
                    key={index}
                    style={{
                      marginBottom: 12,
                      padding: "14px 16px",
                      borderRadius: 8,
                      background: "#F8F5F0",
                      border: "1px solid #ECE4D8",
                    }}
                  >
                    <p style={{ margin: 0, fontSize: 13.5, color: "#555", lineHeight: 1.55 }}>
                      {item.text}
                    </p>
                  </div>
                );
              }

              return (
                <div
                  key={index}
                  style={{
                    marginBottom: 14,
                    paddingLeft: 16,
                    borderLeft: item.type === "guardrail" ? "3px solid #0F5132" : "2px solid #D8CFC1",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "'Helvetica Neue', sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      color: item.type === "guardrail" ? "#0F5132" : "#6A4A2F",
                      margin: "0 0 4px",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ fontSize: 13.5, color: "#555", lineHeight: 1.55, margin: 0 }}>
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        )}

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
          <p style={{ margin: "0 0 14px", fontSize: 13.5, color: "#666", lineHeight: 1.55 }}>
            This page is strongest on implementation fundamentals. Move next
            based on whether you need qualification, architecture selection, or
            source comparison.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 12,
            }}
          >
            <Link to="/decision" style={{ padding: "12px 14px", background: "#F8F5F0", borderRadius: 8, textDecoration: "none" }}>
              <p style={{ margin: "0 0 6px", fontWeight: 700, fontSize: 13, color: "#333" }}>
                Read next
              </p>
              <p style={{ margin: 0, fontSize: 13, color: "#555", lineHeight: 1.5 }}>
                Use the Decision Framework to decide whether your workflow should
                be agentic before choosing an architecture.
              </p>
            </Link>
            <Link to="/patterns" style={{ padding: "12px 14px", background: "#F8F5F0", borderRadius: 8, textDecoration: "none" }}>
              <p style={{ margin: "0 0 6px", fontWeight: 700, fontSize: 13, color: "#333" }}>
                Implementation rule
              </p>
              <p style={{ margin: 0, fontSize: 13, color: "#555", lineHeight: 1.5 }}>
                Build foundations first. More orchestration is not a substitute
                for weak tools, weak prompts, or missing guardrails.
              </p>
            </Link>
            <Link to="/compare" style={{ padding: "12px 14px", background: "#F8F5F0", borderRadius: 8, textDecoration: "none" }}>
              <p style={{ margin: "0 0 6px", fontWeight: 700, fontSize: 13, color: "#333" }}>
                Methodology note
              </p>
              <p style={{ margin: 0, fontSize: 13, color: "#555", lineHeight: 1.5 }}>
                Use Compare to see where this page is OpenAI-led, where Anthropic complements it, and how the synthesis language was chosen.
              </p>
            </Link>
          </div>
        </div>

        <div style={{ marginTop: 28, textAlign: "center", fontSize: 11, color: "#777", fontFamily: "'Helvetica Neue', sans-serif" }}>
          <p style={{ margin: "0 0 6px" }}>
            Source:{" "}
            <a href={openaiSourceUrl} target="_blank" rel="noreferrer" style={{ color: "inherit", fontWeight: 700 }}>
              OpenAI, "A practical guide to building agents"
            </a>
          </p>
          <p style={{ margin: 0 }}>
            Complementary source:{" "}
            <a href={anthropicSourceUrl} target="_blank" rel="noreferrer" style={{ color: "inherit", fontWeight: 700 }}>
              Anthropic, "Building Effective AI Agents: Architecture Patterns and Implementation Frameworks" (PDF)
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
