const problems = [
  { num:"01", title:"Over-Portioning on Every Plate",   desc:"Your chefs give 'a bit extra' thinking it's generous. At 300 covers/day, that generosity is costing you thousands monthly." },
  { num:"02", title:"Incorrect Yield Assumptions",      desc:"You price a dish based on raw ingredient cost. But after trimming, cooking, and plating, your actual yield may be 30–40% less." },
  { num:"03", title:"Invisible Wastage Every Shift",    desc:"Spoilage, over-trimming, burnt batches, dropped items — these don't appear on any report. They just vanish from your margin." },
  { num:"04", title:"Prep Over-Producing Daily",        desc:"Excess prep that doesn't sell becomes waste. Without production planning, you're throwing profit in the bin every night." },
  { num:"05", title:"Wrong Menu Pricing",               desc:"Your menu prices weren't set using real costed recipes. They were guessed — or copied from competitors. You may be selling at a loss." },
  { num:"06", title:"Inventory Mismatches",             desc:"What's on paper vs. what's on the shelf never matches. That gap represents real money — stolen, wasted, or miscounted." },
  { num:"07", title:"Chef Dependency",                  desc:"When your head chef calls in sick, consistency collapses. Your food cost spikes and quality drops — because it's all in one person's head." },
];

export default function ProblemSection() {
  return (
    <section id="problem" style={{ background: "#1A2B45", padding: "100px 5%" }}>
      <div className="max-w-[1100px] mx-auto">
        <span className="sec-label reveal" style={{ color: "#C0392B" }}>The Real Problem</span>
        <h2 className="font-bebas reveal" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", letterSpacing: "0.02em", lineHeight: 1, marginBottom: "1rem", color: "white" }}>
          The Real Reason Your Restaurant<br />Isn&apos;t As Profitable As It Should Be
        </h2>
        <p className="reveal font-light" style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.55)", maxWidth: "560px", marginBottom: "3.5rem" }}>
          It&apos;s NOT your sales volume. NOT your marketing. NOT your staff count. The answer is far more specific — and far more fixable.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Problem list */}
          <ul className="flex flex-col gap-3 list-none">
            {problems.map((p) => (
              <li key={p.num} className="problem-item reveal">
                <span
                  className="font-bebas shrink-0 inline-flex items-center justify-center"
                  style={{ width:36, height:36, borderRadius:6, background:"rgba(90,122,82,0.15)", border:"1px solid rgba(90,122,82,0.3)", color:"#5A7A52", fontSize:"0.85rem", letterSpacing:"0.05em", marginTop:2 }}
                >
                  {p.num}
                </span>
                <div>
                  <strong style={{ display:"block", fontWeight:600, fontSize:"0.95rem", marginBottom:"0.2rem" }}>{p.title}</strong>
                  <span style={{ fontSize:"0.82rem", color:"rgba(255,255,255,0.5)", fontWeight:300 }}>{p.desc}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* Loss math boxes */}
          <div className="flex flex-col gap-5">
            {/* Box 1 — Red */}
            <div className="reveal" style={{ background:"rgba(192,57,43,0.07)", border:"1px solid rgba(192,57,43,0.25)", borderRadius:8, padding:"2rem" }}>
              <h4 style={{ fontSize:"0.72rem", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#C0392B", marginBottom:"1.2rem" }}>
                The Hidden Loss Math — Real Example
              </h4>
              {[
                { label:"One protein dish served daily",  val:"300 covers",  red:false },
                { label:"Over-portion per plate",          val:"+20g",        red:true  },
                { label:"Cost per kg of protein",          val:"AED 35/kg",   red:false },
                { label:"Daily over-cost",                 val:"AED 210",     red:true  },
                { label:"Monthly over-cost",               val:"AED 6,300",   red:true  },
              ].map((r) => (
                <div key={r.label} style={{ display:"flex", justifyContent:"space-between", padding:"0.6rem 0", borderBottom:"1px solid rgba(255,255,255,0.05)", fontSize:"0.88rem" }}>
                  <span style={{ color:"rgba(255,255,255,0.65)" }}>{r.label}</span>
                  <span style={{ fontWeight:700, color: r.red ? "#C0392B" : "white" }}>{r.val}</span>
                </div>
              ))}
              <div style={{ marginTop:"1rem", background:"rgba(192,57,43,0.12)", borderRadius:6, padding:"1rem", textAlign:"center" }}>
                <span className="font-bebas" style={{ display:"block", fontSize:"2.8rem", color:"#C0392B", letterSpacing:"0.05em", lineHeight:1 }}>AED 48,600</span>
                <small style={{ color:"rgba(255,255,255,0.4)", fontSize:"0.78rem" }}>lost every year — from one dish, one ingredient, 20 grams.</small>
              </div>
            </div>

            {/* Box 2 — Sage */}
            <div className="reveal" style={{ background:"rgba(90,122,82,0.07)", border:"1px solid rgba(90,122,82,0.25)", borderRadius:8, padding:"2rem" }}>
              <h4 style={{ fontSize:"0.72rem", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#5A7A52", marginBottom:"1.2rem" }}>
                Now Multiply That Across Your Menu
              </h4>
              {[
                { label:"10 menu items with same issue",         val:"AED 486,000/yr",   red:true  },
                { label:"Add wastage, wrong pricing, inventory", val:"+AED 150,000/yr",  red:true  },
                { label:"Your Recoverable Profit",               val:"AED 636,000+/yr",  red:false },
              ].map((r,i,arr) => (
                <div key={r.label} style={{ display:"flex", justifyContent:"space-between", padding:"0.6rem 0", borderBottom: i<arr.length-1 ? "1px solid rgba(255,255,255,0.05)" : "none", fontSize:"0.88rem" }}>
                  <span style={{ fontWeight: i===arr.length-1?700:400, color: i===arr.length-1 ? "white" : "rgba(255,255,255,0.65)" }}>{r.label}</span>
                  <span style={{ fontWeight:700, color: r.red ? "#C0392B" : "#5A7A52" }}>{r.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
