export default function OperateBlindSection() {
  return (
    <section
      id="operate-blind"
      className="relative text-center overflow-hidden"
      style={{ background: "#0A1828", padding: "120px 5%" }}
    >
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(90,122,82,0.1) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-[1000px] mx-auto">
        <span className="sec-label reveal" style={{ color: "#5A7A52" }}>The Hard Truth</span>

        <div className="blind-title reveal" style={{ marginBottom:"0.8rem" }}>
          MOST RESTAURANTS<br />OPERATE BLIND.
        </div>

        <p
          className="reveal font-playfair italic"
          style={{ fontSize:"clamp(1.2rem,2.5vw,1.8rem)", color:"#5A7A52", fontWeight:400, marginBottom:"3.5rem" }}
        >
          We give them X-ray vision.
        </p>

        <div className="reveal flex justify-center gap-4 flex-wrap">
          {["Stop Losses","Control Cost","Create Predictable Profit"].map((p) => (
            <span
              key={p}
              style={{
                padding: "0.8rem 2rem",
                border: "1px solid rgba(90,122,82,0.35)",
                borderRadius: "3px",
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "#5A7A52",
                background: "rgba(90,122,82,0.07)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
