import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Loader2 } from "lucide-react";
import ResultCard from "./ResultCard";

type ResultType = "safe" | "phishing" | null;

const DetectionSection = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ResultType>(null);

  const handleCheck = () => {
    if (!url.trim()) return;
    
    setIsLoading(true);
    setResult(null);
    
    // Simulate ML model processing
    setTimeout(() => {
      // Mock result - randomly assign for demo
      const mockResult = Math.random() > 0.5 ? "safe" : "phishing";
      setResult(mockResult as ResultType);
      setIsLoading(false);
    }, 2500);
  };

  return (
    <section id="check" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-4xl font-bold">Check Website Safety</h2>
            <p className="text-muted-foreground">
              Enter any website URL to analyze its security status
            </p>
          </div>

          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-8 space-y-6 backdrop-blur-sm">
              {/* URL Input */}
              <div className="space-y-3">
                <label htmlFor="url-input" className="text-sm font-medium block">
                  Website URL
                </label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="url-input"
                    type="url"
                    placeholder="https://example.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="pl-12 h-14 text-lg bg-secondary border-border focus:border-primary transition-colors"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Check Button */}
              <Button
                onClick={handleCheck}
                disabled={!url.trim() || isLoading}
                size="lg"
                className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 glow-primary transition-all"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-5 w-5" />
                    Check Website
                  </>
                )}
              </Button>

              {/* Loading Animation */}
              {isLoading && (
                <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent animate-scan" />
                </div>
              )}
            </div>
          </div>

          {/* Result Card */}
          {result && <ResultCard result={result} url={url} />}
        </div>
      </div>
    </section>
  );
};

export default DetectionSection;
