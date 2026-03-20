"use client";

import { useState } from "react";

interface DiagnosisResult {
  before_summary: string;
  after_summary: string;
  projected_monthly_savings: string;
  full_diagnosis: string;
}

export default function AIDiagnosisSection() {
  const [desc,    setDesc]    = useState("");
  const [rType,   setRType]   = useState("Lebanese / Arabic Restaurant");
  const [revenue, setRevenue] = useState("AED 50,000 – 150,000");
  const [loading, setLoading] = useState(false);
  const [result,  setResult]  = useState<DiagnosisResult|null>(null);
  const [error,   setError]   = useState("");

  const selectStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(212,168,67,0.2)",
    borderRadius: "6px",
    color: "white",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.88rem",
    padding: "12px 16px",
    outline: "none",
    appearance: "none" as const,
    cursor: "pointer",
  };

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
    <section id="ai" style={{ background: "#0F1E33", padding: "100px 5%" }}>
      <div className="max-w-[950px] mx-auto">
        <div className="reveal" style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 600, color: "#D4A843", marginBottom: "0.8rem" }}>
          Powered by Anthropic Claude AI
        </div>
        <h2 className="font-bebas reveal" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", letterSpacing: "0.02em", lineHeight: 1, marginBottom: "1rem", color: "white" }}>
          Get Your Free<br />Profit Diagnosis
        </h2>
        <p className="reveal font-light" style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.55)", maxWidth: "540px", marginBottom: "2.5rem" }}>
          Describe your restaurant and let Claude analyze your operation — identifying exactly where money is leaving your kitchen.
        </p>

        <div className="reveal" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,168,67,0.2)", borderRadius: "12px", overflow: "hidden" }}>
          {/* Panel header */}
          <div style={{ background: "rgba(212,168,67,0.08)", borderBottom: "1px solid rgba(212,168,67,0.15)", padding: "1.2rem 2rem", display: "flex", alignItems: "center", gap: "0.8rem" }}>
            {["#FF5F57","#FFBD2E","#28CA41"].map((c) => (
              <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
            ))}
            <span style={{ fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginLeft: "0.5rem" }}>
              Portion-IQ AI Profit Analyzer — Powered by Claude
            </span>
          </div>

          <div style={{ padding: "2.5rem" }}>
            {/* Description textarea */}
            <div style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4A843", fontWeight: 600, marginBottom: "0.5rem" }}>
              Describe your restaurant operation
            </div>
            <textarea
              rows={4}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="e.g. We run a Lebanese restaurant in Dubai with 12 staff, serve around 120 covers/day. Our chefs have no recipe cards, we order from suppliers without checking prices, monthly food cost is around 38% which feels too high..."
              style={{
                width: "100%",
                background: "rgba(255,255,255,0.05)",
                border: `1px solid ${error ? "#C0392B" : "rgba(212,168,67,0.2)"}`,
                borderRadius: "6px",
                color: "white",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                padding: "14px 18px",
                marginBottom: "1.2rem",
                outline: "none",
                resize: "vertical",
                lineHeight: 1.6,
              }}
            />

            {/* Selects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <div style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4A843", fontWeight: 600, marginBottom: "0.5rem" }}>
                  Restaurant Type
                </div>
                <select value={rType} onChange={e => setRType(e.target.value)} style={selectStyle}>
                  {["Lebanese / Arabic Restaurant","Indian / Pakistani Restaurant","Asian / Chinese Restaurant","Western / Continental","Café / Coffee Shop","Bakery / Pastry","Fast Casual / QSR","Hotel F&B Outlet","Catering Company"].map(o => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <div style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4A843", fontWeight: 600, marginBottom: "0.5rem" }}>
                  Monthly Revenue (AED)
                </div>
                <select value={revenue} onChange={e => setRevenue(e.target.value)} style={selectStyle}>
                  {["Under AED 50,000","AED 50,000 – 150,000","AED 150,000 – 400,000","AED 400,000 – 1,000,000","Over AED 1,000,000"].map(o => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
            </div>

            {error && <p style={{ color: "#E87264", fontSize: "0.85rem", marginBottom: "1rem" }}>{error}</p>}

            {/* Run button */}
            <button
              onClick={run}
              disabled={loading}
              style={{
                width: "100%",
                background: "linear-gradient(135deg,#1A2B45,#3D5C35)",
                border: "1px solid #D4A843",
                color: "#D4A843",
                borderRadius: "6px",
                padding: "16px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: loading ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.7rem",
                opacity: loading ? 0.7 : 1,
                transition: "all 0.3s",
              }}
            >
              {loading ? (
                <><div className="spinner" />Analyzing your kitchen...</>
              ) : (
                "🔍 Run My Profit Diagnosis"
              )}
            </button>

            {/* Results */}
            {result && (
              <div style={{ marginTop: "2rem" }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  {/* Before */}
                  <div style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", overflow: "hidden" }}>
                    <div style={{ padding: "0.9rem 1.2rem", display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, background: "rgba(192,57,43,0.15)", color: "#E87264" }}>
                      ⚠️ Current State — Before Portion-IQ
                    </div>
                    <div style={{ height: "100px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem", background: "rgba(0,0,0,0.25)" }}>🏚️</div>
                    <div style={{ padding: "1.2rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.65, fontWeight: 300 }}>
                      {result.before_summary}
                    </div>
                  </div>
                  {/* After */}
                  <div style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", overflow: "hidden" }}>
                    <div style={{ padding: "0.9rem 1.2rem", display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, background: "rgba(90,122,82,0.15)", color: "#8FBB7A" }}>
                      ✅ Elevated State — After Portion-IQ
                    </div>
                    <div style={{ height: "100px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem", background: "rgba(0,0,0,0.25)" }}>📈</div>
                    <div style={{ padding: "1.2rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.65, fontWeight: 300 }}>
                      {result.after_summary}
                      <div style={{ display: "inline-block", background: "rgba(90,122,82,0.2)", border: "1px solid rgba(90,122,82,0.4)", color: "#8FBB7A", padding: "5px 14px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 600, marginTop: "0.6rem" }}>
                        💰 {result.projected_monthly_savings}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Full diagnosis */}
                <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,168,67,0.15)", borderRadius: "8px", overflow: "hidden" }}>
                  <div style={{ padding: "0.9rem 1.5rem", background: "rgba(212,168,67,0.08)", borderBottom: "1px solid rgba(212,168,67,0.1)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4A843", fontWeight: 600 }}>
                    🤖 Claude&apos;s Full Operational Diagnosis
                  </div>
                  <div style={{ padding: "1.5rem", fontSize: "0.87rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.75, whiteSpace: "pre-wrap", fontWeight: 300 }}>
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
