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
import { Search, Play, Clock, Lock, Coins, User } from "lucide-react";

interface ExpertTalk {
  id: string;
  title: string;
  expert: string;
  category: string;
  duration: string;
  thumbnail: string;
  credits: number;
  locked: boolean;
}

const expertTalks: ExpertTalk[] = [
  {
    id: "1",
    title: "Starting a Food Processing Business in India",
    expert: "Dr. Rajesh Kumar",
    category: "Food Processing",
    duration: "45 min",
    thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=225&fit=crop",
    credits: 0,
    locked: false,
  },
  {
    id: "2",
    title: "Understanding FSSAI Regulations",
    expert: "Priya Sharma",
    category: "Food Processing",
    duration: "32 min",
    thumbnail: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=225&fit=crop",
    credits: 1,
    locked: true,
  },
  {
    id: "3",
    title: "Solar Energy Business Opportunities",
    expert: "Amit Patel",
    category: "Renewable Energy",
    duration: "38 min",
    thumbnail: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=225&fit=crop",
    credits: 1,
    locked: true,
  },
  {
    id: "4",
    title: "Manufacturing Unit Setup Guide",
    expert: "Vikram Singh",
    category: "Manufacturing",
    duration: "52 min",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=225&fit=crop",
    credits: 0,
    locked: false,
  },
  {
    id: "5",
    title: "Cold Chain Business Fundamentals",
    expert: "Dr. Meera Gupta",
    category: "Agriculture",
    duration: "28 min",
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=225&fit=crop",
    credits: 1,
    locked: true,
  },
  {
    id: "6",
    title: "Textile Industry Insights",
    expert: "Rahul Mehta",
    category: "Textiles",
    duration: "41 min",
    thumbnail: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=225&fit=crop",
    credits: 1,
    locked: true,
  },
];

const categories = [
  "All Categories",
  "Food Processing",
  "Manufacturing",
  "Agriculture",
  "Renewable Energy",
  "Textiles",
];

const ExpertTalks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filteredTalks = expertTalks.filter((talk) => {
    const matchesSearch = talk.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         talk.expert.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || talk.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Hero Banner */}
      <section className="gradient-hero py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-primary-foreground">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
              Expert Talks
            </h1>
            <p className="text-lg text-primary-foreground/80 mt-3 max-w-2xl mx-auto">
              Learn from industry experts. Watch video sessions covering business insights, 
              market trends, and practical guidance.
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
                placeholder="Search expert talks..."
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
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredTalks.length}</span> expert talks
            </p>
          </div>

          {/* Talks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTalks.map((talk) => (
              <div
                key={talk.id}
                className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={talk.thumbnail}
                    alt={talk.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${talk.locked ? 'bg-muted' : 'bg-primary'}`}>
                      {talk.locked ? (
                        <Lock className="h-6 w-6 text-muted-foreground" />
                      ) : (
                        <Play className="h-6 w-6 text-primary-foreground ml-1" />
                      )}
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 text-xs font-semibold rounded bg-foreground/80 text-background">
                      {talk.duration}
                    </span>
                  </div>
                  {talk.locked && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 text-xs font-semibold rounded bg-primary text-primary-foreground flex items-center gap-1">
                        <Coins className="h-3 w-3" />
                        {talk.credits} Credit
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">
                    {talk.category}
                  </span>
                  <h3 className="font-heading font-semibold text-foreground mt-2 line-clamp-2">
                    {talk.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>{talk.expert}</span>
                  </div>
                  <div className="mt-4">
                    <Button 
                      variant={talk.locked ? "outline" : "default"} 
                      size="sm" 
                      className="w-full"
                    >
                      {talk.locked ? (
                        <>
                          <Lock className="h-4 w-4" />
                          Unlock with Credit
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4" />
                          Watch Now
                        </>
                      )}
                    </Button>
                  </div>
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

export default ExpertTalks;
