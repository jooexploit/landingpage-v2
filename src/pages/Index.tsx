
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ProductivitySection } from "@/components/ProductivitySection";
import { LearningLogSection } from "@/components/LearningLogSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <HeroSection />
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="productivity">
          <ProductivitySection />
        </div>
        <div id="timeline">
          <LearningLogSection />
        </div>
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
