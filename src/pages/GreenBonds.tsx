
import { MainLayout } from "@/components/layout/MainLayout";
import { StatCard } from "@/components/ui/stat-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BadgeDollarSign, TrendingUp, BarChart3, ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Sample green bonds market data
const marketData = [
  { category: 'Renewable Energy', value: 45, lastYear: 38 },
  { category: 'Clean Transportation', value: 25, lastYear: 22 },
  { category: 'Sustainable Water', value: 15, lastYear: 12 },
  { category: 'Green Buildings', value: 10, lastYear: 8 },
  { category: 'Forestry & Agriculture', value: 5, lastYear: 4 },
];

// Sample yield comparison data
const yieldData = [
  { name: '1Y', greenBonds: 2.1, traditionalBonds: 1.8 },
  { name: '3Y', greenBonds: 2.6, traditionalBonds: 2.3 },
  { name: '5Y', greenBonds: 3.2, traditionalBonds: 2.9 },
  { name: '7Y', greenBonds: 3.8, traditionalBonds: 3.5 },
  { name: '10Y', greenBonds: 4.2, traditionalBonds: 3.9 },
];

const GreenBonds = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Green Bonds Analytics</h1>
            <p className="text-muted-foreground">Analyze green bonds market trends and opportunities</p>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" className="gap-1 bg-eco-green hover:bg-eco-green-dark">
              <ArrowRightLeft className="h-4 w-4" />
              Compare Bonds
            </Button>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-6">
          <StatCard 
            title="Green Bonds Market Size" 
            value="$1.2 Trillion" 
            description="Total outstanding green bonds globally" 
            icon={<BadgeDollarSign className="h-4 w-4 text-eco-green" />} 
            trend={{ value: 22, positive: true }}
          />
          <StatCard 
            title="Average Green Premium" 
            value="-5 to -10 bps" 
            description="Yield compared to conventional bonds" 
            icon={<TrendingUp className="h-4 w-4 text-chart-blue" />} 
            trend={{ value: 3, positive: true }}
          />
          <StatCard 
            title="Annual Issuance" 
            value="$580 Billion" 
            description="New green bonds issued this year" 
            icon={<BarChart3 className="h-4 w-4 text-chart-green" />} 
            trend={{ value: 15, positive: true }}
          />
        </div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 mb-6">
          {/* Market Allocation */}
          <Card>
            <CardHeader>
              <CardTitle>Green Bonds Market Allocation</CardTitle>
              <CardDescription>Breakdown by project category (%)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={marketData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" name="Current Year (%)" fill="#4B9560" />
                    <Bar dataKey="lastYear" name="Last Year (%)" fill="#3A7CA5" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Yield Comparison */}
          <Card>
            <CardHeader>
              <CardTitle>Yield Comparison</CardTitle>
              <CardDescription>Green bonds vs. traditional bonds yields (%)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={yieldData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="greenBonds" name="Green Bonds (%)" fill="#4B9560" />
                    <Bar dataKey="traditionalBonds" name="Traditional Bonds (%)" fill="#A18E6F" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-6">
          <Tabs defaultValue="featured" className="w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Green Bond Opportunities</h2>
              <TabsList>
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="new">New Issues</TabsTrigger>
                <TabsTrigger value="highImpact">High Impact</TabsTrigger>
                <TabsTrigger value="highYield">High Yield</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="featured">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Featured Green Bonds</CardTitle>
                  <CardDescription>Top recommended green bond investments</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="border rounded-md">
                    <div className="grid grid-cols-7 p-4 text-sm font-medium border-b bg-muted/50">
                      <div className="col-span-2">Bond Name</div>
                      <div>Issuer</div>
                      <div>Category</div>
                      <div>Yield</div>
                      <div>Maturity</div>
                      <div>Impact Rating</div>
                    </div>
                    {/* Sample bonds */}
                    <div className="grid grid-cols-7 p-4 text-sm border-b">
                      <div className="col-span-2 font-medium">Global Climate Bond 2035</div>
                      <div>World Bank</div>
                      <div>Climate Adaptation</div>
                      <div>3.45%</div>
                      <div>2035</div>
                      <div className="text-eco-green flex items-center">
                        <span className="flex">★★★★★</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 p-4 text-sm border-b">
                      <div className="col-span-2 font-medium">Green Energy Fund 2030</div>
                      <div>EcoEnergy Group</div>
                      <div>Renewable Energy</div>
                      <div>4.12%</div>
                      <div>2030</div>
                      <div className="text-eco-green flex items-center">
                        <span className="flex">★★★★★</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 p-4 text-sm border-b">
                      <div className="col-span-2 font-medium">Sustainable Infrastructure Bond</div>
                      <div>GreenInfra Corp</div>
                      <div>Green Buildings</div>
                      <div>3.87%</div>
                      <div>2033</div>
                      <div className="text-eco-green flex items-center">
                        <span className="flex">★★★★☆</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 p-4 text-sm border-b">
                      <div className="col-span-2 font-medium">Clean Water Initiative 2028</div>
                      <div>Aqua Solutions</div>
                      <div>Water Management</div>
                      <div>3.22%</div>
                      <div>2028</div>
                      <div className="text-eco-green flex items-center">
                        <span className="flex">★★★★☆</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 p-4 text-sm border-b">
                      <div className="col-span-2 font-medium">Circular Economy Bond</div>
                      <div>SustainCycle Finance</div>
                      <div>Waste Management</div>
                      <div>4.05%</div>
                      <div>2031</div>
                      <div className="text-eco-green flex items-center">
                        <span className="flex">★★★★☆</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="new">
              <Card>
                <CardHeader>
                  <CardTitle>New Green Bond Issues</CardTitle>
                  <CardDescription>Recently issued green bonds available for investment</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>New green bond issues would appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="highImpact">
              <Card>
                <CardHeader>
                  <CardTitle>High Impact Green Bonds</CardTitle>
                  <CardDescription>Bonds with the highest environmental and social impact</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>High impact green bonds would appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="highYield">
              <Card>
                <CardHeader>
                  <CardTitle>High Yield Green Bonds</CardTitle>
                  <CardDescription>Green bonds with attractive yields</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>High yield green bonds would appear here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default GreenBonds;
