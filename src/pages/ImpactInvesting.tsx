
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ImpactInvesting = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Impact Investing Platform
          </h1>
          <p className="text-xl text-gray-700">
            Discover and invest in opportunities aligned with your values and the UN Sustainable Development Goals.
          </p>
        </div>
      </div>
      
      <div className="py-12 container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8 text-center">Impact Investing Tools (Coming Soon)</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Opportunity Marketplace</CardTitle>
              <CardDescription>Browse impact investing opportunities across sectors</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Explore a curated marketplace of impact investments spanning renewable energy, sustainable agriculture, affordable housing, and more.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>SDG Alignment Scoring</CardTitle>
              <CardDescription>See how investments align with global goals</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Our proprietary algorithm maps investment opportunities to the 17 UN Sustainable Development Goals, helping you invest in line with your values.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Impact Reporting</CardTitle>
              <CardDescription>Track and share your impact investments</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Generate comprehensive impact reports that measure and visualize the social and environmental outcomes of your investments.</p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ImpactInvesting;
