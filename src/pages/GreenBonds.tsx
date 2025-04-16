
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const GreenBonds = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Green Bonds Analytics
          </h1>
          <p className="text-xl text-gray-700">
            Analyze green bond performance, yields, and impact with real-time data and visualization tools.
          </p>
        </div>
      </div>
      
      <div className="py-12 container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8 text-center">Green Bonds Tools (Coming Soon)</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Market Dashboard</CardTitle>
              <CardDescription>Comprehensive overview of the green bond market</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Stay up-to-date with the latest green bond issuances, market trends, and sector analysis through interactive visualizations.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Yield Comparison</CardTitle>
              <CardDescription>Compare green bonds with traditional fixed income</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Analyze the financial performance of green bonds against conventional bonds to make informed investment decisions.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Impact Metrics</CardTitle>
              <CardDescription>Visualize the environmental impact of green bonds</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Track key impact metrics such as carbon emissions avoided, renewable energy generated, and other sustainability outcomes.</p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GreenBonds;
