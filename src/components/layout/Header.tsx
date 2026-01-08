import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  FileText, 
  Video, 
  GraduationCap, 
  Users, 
  Coins,
  ChevronDown,
  User,
  LayoutDashboard,
  Headphones
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Project Reports", href: "/project-reports", icon: FileText },
    { label: "Expert Talks", href: "/expert-talks", icon: Video },
    { label: "Courses", href: "/courses", icon: GraduationCap },
    { label: "Supplier Connect", href: "/suppliers", icon: Users },
    { label: "Training", href: "/training", icon: Headphones },
    { label: "Pricing", href: "/pricing", icon: Coins },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center font-heading">
              <span className="text-2xl font-bold text-primary">iid</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-heading font-bold text-foreground leading-tight">Institute for Industrial</span>
              <span className="text-sm font-heading font-bold text-foreground leading-tight">Development</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Credit Balance */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent">
              <Coins className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">5 Credits</span>
            </div>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                    <User className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="flex items-center gap-2">
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/pricing" className="flex items-center gap-2">
                    <Coins className="h-4 w-4" />
                    Buy Credits
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="xl:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.icon && <item.icon className="h-4 w-4" />}
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-border flex flex-col gap-2">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent">
                  <Coins className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">5 Credits Available</span>
                </div>
                <Button asChild variant="default" className="w-full">
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
