"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

export default function LossCalculator() {
  const [plates, setPlates] = useState("150");
  const [grams,  setGrams]  = useState("20");
  const [cost,   setCost]   = useState("45");
  const [items,  setItems]  = useState("8");
  const [result, setResult] = useState<{day:string;month:string;year:string;items:string}|null>(null);

  const fmt = (n: number) => n >= 1000 ? (n / 1000).toFixed(1) + "K" : Math.round(n).toString();

  const calc = () => {
    const p = parseFloat(plates)||0, g = parseFloat(grams)||0,
          c = parseFloat(cost)||0,   it = parseFloat(items)||0;
    const day = (g/1000)*c*p*it;
    setResult({ day: fmt(day), month: fmt(day*30), year: fmt(day*365), items: it.toString() });
  };

  return (
    <section className="bg-navy2 py-[100px] px-[5%]">
      <div className="max-w-[700px] mx-auto text-center">
        <Badge variant="loss" className="mb-4 tracking-[0.3em] font-semibold text-red uppercase bg-red/10 border-red/20">
          Hidden Loss Calculator
        </Badge>
        <h2 className="font-bebas text-white text-[clamp(2.5rem,6vw,4.5rem)] leading-none mb-4 reveal">
          How Much Is Your<br />Kitchen Leaking?
        </h2>
        <p className="font-light text-white/50 text-sm mb-10 reveal">
          Enter your numbers — see the real cost of doing nothing.
        </p>

        <Card className="bg-white/5 border-white/10 p-10 reveal text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {[
              { id: "plates", label: "Daily plates served",          val: plates, set: setPlates, ph: "150" },
              { id: "grams",  label: "Average over-portion (grams)", val: grams,  set: setGrams,  ph: "20"  },
              { id: "cost",   label: "Ingredient cost per kg (AED)", val: cost,   set: setCost,   ph: "45"  },
              { id: "items",  label: "Menu items affected",          val: items,  set: setItems,  ph: "8"   },
            ].map((f) => (
              <div key={f.id} className="space-y-2">
                <Label htmlFor={f.id} className="text-[0.72rem] tracking-[0.2em] uppercase text-mid font-semibold">
                  {f.label}
                </Label>
                <Input
                  id={f.id}
                  type="number"
                  value={f.val}
                  placeholder={f.ph}
                  onChange={(e) => f.set(e.target.value)}
                  className="bg-white/5 border-white/15 text-white text-base py-6 focus:ring-sage/30"
                />
              </div>
            ))}
          </div>

          <Button
            onClick={calc}
            variant="cta"
            className="w-full py-7 text-[0.9rem] font-bold tracking-widest uppercase h-auto"
          >
            Calculate My Hidden Losses
          </Button>

          {result && (
            <div className="mt-8 bg-red/10 border border-red/25 rounded-lg p-8">
              <div className="text-[0.78rem] tracking-[0.2em] uppercase text-red font-semibold mb-6 text-center">
                Your Kitchen Is Losing:
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: result.day,   lbl: "Per Day (AED)",  red: true  },
                  { num: result.month, lbl: "Per Month (AED)", red: true  },
                  { num: result.year,  lbl: "Per Year (AED)",  red: true  },
                  { num: result.items, lbl: "Items Affected",  red: false },
                ].map((r) => (
                  <div key={r.lbl} className="text-center">
                    <div className={cn(
                      "font-bebas text-[2.5rem] tracking-wider leading-none mb-1",
                      r.red ? "text-red" : "text-sage"
                    )}>
                      {r.num}
                    </div>
                    <div className="text-[0.7rem] tracking-widest uppercase text-mid font-medium">
                      {r.lbl}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[0.8rem] text-white/40 mt-6 text-center leading-relaxed">
                This is just from over-portioning. Wastage, procurement leaks and wrong pricing multiply this further.
              </p>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}
