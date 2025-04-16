
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sustainable Finance for a Better Tomorrow
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Leverage AI-powered tools to make responsible investments, track ESG impact, and promote green financial literacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link to="/esg-tracker">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#features">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
