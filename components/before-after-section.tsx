const cards = [
  {
    bgEmoji: "⚖️",
    beforeTitle: "Chef Guesswork",
    beforeDesc: "Over-portioning by just 20g per plate bleeds AED 48,600/year from one item alone",
    afterTitle: "Precision Portions",
    afterDesc: "Exact recipe cards, portion weights & SOP guides your staff can't ignore",
    saving: "Save AED 4,050+/month",
  },
  {
    bgEmoji: "📦",
    beforeTitle: "Inventory Chaos",
    beforeDesc: "Stock that never matches accounting, over-purchasing, expiry losses, staff manipulation",
    afterTitle: "Smart Procurement",
    afterDesc: "GRN discipline, daily reconciliation, supplier pricing restructured — you know exactly what enters your kitchen",
    saving: "Stop expiry losses",
  },
  {
    bgEmoji: "🚨",
    beforeTitle: "B/C Municipality Rating",
    beforeDesc: "Untrained staff, hygiene gaps, compliance risks — one inspection away from shutdown",
    afterTitle: "A-Grade Certified",
    afterDesc: "Municipality-compliant SOPs, hygiene training, daily checklists — built to pass every audit",
    saving: "A-grade standards",
  },
  {
    bgEmoji: "💸",
    beforeTitle: "Cash Flow Panic",
    beforeDesc: "Restaurant looks full but loses money on every plate — no clarity on true cost per dish",
    afterTitle: "Predictable Profit",
    afterDesc: "Real-time variance monitoring — you see exactly where money leaves and who is responsible",
    saving: "Owner peace of mind",
  },
];

export default function BeforeAfterSection() {
  return (
    <section id="transform" style={{ background: "#F8F5EF", color: "#0F1E33", padding: "100px 5%" }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="reveal" style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 600, color: "#C0392B", marginBottom: "0.8rem" }}>
          Before &amp; After
        </div>
        <h2 className="font-bebas reveal" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", letterSpacing: "0.02em", lineHeight: 1, marginBottom: "1rem" }}>
          The Restaurant<br />Transformation
        </h2>
        <p className="reveal font-light" style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(15,30,51,0.65)", maxWidth: "540px", marginBottom: "3.5rem" }}>
          Hover each card to see what Portion-IQ brings to your kitchen — from silent money leaks to predictable profits.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((c, i) => (
            <div key={i} className="flip-card reveal">
              <div className="flip-inner">
                {/* Front */}
                <div className="flip-front">
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "8rem", opacity: 0.12 }}>
                    {c.bgEmoji}
                  </div>
                  <span style={{ position: "absolute", top: "1rem", right: "1rem", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
                    HOVER TO REVEAL →
                  </span>
                  <div style={{ position: "relative", zIndex: 2, padding: "1.5rem", background: "linear-gradient(transparent, rgba(0,0,0,0.75))" }}>
                    <div style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.4rem", color: "#E87264" }}>BEFORE</div>
                    <div className="font-bebas" style={{ fontSize: "1.8rem", letterSpacing: "0.05em", color: "white", marginBottom: "0.3rem" }}>{c.beforeTitle}</div>
                    <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, fontWeight: 300 }}>{c.beforeDesc}</div>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-back">
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "8rem", opacity: 0.12 }}>
                    ✅
                  </div>
                  <div style={{ position: "relative", zIndex: 2, padding: "1.5rem", background: "linear-gradient(transparent, rgba(0,0,0,0.75))" }}>
                    <div style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.4rem", color: "#8FBB7A" }}>AFTER PORTION-IQ</div>
                    <div className="font-bebas" style={{ fontSize: "1.8rem", letterSpacing: "0.05em", color: "white", marginBottom: "0.3rem" }}>{c.afterTitle}</div>
                    <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, fontWeight: 300, marginBottom: "0.7rem" }}>{c.afterDesc}</div>
                    <span style={{ display: "inline-block", background: "rgba(90,122,82,0.3)", border: "1px solid rgba(90,122,82,0.5)", color: "#8FBB7A", padding: "4px 12px", borderRadius: "20px", fontSize: "0.72rem", fontWeight: 600 }}>
                      {c.saving}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
