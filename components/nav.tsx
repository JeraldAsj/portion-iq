import Link from "next/link";

export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between"
      style={{
        padding: "18px 5%",
        background: "rgba(15,30,51,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="font-bebas text-[1.8rem] tracking-[0.08em] text-white">
        P<span className="text-[#5A7A52]">◎</span>RTION IQ
      </div>
      <Link href="#ai" className="btn-primary" style={{ padding: "10px 24px", fontSize: "0.82rem", letterSpacing: "0.1em" }}>
        Free Profit Diagnosis
      </Link>
    </nav>
  );
}
