const roles = [
  "A Chartered Accountant","A Food Technologist","A Kitchen Auditor",
  "A Costing Expert","A Procurement Officer",
];

export default function WhySection() {
  return (
    <section id="why" style={{ background: "#1A2B45", padding: "100px 5%" }}>
      <style>{`
        .role-badge:hover { border-color: rgba(90,122,82,0.5) !important; color: #5A7A52 !important; }
      `}</style>
      <div className="max-w-[1000px] mx-auto text-center">
        <span className="sec-label reveal" style={{ color:"#5A7A52" }}>Why It Works</span>
        <h2 className="font-bebas reveal" style={{ fontSize:"clamp(2.5rem,6vw,4.5rem)", letterSpacing:"0.02em", lineHeight:1, marginBottom:"1rem", color:"white" }}>
          Why Portion-IQ Works When<br />Nothing Else Does
        </h2>
        <p className="reveal font-light" style={{ fontSize:"1rem", lineHeight:1.75, color:"rgba(255,255,255,0.55)", maxWidth:"560px", margin:"0 auto 3rem" }}>
          Think about the calibre of professionals you would normally need to fix your restaurant&apos;s profitability:
        </p>

        <div className="reveal flex flex-wrap gap-3 justify-center mb-10">
          {roles.map((r) => (
            <span key={r} className="role-badge inline-flex items-center gap-2 transition-all duration-300" style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"3px", padding:"0.8rem 1.6rem", fontSize:"0.88rem", fontWeight:500, color:"white", cursor:"default" }}>
              <span style={{ width:6,height:6,borderRadius:"50%",background:"#5A7A52",flexShrink:0,display:"inline-block" }} />
              {r}
            </span>
          ))}
        </div>

        <div className="reveal text-left" style={{ background:"rgba(90,122,82,0.07)", border:"1px solid rgba(90,122,82,0.25)", borderRadius:8, padding:"2.5rem", marginBottom:"1.5rem" }}>
          <h3 className="font-bebas" style={{ fontSize:"clamp(1.4rem,2.5vw,2rem)", letterSpacing:"0.03em", color:"white", marginBottom:"0.8rem" }}>
            You get ALL of those — built into one system.
          </h3>
          <p style={{ fontSize:"0.93rem", color:"rgba(255,255,255,0.55)", lineHeight:1.75, fontWeight:300 }}>
            Portion-IQ combines the expertise of accountants, food technologists, operations auditors, SOP builders,
            and chain-level kitchen consultants into a single integrated profit-recovery system.
            No hiring. No coordination overhead. One system, complete coverage.
          </p>
        </div>

        <p className="reveal font-playfair italic" style={{ fontSize:"clamp(1rem,2vw,1.3rem)", color:"rgba(255,255,255,0.45)", padding:"1.2rem" }}>
          &ldquo;Most restaurants fail because they operate in the dark.{" "}
          <strong style={{ color:"#5A7A52", fontStyle:"normal", fontFamily:"inherit" }}>Portion-IQ turns on the lights.</strong>&rdquo;
        </p>
      </div>
    </section>
  );
}
