import { Shield, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative py-20 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 gradient-cyber opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">AI-Powered Protection</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Protect Yourself from
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse-glow">
              Phishing Attacks
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced machine learning technology to detect and prevent phishing websites in real-time. 
            Stay safe online with PhishGuard's intelligent threat detection.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
              <Shield className="h-5 w-5 text-accent" />
              <span className="text-sm">99.2% Accuracy</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm">Real-time Detection</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
