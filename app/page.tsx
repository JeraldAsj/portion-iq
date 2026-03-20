import { GSAPAnimations, ThreeCanvas } from "@/components/animations";
import { AIDiagnosisSection, LossCalculator } from "@/components/interactive";
import { Footer, Nav } from "@/components/layout";
import {
  BeforeAfterSection,
  CTASection,
  HeroSection,
  MunicipalitySection,
  OperateBlindSection,
  PillarsSection,
  ProblemSection,
  StatsSection,
  TeamSection,
  TickerSection,
  TransformationSection,
  WhySection,
} from "@/components/sections";

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
