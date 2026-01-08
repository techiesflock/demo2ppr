import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  User, 
  Calendar, 
  Clock, 
  Video, 
  MapPin,
  CheckCircle,
  ArrowRight,
  Coins
} from "lucide-react";

interface TrainingProgram {
  id: string;
  title: string;
  type: "one-on-one" | "group" | "workshop";
  mode: "online" | "offline" | "hybrid";
  duration: string;
  sessions: number;
  price: string;
  credits: number;
  features: string[];
}

const trainingPrograms: TrainingProgram[] = [
  {
    id: "1",
    title: "Business Startup Mentoring",
    type: "one-on-one",
    mode: "online",
    duration: "1 Month",
    sessions: 4,
    price: "₹9,999",
    credits: 10,
    features: [
      "Personalized business plan review",
      "Weekly 1-hour video sessions",
      "Direct chat support",
      "Financial projection guidance",
    ],
  },
  {
    id: "2",
    title: "Industry Expert Coaching",
    type: "one-on-one",
    mode: "hybrid",
    duration: "3 Months",
    sessions: 12,
    price: "₹24,999",
    credits: 25,
    features: [
      "Industry-specific guidance",
      "Bi-weekly expert sessions",
      "Site visit assistance",
      "Supplier introduction",
      "Ongoing support",
    ],
  },
  {
    id: "3",
    title: "Entrepreneur Bootcamp",
    type: "group",
    mode: "online",
    duration: "2 Weeks",
    sessions: 10,
    price: "₹4,999",
    credits: 5,
    features: [
      "Intensive group training",
      "Industry case studies",
      "Networking opportunities",
      "Certificate of completion",
    ],
  },
  {
    id: "4",
    title: "Manufacturing Workshop",
    type: "workshop",
    mode: "offline",
    duration: "3 Days",
    sessions: 6,
    price: "₹7,999",
    credits: 8,
    features: [
      "Hands-on factory visit",
      "Process demonstration",
      "Expert Q&A sessions",
      "Practical implementation guide",
    ],
  },
  {
    id: "5",
    title: "Food Processing Masterclass",
    type: "workshop",
    mode: "offline",
    duration: "5 Days",
    sessions: 10,
    price: "₹14,999",
    credits: 15,
    features: [
      "FSSAI compliance training",
      "Quality control methods",
      "Equipment selection guide",
      "Marketing strategies",
      "Live demo sessions",
    ],
  },
  {
    id: "6",
    title: "Business Growth Accelerator",
    type: "group",
    mode: "online",
    duration: "6 Weeks",
    sessions: 18,
    price: "₹19,999",
    credits: 20,
    features: [
      "Scaling strategies",
      "Team building guidance",
      "Financial management",
      "Marketing & sales training",
      "Peer networking",
    ],
  },
];

const Training = () => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "one-on-one": return User;
      case "group": return Users;
      case "workshop": return Video;
      default: return Users;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "one-on-one": return "1-on-1 Coaching";
      case "group": return "Group Training";
      case "workshop": return "Workshop";
      default: return type;
    }
  };

  const getModeIcon = (mode: string) => {
    switch (mode) {
      case "online": return Video;
      case "offline": return MapPin;
      case "hybrid": return Users;
      default: return Video;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Hero Banner */}
      <section className="gradient-hero py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-primary-foreground">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
              Training & Coaching
            </h1>
            <p className="text-lg text-primary-foreground/80 mt-3 max-w-2xl mx-auto">
              Get personalized guidance from industry experts. Choose from 1-on-1 coaching, 
              group training, or intensive workshops.
            </p>
          </div>
        </div>
      </section>

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Program Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: User, title: "1-on-1 Coaching", desc: "Personal mentoring with industry experts" },
              { icon: Users, title: "Group Training", desc: "Learn with peers in structured programs" },
              { icon: Video, title: "Workshops", desc: "Intensive hands-on learning sessions" },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-card">
                <div className="p-3 rounded-xl bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Programs Grid */}
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
            Available Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingPrograms.map((program) => {
              const TypeIcon = getTypeIcon(program.type);
              const ModeIcon = getModeIcon(program.mode);
              
              return (
                <div
                  key={program.id}
                  className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        program.type === 'one-on-one' ? 'bg-primary/10 text-primary' :
                        program.type === 'group' ? 'bg-secondary/10 text-secondary' :
                        'bg-success/10 text-success'
                      }`}>
                        <TypeIcon className="h-3 w-3 inline mr-1" />
                        {getTypeLabel(program.type)}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground capitalize">
                        <ModeIcon className="h-3 w-3" />
                        {program.mode}
                      </span>
                    </div>

                    <h3 className="font-heading font-semibold text-lg text-foreground">
                      {program.title}
                    </h3>

                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {program.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {program.sessions} Sessions
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {program.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                      {program.features.length > 3 && (
                        <li className="text-sm text-primary font-medium">
                          +{program.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="p-4 bg-muted border-t border-border">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-2xl font-heading font-bold text-foreground">
                          {program.price}
                        </span>
                        <span className="text-sm text-muted-foreground ml-2">
                          or {program.credits} credits
                        </span>
                      </div>
                    </div>
                    <Button className="w-full">
                      Book Now
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Custom Request */}
          <div className="mt-12 p-8 bg-primary rounded-2xl text-center">
            <h3 className="font-heading text-2xl font-bold text-primary-foreground">
              Need Custom Training?
            </h3>
            <p className="text-primary-foreground/80 mt-2 max-w-xl mx-auto">
              We offer customized training programs tailored to your specific industry and business needs.
            </p>
            <Button variant="hero" size="lg" className="mt-6">
              Contact Us for Custom Programs
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Training;
