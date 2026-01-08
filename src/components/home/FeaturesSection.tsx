import { 
  FileText, 
  Video, 
  GraduationCap, 
  Users, 
  Headphones,
  Coins,
  Download,
  Shield
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Detailed Project Reports",
    description: "Comprehensive business plans with market analysis, financial projections, and implementation guides.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Video,
    title: "Expert Talks",
    description: "Video content from industry experts sharing insights, tips, and best practices.",
    color: "bg-info/10 text-info"
  },
  {
    icon: GraduationCap,
    title: "Courses & Workshops",
    description: "Self-paced learning modules and interactive workshops to build your business skills.",
    color: "bg-success/10 text-success"
  },
  {
    icon: Users,
    title: "Supplier Connect",
    description: "Connect with verified suppliers, manufacturers, and service providers in your industry.",
    color: "bg-secondary/10 text-secondary"
  },
  {
    icon: Headphones,
    title: "Training & Coaching",
    description: "One-on-one coaching and group training sessions with business mentors.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Coins,
    title: "Flexible Credit System",
    description: "Pay only for what you need with our flexible credit-based pricing model.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Download,
    title: "Instant Downloads",
    description: "Download project reports instantly after purchase in PDF format.",
    color: "bg-pink-100 text-pink-600"
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "All content is verified by industry experts for accuracy and relevance.",
    color: "bg-slate-100 text-slate-600"
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wide">
            Everything You Need
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            A Complete Entrepreneur Ecosystem
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            From project reports to supplier connections, we provide everything 
            you need to start and scale your business successfully.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/20 hover:shadow-card-hover transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="font-semibold text-foreground text-lg">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
