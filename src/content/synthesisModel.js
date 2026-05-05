export const sourceRegistry = {
  anthropic: {
    id: "anthropic",
    label: "Anthropic",
    shortLabel: "Anthropic",
    color: "#8D5F34",
    background: "#F5E8D7",
    url: "https://resources.anthropic.com/hubfs/Building%20Effective%20AI%20Agents-%20Architecture%20Patterns%20and%20Implementation%20Frameworks.pdf",
    title:
      "Building Effective AI Agents: Architecture Patterns and Implementation Frameworks",
  },
  openai: {
    id: "openai",
    label: "OpenAI",
    shortLabel: "OpenAI",
    color: "#0F5132",
    background: "#D9F3E4",
    url: "https://openai.com/index/a-practical-guide-to-building-agents/",
    title: "A practical guide to building agents",
  },
  both: {
    id: "both",
    label: "Both",
    shortLabel: "Both",
    color: "#1F3C88",
    background: "#DCE7FF",
  },
  synthesis: {
    id: "synthesis",
    label: "Synthesis",
    shortLabel: "Synthesis",
    color: "#5A189A",
    background: "#E8DAEF",
  },
};

export const routeArchitecture = [
  {
    path: "/summary",
    title: "Executive Summary",
    description:
      "A fast-reading synthesis of the major ideas, tradeoffs, and practical implications.",
    status: "live",
    sourceIds: ["anthropic"],
    role: "High-level framing and takeaways",
  },
  {
    path: "/patterns",
    title: "Architecture Patterns",
    description:
      "Compare orchestration patterns, tradeoffs, and where different guides align or diverge.",
    status: "live",
    sourceIds: ["anthropic", "openai", "synthesis"],
    role: "Architecture options and tradeoffs",
  },
  {
    path: "/decision",
    title: "Decision Framework",
    description:
      "Choose the right level of agent complexity based on control, risk, and implementation constraints.",
    status: "live",
    sourceIds: ["anthropic", "openai", "synthesis"],
    role: "Decision support and recommended next step",
  },
  {
    path: "/foundations",
    title: "Foundations & Guardrails",
    description:
      "Define what an agent is, when to build one, and how to implement models, tools, instructions, and safeguards.",
    status: "live",
    sourceIds: ["openai", "synthesis"],
    role: "Implementation fundamentals and safety",
    plannedSections: [
      "What is an agent?",
      "When should you build one?",
      "Model, tools, and instructions",
      "Guardrails and human intervention",
    ],
  },
  {
    path: "/compare",
    title: "Comparative Guide",
    description:
      "Crosswalk the terminology, strengths, and blind spots of the Anthropic and OpenAI guides.",
    status: "live",
    sourceIds: ["anthropic", "openai", "synthesis"],
    role: "Cross-source synthesis and comparison",
    plannedSections: [
      "Terminology crosswalk",
      "Breadth versus depth matrix",
      "Source-specific strengths",
      "What the synthesis adds",
    ],
  },
];

export const terminologyCrosswalk = [
  {
    concept: "Behavior layer",
    anthropic: "Skills",
    openai: "Instructions",
    canonical: "Behavior & expertise layer",
    relationship: "Partial overlap",
    note:
      "OpenAI instructions define behavior directly; Anthropic skills package reusable expertise, workflows, and often instruction-like guidance.",
  },
  {
    concept: "Single-agent default",
    anthropic: "Single agent; start simple",
    openai: "Single-agent systems; maximize one agent first",
    canonical: "Single-agent first",
    relationship: "Strong alignment",
    note:
      "Both guides recommend maximizing one capable agent before introducing orchestration overhead.",
  },
  {
    concept: "Central coordination",
    anthropic: "Hierarchical / supervisory systems",
    openai: "Manager pattern (agents as tools)",
    canonical: "Manager / hierarchical orchestration",
    relationship: "Near-equivalent",
    note:
      "Both describe one central agent coordinating specialist capabilities, though the OpenAI framing is more SDK-oriented.",
  },
  {
    concept: "Peer delegation",
    anthropic: "Collaborative / peer-to-peer systems",
    openai: "Decentralized handoffs",
    canonical: "Decentralized handoff pattern",
    relationship: "Related, not identical",
    note:
      "OpenAI emphasizes handoff control flow between peers; Anthropic emphasizes emergent collaboration and multi-perspective coordination.",
  },
  {
    concept: "Safety layer",
    anthropic: "Watchouts, observability, governance",
    openai: "Guardrails, tripwires, human intervention",
    canonical: "Operational safety and control layer",
    relationship: "Complementary",
    note:
      "Anthropic covers strategic operational risks; OpenAI goes deeper on implementation guardrails and intervention triggers.",
  },
  {
    concept: "Tooling model",
    anthropic: "Toolkit and skills",
    openai: "Tools: data, action, orchestration",
    canonical: "Tool layer",
    relationship: "Shared concept",
    note:
      "Both see tools as central to agent reach; OpenAI provides a more explicit category model for tool design.",
  },
];

export const synthesisPrinciples = [
  "Use Anthropic as the stronger architecture and scaling lens.",
  "Use OpenAI as the stronger foundations and guardrails lens.",
  "Keep source attribution explicit so readers can separate original claims from synthesis.",
  "Prefer shared canonical language only when the concept truly overlaps.",
];

export const comparativeGuideSummary = {
  title: "How the guides differ",
  text:
    "Anthropic and OpenAI overlap on core agent-building principles, but they optimize for different reader needs. Anthropic is broader on architecture, evolution, and tradeoffs. OpenAI is deeper on foundations, orchestration mechanics, and guardrails. This app aims to combine both into a more navigable learning experience.",
};

export const breadthDepthProfiles = [
  {
    id: "anthropic",
    label: "Anthropic guide",
    badgeId: "anthropic",
    breadth: 5,
    depth: 4,
    summary: "Broadest lens on architecture patterns, business framing, and evolution paths.",
  },
  {
    id: "openai",
    label: "OpenAI guide",
    badgeId: "openai",
    breadth: 3,
    depth: 5,
    summary: "Deepest lens on implementation foundations, orchestration mechanics, and guardrails.",
  },
  {
    id: "app",
    label: "This interactive guide",
    badgeId: "synthesis",
    breadth: 4,
    depth: 4,
    summary: "Selective depth plus cross-source synthesis intended to reduce reading time and improve application.",
  },
];

export const topicCoverage = [
  {
    topic: "What is an agent?",
    rationale: "OpenAI defines the agent boundary more explicitly; the app now makes that framing easier to absorb.",
    anthropic: { breadth: 2, depth: 2 },
    openai: { breadth: 4, depth: 5 },
    app: { breadth: 4, depth: 4 },
  },
  {
    topic: "When should you build one?",
    rationale: "OpenAI provides a practical pre-filter for deciding whether a workflow should be agentic at all.",
    anthropic: { breadth: 3, depth: 3 },
    openai: { breadth: 4, depth: 4 },
    app: { breadth: 4, depth: 4 },
  },
  {
    topic: "Model / tools / behavior foundation",
    rationale: "OpenAI goes deeper on the foundation stack, while Anthropic reinforces modularity and skills.",
    anthropic: { breadth: 3, depth: 3 },
    openai: { breadth: 5, depth: 5 },
    app: { breadth: 4, depth: 4 },
  },
  {
    topic: "Architecture pattern taxonomy",
    rationale: "Anthropic distinguishes more pattern types explicitly, which makes it the broader architecture reference.",
    anthropic: { breadth: 5, depth: 5 },
    openai: { breadth: 3, depth: 4 },
    app: { breadth: 5, depth: 4 },
  },
  {
    topic: "Manager / supervisory coordination",
    rationale: "Both cover central coordination, with OpenAI leaning more implementation-first.",
    anthropic: { breadth: 4, depth: 4 },
    openai: { breadth: 4, depth: 5 },
    app: { breadth: 4, depth: 4 },
  },
  {
    topic: "Decentralized handoffs / collaboration",
    rationale: "Anthropic is broader on collaboration; OpenAI is sharper on handoff mechanics.",
    anthropic: { breadth: 4, depth: 4 },
    openai: { breadth: 3, depth: 4 },
    app: { breadth: 4, depth: 4 },
  },
  {
    topic: "Guardrails and human intervention",
    rationale: "OpenAI is materially deeper on concrete guardrails and intervention triggers.",
    anthropic: { breadth: 3, depth: 3 },
    openai: { breadth: 5, depth: 5 },
    app: { breadth: 4, depth: 4 },
  },
  {
    topic: "Observability and production watchouts",
    rationale: "Anthropic is stronger on operational watchouts and strategic production framing.",
    anthropic: { breadth: 5, depth: 4 },
    openai: { breadth: 3, depth: 3 },
    app: { breadth: 4, depth: 4 },
  },
];

export const sourceStrengths = [
  {
    title: "Anthropic's strongest contribution",
    sourceId: "anthropic",
    points: [
      "Broader architecture taxonomy",
      "Clear evolution path from simple to multi-agent systems",
      "Strong business and production framing",
      "Useful token-cost and complexity tradeoff lens",
    ],
  },
  {
    title: "OpenAI's strongest contribution",
    sourceId: "openai",
    points: [
      "Clearer definition of what counts as an agent",
      "More explicit model / tools / instructions foundation",
      "Sharper guidance on orchestration mechanics",
      "Much deeper guardrails and human-intervention framing",
    ],
  },
  {
    title: "What the synthesis adds",
    sourceId: "synthesis",
    points: [
      "A route that starts with agent fit before architecture choice",
      "Cross-source terminology translation",
      "A single product that links concept, decision, implementation, and comparison",
      "Faster comprehension than reading both guides linearly",
    ],
  },
];
