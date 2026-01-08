import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, Star, HelpCircle, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const plans = [
  {
    name: "Executive",
    price: "₹5,900",
    validity: "Per Annum",
    features: [
      { text: "Daily Update For Industrial Solution", included: true },
      { text: "Project Report Download (Soft Copy)", included: true },
      { text: "Resume Builder", included: true },
      { text: "Live Support (Email/WhatsApp)", included: true },
      { text: "View Expert Details (10 Expert)", included: true },
      { text: "Industrial Course Materials", included: false },
      { text: "Supplier Connect", included: false },
      { text: "Government Scheme Identification", included: false },
    ],
    popular: false,
  },
  {
    name: "Associate",
    price: "₹11,800",
    validity: "Per Annum",
    features: [
      { text: "All Executive Features", included: true },
      { text: "All Industrial Solution (Soft Copy)", included: true },
      { text: "All Project Report Download", included: true },
      { text: "Priority Live Support", included: true },
      { text: "View Expert Details (25 Expert)", included: true },
      { text: "Industrial Course Materials", included: false },
      { text: "Supplier Connect", included: false },
      { text: "Government Scheme Identification", included: false },
    ],
    popular: false,
  },
  {
    name: "Enterprise",
    price: "₹23,600",
    validity: "Per Annum",
    features: [
      { text: "All Associate Features", included: true },
      { text: "Access to Industrial Course Materials", included: true },
      { text: "Priority Live Support", included: true },
      { text: "Practically Verified Supplier Connect", included: true },
      { text: "Industrial Machinery/Equipment Connect", included: true },
      { text: "Tender Update", included: true },
      { text: "Government Scheme Identification", included: false },
      { text: "Industrial Expert Q&A", included: false },
    ],
    popular: true,
  },
  {
    name: "Corporate",
    price: "₹59,000",
    validity: "Per Annum",
    features: [
      { text: "All Enterprise Features", included: true },
      { text: "Industrial Documentaries Access", included: true },
      { text: "Industrial Research Access", included: true },
      { text: "Government Scheme Identification", included: true },
      { text: "Industrial Expert Q&A", included: true },
      { text: "All In One Combo Course Access", included: true },
      { text: "Dedicated Account Manager", included: true },
      { text: "Custom Report Requests", included: true },
    ],
    popular: false,
  },
];

const faqs = [
  {
    question: "What is included in the membership?",
    answer: "Each membership tier includes different levels of access to our project reports, industrial solutions, expert talks, courses, and supplier network. Higher tiers unlock more features and content."
  },
  {
    question: "Can I upgrade my plan anytime?",
    answer: "Yes! You can upgrade your plan at any time. The price difference will be prorated based on your remaining subscription period."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit/debit cards, UPI, net banking, and popular wallets like Paytm, PhonePe, and Google Pay. All payments are secured with industry-standard encryption."
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes, we offer a 7-day money-back guarantee if you haven't downloaded any content. Once content is accessed, partial refunds are available based on unused subscription period."
  },
  {
    question: "How do I access the project reports?",
    answer: "Once subscribed, you can browse and download project reports directly from your dashboard. Reports are available in PDF format for instant download."
  },
  {
    question: "Can multiple users use one membership?",
    answer: "Each membership is for individual use. For team access, we offer corporate plans with multiple user seats. Contact our sales team for custom enterprise pricing."
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <section className="gradient-hero py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
            Membership at a Glance
          </h1>
          <p className="text-lg text-primary-foreground/80 mt-3 max-w-2xl mx-auto">
            Choose the membership plan that fits your business needs. Get access to 
            project reports, expert guidance, and more.
          </p>
        </div>
      </section>

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-2xl ${
                  plan.popular 
                    ? "bg-card shadow-xl border-2 border-primary" 
                    : "bg-card shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg">
                      <Star className="h-4 w-4" />
                      Best Value
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="font-heading text-xl font-bold text-foreground">{plan.name}</h3>
                  <div className="mt-4">
                    <span className="text-3xl font-heading font-bold text-primary">{plan.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {plan.validity}
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        feature.included ? 'bg-success/10' : 'bg-muted'
                      }`}>
                        {feature.included ? (
                          <Check className="h-3 w-3 text-success" />
                        ) : (
                          <X className="h-3 w-3 text-muted-foreground" />
                        )}
                      </div>
                      <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.popular ? "default" : "outline"} 
                  className="w-full"
                  size="lg"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>

          {/* Comparison Table for Desktop */}
          <div className="mt-20 hidden lg:block">
            <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-8">
              Compare All Features
            </h2>
            <div className="bg-card rounded-xl shadow-card overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-4 text-left font-heading font-semibold text-foreground">Features</th>
                    {plans.map((plan) => (
                      <th key={plan.name} className="p-4 text-center font-heading font-semibold text-foreground">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Project Report Downloads",
                    "Industrial Solutions Access",
                    "Live Support",
                    "Expert Details Access",
                    "Industrial Courses",
                    "Supplier Connect",
                    "Government Scheme Updates",
                    "Industrial Research",
                    "Expert Q&A Sessions",
                  ].map((feature, index) => (
                    <tr key={index} className="border-t border-border">
                      <td className="p-4 text-foreground">{feature}</td>
                      <td className="p-4 text-center">
                        {index < 5 ? (
                          <Check className="h-5 w-5 text-success mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {index < 5 ? (
                          <Check className="h-5 w-5 text-success mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {index < 7 ? (
                          <Check className="h-5 w-5 text-success mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-success mx-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQs */}
          <div className="max-w-3xl mx-auto mt-20">
            <h2 className="font-heading text-2xl font-bold text-foreground text-center mb-8">
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
          <div className="max-w-4xl mx-auto mt-20 text-center p-8 gradient-primary rounded-2xl">
            <h3 className="font-heading text-2xl font-bold text-primary-foreground">
              Need a Custom Plan?
            </h3>
            <p className="text-primary-foreground/80 mt-2">
              Contact our team for custom enterprise solutions with bulk access and team features.
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
