export default function Footer() {
  return (
    <footer
      className="flex items-center justify-between flex-wrap gap-4"
      style={{ background: "#070F1A", padding: "40px 5%", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="font-bebas text-[1.5rem] tracking-[0.08em]">
        P<span className="text-[#5A7A52]">◎</span>RTION IQ
      </div>
      <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.3)" }}>
        The UAE&apos;s First Restaurant-Based Costing &amp; Menu Control System
      </p>
      <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.2)" }}>
        AI Diagnosis Powered by Anthropic Claude
      </p>
    </footer>
  );
}
