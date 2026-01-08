import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Executive",
    credits: 5,
    price: "₹5,900",
    validity: "Per Annum",
    features: [
      "Daily Update For Industrial Solution",
      "Project Report Download (Soft Copy)",
      "Resume Builder",
      "Live Support (Email/WhatsApp)",
      "View Expert Details (10 Expert)",
    ],
    popular: false,
  },
  {
    name: "Enterprise",
    credits: 25,
    price: "₹23,600",
    validity: "Per Annum",
    features: [
      "All Associate Features",
      "Access to Industrial Course Materials",
      "Priority Live Support",
      "Practically Verified Supplier Connect",
      "Industrial Machinery/Equipment Connect",
      "Tender Update",
    ],
    popular: true,
  },
  {
    name: "Corporate",
    credits: 50,
    price: "₹59,000",
    validity: "Per Annum",
    features: [
      "All Enterprise Features",
      "Industrial Documentaries Access",
      "Industrial Research Access",
      "Government Scheme Identification",
      "Industrial Expert Q&A",
      "All In One Combo Course Access",
    ],
    popular: false,
  },
];

const PricingPreview = () => {
  return (
    <section className="py-16 lg:py-24 gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wide">
            Membership Plans
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-2">
            Membership at a Glance
          </h2>
          <p className="text-primary-foreground/80 mt-3 max-w-2xl mx-auto">
            Choose the membership plan that fits your business needs. 
            Get access to project reports, expert guidance, and more.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl ${
                plan.popular 
                  ? "bg-card shadow-xl scale-105 border-2 border-primary" 
                  : "bg-card/90 shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    <Star className="h-4 w-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-heading text-xl font-bold text-foreground">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-heading font-bold text-primary">{plan.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.validity}
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/10 flex items-center justify-center mt-0.5">
                      <Check className="h-3 w-3 text-success" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                asChild 
                variant={plan.popular ? "default" : "outline"} 
                className="w-full"
              >
                <Link to="/pricing">Get Started</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 text-primary-foreground font-semibold hover:gap-3 transition-all"
          >
            View All Plans & Features
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
