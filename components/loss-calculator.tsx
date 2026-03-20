"use client";

import { useState } from "react";

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

  const fieldStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "4px",
    color: "white",
    fontFamily: "'Inter', sans-serif",
    fontSize: "1rem",
    padding: "12px 14px",
    outline: "none",
  };

  return (
    <section style={{ background: "#0A1828", padding: "100px 5%" }}>
      <div className="max-w-[700px] mx-auto text-center">
        <div className="reveal" style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 600, color: "#C0392B", marginBottom: "0.8rem" }}>
          Hidden Loss Calculator
        </div>
        <h2 className="font-bebas reveal" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", letterSpacing: "0.02em", lineHeight: 1, marginBottom: "1rem", color: "white" }}>
          How Much Is Your<br />Kitchen Leaking?
        </h2>
        <p className="reveal font-light" style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", marginBottom: "2rem" }}>
          Enter your numbers — see the real cost of doing nothing.
        </p>

        <div
          className="reveal text-left"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", padding: "2.5rem" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {[
              { label: "Daily plates served",          val: plates, set: setPlates, ph: "150" },
              { label: "Average over-portion (grams)", val: grams,  set: setGrams,  ph: "20"  },
              { label: "Ingredient cost per kg (AED)", val: cost,   set: setCost,   ph: "45"  },
              { label: "Menu items affected",          val: items,  set: setItems,  ph: "8"   },
            ].map((f) => (
              <div key={f.label}>
                <label style={{ display: "block", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8FA3B1", marginBottom: "0.5rem", fontWeight: 600 }}>
                  {f.label}
                </label>
                <input
                  type="number"
                  value={f.val}
                  placeholder={f.ph}
                  onChange={(e) => f.set(e.target.value)}
                  style={fieldStyle}
                />
              </div>
            ))}
          </div>

          <button
            onClick={calc}
            style={{
              width: "100%",
              background: "linear-gradient(135deg,#3D5C35,#5A7A52)",
              color: "white",
              border: "none",
              borderRadius: "4px",
              padding: "16px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Calculate My Hidden Losses
          </button>

          {result && (
            <div
              style={{ marginTop: "2rem", background: "rgba(192,57,43,0.08)", border: "1px solid rgba(192,57,43,0.25)", borderRadius: "8px", padding: "1.5rem" }}
            >
              <div style={{ fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C0392B", fontWeight: 600, marginBottom: "1rem" }}>
                Your Kitchen Is Losing:
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: result.day,   lbl: "Per Day (AED)",  red: true  },
                  { num: result.month, lbl: "Per Month (AED)", red: true  },
                  { num: result.year,  lbl: "Per Year (AED)",  red: true  },
                  { num: result.items, lbl: "Items Affected",  red: false },
                ].map((r) => (
                  <div key={r.lbl} className="text-center">
                    <div className="font-bebas" style={{ fontSize: "2.2rem", color: r.red ? "#C0392B" : "#5A7A52", letterSpacing: "0.05em" }}>{r.num}</div>
                    <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8FA3B1" }}>{r.lbl}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", marginTop: "1rem", textAlign: "center" }}>
                This is just from over-portioning. Wastage, procurement leaks and wrong pricing multiply this further.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
