export default function MunicipalitySection() {
  return (
    <section id="municipality" style={{ background: "#0A1828", padding: "100px 5%" }}>
      <div className="max-w-[1100px] mx-auto">
        <span className="sec-label reveal" style={{ color:"#C0392B" }}>The Silent Risk</span>
        <h2 className="font-bebas reveal" style={{ fontSize:"clamp(2.5rem,6vw,4.5rem)", letterSpacing:"0.02em", lineHeight:1, marginBottom:"1rem", color:"white" }}>
          The Problem No One Talks About:<br />Municipality Ratings &amp; Staff Training
        </h2>
        <p className="reveal font-light" style={{ fontSize:"1rem", lineHeight:1.75, color:"rgba(255,255,255,0.55)", maxWidth:"600px", marginBottom:"3rem" }}>
          Most UAE restaurants with a B or C rating aren&apos;t bad restaurants. Their staff were simply never trained correctly — and it&apos;s costing them in ways they can&apos;t see.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* External */}
          <div className="reveal" style={{ background:"rgba(192,57,43,0.06)", border:"1px solid rgba(192,57,43,0.22)", borderRadius:8, padding:"2rem" }}>
            <p style={{ fontSize:"0.7rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"#C0392B", fontWeight:600, marginBottom:"0.4rem" }}>External Danger</p>
            <h3 className="font-bebas" style={{ fontSize:"1.6rem", letterSpacing:"0.04em", marginBottom:"1.2rem" }}>Quality &amp; Hygiene Issues</h3>
            <ul className="list-none flex flex-col gap-2">
              {["Customer trust eroded over time","Food safety compliance risks","Brand reputation damage","Blocked approval for expansion","Inspection instability & surprise closures"].map(i => (
                <li key={i} style={{ fontSize:"0.85rem", color:"rgba(255,255,255,0.55)", paddingLeft:"1.2rem", position:"relative", fontWeight:300 }}>
                  <span style={{ position:"absolute", left:0, color:"#C0392B", fontSize:"0.7rem", fontWeight:800 }}>✕</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>

          {/* Internal */}
          <div className="reveal" style={{ background:"rgba(212,168,67,0.05)", border:"1px solid rgba(212,168,67,0.2)", borderRadius:8, padding:"2rem" }}>
            <p style={{ fontSize:"0.7rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"#D4A843", fontWeight:600, marginBottom:"0.4rem" }}>Internal Danger</p>
            <h3 className="font-bebas" style={{ fontSize:"1.6rem", letterSpacing:"0.04em", marginBottom:"1.2rem" }}>Uncontrolled Operational Costs</h3>
            <ul className="list-none flex flex-col gap-2">
              {["Excessive cleaning materials usage","Wrong chemicals — damage & waste","Wastage during improper prep","Repeated mistakes from untrained staff","Poor equipment handling & breakages"].map(i => (
                <li key={i} style={{ fontSize:"0.85rem", color:"rgba(255,255,255,0.55)", paddingLeft:"1.2rem", position:"relative", fontWeight:300 }}>
                  <span style={{ position:"absolute", left:0, color:"#D4A843", fontSize:"0.7rem", fontWeight:800 }}>!</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Fix box */}
        <div className="reveal flex items-start gap-5" style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(90,122,82,0.25)", borderRadius:8, padding:"2rem" }}>
          <div
            className="font-bebas shrink-0 flex items-center justify-center"
            style={{ width:52, height:52, background:"rgba(90,122,82,0.15)", border:"1px solid rgba(90,122,82,0.3)", borderRadius:8, color:"#5A7A52", fontSize:"0.9rem", letterSpacing:"0.06em" }}
          >
            SOP
          </div>
          <div>
            <h4 style={{ fontSize:"1rem", fontWeight:700, color:"#5A7A52", marginBottom:"0.4rem" }}>Portion-IQ Fixes This Too</h4>
            <p style={{ fontSize:"0.87rem", color:"rgba(255,255,255,0.5)", lineHeight:1.7, fontWeight:300 }}>
              Our system includes municipality-compliant SOPs and structured staff training programs.
              We don&apos;t just fix your food cost — we build a kitchen operation that is inspection-ready,
              consistent, and protected from the inside out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
