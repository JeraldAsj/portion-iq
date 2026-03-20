import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { TRANSFORMATION_DATA } from "@/lib/constants";

export default function TransformationSection() {
  return (
    <section id="transformation" className="bg-[#0F1E33] py-[100px] px-[5%]">
      <div className="max-w-[1100px] mx-auto">
        <Badge variant="hero" className="mb-4 tracking-[0.3em] font-bold text-sage uppercase bg-sage/10 border-sage/20 px-3 py-1">
          THE RESULTS
        </Badge>
        <h2 className="font-bebas text-white text-[clamp(2.5rem,6vw,4.5rem)] leading-none mb-4 reveal">
          Before &amp; After: The Transformation
        </h2>
        <p className="font-light text-white/55 text-base leading-relaxed max-w-[560px] mb-12 reveal">
          Portion-IQ doesn&apos;t patch problems. It transforms how your restaurant operates at its core.
        </p>

        {/* Before / After columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 reveal">
          {/* BEFORE */}
          <Card className="bg-red/5 border-red/20 overflow-hidden shadow-none rounded-lg flex flex-col">
            <CardHeader className="p-5 px-7 bg-red/15 border-b border-red/30">
              <span className="font-bebas text-lg tracking-widest text-red">
                ✕ &nbsp;BEFORE — The Chaos
              </span>
            </CardHeader>
            <CardContent className="p-0">
              {TRANSFORMATION_DATA.before.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 px-6 py-3.5 border-b border-white/5 text-[0.88rem] text-white/60 font-light"
                >
                  <span className="text-red font-bold w-4.5 text-center shrink-0">✕</span>
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* AFTER */}
          <Card className="bg-sage/5 border-sage/20 overflow-hidden shadow-none rounded-lg flex flex-col">
            <CardHeader className="p-5 px-7 bg-sage/15 border-b border-sage/30">
              <span className="font-bebas text-lg tracking-widest text-sage">
                ✓ &nbsp;AFTER — Recipe Precision
              </span>
            </CardHeader>
            <CardContent className="p-0">
              {TRANSFORMATION_DATA.after.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 px-6 py-3.5 border-b border-white/5 text-[0.88rem] text-sage-light/75 font-light"
                >
                  <span className="text-sage font-bold w-4.5 text-center shrink-0">✓</span>
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Tagline */}
        <Card className="bg-white/5 border-sage/20 p-10 reveal text-center shadow-none rounded-lg">
          <CardContent className="p-0">
            <p className="font-playfair italic text-[clamp(1.2rem,2.5vw,1.8rem)] text-white/85 tracking-tight border-none outline-none">
              &ldquo;Restaurants don&apos;t{" "}
              <em className="not-italic text-white/40">&lsquo;improve.&rsquo;</em>{" "}
              They{" "}
              <span className="text-sage not-italic font-bold">transform.</span>&rdquo;
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
