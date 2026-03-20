import Link from "next/link";

const emojis = [
  { e:"🍳", top:"8%",  left:"4%",   size:"3rem",   delay:"0s",   dur:"8s"  },
  { e:"⚖️", top:"15%", right:"6%",  size:"2rem",   delay:"1.2s", dur:"6s"  },
  { e:"🔪", top:"55%", left:"2%",   size:"2.8rem", delay:"2s",   dur:"9s"  },
  { e:"🧑‍🍳", bottom:"12%", right:"4%", size:"3.5rem", delay:"0.5s", dur:"7s" },
  { e:"📋", top:"72%", left:"10%",  size:"2rem",   delay:"3s",   dur:"6s"  },
  { e:"🥘", top:"35%", right:"3%",  size:"2.5rem", delay:"1.8s", dur:"8s"  },
  { e:"💸", bottom:"28%", left:"6%", size:"1.8rem", delay:"2.5s", dur:"7s" },
  { e:"📊", top:"5%",  right:"22%", size:"2rem",   delay:"4s",   dur:"9s"  },
  { e:"🏭", bottom:"20%", right:"15%", size:"2.2rem", delay:"1s", dur:"6s" },
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0F1E33 0%, #0D2238 60%, #0F2A1A 100%)",
        paddingTop: "80px",
      }}
    >
      {/* Floating kitchen emojis */}
      <div className="absolute inset-0" style={{ perspective: "800px", pointerEvents: "none" }}>
        {emojis.map((em, i) => (
          <div
            key={i}
            className="k3d select-none"
            style={{
              top: em.top,
              left: em.left,
              right: em.right,
              bottom: em.bottom,
              fontSize: em.size,
              animationDelay: em.delay,
              animationDuration: em.dur,
            }}
          >
            {em.e}
          </div>
        ))}
      </div>

      <div className="drain-bar" />

      {/* Content */}
      <div className="relative z-10 max-w-[860px] mx-auto px-[5%] py-8 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 mb-8"
          style={{
            background: "rgba(192,57,43,0.15)",
            border: "1px solid rgba(192,57,43,0.4)",
            color: "#E87264",
            padding: "8px 18px",
            borderRadius: "2px",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          🇦🇪 UAE&apos;s First Restaurant Costing &amp; Menu Control System
        </div>

        {/* Headline */}
        <h1
          className="font-bebas mb-6"
          style={{ fontSize: "clamp(3rem,9vw,7rem)", lineHeight: 0.95, letterSpacing: "0.02em" }}
        >
          <span className="block text-white">STOP THE</span>
          <span className="block text-[#C0392B]">KITCHEN BLEEDING</span>
          <span
            className="block font-playfair italic"
            style={{ color: "#5A7A52", fontSize: "0.55em", letterSpacing: "0.05em" }}
          >
            in 30 Days — Guaranteed
          </span>
        </h1>

        {/* Sub */}
        <p
          className="max-w-[560px] mx-auto mb-10 font-light leading-[1.75]"
          style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.65)" }}
        >
          Small and medium UAE restaurants silently lose AED 5,000–25,000 every month.
          Not from bad food. From invisible operational failures your POS will never catch.
        </p>

        {/* Loss counter */}
        <div
          className="inline-flex items-center gap-4 mb-10 text-left"
          style={{
            background: "rgba(192,57,43,0.1)",
            border: "1px solid rgba(192,57,43,0.3)",
            borderRadius: "6px",
            padding: "1.2rem 2rem",
          }}
        >
          <div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8FA3B1" }}>
              20g over-portion per plate
            </div>
            <div className="font-bebas text-[#C0392B]" style={{ fontSize: "2.5rem", letterSpacing: "0.05em", lineHeight: 1 }}>
              AED 48,600
            </div>
            <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>lost per year — from ONE item</div>
          </div>
          <div style={{ fontSize: "2rem", opacity: 0.3 }}>→</div>
          <div>
            <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8FA3B1" }}>
              Portion-IQ stops this in
            </div>
            <div className="font-bebas" style={{ fontSize: "2.5rem", letterSpacing: "0.05em", lineHeight: 1, color: "#5A7A52" }}>
              30
            </div>
            <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>days or less</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">
          <Link href="#ai" className="btn-primary">Diagnose My Kitchen Free</Link>
          <Link href="#pillars" className="btn-outline">How It Works</Link>
        </div>
      </div>
    </section>
  );
}
