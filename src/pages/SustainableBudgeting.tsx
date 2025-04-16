
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SustainableBudgeting = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sustainable Budgeting App
          </h1>
          <p className="text-xl text-gray-700">
            Manage your personal finances with a focus on sustainability and reducing your carbon footprint.
          </p>
        </div>
      </div>
      
      <div className="py-12 container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8 text-center">Sustainable Budgeting Tools (Coming Soon)</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Carbon Footprint Calculator</CardTitle>
              <CardDescription>Track the environmental impact of your spending</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Our AI-powered tool analyzes your spending patterns and calculates the associated carbon emissions, helping you understand your environmental impact.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Sustainable Alternatives</CardTitle>
              <CardDescription>Discover eco-friendly product and service options</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Receive personalized recommendations for sustainable alternatives to your regular purchases, helping you make greener choices.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Sustainability Savings Plans</CardTitle>
              <CardDescription>Save money while reducing environmental impact</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Set up automated savings plans that invest in sustainable initiatives while helping you meet your financial goals.</p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SustainableBudgeting;
