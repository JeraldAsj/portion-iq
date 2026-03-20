import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

const cards = [
  {
    bgEmoji: "⚖️",
    beforeTitle: "Chef Guesswork",
    beforeDesc: "Over-portioning by just 20g per plate bleeds AED 48,600/year from one item alone",
    afterTitle: "Precision Portions",
    afterDesc: "Exact recipe cards, portion weights & SOP guides your staff can't ignore",
    saving: "Save AED 4,050+/month",
  },
  {
    bgEmoji: "📦",
    beforeTitle: "Inventory Chaos",
    beforeDesc: "Stock that never matches accounting, over-purchasing, expiry losses, staff manipulation",
    afterTitle: "Smart Procurement",
    afterDesc: "GRN discipline, daily reconciliation, supplier pricing restructured — you know exactly what enters your kitchen",
    saving: "Stop expiry losses",
  },
  {
    bgEmoji: "🚨",
    beforeTitle: "B/C Municipality Rating",
    beforeDesc: "Untrained staff, hygiene gaps, compliance risks — one inspection away from shutdown",
    afterTitle: "A-Grade Certified",
    afterDesc: "Municipality-compliant SOPs, hygiene training, daily checklists — built to pass every audit",
    saving: "A-grade standards",
  },
  {
    bgEmoji: "💸",
    beforeTitle: "Cash Flow Panic",
    beforeDesc: "Restaurant looks full but loses money on every plate — no clarity on true cost per dish",
    afterTitle: "Predictable Profit",
    afterDesc: "Real-time variance monitoring — you see exactly where money leaves and who is responsible",
    saving: "Owner peace of mind",
  },
];

export default function BeforeAfterSection() {
  return (
    <section id="transform" className="bg-[#F8F5EF] text-navy py-[100px] px-[5%]">
      <div className="max-w-[1100px] mx-auto">
        <Badge variant="loss" className="mb-4 tracking-[0.3em] font-bold text-red uppercase bg-red/10 border-red/20 px-3 py-1">
          Before &amp; After
        </Badge>
        <h2 className="font-bebas text-[clamp(2.5rem,6vw,4.5rem)] leading-none mb-4 reveal">
          The Restaurant<br />Transformation
        </h2>
        <p className="font-light text-navy/65 text-base leading-[1.75] max-w-[540px] mb-14 reveal">
          Hover each card to see what Portion-IQ brings to your kitchen — from silent money leaks to predictable profits.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((c, i) => (
            <div key={i} className="flip-card reveal">
              <div className="flip-inner h-full">
                {/* Front */}
                <Card className="flip-front overflow-hidden border-none shadow-none rounded-[10px]">
                  <CardContent className="p-0 h-full relative">
                    <div className="absolute inset-0 flex items-center justify-center text-[8rem] opacity-[0.12] select-none pointer-events-none">
                      {c.bgEmoji}
                    </div>
                    <span className="absolute top-4 right-4 text-[0.6rem] tracking-[0.2em] uppercase text-white/35 font-medium">
                      HOVER TO REVEAL →
                    </span>
                    <div className="relative z-10 p-10 h-full flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                      <div className="text-[0.65rem] tracking-[0.3em] uppercase font-bold text-red-light mb-2">BEFORE</div>
                      <div className="font-bebas text-3xl tracking-wider text-white mb-1.5">{c.beforeTitle}</div>
                      <div className="text-[0.82rem] text-white/60 leading-relaxed font-light">{c.beforeDesc}</div>
                    </div>
                  </CardContent>
                </Card>

                {/* Back */}
                <Card className="flip-back overflow-hidden border-none shadow-none rounded-[10px]">
                  <CardContent className="p-0 h-full relative">
                    <div className="absolute inset-0 flex items-center justify-center text-[8rem] opacity-[0.12] select-none pointer-events-none">
                      ✅
                    </div>
                    <div className="relative z-10 p-10 h-full flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                      <div className="text-[0.65rem] tracking-[0.3em] uppercase font-bold text-sage mb-2">AFTER PORTION-IQ</div>
                      <div className="font-bebas text-3xl tracking-wider text-white mb-1.5">{c.afterTitle}</div>
                      <div className="text-[0.82rem] text-white/60 leading-relaxed font-light mb-3">{c.afterDesc}</div>
                      <Badge className="w-fit bg-sage/30 border-sage/50 text-sage-light text-[0.72rem] font-bold px-3 py-1 rounded-full">
                        {c.saving}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
