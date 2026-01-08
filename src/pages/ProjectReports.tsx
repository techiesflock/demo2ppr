import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, Coins, Eye, ArrowRight, Grid, List } from "lucide-react";

interface ProjectReport {
  id: string;
  title: string;
  category: string;
  projectValue: string;
  credits: number;
  image: string;
  description: string;
}

const allReports: ProjectReport[] = [
  {
    id: "1",
    title: "Ice Cream Manufacturing Unit",
    category: "Food Processing",
    projectValue: "₹33.17 Lacs",
    credits: 1,
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=300&fit=crop",
    description: "Complete business plan for setting up an ice cream manufacturing unit with detailed financials."
  },
  {
    id: "2",
    title: "Macaroni & Pasta Production",
    category: "Food Processing",
    projectValue: "₹25.50 Lacs",
    credits: 1,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
    description: "Detailed project report for macaroni and pasta production facility setup."
  },
  {
    id: "3",
    title: "Solar Panel Manufacturing",
    category: "Renewable Energy",
    projectValue: "₹1.25 Cr",
    credits: 1,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
    description: "Comprehensive guide for establishing a solar panel manufacturing plant."
  },
  {
    id: "4",
    title: "Hydraulic Press Machine",
    category: "Manufacturing",
    projectValue: "₹85.00 Lacs",
    credits: 1,
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&h=300&fit=crop",
    description: "Business plan for hydraulic press machine manufacturing unit."
  },
  {
    id: "5",
    title: "Cold Storage Facility",
    category: "Agriculture",
    projectValue: "₹1.50 Cr",
    credits: 1,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
    description: "Project report for setting up a modern cold storage facility."
  },
  {
    id: "6",
    title: "Water Filter Manufacturing",
    category: "Consumer Goods",
    projectValue: "₹45.00 Lacs",
    credits: 1,
    image: "https://images.unsplash.com/photo-1624958723474-2f3ced4f6d3d?w=400&h=300&fit=crop",
    description: "Complete business plan for water filter manufacturing business."
  },
  {
    id: "7",
    title: "Organic Fertilizer Production",
    category: "Agriculture",
    projectValue: "₹35.00 Lacs",
    credits: 1,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    description: "Detailed project for organic fertilizer manufacturing plant setup."
  },
  {
    id: "8",
    title: "LED Bulb Manufacturing",
    category: "Consumer Goods",
    projectValue: "₹55.00 Lacs",
    credits: 1,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    description: "Business plan for LED bulb manufacturing with market analysis."
  },
  {
    id: "9",
    title: "Cotton Yarn Dyeing Unit",
    category: "Textiles",
    projectValue: "₹75.00 Lacs",
    credits: 1,
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=300&fit=crop",
    description: "Project report for cotton yarn dyeing facility with detailed processes."
  },
];

const categories = [
  "All Categories",
  "Food Processing",
  "Manufacturing",
  "Agriculture",
  "Renewable Energy",
  "Consumer Goods",
  "Textiles",
  "Chemicals",
  "Construction",
];

const ProjectReports = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredReports = allReports.filter((report) => {
    const matchesSearch = report.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || report.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Hero Banner */}
      <section className="gradient-hero py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-primary-foreground">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Project Reports
            </h1>
            <p className="text-lg text-primary-foreground/80 mt-3 max-w-2xl mx-auto">
              Browse our comprehensive collection of project reports across 50+ industries. 
              Each report costs just 1 credit.
            </p>
          </div>
        </div>
      </section>

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-card rounded-xl shadow-card">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search project reports..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "bg-card hover:bg-muted"}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${viewMode === "list" ? "bg-primary text-primary-foreground" : "bg-card hover:bg-muted"}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredReports.length}</span> project reports
            </p>
          </div>

          {/* Reports Grid */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredReports.map((report) => (
                <Link
                  key={report.id}
                  to={`/project-reports/${report.id}`}
                  className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                >
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
                  <div className="p-5">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {report.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Project Value: {report.projectValue}
                    </p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-1.5 text-secondary">
                        <Coins className="h-4 w-4" />
                        <span className="text-sm font-semibold">{report.credits} Credit</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {filteredReports.map((report) => (
                <Link
                  key={report.id}
                  to={`/project-reports/${report.id}`}
                  className="group flex gap-4 bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 p-4"
                >
                  <div className="w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={report.image}
                      alt={report.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                          {report.category}
                        </span>
                        <h3 className="font-semibold text-foreground mt-2 group-hover:text-primary transition-colors">
                          {report.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                          {report.description}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-sm text-muted-foreground">
                          {report.projectValue}
                        </p>
                        <div className="flex items-center gap-1 mt-2 text-secondary">
                          <Coins className="h-4 w-4" />
                          <span className="text-sm font-semibold">{report.credits} Credit</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectReports;
