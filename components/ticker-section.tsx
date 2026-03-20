const items = [
  "OVER-PORTIONING","WASTAGE","WRONG YIELD ASSUMPTIONS",
  "CHEF DEPENDENCY","INVENTORY MISMATCHES","WRONG MENU PRICING","CASH FLOW PANIC",
];

export default function TickerSection() {
  // Duplicate for seamless loop
  const all = [...items, ...items];
  return (
    <div className="overflow-hidden whitespace-nowrap" style={{ background: "#C0392B", padding: "12px 0" }}>
      <div className="ticker-inner">
        {all.map((t, i) => (
          <span key={i} className="font-bebas" style={{ fontSize: "1rem", letterSpacing: "0.15em", color: "rgba(255,255,255,0.9)" }}>
            {t}
            {i < all.length - 1 && (
              <span className="mx-4" style={{ color: "rgba(255,255,255,0.4)" }}>✦</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
