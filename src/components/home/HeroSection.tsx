import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Users, Video, CheckCircle } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { value: "1200+", label: "Project Reports" },
    { value: "50+", label: "Industries" },
    { value: "10K+", label: "Happy Entrepreneurs" },
  ];

  const features = [
    "Detailed Business Plans",
    "Expert Industry Insights",
    "Supplier Connections",
  ];

  return (
    <section className="relative overflow-hidden gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-medium">India's Leading Business Report Platform</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Start Your Business With{" "}
              <span className="text-secondary">Expert Guidance</span>
            </h1>

            <p className="text-lg text-primary-foreground/80 max-w-xl">
              Access comprehensive project reports, expert talks, courses, and supplier 
              connections—all in one platform. Make informed decisions with our 
              credit-based subscription system.
            </p>

            {/* Feature List */}
            <div className="flex flex-wrap gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/project-reports">
                  Explore Project Reports
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/pricing">View Pricing Plans</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="relative animate-slide-in-right">
            <div className="grid grid-cols-2 gap-4">
              {/* Main Card */}
              <div className="col-span-2 p-6 rounded-2xl bg-card shadow-xl animate-float">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">Project Reports</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Detailed business plans with market analysis, financials, and implementation guides.
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <span className="px-2 py-1 text-xs font-medium rounded bg-secondary/10 text-secondary">
                        1 Credit/Report
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expert Talks Card */}
              <div className="p-5 rounded-2xl bg-card shadow-lg" style={{ animationDelay: "0.2s" }}>
                <div className="p-3 rounded-xl bg-info/10 w-fit mb-3">
                  <Video className="h-6 w-6 text-info" />
                </div>
                <h4 className="font-semibold text-foreground">Expert Talks</h4>
                <p className="text-xs text-muted-foreground mt-1">Industry insights from experts</p>
              </div>

              {/* Supplier Connect Card */}
              <div className="p-5 rounded-2xl bg-card shadow-lg" style={{ animationDelay: "0.4s" }}>
                <div className="p-3 rounded-xl bg-success/10 w-fit mb-3">
                  <Users className="h-6 w-6 text-success" />
                </div>
                <h4 className="font-semibold text-foreground">Supplier Connect</h4>
                <p className="text-xs text-muted-foreground mt-1">Connect with verified suppliers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
