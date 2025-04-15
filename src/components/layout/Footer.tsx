
import { Link } from "react-router-dom";
import { Leaf, Twitter, Linkedin, Github, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Leaf className="h-6 w-6 text-eco-green" />
              <span className="ml-2 text-lg font-semibold">EcoInvest Insights</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering responsible investments through AI-powered sustainable finance tools.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/esg-tracker" className="text-muted-foreground hover:text-primary">ESG Investment Tracker</Link></li>
              <li><Link to="/green-bonds" className="text-muted-foreground hover:text-primary">Green Bonds Analytics</Link></li>
              <li><Link to="/impact-investing" className="text-muted-foreground hover:text-primary">Impact Investing</Link></li>
              <li><Link to="/budget" className="text-muted-foreground hover:text-primary">Sustainable Budgeting</Link></li>
              <li><Link to="/carbon-offset" className="text-muted-foreground hover:text-primary">Carbon Offset Tools</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Learning Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Case Studies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Sustainability Reports</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">API Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EcoInvest Insights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
