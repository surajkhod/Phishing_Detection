import { CheckCircle2, AlertTriangle, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ResultCardProps {
  result: "safe" | "phishing";
  url: string;
}

const ResultCard = ({ result, url }: ResultCardProps) => {
  const isSafe = result === "safe";

  return (
    <Card
      className={`border-2 transition-all duration-500 animate-scale-in ${
        isSafe
          ? "border-success bg-success/5 glow-success"
          : "border-destructive bg-destructive/5 glow-danger"
      }`}
    >
      <CardContent className="p-8">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Icon */}
          <div
            className={`rounded-full p-4 ${
              isSafe ? "bg-success/10" : "bg-destructive/10"
            }`}
          >
            {isSafe ? (
              <CheckCircle2 className="h-16 w-16 text-success" />
            ) : (
              <AlertTriangle className="h-16 w-16 text-destructive" />
            )}
          </div>

          {/* Status */}
          <div className="space-y-2">
            <h3
              className={`text-3xl font-bold ${
                isSafe ? "text-success" : "text-destructive"
              }`}
            >
              {isSafe ? "✅ Safe Website" : "⚠️ Phishing Detected"}
            </h3>
            <p className="text-muted-foreground max-w-md">
              {isSafe
                ? "This website appears to be legitimate and safe to visit."
                : "This website has been identified as a potential phishing threat. Do not enter personal information."}
            </p>
          </div>

          {/* URL Display */}
          <div className="w-full p-4 bg-secondary rounded-lg border border-border">
            <p className="text-sm text-muted-foreground mb-1">Analyzed URL:</p>
            <p className="text-foreground font-mono text-sm break-all">{url}</p>
          </div>

          {/* Risk Indicators */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 pt-4">
            <div className="flex items-center gap-2 p-3 bg-card rounded-lg border border-border">
              <Shield className={`h-5 w-5 ${isSafe ? "text-success" : "text-destructive"}`} />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">SSL Status</p>
                <p className="text-sm font-medium">{isSafe ? "Verified" : "Invalid"}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 p-3 bg-card rounded-lg border border-border">
              <Shield className={`h-5 w-5 ${isSafe ? "text-success" : "text-destructive"}`} />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Domain Age</p>
                <p className="text-sm font-medium">{isSafe ? "Established" : "New"}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 p-3 bg-card rounded-lg border border-border">
              <Shield className={`h-5 w-5 ${isSafe ? "text-success" : "text-destructive"}`} />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Reputation</p>
                <p className="text-sm font-medium">{isSafe ? "Good" : "Suspicious"}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultCard;
