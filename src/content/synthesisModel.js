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
    url: "https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf",
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
      "A concise overview of the main ideas, tradeoffs, and practical implications.",
    status: "live",
    sourceIds: ["anthropic"],
    role: "High-level framing and takeaways",
  },
  {
    path: "/patterns",
    title: "Architecture Patterns",
    description:
      "Compare architecture patterns, tradeoffs, and where the two guides align or differ.",
    status: "live",
    sourceIds: ["anthropic", "openai", "synthesis"],
    role: "Architecture options and tradeoffs",
  },
  {
    path: "/decision",
    title: "Decision Framework",
    description:
      "Choose an appropriate level of agent complexity based on control, risk, and implementation constraints.",
    status: "live",
    sourceIds: ["anthropic", "openai", "synthesis"],
    role: "Decision support and recommended next step",
  },
  {
    path: "/foundations",
    title: "Foundations & Guardrails",
    description:
      "Define what an agent is, when to build one, and how to design models, tools, instructions, and safeguards.",
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
      "Compare the terminology, strengths, and emphasis of the Anthropic and OpenAI guides.",
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
  {
    path: "/glossary",
    title: "Glossary",
    description:
      "Learn the core terms used across both guides, with concise definitions and source-aware explanations.",
    status: "live",
    sourceIds: ["anthropic", "openai", "synthesis"],
    role: "Shared vocabulary and definitions",
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
  "Anthropic is the stronger lens for architecture patterns, scaling paths, and production tradeoffs.",
  "OpenAI is the stronger lens for implementation foundations, orchestration mechanics, and guardrails.",
  "Source labels stay visible so readers can distinguish original guidance from editorial synthesis.",
  "Shared terminology is used only where the underlying concepts genuinely align.",
];

export const comparativeGuideSummary = {
  title: "How the guides differ",
  text:
    "Anthropic and OpenAI overlap on core agent-building principles, but they emphasize different parts of the problem. Anthropic is broader on architecture, evolution, and tradeoffs. OpenAI is deeper on foundations, orchestration mechanics, and guardrails. This app combines both into a shorter, easier-to-navigate reference.",
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
    summary: "A selective synthesis designed to shorten reading time and support practical decisions.",
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

export const glossaryTerms = [
  {
    term: "Agent",
    category: "Core concept",
    sourceIds: ["openai", "anthropic", "synthesis"],
    definition:
      "A system that can pursue a task over multiple steps by reasoning, using tools, and deciding what to do next.",
    note:
      "OpenAI defines the boundary more explicitly; Anthropic reinforces the idea through architecture and workflow design.",
  },
  {
    term: "Single-agent system",
    category: "Architecture",
    sourceIds: ["anthropic", "openai", "both"],
    definition:
      "One capable agent handling the workflow end to end, usually with tools and structured guidance.",
    note:
      "Both guides recommend this as the default starting point before introducing more orchestration.",
  },
  {
    term: "Skills",
    category: "Behavior layer",
    sourceIds: ["anthropic", "synthesis"],
    definition:
      "Reusable capability packages that combine expertise, instructions, workflow patterns, and sometimes tool usage expectations.",
    note:
      "Anthropic uses this term more broadly than OpenAI's 'instructions'.",
  },
  {
    term: "Instructions",
    category: "Behavior layer",
    sourceIds: ["openai", "synthesis"],
    definition:
      "The explicit behavioral guidance that tells an agent how to act, what steps to follow, and how to respond in edge cases.",
    note:
      "OpenAI treats instructions as a core building block alongside models and tools.",
  },
  {
    term: "Tools",
    category: "Implementation",
    sourceIds: ["anthropic", "openai", "both"],
    definition:
      "External capabilities an agent can call, such as retrieval, APIs, file access, search, or actions in other systems.",
    note:
      "Tools define what the agent can actually do beyond generating text.",
  },
  {
    term: "Routine",
    category: "Behavior layer",
    sourceIds: ["openai", "synthesis"],
    definition:
      "A repeatable set of instructions or steps an agent can follow for a common workflow.",
    note:
      "OpenAI uses routines to make agent behavior more explicit and easier to test.",
  },
  {
    term: "Routing",
    category: "Implementation",
    sourceIds: ["anthropic", "openai", "synthesis"],
    definition:
      "The logic that decides which tool, skill, workflow branch, or agent should handle a task next.",
    note:
      "Routing becomes more important as systems gain more tools, more paths, or more specialized agents.",
  },
  {
    term: "Orchestration",
    category: "Implementation",
    sourceIds: ["anthropic", "openai", "both"],
    definition:
      "The coordination layer that manages how work moves between models, tools, workflows, and agents.",
    note:
      "OpenAI tends to describe orchestration more mechanically; Anthropic emphasizes the architectural tradeoffs it introduces.",
  },
  {
    term: "Manager pattern",
    category: "Architecture",
    sourceIds: ["openai", "synthesis"],
    definition:
      "A central orchestrator that delegates tasks to specialist agents and combines the results.",
    note:
      "This maps closely to Anthropic's hierarchical or supervisory pattern.",
  },
  {
    term: "Hierarchical / supervisory system",
    category: "Architecture",
    sourceIds: ["anthropic", "synthesis"],
    definition:
      "A multi-agent structure with one coordinator overseeing several specialist agents.",
    note:
      "This is often the most practical first step beyond a single-agent setup.",
  },
  {
    term: "Handoff",
    category: "Architecture",
    sourceIds: ["openai", "synthesis"],
    definition:
      "A transfer of control from one agent to another when a different capability, perspective, or workflow is needed.",
    note:
      "OpenAI uses handoffs to describe decentralized delegation more precisely than Anthropic does.",
  },
  {
    term: "Collaborative / peer-to-peer system",
    category: "Architecture",
    sourceIds: ["anthropic", "openai", "synthesis"],
    definition:
      "A multi-agent setup where agents interact more directly with one another instead of always routing through one supervisor.",
    note:
      "Anthropic emphasizes collaboration broadly; OpenAI is more specific about decentralized handoff mechanics.",
  },
  {
    term: "Sequential workflow",
    category: "Architecture",
    sourceIds: ["anthropic", "synthesis"],
    definition:
      "A controlled process in which work moves through clearly ordered stages.",
    note:
      "This is useful when the workflow is predictable and traceability matters.",
  },
  {
    term: "Parallel workflow",
    category: "Architecture",
    sourceIds: ["anthropic", "synthesis"],
    definition:
      "A workflow in which multiple bounded analyses or subtasks run at the same time and are merged later.",
    note:
      "This is helpful for speed, breadth, or confidence, but it increases coordination cost.",
  },
  {
    term: "Evaluator-optimizer",
    category: "Architecture",
    sourceIds: ["anthropic", "synthesis"],
    definition:
      "A loop where one system generates an output and another critiques it until the quality is good enough.",
    note:
      "Anthropic names this pattern explicitly; OpenAI supports similar thinking through routines and guardrails.",
  },
  {
    term: "Guardrails",
    category: "Safety",
    sourceIds: ["openai", "anthropic", "synthesis"],
    definition:
      "Controls that limit unsafe behavior, validate inputs and outputs, and determine when a human should intervene.",
    note:
      "OpenAI goes deeper on concrete implementation patterns; Anthropic complements this with operational watchouts and governance.",
  },
  {
    term: "Human intervention",
    category: "Safety",
    sourceIds: ["openai", "synthesis"],
    definition:
      "A deliberate point where the system pauses, escalates, or requests human judgment before continuing.",
    note:
      "Useful for low-confidence cases, high-impact decisions, or irreversible actions.",
  },
  {
    term: "Memory / context management",
    category: "Operations",
    sourceIds: ["anthropic", "openai", "synthesis"],
    definition:
      "The way a system decides what past information to keep, retrieve, summarize, or discard while the agent works.",
    note:
      "Poor context management leads to degraded quality, higher cost, and brittle behavior as workflows become longer.",
  },
  {
    term: "Observability",
    category: "Operations",
    sourceIds: ["anthropic", "synthesis"],
    definition:
      "The ability to inspect prompts, tool calls, costs, failures, and decision paths in production.",
    note:
      "Anthropic stresses observability as essential for debugging, trust, and cost control.",
  },
  {
    term: "Behavior & expertise layer",
    category: "Synthesis",
    sourceIds: ["synthesis"],
    definition:
      "The app's shared term for the layer that shapes how an agent behaves, what it knows, and how it applies reusable guidance.",
    note:
      "This is the closest common ground between OpenAI's instructions and Anthropic's skills.",
  },
];
