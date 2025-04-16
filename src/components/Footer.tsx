
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        <div>
          <h3 className="text-xl font-bold mb-4">Sustainable Finance Tools</h3>
          <p className="text-gray-400">
            Empowering investors to make financially sound decisions that contribute to environmental and social well-being.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-4">Features</h4>
          <ul className="space-y-2">
            <li><Link to="/esg-tracker" className="text-gray-400 hover:text-white transition-colors">ESG Investment Tracker</Link></li>
            <li><Link to="/green-bonds" className="text-gray-400 hover:text-white transition-colors">Green Bonds Analytics</Link></li>
            <li><Link to="/impact-investing" className="text-gray-400 hover:text-white transition-colors">Impact Investing Platform</Link></li>
            <li><Link to="/sustainable-budgeting" className="text-gray-400 hover:text-white transition-colors">Sustainable Budgeting App</Link></li>
            <li><Link to="/carbon-offset" className="text-gray-400 hover:text-white transition-colors">Carbon Offset Tools</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Guides</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 pt-8 mt-8 border-t border-gray-800">
        <p className="text-center text-gray-400">© 2025 Sustainable Finance Tools. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
