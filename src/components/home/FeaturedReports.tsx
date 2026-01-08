import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Coins, Eye } from "lucide-react";

interface ReportCard {
  id: string;
  title: string;
  category: string;
  projectValue: string;
  credits: number;
  image: string;
}

const featuredReports: ReportCard[] = [
  {
    id: "1",
    title: "Ice Cream Manufacturing Unit",
    category: "Food Processing",
    projectValue: "₹33.17 Lacs",
    credits: 1,
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=300&fit=crop",
  },
  {
    id: "2",
    title: "Macaroni & Pasta Production",
    category: "Food Processing",
    projectValue: "₹25.50 Lacs",
    credits: 1,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
  },
  {
    id: "3",
    title: "Solar Panel Manufacturing",
    category: "Renewable Energy",
    projectValue: "₹1.25 Cr",
    credits: 1,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
  },
  {
    id: "4",
    title: "Hydraulic Press Machine",
    category: "Manufacturing",
    projectValue: "₹85.00 Lacs",
    credits: 1,
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&h=300&fit=crop",
  },
  {
    id: "5",
    title: "Cold Storage Facility",
    category: "Agriculture",
    projectValue: "₹1.50 Cr",
    credits: 1,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
  },
  {
    id: "6",
    title: "Water Filter Manufacturing",
    category: "Consumer Goods",
    projectValue: "₹45.00 Lacs",
    credits: 1,
    image: "https://images.unsplash.com/photo-1624958723474-2f3ced4f6d3d?w=400&h=300&fit=crop",
  },
];

const FeaturedReports = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Popular Choices
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Featured Project Reports
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl">
              Explore our most popular project reports across various industries.
              Each report includes detailed business plans and implementation guides.
            </p>
          </div>
          <Button asChild variant="outline" className="self-start md:self-auto">
            <Link to="/project-reports">
              View All Reports
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredReports.map((report) => (
            <Link
              key={report.id}
              to={`/project-reports/${report.id}`}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={report.image}
                  alt={report.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                    {report.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="secondary" size="sm" className="w-full">
                    <Eye className="h-4 w-4" />
                    View Details
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading font-semibold text-foreground text-lg group-hover:text-primary transition-colors line-clamp-2">
                  {report.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Project Value: {report.projectValue}
                </p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-1.5 text-primary">
                    <Coins className="h-4 w-4" />
                    <span className="text-sm font-semibold">{report.credits} Credit</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedReports;
