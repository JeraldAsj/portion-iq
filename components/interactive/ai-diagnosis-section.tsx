"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import {
  RESTAURANT_TYPES,
  REVENUE_RANGES,
} from "@/lib/constants";

interface DiagnosisResult {
  before_summary: string;
  after_summary: string;
  projected_monthly_savings: string;
  full_diagnosis: string;
}

export default function AIDiagnosisSection() {
  const [desc,    setDesc]    = useState("");
  const [rType,   setRType]   = useState(RESTAURANT_TYPES[0]);
  const [revenue, setRevenue] = useState(REVENUE_RANGES[1]);
  const [loading, setLoading] = useState(false);
  const [result,  setResult]  = useState<DiagnosisResult|null>(null);
  const [error,   setError]   = useState("");

  const run = async () => {
    if (!desc.trim()) { setError("Please describe your restaurant first."); return; }
    setError(""); setLoading(true); setResult(null);

    const prompt = `You are a senior consultant at Portion-IQ — the UAE's first restaurant costing and menu control system. You specialize in identifying hidden profit leaks in restaurant operations.

A ${rType} with monthly revenue ${revenue} has described their operation:
"${desc}"

Respond ONLY in valid JSON — no markdown, no backticks:
{
  "before_summary": "2-3 sentences describing the current operational problems this restaurant is facing — be specific to what they described, paint a vivid picture of the chaos and losses",
  "after_summary": "2-3 sentences describing what their operation will look like after Portion-IQ — specific improvements tied to their situation",
  "projected_monthly_savings": "e.g. AED 8,000 – 14,000/month",
  "full_diagnosis": "Write 5-7 sentences as a senior Portion-IQ consultant. Cover: (1) the top 3 specific operational failures you've identified from their description, (2) which of the 3 Portion-IQ pillars would have the biggest impact for them and why, (3) their likely Municipality rating risk, (4) one surprising hidden loss most owners in their situation miss, (5) the ROI timeline they should expect"
}`;

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: prompt }],
        }),
      });
      const data = await res.json();
      const text = data.content.map((b: {text?:string}) => b.text || "").join("");
      const clean = text.replace(/```json|```/g, "").trim();
      setResult(JSON.parse(clean));
    } catch {
      setError("Connect your Anthropic API key to enable live AI diagnosis.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai" className="bg-navy2 py-[100px] px-[5%]">
      <div className="max-w-[950px] mx-auto">
        <Badge variant="hero" className="mb-3 tracking-[0.3em] font-semibold text-gold bg-gold/10 border-gold/20">
          Powered by Anthropic Claude AI
        </Badge>
        <h2 className="font-bebas text-white text-[clamp(2.5rem,6vw,4.5rem)] leading-none mb-4 reveal">
          Get Your Free<br />Profit Diagnosis
        </h2>
        <p className="font-light text-white/55 text-base leading-[1.75] max-w-[540px] mb-10 reveal">
          Describe your restaurant and let Claude analyze your operation — identifying exactly where money is leaving your kitchen.
        </p>

        <div className="bg-white/5 border border-gold/20 rounded-xl overflow-hidden reveal">
          {/* Panel header */}
          <div className="bg-gold/10 border-b border-gold/15 py-5 px-8 flex items-center gap-3">
            {["#FF5F57","#FFBD2E","#28CA41"].map((c) => (
              <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
            ))}
            <span className="text-[0.78rem] tracking-[0.15em] uppercase text-white/50 ml-2">
              Portion-IQ AI Profit Analyzer — Powered by Claude
            </span>
          </div>

          <div className="p-10">
            {/* Description textarea */}
            <div className="space-y-2 mb-5">
              <Label className="text-[0.72rem] tracking-[0.2em] uppercase text-gold font-semibold">
                Describe your restaurant operation
              </Label>
              <Textarea
                rows={4}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="e.g. We run a Lebanese restaurant in Dubai with 12 staff, serve around 120 covers/day. Our chefs have no recipe cards, we order from suppliers without checking prices, monthly food cost is around 38% which feels too high..."
                className={cn(
                  "bg-white/5 border-gold/20 text-white text-sm py-4 px-5 focus:ring-gold/30",
                  error && "border-red"
                )}
              />
            </div>

            {/* Selects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <Label className="text-[0.72rem] tracking-[0.2em] uppercase text-gold font-semibold">
                  Restaurant Type
                </Label>
                <Select value={rType} onValueChange={setRType}>
                  <SelectTrigger className="bg-white/5 border-gold/20 text-white text-sm h-12 focus:ring-gold/30">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className="bg-navy border-gold/20 text-white">
                    {RESTAURANT_TYPES.map((o) => (
                      <SelectItem key={o} value={o} className="focus:bg-gold/10 focus:text-gold">
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-[0.72rem] tracking-[0.2em] uppercase text-gold font-semibold">
                  Monthly Revenue (AED)
                </Label>
                <Select value={revenue} onValueChange={setRevenue}>
                  <SelectTrigger className="bg-white/5 border-gold/20 text-white text-sm h-12 focus:ring-gold/30">
                    <SelectValue placeholder="Select revenue" />
                  </SelectTrigger>
                  <SelectContent className="bg-navy border-gold/20 text-white">
                    {REVENUE_RANGES.map((o) => (
                      <SelectItem key={o} value={o} className="focus:bg-gold/10 focus:text-gold">
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {error && <p className="text-red text-[0.85rem] mb-4">{error}</p>}

            {/* Run button */}
            <Button
              onClick={run}
              disabled={loading}
              variant="cta"
              className="w-full text-base py-7 h-auto"
            >
              {loading ? (
                <><div className="spinner mr-2" />Analyzing your kitchen...</>
              ) : (
                "🔍 Run My Profit Diagnosis"
              )}
            </Button>

            {/* Results */}
            {result && (
              <div className="mt-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Before */}
                  <div className="border border-white/10 rounded-lg overflow-hidden flex flex-col">
                    <div className="bg-red/15 text-red-light px-5 py-3.5 flex items-center gap-2.5 text-[0.68rem] tracking-[0.2em] uppercase font-semibold">
                      ⚠️ Current State — Before Portion-IQ
                    </div>
                    <div className="h-[100px] flex items-center justify-center text-[4rem] bg-black/25">🏚️</div>
                    <div className="p-5 text-[0.85rem] text-white/70 leading-[1.65] font-light flex-grow">
                      {result.before_summary}
                    </div>
                  </div>
                  {/* After */}
                  <div className="border border-white/10 rounded-lg overflow-hidden flex flex-col">
                    <div className="bg-sage/15 text-sage2 py-3.5 px-5 flex items-center gap-2.5 text-[0.68rem] tracking-[0.2em] uppercase font-semibold">
                      ✅ Elevated State — After Portion-IQ
                    </div>
                    <div className="h-[100px] flex items-center justify-center text-[4rem] bg-black/25">📈</div>
                    <div className="p-5 text-[0.85rem] text-white/70 leading-[1.65] font-light flex-grow">
                      {result.after_summary}
                      <div className="inline-block bg-sage/20 border border-sage/40 text-sage px-3.5 py-1.5 rounded-full text-[0.75rem] font-semibold mt-3">
                        💰 {result.projected_monthly_savings}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Full diagnosis */}
                <div className="bg-white/5 border border-gold/15 rounded-lg overflow-hidden">
                  <div className="bg-gold/10 border-b border-gold/10 px-6 py-4 text-[0.7rem] tracking-[0.2em] uppercase text-gold font-semibold">
                    🤖 Claude&apos;s Full Operational Diagnosis
                  </div>
                  <div className="p-6 text-[0.87rem] text-white/72 leading-[1.75] whitespace-pre-wrap font-light">
                    {result.full_diagnosis}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
