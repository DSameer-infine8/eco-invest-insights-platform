
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Sustainable Finance Platform</h1>
        <p className="text-xl text-gray-600 mb-8">Start making impactful investments today!</p>
        <Button asChild>
          <Link to="/impact-investing">Explore Impact Investing</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
