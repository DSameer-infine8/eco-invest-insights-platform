
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ESGTracker = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ESG Investment Tracker
          </h1>
          <p className="text-xl text-gray-700">
            Track and analyze the ESG performance of your investments with comprehensive tools and metrics.
          </p>
        </div>
      </div>
      
      <div className="py-12 container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8 text-center">ESG Investment Tools (Coming Soon)</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio ESG Scoring</CardTitle>
              <CardDescription>Calculate and benchmark your portfolio's ESG score</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Our proprietary algorithm analyzes your holdings and provides comprehensive ESG scores based on multiple industry-leading methodologies.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Company-Level Analysis</CardTitle>
              <CardDescription>Detailed ESG breakdown for individual companies</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Drill down into specific companies to understand their environmental initiatives, social policies, and governance structures.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>ESG Controversy Alerts</CardTitle>
              <CardDescription>Stay informed about ESG issues affecting your investments</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Receive real-time notifications about controversies, policy changes, and other ESG-related news for companies in your portfolio.</p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ESGTracker;
