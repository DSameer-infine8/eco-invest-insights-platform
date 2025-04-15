
import { MainLayout } from "@/components/layout/MainLayout";
import { StatCard } from "@/components/ui/stat-card";
import { ESGScoreChart } from "@/components/charts/ESGScoreChart";
import { ESGTrendChart } from "@/components/charts/ESGTrendChart";
import { LineChart, BarChart3, AlertTriangle, Leaf, TrendingUp, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const ESGTracker = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">ESG Investment Tracker</h1>
            <p className="text-muted-foreground">Monitor and optimize your portfolio's ESG performance</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button size="sm" className="gap-1 bg-eco-green hover:bg-eco-green-dark">
              <TrendingUp className="h-4 w-4" />
              Generate Report
            </Button>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <StatCard 
            title="Overall ESG Score" 
            value="76/100" 
            description="Better than 82% of peers" 
            icon={<LineChart className="h-4 w-4 text-eco-green" />} 
            trend={{ value: 12, positive: true }}
            tooltipText="Aggregate score based on environmental, social, and governance factors"
          />
          <StatCard 
            title="Environmental" 
            value="82/100" 
            description="Top performer in your portfolio" 
            icon={<Leaf className="h-4 w-4 text-chart-green" />} 
            trend={{ value: 8, positive: true }}
          />
          <StatCard 
            title="Social" 
            value="65/100" 
            description="Improvement opportunity" 
            icon={<BarChart3 className="h-4 w-4 text-chart-amber" />} 
            trend={{ value: 3, positive: true }}
          />
          <StatCard 
            title="Governance" 
            value="81/100" 
            description="Strong governance practices" 
            icon={<BarChart3 className="h-4 w-4 text-chart-blue" />} 
            trend={{ value: 5, positive: true }}
          />
        </div>

        <div className="grid gap-6 mb-6 grid-cols-1 lg:grid-cols-2">
          <ESGScoreChart />
          <ESGTrendChart />
        </div>

        <div className="mb-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Portfolio Holdings</h2>
              <TabsList>
                <TabsTrigger value="all">All Holdings</TabsTrigger>
                <TabsTrigger value="leaders">ESG Leaders</TabsTrigger>
                <TabsTrigger value="laggards">ESG Laggards</TabsTrigger>
                <TabsTrigger value="alerts">
                  Alerts
                  <Badge variant="destructive" className="ml-1">2</Badge>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>All Portfolio Holdings</CardTitle>
                  <CardDescription>ESG performance of all your investments</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="border rounded-md">
                    <div className="grid grid-cols-8 p-4 text-sm font-medium border-b bg-muted/50">
                      <div className="col-span-2">Company</div>
                      <div>Sector</div>
                      <div>E Score</div>
                      <div>S Score</div>
                      <div>G Score</div>
                      <div>ESG Rating</div>
                      <div>ESG Trend</div>
                    </div>
                    {/* Sample companies */}
                    <div className="grid grid-cols-8 p-4 text-sm border-b">
                      <div className="col-span-2 font-medium">GreenTech Solutions</div>
                      <div>Technology</div>
                      <div>92</div>
                      <div>85</div>
                      <div>78</div>
                      <div>
                        <Badge className="bg-green-600">AAA</Badge>
                      </div>
                      <div className="text-eco-green flex items-center">
                        <TrendingUp className="h-4 w-4 mr-1" /> Positive
                      </div>
                    </div>
                    <div className="grid grid-cols-8 p-4 text-sm border-b">
                      <div className="col-span-2 font-medium">Renewable Energy Co.</div>
                      <div>Energy</div>
                      <div>95</div>
                      <div>72</div>
                      <div>81</div>
                      <div>
                        <Badge className="bg-green-600">AAA</Badge>
                      </div>
                      <div className="text-eco-green flex items-center">
                        <TrendingUp className="h-4 w-4 mr-1" /> Positive
                      </div>
                    </div>
                    <div className="grid grid-cols-8 p-4 text-sm border-b">
                      <div className="col-span-2 font-medium">Sustainable Retail Group</div>
                      <div>Consumer</div>
                      <div>79</div>
                      <div>83</div>
                      <div>75</div>
                      <div>
                        <Badge className="bg-chart-blue">AA</Badge>
                      </div>
                      <div className="text-eco-green flex items-center">
                        <TrendingUp className="h-4 w-4 mr-1" /> Positive
                      </div>
                    </div>
                    <div className="grid grid-cols-8 p-4 text-sm border-b">
                      <div className="col-span-2 font-medium">Global Manufacturing Corp.</div>
                      <div>Industrial</div>
                      <div>56</div>
                      <div>62</div>
                      <div>72</div>
                      <div>
                        <Badge className="bg-chart-amber">BB</Badge>
                      </div>
                      <div className="text-muted-foreground">Neutral</div>
                    </div>
                    <div className="grid grid-cols-8 p-4 text-sm border-b">
                      <div className="col-span-2 font-medium">Fossil Resources Inc.</div>
                      <div>Energy</div>
                      <div>35</div>
                      <div>58</div>
                      <div>65</div>
                      <div>
                        <Badge variant="destructive">CCC</Badge>
                      </div>
                      <div className="text-destructive flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-1" /> Risk
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="leaders">
              <Card>
                <CardHeader>
                  <CardTitle>ESG Leaders</CardTitle>
                  <CardDescription>Your best performing ESG investments</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>ESG leaders content would appear here, showing top performers.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="laggards">
              <Card>
                <CardHeader>
                  <CardTitle>ESG Laggards</CardTitle>
                  <CardDescription>Investments with ESG improvement opportunities</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>ESG laggards content would appear here, showing poorest performers.</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="alerts">
              <Card>
                <CardHeader>
                  <CardTitle>ESG Alerts</CardTitle>
                  <CardDescription>Important notifications about your portfolio</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                      <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium mb-1">Environmental Controversy Detected</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Fossil Resources Inc. has been involved in a major environmental incident. 
                          This could impact the company's ESG score and stock performance.
                        </p>
                        <p className="text-sm font-medium">Detected: April 14, 2025</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                      <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium mb-1">Social Policy Violation</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Global Manufacturing Corp. has been cited for labor compliance violations 
                          at one of their major manufacturing facilities.
                        </p>
                        <p className="text-sm font-medium">Detected: April 10, 2025</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default ESGTracker;
