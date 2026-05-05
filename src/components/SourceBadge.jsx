import { sourceRegistry } from "../content/synthesisModel";

export default function SourceBadge({ sourceId }) {
  const source = sourceRegistry[sourceId];

  if (!source) return null;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        minHeight: 26,
        padding: "0 10px",
        borderRadius: 999,
        background: source.background,
        color: source.color,
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
      }}
    >
      {source.shortLabel}
    </span>
  );
}
