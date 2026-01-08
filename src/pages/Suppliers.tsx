import { useState } from "react";
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
import { Search, MapPin, Phone, Mail, Building2, CheckCircle } from "lucide-react";

interface Supplier {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  location: string;
  verified: boolean;
  description: string;
}

const suppliers: Supplier[] = [
  {
    id: "1",
    name: "Dairy Equipment India Pvt Ltd",
    category: "Food Processing",
    subcategory: "Machinery",
    location: "Delhi",
    verified: true,
    description: "Leading supplier of dairy processing equipment and machinery."
  },
  {
    id: "2",
    name: "Frozen Foods Packaging Solutions",
    category: "Food Processing",
    subcategory: "Packaging",
    location: "Mumbai",
    verified: true,
    description: "Specialized packaging solutions for frozen and cold chain products."
  },
  {
    id: "3",
    name: "Solar Panel Components Hub",
    category: "Renewable Energy",
    subcategory: "Components",
    location: "Gujarat",
    verified: true,
    description: "Wholesale supplier of solar panel components and accessories."
  },
  {
    id: "4",
    name: "Industrial Machinery Works",
    category: "Manufacturing",
    subcategory: "Machinery",
    location: "Pune",
    verified: false,
    description: "Industrial machinery manufacturing and trading company."
  },
  {
    id: "5",
    name: "Agri Cold Storage Systems",
    category: "Agriculture",
    subcategory: "Cold Storage",
    location: "Lucknow",
    verified: true,
    description: "Cold storage equipment and installation services for agriculture."
  },
  {
    id: "6",
    name: "Textile Raw Materials Co",
    category: "Textiles",
    subcategory: "Raw Materials",
    location: "Ahmedabad",
    verified: true,
    description: "Supplier of textile raw materials including cotton, silk, and synthetic fibers."
  },
  {
    id: "7",
    name: "Chemical Solutions India",
    category: "Chemicals",
    subcategory: "Industrial Chemicals",
    location: "Mumbai",
    verified: false,
    description: "Industrial chemicals and specialty chemical supplier."
  },
  {
    id: "8",
    name: "Food Grade Packaging Ltd",
    category: "Food Processing",
    subcategory: "Packaging",
    location: "Chennai",
    verified: true,
    description: "FSSAI certified food grade packaging material supplier."
  },
];

const categories = ["All Categories", "Food Processing", "Manufacturing", "Agriculture", "Renewable Energy", "Textiles", "Chemicals"];
const locations = ["All Locations", "Delhi", "Mumbai", "Gujarat", "Pune", "Lucknow", "Ahmedabad", "Chennai"];

const Suppliers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");

  const filteredSuppliers = suppliers.filter((supplier) => {
    const matchesSearch = supplier.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || supplier.category === selectedCategory;
    const matchesLocation = selectedLocation === "All Locations" || supplier.location === selectedLocation;
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Hero Banner */}
      <section className="gradient-hero py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-primary-foreground">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
              Supplier Connect
            </h1>
            <p className="text-lg text-primary-foreground/80 mt-3 max-w-2xl mx-auto">
              Connect with verified suppliers, manufacturers, and service providers 
              across various industries.
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
                placeholder="Search suppliers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {locations.map((loc) => (
                  <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Info Banner */}
          <div className="bg-accent p-4 rounded-xl mb-8 flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
            <p className="text-sm text-foreground">
              <span className="font-semibold">Premium Feature:</span> Contact information is available for subscribed members. 
              <a href="/pricing" className="text-primary font-medium ml-1 hover:underline">Upgrade now</a>
            </p>
          </div>

          {/* Suppliers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSuppliers.map((supplier) => (
              <div
                key={supplier.id}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading font-semibold text-lg text-foreground">
                        {supplier.name}
                      </h3>
                      {supplier.verified && (
                        <span className="flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full bg-success/10 text-success">
                          <CheckCircle className="h-3 w-3" />
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-2 py-0.5 text-xs font-medium rounded bg-primary/10 text-primary">
                        {supplier.category}
                      </span>
                      <span className="px-2 py-0.5 text-xs font-medium rounded bg-muted text-muted-foreground">
                        {supplier.subcategory}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">
                      {supplier.description}
                    </p>
                    <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{supplier.location}</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-muted">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex gap-3 mt-4 pt-4 border-t border-border">
                  <Button variant="default" size="sm" className="flex-1">
                    <Phone className="h-4 w-4" />
                    Request Contact
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Mail className="h-4 w-4" />
                    Send Enquiry
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Suppliers;
