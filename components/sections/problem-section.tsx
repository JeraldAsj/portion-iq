import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { PROBLEMS_DATA, HIDDEN_LOSS_MATH, RECOVERABLE_PROFIT } from "@/lib/constants";

export default function ProblemSection() {
  return (
    <section id="problem" className="bg-[#1A2B45] py-[100px] px-[5%] text-white">
      <div className="max-w-[1100px] mx-auto">
        <Badge variant="loss" className="mb-4 tracking-[0.3em] font-bold text-red uppercase bg-red/10 border-red/20 px-3 py-1">
          The Real Problem
        </Badge>
        <h2 className="font-bebas text-[clamp(2.5rem,6vw,4.5rem)] leading-none mb-4 reveal text-white">
          The Real Reason Your Restaurant<br />Isn&apos;t As Profitable As It Should Be
        </h2>
        <p className="font-light text-white/55 text-base leading-relaxed max-w-[560px] mb-14 reveal">
          It&apos;s NOT your sales volume. NOT your marketing. NOT your staff count. The answer is far more specific — and far more fixable.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Problem list */}
          <ul className="space-y-3 list-none">
            {PROBLEMS_DATA.map((p) => (
              <li key={p.num} className="problem-item reveal flex gap-4">
                <span className="font-bebas shrink-0 inline-flex items-center justify-center w-9 h-9 bg-sage/15 border border-sage/30 rounded-lg text-sage text-[0.85rem] tracking-wider mt-0.5">
                  {p.num}
                </span>
                <div>
                  <strong className="block font-semibold text-[0.95rem] mb-1 text-white">{p.title}</strong>
                  <span className="text-[0.82rem] text-white/50 font-light leading-relaxed">{p.desc}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* Loss math boxes */}
          <div className="flex flex-col gap-6 w-full">
            {/* Box 1 — Red */}
            <Card className="bg-red/5 border-red/25 border p-8 reveal shadow-none rounded-lg text-white">
              <h4 className="text-[0.72rem] font-bold tracking-[0.2em] uppercase text-red mb-5 border-none outline-none">
                The Hidden Loss Math — Real Example
              </h4>
              <div className="space-y-1">
                {HIDDEN_LOSS_MATH.map((r) => (
                  <div key={r.label} className="flex justify-between py-2.5 border-b border-white/5 text-[0.88rem]">
                    <span className="text-white/65">{r.label}</span>
                    <span className={r.red ? "text-red font-bold" : "text-white font-bold"}>{r.val}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-red/15 rounded-lg p-5 text-center">
                <span className="font-bebas text-[2.8rem] text-red tracking-widest leading-none block border-none outline-none">AED 48,600</span>
                <p className="text-white/40 text-[0.78rem] mt-1 leading-normal italic border-none outline-none">lost every year — from one dish, one ingredient, 20 grams.</p>
              </div>
            </Card>

            {/* Box 2 — Sage */}
            <Card className="bg-sage/5 border-sage/25 border p-8 reveal shadow-none rounded-lg text-white">
              <h4 className="text-[0.72rem] font-bold tracking-[0.2em] uppercase text-sage mb-5 border-none outline-none">
                Now Multiply That Across Your Menu
              </h4>
              <div className="space-y-1">
                {RECOVERABLE_PROFIT.map((r,i,arr) => (
                  <div key={r.label} className={i === arr.length - 1 ? "flex justify-between py-3 pt-4 text-[0.88rem]" : "flex justify-between py-2.5 border-b border-white/5 text-[0.88rem]"}>
                    <span className={i === arr.length - 1 ? "text-white font-bold" : "text-white/65"}>{r.label}</span>
                    <span className={r.red ? "text-red font-bold" : "text-sage font-bold"}>{r.val}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
