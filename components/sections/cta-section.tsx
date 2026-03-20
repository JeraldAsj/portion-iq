import Link from "next/link";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export default function CTASection() {
  return (
    <section
      className="relative text-center overflow-hidden"
      style={{ background: "#0F1E33", padding: "120px 5%" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(90,122,82,0.12) 0%, transparent 70%)" }}
      />
      <div className="relative z-10 max-w-[700px] mx-auto">
        <Badge
          variant="cta"
          className="mb-8 border-[rgba(212,168,67,0.3)] bg-[rgba(212,168,67,0.1)] text-[#D4A843] rounded-[2px] px-5 py-2"
        >
          Free 7-Day Profit Diagnosis — Valued AED 1,500
        </Badge>

        <h2 className="font-bebas reveal" style={{ fontSize: "clamp(2.5rem,7vw,5rem)", letterSpacing: "0.02em", lineHeight: 1, marginBottom: "1rem" }}>
          Book Your<br />Profit Diagnosis<br />
          <span style={{ color: "#5A7A52" }}>Now</span>
        </h2>

        <p className="reveal font-light" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "2.5rem" }}>
          You get a full report showing exactly where your kitchen is losing money and how to fix it — across your top 20 menu items, procurement structure, portion inconsistencies, wastage points, and inventory risks.
        </p>

        <Button asChild variant="cta" className="text-base px-12 py-5 h-auto">
          <Link href="#ai">
            Book Free Diagnosis →
          </Link>
        </Button>

        <p className="reveal" style={{ marginTop: "2rem", fontSize: "0.82rem", color: "rgba(255,255,255,0.4)", fontStyle: "italic" }}>
          If we find less than <strong style={{ color: "#5A7A52", fontStyle: "normal" }}>AED 10,000 in annual losses</strong>, you pay nothing. We walk away.
        </p>
      </div>
    </section>
  );
}
