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
import { Search, Clock, BookOpen, Star, Users, Coins } from "lucide-react";

interface Course {
  id: string;
  title: string;
  instructor: string;
  category: string;
  duration: string;
  lessons: number;
  level: string;
  rating: number;
  students: number;
  credits: number;
  thumbnail: string;
}

const courses: Course[] = [
  {
    id: "1",
    title: "Food Processing Business Fundamentals",
    instructor: "Dr. Rajesh Kumar",
    category: "Food Processing",
    duration: "8 hours",
    lessons: 24,
    level: "Beginner",
    rating: 4.8,
    students: 1250,
    credits: 3,
    thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=225&fit=crop",
  },
  {
    id: "2",
    title: "Manufacturing Excellence Masterclass",
    instructor: "Vikram Singh",
    category: "Manufacturing",
    duration: "12 hours",
    lessons: 36,
    level: "Intermediate",
    rating: 4.9,
    students: 890,
    credits: 5,
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=225&fit=crop",
  },
  {
    id: "3",
    title: "Solar Energy Business Complete Guide",
    instructor: "Amit Patel",
    category: "Renewable Energy",
    duration: "10 hours",
    lessons: 30,
    level: "Beginner",
    rating: 4.7,
    students: 650,
    credits: 4,
    thumbnail: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=225&fit=crop",
  },
  {
    id: "4",
    title: "Dairy Industry Business Workshop",
    instructor: "Priya Sharma",
    category: "Food Processing",
    duration: "6 hours",
    lessons: 18,
    level: "Beginner",
    rating: 4.6,
    students: 980,
    credits: 2,
    thumbnail: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=225&fit=crop",
  },
  {
    id: "5",
    title: "Cold Storage & Supply Chain",
    instructor: "Dr. Meera Gupta",
    category: "Agriculture",
    duration: "15 hours",
    lessons: 42,
    level: "Advanced",
    rating: 4.9,
    students: 420,
    credits: 5,
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=225&fit=crop",
  },
  {
    id: "6",
    title: "Textile Business Startup Guide",
    instructor: "Rahul Mehta",
    category: "Textiles",
    duration: "9 hours",
    lessons: 27,
    level: "Intermediate",
    rating: 4.5,
    students: 560,
    credits: 3,
    thumbnail: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=225&fit=crop",
  },
];

const categories = ["All Categories", "Food Processing", "Manufacturing", "Agriculture", "Renewable Energy", "Textiles"];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "All Levels" || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Hero Banner */}
      <section className="gradient-hero py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-primary-foreground">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
              Courses & Workshops
            </h1>
            <p className="text-lg text-primary-foreground/80 mt-3 max-w-2xl mx-auto">
              Enhance your business skills with our comprehensive courses. 
              Learn from industry experts at your own pace.
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
                placeholder="Search courses..."
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
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {levels.map((level) => (
                  <SelectItem key={level} value={level}>{level}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 text-xs font-semibold rounded ${
                      course.level === 'Beginner' ? 'bg-success text-success-foreground' :
                      course.level === 'Intermediate' ? 'bg-warning text-warning-foreground' :
                      'bg-destructive text-destructive-foreground'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">
                    {course.category}
                  </span>
                  <h3 className="font-heading font-semibold text-foreground mt-2 line-clamp-2 min-h-[3rem]">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    by {course.instructor}
                  </p>
                  
                  <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {course.lessons} lessons
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <span className="flex items-center gap-1 text-warning">
                      <Star className="h-4 w-4 fill-current" />
                      {course.rating}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {course.students} students
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-1.5 text-primary">
                      <Coins className="h-4 w-4" />
                      <span className="text-sm font-semibold">{course.credits} Credits</span>
                    </div>
                    <Button size="sm">Enroll Now</Button>
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

export default Courses;
