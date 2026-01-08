import { Link } from "react-router-dom";
import { 
  Utensils, 
  Cog, 
  Leaf, 
  Zap, 
  Package, 
  Building2,
  FlaskConical,
  Shirt,
  ArrowRight
} from "lucide-react";

const industries = [
  { 
    icon: Utensils, 
    name: "Food Processing", 
    count: 150,
    color: "bg-orange-100 text-orange-600"
  },
  { 
    icon: Cog, 
    name: "Manufacturing", 
    count: 200,
    color: "bg-blue-100 text-blue-600"
  },
  { 
    icon: Leaf, 
    name: "Agriculture", 
    count: 120,
    color: "bg-green-100 text-green-600"
  },
  { 
    icon: Zap, 
    name: "Renewable Energy", 
    count: 80,
    color: "bg-yellow-100 text-yellow-600"
  },
  { 
    icon: Package, 
    name: "Consumer Goods", 
    count: 95,
    color: "bg-purple-100 text-purple-600"
  },
  { 
    icon: Building2, 
    name: "Construction", 
    count: 75,
    color: "bg-slate-100 text-slate-600"
  },
  { 
    icon: FlaskConical, 
    name: "Chemicals", 
    count: 60,
    color: "bg-red-100 text-red-600"
  },
  { 
    icon: Shirt, 
    name: "Textiles", 
    count: 85,
    color: "bg-pink-100 text-pink-600"
  },
];

const IndustriesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wide">
            Wide Range of Industries
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Explore Project Reports by Industry
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            We cover 50+ industries with detailed project reports tailored to 
            Indian market conditions and regulatory requirements.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <Link
              key={index}
              to={`/project-reports?industry=${industry.name.toLowerCase().replace(" ", "-")}`}
              className="group p-6 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <industry.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {industry.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {industry.count}+ Reports
              </p>
              <ArrowRight className="h-4 w-4 text-muted-foreground mt-3 group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            to="/project-reports"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All Industries
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
