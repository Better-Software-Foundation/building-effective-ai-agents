import { Link } from "react-router-dom";
import { useState } from "react";

const sourceUrl =
  "https://resources.anthropic.com/hubfs/Building%20Effective%20AI%20Agents-%20Architecture%20Patterns%20and%20Implementation%20Frameworks.pdf";

const quickTakeaways = [
  "Start with the simplest agent that can prove value.",
  "Use skills and workflow structure before jumping to full multi-agent systems.",
  "Invest in observability early so you can explain cost, quality, and failure modes.",
];

const summaryRole = [
  "This page is the quickest way to understand the architecture and tradeoff side of the topic.",
  "Use Foundations & Guardrails next if you need implementation building blocks, safety layers, and human oversight guidance.",
  "Use Compare if you want a terminology crosswalk and a breadth-versus-depth view of both guides.",
];

const sections = [
  {
    id: "thesis",
    title: "Core Thesis",
    content: [
      { type: "quote", text: "Generative AI answers questions. AI agents solve problems." },
      {
        type: "text",
        text: "AI agents are useful when the path forward is not fully known in advance. They reason, choose tools, evaluate results, and keep pushing toward an outcome instead of waiting for a rigid script to tell them what to do next.",
      },
      {
        type: "text",
        text: "That makes them promising for open-ended work, but it also means they need stronger guardrails, visibility, and cost discipline than standard prompt-and-response applications.",
      },
    ],
  },
  {
    id: "results",
    title: "Production Results",
    content: [
      { type: "stat", label: "Coinbase", value: "99.99%", desc: "availability on agentic customer support, thousands of messages per hour" },
      { type: "stat", label: "Tines", value: "100×", desc: "time-to-value improvement collapsing multi-step security ops into single-agent operations" },
      { type: "stat", label: "Gradient Labs", value: "80–90%", desc: "resolution rate on complex financial services queries with limited human intervention" },
      { type: "stat", label: "Intercom Fin", value: "86%", desc: "resolution rate with human-quality responses across 25,000+ customers, 45+ languages" },
      { type: "stat", label: "Inscribe", value: "20×", desc: "faster fraud review — 30 minutes down to 90 seconds per case" },
      { type: "stat", label: "Advolve", value: "90%", desc: "reduction in operational work managing millions of ads with real-time budget allocation" },
      { type: "stat", label: "Assembled", value: "50%+", desc: "reduction in escalations with 30%+ improvement in cases solved per hour" },
      { type: "stat", label: "Augment Code", value: "4–8 mo → 2 wk", desc: "enterprise project completion; developer onboarding from weeks to 1–2 days" },
    ],
  },
  {
    id: "principles",
    title: "Design Principles",
    content: [
      { type: "principle", title: "Start simple first", text: "Single-purpose agents are cheaper, easier to debug, and easier to tie to a business outcome than elaborate orchestrations." },
      { type: "principle", title: "Match model to task", text: "Reserve premium reasoning for genuinely hard work. At scale, overpowered models quietly become a budget problem." },
      { type: "principle", title: "Design modularly", text: "Keep prompts, tools, and skills loosely coupled so the system can evolve as models and requirements change." },
      { type: "principle", title: "Use skills before more agents", text: "If one agent mostly needs deeper expertise, add capabilities before adding coordination complexity." },
      { type: "principle", title: "Make the system explain itself", text: "Tracing prompts, tool calls, costs, and reasoning paths is a core product feature, not an afterthought." },
    ],
  },
  {
    id: "evolution",
    title: "Evolution Path",
    content: [
      { type: "phase", num: 1, title: "Single agent for one core job", desc: "Prove value with one measurable workflow." },
      { type: "phase", num: 2, title: "Add routing and skills", desc: "Separate categories without redesigning everything." },
      { type: "phase", num: 3, title: "Introduce specialist agents", desc: "Only when domain complexity justifies it." },
      { type: "phase", num: 4, title: "Add orchestration patterns", desc: "Use hierarchy, parallelism, or evaluation where they clearly help." },
      { type: "phase", num: 5, title: "Operationalize quality loops", desc: "Measure outcomes, enforce governance, and refine continuously." },
    ],
  },
  {
    id: "watchouts",
    title: "Implementation Watchouts",
    content: [
      { type: "watchout", title: "Cost growth", text: "Multi-agent systems can consume roughly 10-15x more tokens than simple agents, so complexity needs a business case." },
      { type: "watchout", title: "Context overload", text: "Long tool outputs, repeated handoffs, and poor memory design will degrade performance before teams notice why." },
      { type: "watchout", title: "Coordination failure", text: "More agents means more chances for duplication, contradiction, and stalled loops unless responsibilities are clear." },
      { type: "watchout", title: "Weak observability", text: "If you cannot trace decisions, tools, and prompts, production debugging becomes guesswork." },
    ],
  },
  {
    id: "remember",
    title: "If You Remember 3 Things",
    content: quickTakeaways.map((text) => ({ type: "remember", text })),
  },
];

const nextSteps = [
  { label: "Read next", text: "Open Architecture Patterns if you want to compare the main options quickly.", to: "/patterns" },
  { label: "Implementation lens", text: "Open Foundations & Guardrails for the model, tools, instructions, and safety layer.", to: "/foundations" },
  { label: "Decision lens", text: "Open the Decision Framework if you need a recommendation under time pressure.", to: "/decision" },
  { label: "Compare the guides", text: "Open Compare for the terminology crosswalk and the breadth-versus-depth matrix.", to: "/compare" },
];

export default function ExecutiveSummary() {
  const [activeSection, setActiveSection] = useState("thesis");
  const section = sections.find((s) => s.id === activeSection);

  return (
    <div style={{ fontFamily: "'Georgia', 'Cambria', serif", background: "#1a1a1a", minHeight: "100vh", padding: "32px 24px", color: "#E8E4DE" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div style={{ marginBottom: 28, borderBottom: "1px solid #444", paddingBottom: 20 }}>
          <p style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "#888", margin: "0 0 10px" }}>
            Executive Summary
          </p>
          <h1 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 6px", color: "#F5F0EB", lineHeight: 1.2 }}>
            Building Effective AI Agents
          </h1>
          <p style={{ fontSize: 13.5, color: "#999", margin: 0, fontStyle: "italic" }}>
            A concise entry point into the architecture and tradeoff side of the broader guide.
          </p>
        </div>

        <div style={{ marginBottom: 26, padding: 20, background: "#222", borderRadius: 12, border: "1px solid #343434" }}>
          <p style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "#D4A574", margin: "0 0 10px" }}>
            30-Second Summary
          </p>
          <p style={{ margin: "0 0 14px", fontSize: 15, lineHeight: 1.65, color: "#D8D1C7" }}>
            AI agents are valuable when work is messy, tool-driven, and hard to script in advance. The winning strategy is usually to start with one agent, add skills and workflow structure, and only move into heavier multi-agent coordination when the extra cost clearly buys better outcomes.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 10 }}>
            {quickTakeaways.map((item) => (
              <div key={item} style={{ padding: "12px 14px", background: "#2A2420", borderRadius: 8, border: "1px solid #43352A" }}>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, color: "#E8DFD4" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 26, padding: 20, background: "#222", borderRadius: 12, border: "1px solid #343434" }}>
          <p style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "#D4A574", margin: "0 0 10px" }}>
            How To Use This Page
          </p>
          <div style={{ display: "grid", gap: 10 }}>
            {summaryRole.map((item) => (
              <div key={item} style={{ padding: "12px 14px", background: "#1A1A1A", borderRadius: 8, border: "1px solid #303030" }}>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: "#CAC2B8" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              style={{
                padding: "7px 14px",
                border: activeSection === s.id ? "1.5px solid #D4A574" : "1px solid #444",
                borderRadius: 6,
                background: activeSection === s.id ? "#2a2420" : "transparent",
                color: activeSection === s.id ? "#D4A574" : "#888",
                fontFamily: "'Helvetica Neue', sans-serif",
                fontSize: 12,
                fontWeight: activeSection === s.id ? 700 : 400,
                cursor: "pointer",
                transition: "all 0.12s ease",
                letterSpacing: 0.3,
              }}
            >
              {s.title}
            </button>
          ))}
        </div>

        {section && (
          <div style={{ minHeight: 340, background: "#1E1E1E", border: "1px solid #333", borderRadius: 12, padding: 24 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#F5F0EB", margin: "0 0 20px", borderBottom: "2px solid #D4A574", paddingBottom: 10, display: "inline-block" }}>
              {section.title}
            </h2>

            {section.content.map((item, i) => {
              if (item.type === "quote") {
                return (
                  <div key={i} style={{ padding: "18px 24px", marginBottom: 18, borderLeft: "4px solid #D4A574", background: "#242018", borderRadius: "0 8px 8px 0" }}>
                    <p style={{ margin: 0, fontSize: 18, fontStyle: "italic", color: "#E8DFD4", lineHeight: 1.5, fontWeight: 500 }}>
                      "{item.text}"
                    </p>
                  </div>
                );
              }
              if (item.type === "text") {
                return (
                  <p key={i} style={{ fontSize: 14, color: "#C4BEB5", lineHeight: 1.65, margin: "0 0 14px" }}>
                    {item.text}
                  </p>
                );
              }
              if (item.type === "stat") {
                return (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: 16,
                    padding: "12px 16px", marginBottom: 10,
                    background: "#222", borderRadius: 8, border: "1px solid #333",
                  }}>
                    <span style={{
                      fontFamily: "'Helvetica Neue', sans-serif", fontSize: 20, fontWeight: 800,
                      color: "#D4A574", minWidth: 90, textAlign: "right", flexShrink: 0,
                    }}>{item.value}</span>
                    <div>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#E8E4DE" }}>{item.label}</span>
                      <span style={{ fontSize: 12.5, color: "#999", marginLeft: 8 }}> — {item.desc}</span>
                    </div>
                  </div>
                );
              }
              if (item.type === "principle") {
                return (
                  <div key={i} style={{ marginBottom: 16, paddingLeft: 16, borderLeft: "2px solid #444" }}>
                    <h4 style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: 13, fontWeight: 700, color: "#D4A574", margin: "0 0 4px" }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: 13.5, color: "#B0AAA0", lineHeight: 1.55, margin: 0 }}>{item.text}</p>
                  </div>
                );
              }
              if (item.type === "phase") {
                return (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "10px 14px", marginBottom: 8, background: "#222", borderRadius: 8, border: "1px solid #333" }}>
                    <span style={{ fontFamily: "'Helvetica Neue', sans-serif", width: 32, height: 32, borderRadius: "50%", background: "#D4A574", color: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, flexShrink: 0 }}>
                      {item.num}
                    </span>
                    <div>
                      <span style={{ fontSize: 13.5, fontWeight: 600, color: "#E8E4DE" }}>{item.title}</span>
                      <span style={{ fontSize: 12, color: "#888", marginLeft: 8 }}>{item.desc}</span>
                    </div>
                  </div>
                );
              }
              if (item.type === "watchout") {
                return (
                  <div key={i} style={{ marginBottom: 12, padding: "14px 16px", borderRadius: 8, background: "#241D1D", border: "1px solid #463131" }}>
                    <p style={{ margin: "0 0 4px", fontFamily: "'Helvetica Neue', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 0.3, color: "#F0B6B6" }}>
                      {item.title}
                    </p>
                    <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.55, color: "#D7C1C1" }}>{item.text}</p>
                  </div>
                );
              }
              if (item.type === "remember") {
                return (
                  <div key={i} style={{ marginBottom: 10, padding: "12px 14px", borderRadius: 8, background: "#222", border: "1px solid #333" }}>
                    <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: "#E8E4DE" }}>{item.text}</p>
                  </div>
                );
              }
              return null;
            })}
          </div>
        )}

        <div style={{ marginTop: 24, padding: 18, background: "#222", borderRadius: 12, border: "1px solid #343434" }}>
          <p style={{ fontFamily: "'Helvetica Neue', sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "#888", margin: "0 0 12px" }}>
            Continue Fast
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 10 }}>
            {nextSteps.map((step) => (
              <Link
                key={step.label}
                to={step.to}
                style={{ padding: "12px 14px", background: "#1A1A1A", borderRadius: 8, border: "1px solid #303030", textDecoration: "none" }}
              >
                <p style={{ margin: "0 0 6px", fontFamily: "'Helvetica Neue', sans-serif", fontSize: 11, letterSpacing: 1.2, textTransform: "uppercase", color: "#D4A574" }}>
                  {step.label}
                </p>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, color: "#CAC2B8" }}>{step.text}</p>
              </Link>
            ))}
          </div>
        </div>

        <p style={{ textAlign: "center", fontSize: 11, color: "#555", marginTop: 28, fontFamily: "'Helvetica Neue', sans-serif" }}>
          Source:{" "}
          <a href={sourceUrl} target="_blank" rel="noreferrer" style={{ color: "inherit", fontWeight: 700 }}>
            Anthropic, "Building Effective AI Agents: Architecture Patterns and Implementation Frameworks" (PDF)
          </a>
        </p>
      </div>
    </div>
  );
}
