import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    credits: 5,
    price: "₹999",
    perCredit: "₹200",
    features: [
      "5 Project Reports",
      "Basic Expert Talks",
      "Email Support",
      "30 Days Validity",
    ],
    popular: false,
  },
  {
    name: "Professional",
    credits: 15,
    price: "₹2,499",
    perCredit: "₹167",
    features: [
      "15 Project Reports",
      "All Expert Talks",
      "Course Access",
      "Supplier Connect",
      "Priority Support",
      "90 Days Validity",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    credits: 50,
    price: "₹6,999",
    perCredit: "₹140",
    features: [
      "50 Project Reports",
      "Unlimited Expert Talks",
      "All Courses & Workshops",
      "Premium Supplier Connect",
      "1-on-1 Coaching Session",
      "Dedicated Support",
      "1 Year Validity",
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
          <span className="text-sm font-semibold text-secondary uppercase tracking-wide">
            Simple Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-2">
            Choose Your Credit Pack
          </h2>
          <p className="text-primary-foreground/80 mt-3 max-w-2xl mx-auto">
            Pay only for what you need. Each credit gives you access to one 
            project report and related content.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl ${
                plan.popular 
                  ? "bg-card shadow-xl scale-105 border-2 border-secondary" 
                  : "bg-card/90 shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold">
                    <Star className="h-4 w-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.credits} Credits • {plan.perCredit}/credit
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                      <Check className="h-3 w-3 text-success" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                asChild 
                variant={plan.popular ? "secondary" : "outline"} 
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
