import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Download, 
  Coins, 
  FileText, 
  Video, 
  GraduationCap, 
  Users,
  ChevronRight,
  Play,
  Clock,
  CheckCircle,
  Lock,
  ArrowLeft,
  Share2,
  Bookmark
} from "lucide-react";

// Mock data
const reportData = {
  id: "1",
  title: "Ice Cream Manufacturing Unit",
  category: "Food Processing",
  projectValue: "₹33.17 Lacs",
  credits: 1,
  image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&h=600&fit=crop",
  description: `Ice cream could be a sweetened food product typically eaten as a snack or dessert. 
    It should be made up of dairy milk or cream and is flavored with a sweetener, either sugar or another, 
    and any spice, like cocoa or vanilla. Frozen dessert could also be served in dishes, for eating with spoon, 
    or licked from edible cones.`,
  tableOfContents: [
    "Introduction & Overview",
    "Market Analysis",
    "Technical Requirements",
    "Manufacturing Process",
    "Financial Projections",
    "Regulatory Requirements",
    "Implementation Plan",
    "Risk Analysis",
  ],
  expertTalks: [
    { id: 1, title: "Starting an Ice Cream Business in India", duration: "25 min", locked: false },
    { id: 2, title: "Quality Control in Dairy Products", duration: "18 min", locked: true },
    { id: 3, title: "Marketing Strategies for FMCG", duration: "32 min", locked: true },
  ],
  courses: [
    { id: 1, title: "Food Processing Business Fundamentals", lessons: 12, duration: "4 hours", level: "Beginner" },
    { id: 2, title: "Dairy Industry Masterclass", lessons: 18, duration: "6 hours", level: "Intermediate" },
  ],
  suppliers: [
    { id: 1, name: "Dairy Equipment India", category: "Machinery", location: "Delhi" },
    { id: 2, name: "Frozen Foods Packaging", category: "Packaging", location: "Mumbai" },
    { id: 3, name: "Milk Suppliers Hub", category: "Raw Materials", location: "Gujarat" },
  ],
  relatedReports: [
    { id: "2", title: "Frozen Yogurt Production", category: "Food Processing", price: "₹25.00 Lacs" },
    { id: "3", title: "Milk Processing Plant", category: "Food Processing", price: "₹1.50 Cr" },
    { id: "4", title: "Cold Storage Facility", category: "Agriculture", price: "₹1.25 Cr" },
  ],
};

const ProjectReportDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Link to="/project-reports" className="text-muted-foreground hover:text-foreground">
              Project Reports
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground font-medium">{reportData.title}</span>
          </nav>
        </div>
      </div>

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link 
            to="/project-reports" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Reports
          </Link>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Report Header */}
              <div className="bg-card rounded-xl overflow-hidden shadow-card">
                <div className="aspect-video relative">
                  <img 
                    src={reportData.image} 
                    alt={reportData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-primary text-primary-foreground">
                      {reportData.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                    {reportData.title}
                  </h1>
                  <p className="text-muted-foreground mt-2">
                    Project Value: <span className="font-semibold text-foreground">{reportData.projectValue}</span>
                  </p>
                </div>
              </div>

              {/* Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="bg-card rounded-xl shadow-card">
                <TabsList className="w-full justify-start border-b border-border rounded-none p-0 h-auto">
                  <TabsTrigger 
                    value="overview" 
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-6 py-4"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Overview
                  </TabsTrigger>
                  <TabsTrigger 
                    value="expert-talks"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-6 py-4"
                  >
                    <Video className="h-4 w-4 mr-2" />
                    Expert Talks
                  </TabsTrigger>
                  <TabsTrigger 
                    value="courses"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-6 py-4"
                  >
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Courses
                  </TabsTrigger>
                  <TabsTrigger 
                    value="suppliers"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-6 py-4"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Suppliers
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="p-6 space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-3">Project Overview</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {reportData.description}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Table of Contents</h3>
                    <ul className="space-y-2">
                      {reportData.tableOfContents.map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center">
                            {index + 1}
                          </span>
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="expert-talks" className="p-6">
                  <h2 className="text-xl font-bold text-foreground mb-4">Related Expert Talks</h2>
                  <div className="space-y-4">
                    {reportData.expertTalks.map((talk) => (
                      <div key={talk.id} className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${talk.locked ? 'bg-muted-foreground/20' : 'bg-primary'}`}>
                          {talk.locked ? (
                            <Lock className="h-5 w-5 text-muted-foreground" />
                          ) : (
                            <Play className="h-5 w-5 text-primary-foreground" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground">{talk.title}</h4>
                          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {talk.duration}
                          </div>
                        </div>
                        {talk.locked && (
                          <span className="text-xs font-medium text-secondary">Use Credits</span>
                        )}
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="courses" className="p-6">
                  <h2 className="text-xl font-bold text-foreground mb-4">Related Courses</h2>
                  <div className="space-y-4">
                    {reportData.courses.map((course) => (
                      <div key={course.id} className="p-4 rounded-xl border border-border hover:border-primary/30 transition-colors">
                        <h4 className="font-semibold text-foreground">{course.title}</h4>
                        <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <FileText className="h-4 w-4" />
                            {course.lessons} Lessons
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {course.duration}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                            {course.level}
                          </span>
                        </div>
                        <Button variant="outline" size="sm" className="mt-4">
                          Enroll Now
                        </Button>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="suppliers" className="p-6">
                  <h2 className="text-xl font-bold text-foreground mb-4">Supplier Connect</h2>
                  <div className="space-y-4">
                    {reportData.suppliers.map((supplier) => (
                      <div key={supplier.id} className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                        <div>
                          <h4 className="font-medium text-foreground">{supplier.name}</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {supplier.category} • {supplier.location}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          Contact
                        </Button>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Purchase Card */}
              <div className="bg-card rounded-xl p-6 shadow-card sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-2xl font-bold text-secondary">
                    <Coins className="h-6 w-6" />
                    <span>{reportData.credits} Credit</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                      <Share2 className="h-5 w-5 text-muted-foreground" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                      <Bookmark className="h-5 w-5 text-muted-foreground" />
                    </button>
                  </div>
                </div>

                <Button variant="secondary" size="lg" className="w-full mb-3">
                  <Download className="h-5 w-5" />
                  Download Report
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  Request Customized Report
                </Button>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {["Market Analysis", "Financial Projections", "Implementation Plan", "Regulatory Guide"].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-success" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Related Reports */}
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h4 className="font-semibold text-foreground mb-4">Related Reports</h4>
                <div className="space-y-4">
                  {reportData.relatedReports.map((report) => (
                    <Link 
                      key={report.id}
                      to={`/project-reports/${report.id}`}
                      className="block p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <h5 className="font-medium text-foreground text-sm">{report.title}</h5>
                      <p className="text-xs text-muted-foreground mt-1">
                        {report.category} • {report.price}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectReportDetail;
