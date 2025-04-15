
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  LineChart, 
  BarChart, 
  PieChart, 
  Leaf, 
  BadgeDollarSign, 
  Globe, 
  BarChart3, 
  Menu, 
  X,
  UserCircle2 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { name: "ESG Tracker", href: "/esg-tracker", icon: <LineChart className="h-5 w-5" /> },
  { name: "Green Bonds", href: "/green-bonds", icon: <BarChart3 className="h-5 w-5" /> },
  { name: "Impact Investing", href: "/impact-investing", icon: <Globe className="h-5 w-5" /> },
  { name: "Sustainable Budget", href: "/budget", icon: <BarChart className="h-5 w-5" /> },
  { name: "Carbon Offset", href: "/carbon-offset", icon: <Leaf className="h-5 w-5" /> },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <Leaf className="h-8 w-8 text-eco-green" />
            <span className="ml-2 text-xl font-semibold text-foreground hidden sm:inline-block">EcoInvest Insights</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:space-x-4 lg:space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.icon}
              <span className="ml-2">{item.name}</span>
            </Link>
          ))}
        </nav>
        
        {/* User Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <UserCircle2 className="h-5 w-5" />
          </Button>
          <Button className="hidden md:flex">Get Started</Button>
          
          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center py-2 text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                  </Link>
                ))}
                <Button className="mt-4">Get Started</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
