
import { BarChart3, Leaf, LineChart, PiggyBank, TreeDeciduous } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  const features = [
    {
      title: "ESG Investment Tracker",
      description: "Track and analyze ESG performance of your investments with our comprehensive tools and metrics.",
      icon: <BarChart3 className="h-6 w-6" />,
      linkTo: "/esg-tracker"
    },
    {
      title: "Green Bonds Analytics",
      description: "Analyze green bond performance, yields, and impact with real-time data and visualization tools.",
      icon: <LineChart className="h-6 w-6" />,
      linkTo: "/green-bonds"
    },
    {
      title: "Impact Investing Platform",
      description: "Discover and invest in opportunities aligned with your values and the UN Sustainable Development Goals.",
      icon: <Leaf className="h-6 w-6" />,
      linkTo: "/impact-investing"
    },
    {
      title: "Sustainable Budgeting App",
      description: "Manage your personal finances with a focus on sustainability and reducing your carbon footprint.",
      icon: <PiggyBank className="h-6 w-6" />,
      linkTo: "/sustainable-budgeting"
    },
    {
      title: "Carbon Offset Investment Tools",
      description: "Calculate, offset, and track your carbon footprint with verified offset projects.",
      icon: <TreeDeciduous className="h-6 w-6" />,
      linkTo: "/carbon-offset"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Hero />
      
      <div id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools to help you make sustainable financial decisions with confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                linkTo={feature.linkTo}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Sustainable Finance Tools?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">AI-powered tools that provide actionable insights for responsible investment decisions</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Robust ESG tracking and reporting capabilities</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Transparent methodology for all sustainability metrics</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Community of environmentally conscious investors</p>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="bg-green-50 p-6 rounded-md mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Impact</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-green-600">$500M+</p>
                      <p className="text-gray-600">Sustainable Investments Facilitated</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-green-600">25K+</p>
                      <p className="text-gray-600">Active Users</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-green-600">15%</p>
                      <p className="text-gray-600">Average ESG Score Improvement</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-green-600">100K+</p>
                      <p className="text-gray-600">Carbon Tons Offset</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Sustainable Finance Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of investors making a positive impact while achieving their financial goals.
          </p>
          <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            <Link to="/esg-tracker">Get Started Now</Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
