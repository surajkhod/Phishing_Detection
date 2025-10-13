import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DetectionSection from "@/components/DetectionSection";
import ModelInfoSection from "@/components/ModelInfoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <DetectionSection />
        <ModelInfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
