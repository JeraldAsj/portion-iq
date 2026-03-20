import { Badge } from "../ui/badge";

export default function OperateBlindSection() {
  return (
    <section
      id="operate-blind"
      className="relative text-center overflow-hidden bg-navy2 py-[120px] px-[5%]"
    >
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(90,122,82,0.1)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-[1000px] mx-auto">
        <Badge variant="hero" className="mb-4 tracking-[0.3em] font-bold text-sage uppercase bg-sage/10 border-sage/20">
          The Hard Truth
        </Badge>

        <div className="blind-title reveal mb-3 text-white leading-tight font-bebas text-[clamp(2.5rem,6vw,4.5rem)] tracking-tight">
          MOST RESTAURANTS<br />OPERATE BLIND.
        </div>

        <p className="reveal font-playfair italic text-[clamp(1.2rem,2.5vw,1.8rem)] text-sage font-normal mb-14">
          We give them X-ray vision.
        </p>

        <div className="reveal flex justify-center gap-4 flex-wrap">
          {["Stop Losses", "Control Cost", "Create Predictable Profit"].map((p) => (
            <Badge
              key={p}
              variant="default"
              className="px-8 py-3.2 border-sage/35 rounded-sm text-[0.82rem] font-semibold text-sage bg-sage/10 tracking-[0.12em] uppercase shadow-none h-auto"
            >
              {p}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
