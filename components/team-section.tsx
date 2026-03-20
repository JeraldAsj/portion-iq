const expertise = [
  { icon:"CA", label:"Chartered Accountants"           },
  { icon:"FT", label:"Food Technologists"               },
  { icon:"OA", label:"Operations Auditors"              },
  { icon:"SB", label:"SOP Builders"                    },
  { icon:"KC", label:"Chain-Level Kitchen Consultants"  },
];

export default function TeamSection() {
  return (
    <section id="team" style={{ background:"#1A2B45", padding:"100px 5%" }}>
      <style>{`
        .expertise-card:hover { border-color: rgba(90,122,82,0.4) !important; transform: translateY(-5px); }
      `}</style>
      <div className="max-w-[1100px] mx-auto">
        <span className="sec-label reveal" style={{ color:"#5A7A52" }}>The Team</span>
        <h2 className="font-bebas reveal" style={{ fontSize:"clamp(2.5rem,6vw,4.5rem)", letterSpacing:"0.02em", lineHeight:1, marginBottom:"1rem", color:"white" }}>
          Our Team
        </h2>
        <p className="reveal font-light" style={{ fontSize:"1rem", lineHeight:1.75, color:"rgba(255,255,255,0.55)", maxWidth:"540px", marginBottom:"3rem" }}>
          A combined force of specialists who have built kitchen systems for restaurants serving millions of meals per year.
        </p>

        <div className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {expertise.map(({ icon, label }) => (
            <div key={icon} className="expertise-card transition-all duration-300 text-center" style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:8, padding:"1.5rem 1rem", cursor:"default" }}>
              <span className="font-bebas flex items-center justify-center mx-auto mb-3" style={{ width:48,height:48,background:"rgba(90,122,82,0.15)",border:"1px solid rgba(90,122,82,0.3)",borderRadius:8,color:"#5A7A52",fontSize:"0.85rem",letterSpacing:"0.08em" }}>
                {icon}
              </span>
              <h4 style={{ fontSize:"0.78rem", fontWeight:600, color:"white", lineHeight:1.3 }}>{label}</h4>
            </div>
          ))}
        </div>

        <div className="reveal text-center" style={{ background:"rgba(90,122,82,0.07)", border:"1px solid rgba(90,122,82,0.2)", borderRadius:8, padding:"2.5rem", marginBottom:"1.5rem" }}>
          <p className="font-playfair italic" style={{ fontSize:"clamp(1rem,2vw,1.25rem)", color:"rgba(255,255,255,0.65)", marginBottom:"1rem", lineHeight:1.7 }}>
            &ldquo;This team has built systems for restaurants serving millions of meals per year.
            The operational depth we bring is not available anywhere else in the UAE market.&rdquo;
          </p>
          <strong style={{ color:"#5A7A52", fontStyle:"normal", fontWeight:700, fontSize:"0.95rem" }}>— The Portion-IQ Team</strong>
        </div>

        <p className="reveal text-center font-playfair italic" style={{ fontSize:"clamp(1rem,2vw,1.3rem)", color:"rgba(255,255,255,0.4)", padding:"0.8rem" }}>
          &ldquo;You are not hiring people. You are hiring a{" "}
          <strong style={{ color:"#5A7A52", fontStyle:"normal", fontFamily:"inherit" }}>profit engine.</strong>&rdquo;
        </p>
      </div>
    </section>
  );
}
