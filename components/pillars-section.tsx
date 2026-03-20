const pillars = [
  {
    num: "01",
    name: "Smart Procurement Control",
    sub: "Buy Smart — Track Smart — Spend Less",
    desc: "We restructure your entire supply chain — from supplier negotiation to what lands on your shelf — so every dirham of purchasing works harder.",
    features: [
      "Supplier pricing restructure & benchmarking",
      "Purchase quantity optimization",
      "Delivery quality inspection protocols",
      "Inventory receiving controls",
      "GRN (Goods Received Note) discipline",
      "Daily reconciliation systems",
      "Stock movement controls & accountability",
    ],
    stops: ["Over-purchasing", "Expiry losses", "Staff manipulation", "Invoice confusion"],
  },
  {
    num: "02",
    name: "Portion Precision System",
    sub: "Where 70% of Your Losses Come From",
    badge: "70% OF LOSSES COME FROM HERE",
    desc: "Inspired by KFC, AlBaik, and McDonald's. We systematize every portion, every recipe, every prep SOP — so your food cost is locked and consistent, regardless of who's in the kitchen.",
    features: [
      "Exact portion weights per dish",
      "Cooking yield testing & documentation",
      "Costed recipe cards for every item",
      "Visual portion guides for all staff",
      "Prep SOPs & batch production rules",
      "Zero chef-dependency protocols",
      "Consistency training & certification",
    ],
    stops: ["Over-portioning", "Taste inconsistency", "Staff guesswork", "Wastage"],
  },
  {
    num: "03",
    name: "Variance Monitoring System",
    sub: "The Profit Protector",
    profitBadge: "THE PROFIT PROTECTOR",
    desc: "The one system 99% of UAE restaurants never implement. It's the difference between knowing your costs and controlling them.",
    features: [
      "Actual vs. ideal usage tracking",
      "Daily wastage monitoring",
      "Theft & mis-portion detection",
      "Over-production tracking",
      "Prep inefficiency analysis",
      "Menu performance reporting",
    ],
    stops: ["Theft", "Undetected waste", "Cost drift", "Blind spots"],
  },
];

export default function PillarsSection() {
  return (
    <section id="pillars" style={{ background: "#1A2B45", padding: "100px 5%" }}>
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <span className="sec-label reveal" style={{ color: "#5A7A52" }}>The System</span>
        <h2 className="font-bebas reveal" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", letterSpacing: "0.02em", lineHeight: 1, marginBottom: "1rem", color: "white" }}>
          3 Pillars That Work<br />Together
        </h2>
        <p className="reveal font-light" style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.55)", maxWidth: "540px", marginBottom: "3rem" }}>
          Portion-IQ splits your entire operation into three interlocking systems that stop losses, control cost, and create predictable profit.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="pillar-card reveal flex flex-col"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "8px",
                padding: "2.5rem 2rem",
              }}
            >
              {/* Ghost number */}
              <div
                className="font-bebas"
                style={{ fontSize: "4rem", color: "rgba(90,122,82,0.2)", lineHeight: 1, marginBottom: "0.5rem", letterSpacing: "0.05em" }}
              >
                {p.num}
              </div>

              {/* Name */}
              <div className="font-bebas" style={{ fontSize: "1.5rem", letterSpacing: "0.05em", color: "white", marginBottom: "0.3rem" }}>
                {p.name}
              </div>

              {/* Sub label */}
              <div style={{ fontSize: "0.72rem", color: "#5A7A52", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.8rem" }}>
                {p.sub}
              </div>

              {/* Loss badge (pillar 02) */}
              {p.badge && (
                <div style={{ display: "inline-block", background: "rgba(192,57,43,0.12)", color: "#C0392B", padding: "3px 10px", borderRadius: "3px", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", marginBottom: "0.8rem", width: "fit-content" }}>
                  {p.badge}
                </div>
              )}

              {/* Profit protector badge (pillar 03) */}
              {p.profitBadge && (
                <div style={{ background: "rgba(90,122,82,0.1)", border: "1px solid rgba(90,122,82,0.25)", borderRadius: "4px", padding: "6px 12px", fontSize: "0.68rem", color: "#5A7A52", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "0.8rem", width: "fit-content" }}>
                  {p.profitBadge}
                </div>
              )}

              {/* Description */}
              <p style={{ fontSize: "0.87rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, fontWeight: 300, marginBottom: "1.2rem" }}>
                {p.desc}
              </p>

              {/* Feature list */}
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.45rem", marginBottom: "1.5rem", flex: 1 }}>
                {p.features.map((f) => (
                  <li
                    key={f}
                    style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", paddingLeft: "1.1rem", position: "relative", fontWeight: 300, lineHeight: 1.5 }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "#5A7A52", fontSize: "0.7rem", fontWeight: 700 }}>–</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Stops These Losses box */}
              <div style={{ background: "rgba(10,24,40,0.7)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "6px", padding: "1rem" }}>
                <div style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5A7A52", fontWeight: 700, marginBottom: "0.6rem" }}>
                  Stops These Losses
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {p.stops.map((s) => (
                    <span
                      key={s}
                      style={{ background: "rgba(192,57,43,0.1)", border: "1px solid rgba(192,57,43,0.25)", color: "#C0392B", padding: "3px 10px", borderRadius: "3px", fontSize: "0.7rem", fontWeight: 600 }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
