import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Coins, 
  FileText, 
  Video, 
  GraduationCap, 
  Download, 
  Eye,
  Calendar,
  ArrowRight,
  Clock,
  CheckCircle
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    { label: "Credits Available", value: "5", icon: Coins, color: "bg-primary" },
    { label: "Reports Downloaded", value: "12", icon: FileText, color: "bg-secondary" },
    { label: "Videos Watched", value: "28", icon: Video, color: "bg-success" },
    { label: "Courses Enrolled", value: "3", icon: GraduationCap, color: "bg-warning" },
  ];

  const recentDownloads = [
    { id: "1", title: "Ice Cream Manufacturing Unit", date: "Jan 5, 2026", category: "Food Processing" },
    { id: "2", title: "Solar Panel Manufacturing", date: "Jan 3, 2026", category: "Renewable Energy" },
    { id: "3", title: "Cold Storage Facility", date: "Dec 28, 2025", category: "Agriculture" },
  ];

  const enrolledCourses = [
    { id: "1", title: "Food Processing Business Fundamentals", progress: 75, lessons: 24 },
    { id: "2", title: "Manufacturing Excellence Masterclass", progress: 30, lessons: 36 },
    { id: "3", title: "Solar Energy Business Complete Guide", progress: 10, lessons: 30 },
  ];

  const subscription = {
    plan: "Professional",
    credits: 5,
    totalCredits: 15,
    validity: "March 15, 2026",
    status: "Active",
  };

  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="font-heading text-3xl font-bold text-foreground">
              Welcome back, Entrepreneur!
            </h1>
            <p className="text-muted-foreground mt-1">
              Here's what's happening with your account.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-card">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${stat.color}/10`}>
                    <stat.icon className={`h-6 w-6 ${stat.color === 'bg-primary' ? 'text-primary' : stat.color === 'bg-secondary' ? 'text-secondary' : stat.color === 'bg-success' ? 'text-success' : 'text-warning'}`} />
                  </div>
                  <div>
                    <p className="text-2xl font-heading font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Recent Downloads */}
              <div className="bg-card rounded-xl shadow-card">
                <div className="p-6 border-b border-border flex items-center justify-between">
                  <h2 className="font-heading text-xl font-bold text-foreground">
                    Recent Downloads
                  </h2>
                  <Link to="/project-reports" className="text-sm text-primary font-medium hover:underline">
                    View All
                  </Link>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {recentDownloads.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 rounded-lg bg-muted hover:bg-accent transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">{item.title}</h4>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                              <span>{item.category}</span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {item.date}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enrolled Courses */}
              <div className="bg-card rounded-xl shadow-card">
                <div className="p-6 border-b border-border flex items-center justify-between">
                  <h2 className="font-heading text-xl font-bold text-foreground">
                    Continue Learning
                  </h2>
                  <Link to="/courses" className="text-sm text-primary font-medium hover:underline">
                    Browse Courses
                  </Link>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {enrolledCourses.map((course) => (
                      <div key={course.id} className="p-4 rounded-lg border border-border hover:border-primary/30 transition-colors">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground">{course.title}</h4>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                              <Clock className="h-3 w-3" />
                              <span>{Math.round(course.lessons * course.progress / 100)}/{course.lessons} lessons completed</span>
                            </div>
                            <div className="mt-3">
                              <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-primary rounded-full transition-all"
                                  style={{ width: `${course.progress}%` }}
                                />
                              </div>
                              <span className="text-xs text-muted-foreground mt-1">{course.progress}% complete</span>
                            </div>
                          </div>
                          <Button size="sm">
                            Continue
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Subscription Card */}
              <div className="bg-card rounded-xl shadow-card overflow-hidden">
                <div className="gradient-primary p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-lg font-bold text-primary-foreground">
                      {subscription.plan} Plan
                    </h3>
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-primary-foreground/20 text-primary-foreground">
                      {subscription.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-muted-foreground">Credits Used</span>
                    <span className="font-semibold text-foreground">
                      {subscription.totalCredits - subscription.credits}/{subscription.totalCredits}
                    </span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden mb-4">
                    <div 
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${((subscription.totalCredits - subscription.credits) / subscription.totalCredits) * 100}%` }}
                    />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>Valid until {subscription.validity}</span>
                  </div>
                  <Button asChild className="w-full">
                    <Link to="/pricing">
                      <Coins className="h-4 w-4" />
                      Buy More Credits
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-card rounded-xl shadow-card p-6">
                <h3 className="font-heading font-semibold text-foreground mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Browse Project Reports", href: "/project-reports", icon: FileText },
                    { label: "Watch Expert Talks", href: "/expert-talks", icon: Video },
                    { label: "Explore Courses", href: "/courses", icon: GraduationCap },
                  ].map((action, index) => (
                    <Link
                      key={index}
                      to={action.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <action.icon className="h-5 w-5 text-primary" />
                      <span className="font-medium text-foreground">{action.label}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Need Help */}
              <div className="bg-accent rounded-xl p-6">
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  Need Help?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our support team is available 24/7 to assist you.
                </p>
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
