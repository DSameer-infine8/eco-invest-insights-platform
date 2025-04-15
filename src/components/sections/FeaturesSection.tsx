
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart4, 
  TreeDeciduous, 
  PiggyBank, 
  Globe, 
  LineChart,
  ArrowUpRight,
  Newspaper,
  BadgeDollarSign,
  Building,
  BarChart3,
  Bell,
  TrendingUp
} from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Comprehensive Sustainable Finance Tools</h2>
          <p className="text-muted-foreground text-lg">
            Our platform provides everything you need to make responsible investment decisions
            and track your environmental, social, and governance impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* ESG Investment Tracker */}
          <Card className="border border-border">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-md bg-green-50 text-eco-green">
                  <LineChart className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
              </div>
              <CardTitle className="mt-4">ESG Investment Tracker</CardTitle>
              <CardDescription>
                Monitor and analyze the ESG performance of your investment portfolio
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-eco-green">•</span>
                  Portfolio ESG score calculation and benchmarking
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-eco-green">•</span>
                  Company-level ESG performance analysis
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-eco-green">•</span>
                  <div>
                    Automated alerts for ESG controversies
                    <span className="ml-2 inline-flex items-center rounded-full bg-eco-green/10 px-2 py-0.5 text-xs font-medium text-eco-green">
                      <Bell className="mr-1 h-3 w-3" />
                      Alerts
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-eco-green">•</span>
                  Custom ESG screening criteria
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-eco-green">•</span>
                  Historical ESG performance trends
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Green Bonds Analytics */}
          <Card className="border border-border">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-md bg-blue-50 text-eco-blue">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
              </div>
              <CardTitle className="mt-4">Green Bonds Analytics</CardTitle>
              <CardDescription>
                Analyze and compare green bonds with traditional investments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-eco-blue">•</span>
                  Green bond market overview dashboard
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-eco-blue">•</span>
                  Yield comparison with traditional bonds
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-eco-blue">•</span>
                  <div>
                    Impact metrics visualization
                    <span className="ml-2 inline-flex items-center rounded-full bg-eco-blue/10 px-2 py-0.5 text-xs font-medium text-eco-blue">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      Metrics
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-eco-blue">•</span>
                  Project allocation breakdown
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-eco-blue">•</span>
                  Risk assessment tools
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Impact Investing Platform */}
          <Card className="border border-border">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-md bg-purple-50 text-purple-600">
                  <Globe className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
              </div>
              <CardTitle className="mt-4">Impact Investing Platform</CardTitle>
              <CardDescription>
                Discover investments that align with your values and SDGs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-purple-600">•</span>
                  Impact investment opportunity marketplace
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-purple-600">•</span>
                  SDG alignment scoring
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-purple-600">•</span>
                  <div>
                    Impact measurement and reporting
                    <span className="ml-2 inline-flex items-center rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-600">
                      <BarChart4 className="mr-1 h-3 w-3" />
                      Reports
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-purple-600">•</span>
                  Due diligence toolkits
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-purple-600">•</span>
                  Performance benchmarking
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Sustainable Budgeting App */}
          <Card className="border border-border">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-md bg-amber-50 text-amber-600">
                  <PiggyBank className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
              </div>
              <CardTitle className="mt-4">Sustainable Budgeting App</CardTitle>
              <CardDescription>
                Track the environmental impact of your personal finances
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-amber-600">•</span>
                  Carbon footprint calculation of spending habits
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-amber-600">•</span>
                  Sustainable alternatives recommendations
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-amber-600">•</span>
                  <div>
                    Goal setting for reducing financial environmental impact
                    <span className="ml-2 inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-600">
                      <BadgeDollarSign className="mr-1 h-3 w-3" />
                      Goals
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-amber-600">•</span>
                  Automated sustainability savings plans
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-amber-600">•</span>
                  Community challenges and comparisons
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Carbon Offset Investment Tools */}
          <Card className="border border-border">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-md bg-green-50 text-eco-green-dark">
                  <TreeDeciduous className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
              </div>
              <CardTitle className="mt-4">Carbon Offset Investment Tools</CardTitle>
              <CardDescription>
                Offset your carbon footprint through verified projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-eco-green-dark">•</span>
                  Carbon offset project marketplace
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-eco-green-dark">•</span>
                  Verification and certification tracking
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-eco-green-dark">•</span>
                  <div>
                    Personal/corporate carbon footprint calculator
                    <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-eco-green-dark">
                      <Building className="mr-1 h-3 w-3" />
                      Corporate
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-eco-green-dark">•</span>
                  Automated offset subscription services
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-eco-green-dark">•</span>
                  Impact visualization and reporting
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* AI Resources */}
          <Card className="border border-border">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-md bg-indigo-50 text-indigo-600">
                  <Newspaper className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
              </div>
              <CardTitle className="mt-4">AI-Powered Market Insights</CardTitle>
              <CardDescription>
                Leverage AI for sustainable investment research and news analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-indigo-600">•</span>
                  ESG news sentiment analysis
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-indigo-600">•</span>
                  Sustainable investment trend forecasting
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-indigo-600">•</span>
                  <div>
                    Personalized ESG investment recommendations
                    <span className="ml-2 inline-flex items-center rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-600">
                      <Building className="mr-1 h-3 w-3" />
                      AI
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-indigo-600">•</span>
                  Risk analysis and flagging
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-0.5 text-indigo-600">•</span>
                  Regulatory compliance monitoring
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
