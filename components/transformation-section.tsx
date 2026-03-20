const before = [
  "Chef dependency — quality changes daily",
  "Wastage everywhere, no one notices",
  "No clarity on real plate cost",
  "Wrong menu pricing — guessed, not costed",
  "Inventory mismatches every month",
  "Cash flow stress with no clear cause",
  "Owner frustration & burnout",
  "Municipality risks from untrained staff",
];

const after = [
  "Exact per-plate cost on every dish",
  "Controlled portions — consistent, every time",
  "Predictable profitability, month after month",
  "Real-time inventory visibility",
  "Lower food cost % — more margin",
  "Higher net margins with same revenue",
  "Owner peace of mind — system runs itself",
  "Municipality-compliant SOPs in place",
];

export default function TransformationSection() {
  return (
    <section id="transformation" style={{ background: "#0F1E33", padding: "100px 5%" }}>
      <div className="max-w-[1100px] mx-auto">

        <span className="sec-label reveal" style={{ color: "#5A7A52" }}>THE RESULTS</span>
        <h2
          className="font-bebas reveal"
          style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", letterSpacing: "0.02em", lineHeight: 1, marginBottom: "1rem", color: "white" }}
        >
          Before &amp; After: The Transformation
        </h2>
        <p className="reveal font-light" style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.55)", maxWidth: "560px", marginBottom: "3.5rem" }}>
          Portion-IQ doesn&apos;t patch problems. It transforms how your restaurant operates at its core.
        </p>

        {/* Before / After columns */}
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

          {/* BEFORE */}
          <div style={{ borderRadius: 8, overflow: "hidden" }}>
            <div style={{ padding: "1.2rem 1.8rem", background: "rgba(192,57,43,0.15)", border: "1px solid rgba(192,57,43,0.3)", borderBottom: "none", borderRadius: "8px 8px 0 0" }}>
              <span className="font-bebas" style={{ fontSize: "1.1rem", letterSpacing: "0.08em", color: "#C0392B" }}>
                ✕ &nbsp;BEFORE — The Chaos
              </span>
            </div>
            <div style={{ border: "1px solid rgba(192,57,43,0.2)", borderTop: "none", background: "rgba(192,57,43,0.04)", borderRadius: "0 0 8px 8px", overflow: "hidden" }}>
              {before.map((item) => (
                <div
                  key={item}
                  style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.85rem 1.5rem", borderBottom: "1px solid rgba(255,255,255,0.04)", fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", fontWeight: 300 }}
                >
                  <span style={{ color: "#C0392B", width: 18, textAlign: "center", flexShrink: 0, fontSize: "0.75rem", fontWeight: 800 }}>✕</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* AFTER */}
          <div style={{ borderRadius: 8, overflow: "hidden" }}>
            <div style={{ padding: "1.2rem 1.8rem", background: "rgba(90,122,82,0.15)", border: "1px solid rgba(90,122,82,0.3)", borderBottom: "none", borderRadius: "8px 8px 0 0" }}>
              <span className="font-bebas" style={{ fontSize: "1.1rem", letterSpacing: "0.08em", color: "#5A7A52" }}>
                ✓ &nbsp;AFTER — Recipe Precision
              </span>
            </div>
            <div style={{ border: "1px solid rgba(90,122,82,0.2)", borderTop: "none", background: "rgba(90,122,82,0.04)", borderRadius: "0 0 8px 8px", overflow: "hidden" }}>
              {after.map((item) => (
                <div
                  key={item}
                  style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.85rem 1.5rem", borderBottom: "1px solid rgba(255,255,255,0.04)", fontSize: "0.88rem", color: "rgba(210,235,215,0.75)", fontWeight: 300 }}
                >
                  <span style={{ color: "#5A7A52", width: 18, textAlign: "center", flexShrink: 0, fontSize: "0.75rem", fontWeight: 800 }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div
          className="reveal text-center"
          style={{ padding: "2.5rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(90,122,82,0.2)", borderRadius: 8 }}
        >
          <p
            className="font-playfair italic"
            style={{ fontSize: "clamp(1.2rem,2.5vw,1.8rem)", color: "rgba(255,255,255,0.85)", letterSpacing: "-0.01em" }}
          >
            &ldquo;Restaurants don&apos;t{" "}
            <em style={{ fontStyle: "normal", color: "rgba(255,255,255,0.4)" }}>&lsquo;improve.&rsquo;</em>{" "}
            They{" "}
            <span style={{ color: "#5A7A52", fontStyle: "normal" }}>transform.</span>&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
