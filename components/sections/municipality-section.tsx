import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { MUNICIPALITY_DANGERS } from "@/lib/constants";

export default function MunicipalitySection() {
  return (
    <section id="municipality" className="bg-navy2 py-[100px] px-[5%]">
      <div className="max-w-[1100px] mx-auto">
        <Badge variant="loss" className="mb-4 tracking-[0.3em] font-bold text-red uppercase bg-red/10 border-red/20">
          The Silent Risk
        </Badge>
        <h2 className="font-bebas text-white text-[clamp(2.5rem,6vw,4.5rem)] leading-none mb-4 reveal">
          The Problem No One Talks About:<br />Municipality Ratings &amp; Staff Training
        </h2>
        <p className="font-light text-white/55 text-base leading-[1.75] max-w-[600px] mb-12 reveal">
          Most UAE restaurants with a B or C rating aren&apos;t bad restaurants. Their staff were simply never trained correctly — and it&apos;s costing them in ways they can&apos;t see.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-white">
          {/* External */}
          <Card className="bg-red/5 border-red/20 p-8 reveal shadow-none rounded-lg">
            <div className="text-[0.7rem] tracking-[0.2em] uppercase text-red font-bold mb-1.5">External Danger</div>
            <CardTitle className="font-bebas text-[1.6rem] tracking-wider mb-5 text-white">Quality &amp; Hygiene Issues</CardTitle>
            <ul className="space-y-2.5">
              {MUNICIPALITY_DANGERS.external.map(i => (
                <li key={i} className="text-[0.85rem] text-white/55 pl-5 relative font-light leading-normal">
                  <span className="absolute left-0 text-red font-bold">✕</span>
                  {i}
                </li>
              ))}
            </ul>
          </Card>

          {/* Internal */}
          <Card className="bg-gold/5 border-gold/20 p-8 reveal shadow-none rounded-lg">
            <div className="text-[0.7rem] tracking-[0.2em] uppercase text-gold font-bold mb-1.5">Internal Danger</div>
            <CardTitle className="font-bebas text-[1.6rem] tracking-wider mb-5 text-white">Uncontrolled Operational Costs</CardTitle>
            <ul className="space-y-2.5">
              {MUNICIPALITY_DANGERS.internal.map(i => (
                <li key={i} className="text-[0.85rem] text-white/55 pl-5 relative font-light leading-normal">
                  <span className="absolute left-0 text-gold font-bold">!</span>
                  {i}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Fix box */}
        <Card className="bg-white/5 border-sage/25 p-8 reveal shadow-none rounded-lg flex items-start gap-5">
          <div className="font-bebas shrink-0 flex items-center justify-center w-[52px] h-[52px] bg-sage/15 border border-sage/30 rounded-lg text-sage text-[0.9rem] tracking-wider">
            SOP
          </div>
          <div>
            <h4 className="text-base font-bold text-sage mb-1.5">Portion-IQ Fixes This Too</h4>
            <p className="text-[0.87rem] text-white/50 leading-relaxed font-light">
              Our system includes municipality-compliant SOPs and structured staff training programs.
              We don&apos;t just fix your food cost — we build a kitchen operation that is inspection-ready,
              consistent, and protected from the inside out.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
