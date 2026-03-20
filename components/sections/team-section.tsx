import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { EXPERTISE_TEAM } from "@/lib/constants";

export default function TeamSection() {
  return (
    <section id="team" className="bg-[#1A2B45] py-[100px] px-[5%]">
      <div className="max-w-[1100px] mx-auto">
        <Badge variant="hero" className="mb-4 tracking-[0.3em] font-bold text-sage uppercase bg-sage/10 border-sage/20">
          The Team
        </Badge>
        <h2 className="font-bebas text-white text-[clamp(2.5rem,6vw,4.5rem)] leading-none mb-4 reveal">
          Our Team
        </h2>
        <p className="font-light text-white/55 text-base leading-[1.75] max-w-[540px] mb-12 reveal">
          A combined force of specialists who have built kitchen systems for restaurants serving millions of meals per year.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10 reveal text-white">
          {EXPERTISE_TEAM.map(({ icon, label }) => (
            <Card 
              key={icon} 
              className="group transition-all duration-300 text-center bg-white/5 border-white/10 p-6 cursor-default hover:border-sage/40 hover:-translate-y-1.5 shadow-none rounded-lg"
            >
              <CardContent className="p-0">
                <span className="font-bebas flex items-center justify-center mx-auto mb-4 w-12 h-12 bg-sage/15 border border-sage/30 rounded-lg text-sage text-[0.85rem] tracking-wider transition-colors group-hover:bg-sage/25">
                  {icon}
                </span>
                <h4 className="text-[0.78rem] font-semibold text-white leading-tight">{label}</h4>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-sage/5 border-sage/20 p-10 reveal text-center shadow-none rounded-lg mb-6">
          <CardContent className="p-0">
            <p className="font-playfair italic text-[clamp(1rem,2vw,1.25rem)] text-white/65 mb-4 leading-relaxed outline-none border-none">
              &ldquo;This team has built systems for restaurants serving millions of meals per year.
              The operational depth we bring is not available anywhere else in the UAE market.&rdquo;
            </p>
            <strong className="text-sage text-[0.95rem] font-bold tracking-wide">— The Portion-IQ Team</strong>
          </CardContent>
        </Card>

        <p className="text-center font-playfair italic text-[clamp(1rem,2vw,1.3rem)] text-white/40 p-4 reveal">
          &ldquo;You are not hiring people. You are hiring a{" "}
          <strong className="text-sage font-bold font-serif not-italic">profit engine.</strong>&rdquo;
        </p>
      </div>
    </section>
  );
}
