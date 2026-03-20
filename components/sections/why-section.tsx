import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { WHY_IT_WORKS_ROLES } from "@/lib/constants";

export default function WhySection() {
  return (
    <section id="why" className="bg-[#1A2B45] py-[100px] px-[5%]">
      <div className="max-w-[1000px] mx-auto text-center">
        <Badge variant="hero" className="mb-4 tracking-[0.3em] font-bold text-sage uppercase bg-sage/10 border-sage/20 px-3 py-1">
          Why It Works
        </Badge>
        <h2 className="font-bebas text-white text-[clamp(2.5rem,6vw,4.5rem)] leading-none mb-4 reveal">
          Why Portion-IQ Works When<br />Nothing Else Does
        </h2>
        <p className="font-light text-white/50 text-base leading-relaxed max-w-[560px] mx-auto mb-12 reveal">
          Think about the calibre of professionals you would normally need to fix your restaurant&apos;s profitability:
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-12 reveal items-center">
          {WHY_IT_WORKS_ROLES.map((r) => (
            <Badge 
              key={r} 
              variant="default"
              className="group cursor-default bg-white/5 border-white/10 p-4 px-6 rounded-sm text-white text-[0.88rem] font-medium transition-all duration-300 hover:border-sage/50 hover:text-sage flex items-center gap-3 shadow-none h-auto"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0 transition-transform group-hover:scale-125" />
              {r}
            </Badge>
          ))}
        </div>

        <Card className="bg-sage/5 border-sage/25 p-10 reveal text-left shadow-none rounded-lg mb-8">
          <CardContent className="p-0">
            <h3 className="font-bebas text-[clamp(1.4rem,2.5vw,2rem)] text-white tracking-wider mb-3 leading-tight border-none outline-none">
              You get ALL of those — built into one system.
            </h3>
            <p className="text-[0.93rem] text-white/55 leading-relaxed font-light border-none outline-none">
              Portion-IQ combines the expertise of accountants, food technologists, operations auditors, SOP builders,
              and chain-level kitchen consultants into a single integrated profit-recovery system.
              No hiring. No coordination overhead. One system, complete coverage.
            </p>
          </CardContent>
        </Card>

        <p className="font-playfair italic text-[clamp(1rem,2vw,1.3rem)] text-white/45 p-4 reveal">
          &ldquo;Most restaurants fail because they operate in the dark.{" "}
          <strong className="text-sage font-bold font-serif not-italic">Portion-IQ turns on the lights.</strong>&rdquo;
        </p>
      </div>
    </section>
  );
}
