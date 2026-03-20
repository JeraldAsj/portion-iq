const stats = [
  { target: 25000, prefix: "AED ", suffix: "/mo", red: true,  label: "Max monthly losses stopped per UAE restaurant" },
  { target: 48600, prefix: "AED ", suffix: "/yr", red: true,  label: "Annual loss from 20g over-portion on one item"  },
  { target: 70,    prefix: "",     suffix: "%",   red: false, label: "Kitchen losses that come from portioning alone" },
  { target: 30,    prefix: "",     suffix: " days",red: false, label: "Average days to implement the full system"     },
];

export default function StatsSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4" style={{ background: "#0A1828" }}>
      {stats.map((s, i) => (
        <div
          key={s.label}
          className="reveal text-center"
          style={{
            padding: "60px 20px",
            borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div
            className="font-bebas"
            data-target={s.target}
            data-prefix={s.prefix}
            data-suffix={s.suffix}
            style={{ fontSize: "clamp(2rem,4vw,3.5rem)", color: s.red ? "#C0392B" : "#5A7A52", letterSpacing: "0.05em", lineHeight: 1, marginBottom: "0.5rem" }}
          >
            {s.prefix}0{s.suffix}
          </div>
          <div style={{ fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#8FA3B1", fontWeight: 500, lineHeight: 1.4 }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
