
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { HandHeart, Globe, Sprout } from "lucide-react";

const impactData = [
  { sector: "Clean Energy", impact: 85 },
  { sector: "Education", impact: 65 },
  { sector: "Healthcare", impact: 75 },
  { sector: "Sustainable Ag", impact: 55 },
  { sector: "Water", impact: 45 },
];

const chartConfig = {
  impact: {
    label: "Impact Score",
    theme: {
      light: "#8B5CF6",
      dark: "#A78BFA",
    },
  },
};

const ImpactInvesting = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold mb-8">Impact Investing</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl flex items-center gap-2">
              <HandHeart className="h-6 w-6 text-primary" />
              Social Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$2.5T</p>
            <p className="text-muted-foreground">Global Market Size</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Globe className="h-6 w-6 text-primary" />
              Global Reach
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">120+</p>
            <p className="text-muted-foreground">Countries</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Sprout className="h-6 w-6 text-primary" />
              Green Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">5000+</p>
            <p className="text-muted-foreground">Active Projects</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Impact by Sector</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={impactData}>
                  <XAxis dataKey="sector" />
                  <YAxis />
                  <Bar
                    dataKey="impact"
                    fill="var(--primary)"
                    radius={[4, 4, 0, 0]}
                  />
                  <ChartTooltip />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImpactInvesting;
