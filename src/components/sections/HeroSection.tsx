
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart4, Globe, Leaf, LineChart } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative py-20 overflow-hidden bg-gradient-to-b from-background to-muted">
      {/* Abstract background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-24 -right-20 w-96 h-96 rounded-full bg-eco-green-light/30 blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-eco-blue-light/30 blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center px-4 py-1.5 text-sm font-medium rounded-full border border-eco-green/20 bg-eco-green/10 text-eco-green mb-6">
            <span className="flex items-center mr-2">
              <Leaf className="w-4 h-4 mr-1" />
              Sustainable Finance
            </span>
            <span className="px-2 py-0.5 rounded-full bg-eco-green text-white text-xs">New</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 max-w-4xl">
            <span className="text-foreground">AI-Powered </span>
            <span className="bg-gradient-to-r from-eco-green to-eco-blue bg-clip-text text-transparent">
              Sustainable Finance
            </span>
            <span className="text-foreground"> Tools</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            Make responsible investment decisions with our comprehensive suite of ESG analytics, 
            impact investing, and sustainable finance tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="gap-2 bg-eco-green hover:bg-eco-green-dark">
              Start Investing Responsibly
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Explore Features
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl">
            <div className="flex flex-col items-center p-6 rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-md">
              <div className="p-3 rounded-full bg-eco-green/10 text-eco-green mb-4">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">ESG Investment Tracking</h3>
              <p className="text-sm text-muted-foreground text-center">
                Analyze and optimize your portfolio's ESG performance with comprehensive metrics.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-md">
              <div className="p-3 rounded-full bg-eco-blue/10 text-eco-blue mb-4">
                <BarChart4 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">Impact Investing</h3>
              <p className="text-sm text-muted-foreground text-center">
                Discover opportunities that align with your values and deliver measurable impact.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-lg border border-border bg-card shadow-sm transition-all hover:shadow-md">
              <div className="p-3 rounded-full bg-eco-earth/10 text-eco-earth mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium mb-2">Carbon Offset Tools</h3>
              <p className="text-sm text-muted-foreground text-center">
                Calculate your carbon footprint and invest in verified offset projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
