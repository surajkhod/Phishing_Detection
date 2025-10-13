import { Brain, Target, Zap, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Advanced algorithms trained on millions of URLs to detect phishing patterns",
  },
  {
    icon: Target,
    title: "99.2% Accuracy",
    description: "High precision detection with minimal false positives using ensemble methods",
  },
  {
    icon: Zap,
    title: "Real-time Analysis",
    description: "Instant results with sub-second response time for immediate protection",
  },
  {
    icon: Database,
    title: "30+ Features",
    description: "Analyzes URL structure, domain age, SSL certificates, and more",
  },
];

const ModelInfoSection = () => {
  return (
    <section id="model" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our ML model analyzes multiple website characteristics to provide accurate 
              phishing detection using state-of-the-art technology
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border bg-card hover:border-primary/50 transition-all duration-300 hover:translate-y-[-4px] hover:glow-primary"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Model Features List */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Key Detection Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "URL Structure Analysis",
                "Domain Registration Info",
                "SSL Certificate Validation",
                "Page Content Inspection",
                "Redirect Chain Analysis",
                "DNS Record Verification",
                "Blacklist Cross-referencing",
                "Brand Impersonation Detection",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelInfoSection;
