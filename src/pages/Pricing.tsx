import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, Star, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "Starter",
    credits: 5,
    price: "₹999",
    perCredit: "₹200",
    validity: "30 Days",
    features: [
      { text: "5 Project Reports", included: true },
      { text: "Basic Expert Talks", included: true },
      { text: "Email Support", included: true },
      { text: "Course Access", included: false },
      { text: "Supplier Connect", included: false },
      { text: "Coaching Sessions", included: false },
    ],
    popular: false,
  },
  {
    name: "Professional",
    credits: 15,
    price: "₹2,499",
    perCredit: "₹167",
    validity: "90 Days",
    features: [
      { text: "15 Project Reports", included: true },
      { text: "All Expert Talks", included: true },
      { text: "Priority Support", included: true },
      { text: "Course Access", included: true },
      { text: "Supplier Connect", included: true },
      { text: "Coaching Sessions", included: false },
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    credits: 50,
    price: "₹6,999",
    perCredit: "₹140",
    validity: "1 Year",
    features: [
      { text: "50 Project Reports", included: true },
      { text: "Unlimited Expert Talks", included: true },
      { text: "Dedicated Support", included: true },
      { text: "All Courses & Workshops", included: true },
      { text: "Premium Supplier Connect", included: true },
      { text: "1-on-1 Coaching Session", included: true },
    ],
    popular: false,
  },
];

const faqs = [
  {
    question: "What is a credit and how does it work?",
    answer: "Credits are our currency for accessing content. 1 credit = 1 project report download. You can also use credits for premium expert talks and course enrollments. Credits don't expire until your subscription validity ends."
  },
  {
    question: "Can I upgrade my plan anytime?",
    answer: "Yes! You can upgrade your plan at any time. When you upgrade, your remaining credits will be added to the new plan's credits, and the validity will be extended accordingly."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit/debit cards, UPI, net banking, and popular wallets like Paytm, PhonePe, and Google Pay. All payments are secured with industry-standard encryption."
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes, we offer a 7-day money-back guarantee if you haven't used any credits. Once credits are used, partial refunds are available based on unused credits minus processing fees."
  },
  {
    question: "Can I share my account with others?",
    answer: "Each account is for individual use only. For team access, we offer special enterprise plans with multiple user seats. Contact our sales team for custom enterprise pricing."
  },
  {
    question: "How often is new content added?",
    answer: "We add new project reports and expert talks weekly. Our team continuously updates existing content to reflect current market conditions, regulations, and industry trends."
  },
];

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <section className="gradient-hero py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-primary-foreground/80 mt-3 max-w-2xl mx-auto">
            Choose the credit pack that fits your needs. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto -mt-32">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-2xl ${
                  plan.popular 
                    ? "bg-card shadow-xl scale-105 border-2 border-secondary z-10" 
                    : "bg-card shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold shadow-lg">
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
                  <p className="text-sm text-muted-foreground">
                    Valid for {plan.validity}
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        feature.included ? 'bg-success/10' : 'bg-muted'
                      }`}>
                        <Check className={`h-3 w-3 ${feature.included ? 'text-success' : 'text-muted-foreground'}`} />
                      </div>
                      <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground line-through'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.popular ? "secondary" : "outline"} 
                  className="w-full"
                  size="lg"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>

          {/* Credit Usage Guide */}
          <div className="max-w-4xl mx-auto mt-20">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              How Credits Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Project Reports", usage: "1 Credit", desc: "Download any project report" },
                { title: "Expert Talks", usage: "Free - 1 Credit", desc: "Some talks are free, premium ones cost 1 credit" },
                { title: "Courses", usage: "2-5 Credits", desc: "Enroll in courses based on duration" },
              ].map((item, index) => (
                <div key={index} className="p-6 bg-card rounded-xl border border-border text-center">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-2xl font-bold text-secondary mt-2">{item.usage}</p>
                  <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="max-w-3xl mx-auto mt-20">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="bg-card rounded-xl shadow-card">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border last:border-0">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="flex items-center gap-3 text-left font-medium">
                      <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pl-14 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact CTA */}
          <div className="max-w-4xl mx-auto mt-20 text-center p-8 bg-primary rounded-2xl">
            <h3 className="text-2xl font-bold text-primary-foreground">
              Need a Custom Plan?
            </h3>
            <p className="text-primary-foreground/80 mt-2">
              Contact our team for custom enterprise solutions with bulk credits and team access.
            </p>
            <Button variant="hero" size="lg" className="mt-6">
              Contact Sales
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
