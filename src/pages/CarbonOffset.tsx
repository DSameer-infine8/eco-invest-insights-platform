
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CarbonOffset = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Carbon Offset Investment Tools
          </h1>
          <p className="text-xl text-gray-700">
            Calculate, offset, and track your carbon footprint with verified offset projects.
          </p>
        </div>
      </div>
      
      <div className="py-12 container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8 text-center">Carbon Offset Tools (Coming Soon)</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Project Marketplace</CardTitle>
              <CardDescription>Browse verified carbon offset projects</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Explore a curated marketplace of verified carbon offset projects across reforestation, renewable energy, methane capture, and more.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Carbon Footprint Calculator</CardTitle>
              <CardDescription>Measure your personal or business carbon emissions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Our comprehensive calculator helps you quantify your carbon footprint across travel, home energy use, food consumption, and more.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Offset Subscription Service</CardTitle>
              <CardDescription>Automatically offset your carbon footprint</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Set up recurring investments in carbon offset projects based on your estimated monthly emissions for effortless climate action.</p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CarbonOffset;
