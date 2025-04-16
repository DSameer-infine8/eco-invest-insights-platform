
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="py-4 px-6 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-primary">Sustainable Finance Tools</Link>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-primary transition-colors">Home</Link>
          <Link to="/esg-tracker" className="text-gray-700 hover:text-primary transition-colors">ESG Tracker</Link>
          <Link to="/green-bonds" className="text-gray-700 hover:text-primary transition-colors">Green Bonds</Link>
          <Link to="/impact-investing" className="text-gray-700 hover:text-primary transition-colors">Impact Investing</Link>
          <Link to="/sustainable-budgeting" className="text-gray-700 hover:text-primary transition-colors">Sustainable Budgeting</Link>
          <Link to="/carbon-offset" className="text-gray-700 hover:text-primary transition-colors">Carbon Offset</Link>
          <Button variant="default" size="sm">Sign In</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
