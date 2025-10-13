import { Shield, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const teamMembers = [
    "Aarav Sharma",
    "Priya Patel", 
    "Rohan Desai",
    "Ananya Singh"
  ];

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Shield className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">PhishGuard</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Advanced AI-powered phishing detection system protecting users from online threats.
              </p>
            </div>

            {/* Team */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Team Members</h3>
              <ul className="space-y-2">
                {teamMembers.map((member, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {member}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <p>
                © 2025 PhishGuard. Developed at{" "}
                <span className="text-primary font-medium">
                  Vishwakarma Institute of Information Technology, Pune
                </span>
              </p>
              <p>Academic Project • Final Year 2025</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
