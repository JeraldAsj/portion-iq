// Static server components
import Nav from "@/components/nav";
import HeroSection from "@/components/hero-section";
import TickerSection from "@/components/ticker-section";
import StatsSection from "@/components/stats-section";
import ProblemSection from "@/components/problem-section";
import BeforeAfterSection from "@/components/before-after-section";
import OperateBlindSection from "@/components/operate-blind-section";
import PillarsSection from "@/components/pillars-section";
import TransformationSection from "@/components/transformation-section";
import WhySection from "@/components/why-section";
import MunicipalitySection from "@/components/municipality-section";
import TeamSection from "@/components/team-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

// Client-only dynamic (wrapped in client component for Next.js 15 compat)
import {
  ThreeCanvas,
  GSAPAnimations,
} from "@/components/client-wrappers";
import LossCalculator from "@/components/loss-calculator";
import AIDiagnosisSection from "@/components/ai-diagnosis-section";

export default function Home() {
  return (
    <>
      <ThreeCanvas />
      <GSAPAnimations />

      <Nav />
      <main className="relative z-[1]">
        <HeroSection />
        <TickerSection />
        <StatsSection />
        <ProblemSection />
        <BeforeAfterSection />
        <OperateBlindSection />
        <PillarsSection />
        <TransformationSection />
        <WhySection />
        <MunicipalitySection />
        <TeamSection />
        <LossCalculator />
        <AIDiagnosisSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
