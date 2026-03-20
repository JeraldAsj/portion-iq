import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Badge } from "../ui/badge";
import { PILLARS } from "@/lib/constants";

export default function PillarsSection() {
  return (
    <section id="pillars" className="bg-navy py-[100px] px-[5%]">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <span className="sec-label text-sage reveal">The System</span>
        <h2 className="font-bebas text-white text-[clamp(2.5rem,6vw,4.5rem)] leading-none mb-4 reveal">
          3 Pillars That Work<br />Together
        </h2>
        <p className="font-light text-white/55 text-base leading-[1.75] max-w-[540px] mb-12 reveal">
          Portion-IQ splits your entire operation into three interlocking systems that stop losses, control cost, and create predictable profit.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((p) => (
            <Card
              key={p.num}
              className="pillar-card border-white/10 bg-white/5 p-10 flex flex-col reveal"
            >
              <CardHeader className="p-0 space-y-2 mb-6">
                <div className="font-bebas text-[4rem] text-sage/20 leading-none tracking-widest">
                  {p.num}
                </div>
                <CardTitle className="font-bebas text-2xl text-white tracking-wider">
                  {p.name}
                </CardTitle>
                <CardDescription className="text-[0.72rem] text-sage tracking-[0.2em] uppercase font-bold">
                  {p.sub}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-0 flex flex-col flex-1">
                {/* Loss badge (pillar 02) */}
                {p.badge && (
                  <Badge className="mb-4 bg-red/15 text-red-light border-transparent rounded-[3px] text-[0.68rem] font-bold tracking-widest px-2.5 py-1">
                    {p.badge}
                  </Badge>
                )}

                {/* Profit protector badge (pillar 03) */}
                {p.profitBadge && (
                  <Badge className="mb-4 border-sage/25 bg-sage/10 text-sage text-[0.68rem] font-bold tracking-widest px-3 py-1.5 rounded-sm">
                    {p.profitBadge}
                  </Badge>
                )}

                {/* Description */}
                <p className="text-[0.87rem] text-white/55 leading-[1.7] font-light mb-6">
                  {p.desc}
                </p>

                {/* Feature list */}
                <ul className="space-y-2 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="relative text-[0.82rem] text-white/45 pl-4 leading-normal font-light flex items-start"
                    >
                      <span className="absolute left-0 text-sage font-bold">—</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Stops These Losses box */}
                <div className="bg-navy2/70 border border-white/10 rounded-lg p-4 mt-auto">
                  <div className="text-[0.65rem] tracking-[0.18em] uppercase text-sage font-bold mb-3">
                    Stops These Losses
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.stops.map((s) => (
                      <Badge 
                        key={s} 
                        className="bg-red/10 border-red/25 text-red-light rounded-[3px] text-[0.7rem] font-semibold px-2.5 py-1"
                      >
                        {s}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
