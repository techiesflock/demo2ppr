import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  Shield,
  CreditCard,
  Award
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    products: [
      { label: "Project Reports", href: "/project-reports" },
      { label: "Expert Talks", href: "/expert-talks" },
      { label: "Courses & Workshops", href: "/courses" },
      { label: "Supplier Connect", href: "/suppliers" },
      { label: "Training & Coaching", href: "/training" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Press & Media", href: "/press" },
      { label: "Contact Us", href: "/contact" },
    ],
    support: [
      { label: "Help Center", href: "/help" },
      { label: "FAQs", href: "/faqs" },
      { label: "Pricing Plans", href: "/pricing" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  };

  const trustBadges = [
    { icon: Shield, label: "Secure Payments" },
    { icon: CreditCard, label: "Easy Refunds" },
    { icon: Award, label: "Quality Content" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Trust Badges */}
      <div className="border-b border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center justify-center gap-3">
                <div className="p-2 rounded-lg bg-secondary-foreground/10">
                  <badge.icon className="h-5 w-5" />
                </div>
                <span className="font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-3xl font-heading font-bold">iid</span>
              <div className="flex flex-col">
                <span className="text-sm font-heading font-semibold leading-tight">Institute for Industrial</span>
                <span className="text-sm font-heading font-semibold leading-tight">Development</span>
              </div>
            </Link>
            <p className="text-sm text-secondary-foreground/80 mb-6 max-w-sm">
              Your trusted partner for comprehensive project reports and business plans. 
              Start or scale your business with expert guidance.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Youtube, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 rounded-lg bg-secondary-foreground/10 hover:bg-secondary-foreground/20 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Products & Services</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <div className="text-sm text-secondary-foreground/80">
                  <p>+91 7408733333</p>
                  <p>+91 7607655555</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm text-secondary-foreground/80">
                  support@iid.org.in
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm text-secondary-foreground/80">
                  Lucknow, India
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/60">
              © 1999-2026 Institute for Industrial Development. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground">
                Terms
              </Link>
              <Link to="/disclaimer" className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
