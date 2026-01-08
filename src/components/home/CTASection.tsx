import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Headphones } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Customer Support Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-primary p-8 md:p-10">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-xl bg-primary-foreground/10">
                <Headphones className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-heading text-2xl font-bold text-primary-foreground">
                  Customer Support
                </h3>
                <p className="text-primary-foreground/80 mt-1">
                  We are available 24X7 for grievance redressal
                </p>
              </div>
            </div>
            <Button asChild variant="hero-outline" size="lg">
              <Link to="/contact">
                Reach Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Main CTA */}
        <div className="relative overflow-hidden rounded-2xl bg-secondary p-8 md:p-12 lg:p-16 mt-8">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-foreground rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground">
                Ready to Start Your Business Journey?
              </h2>
              <p className="text-lg text-secondary-foreground/80 mt-3 max-w-xl">
                Join thousands of entrepreneurs who have successfully started their 
                businesses with our comprehensive project reports.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/project-reports">
                  <FileText className="h-5 w-5" />
                  Explore Reports
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/pricing">
                  View Pricing
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
