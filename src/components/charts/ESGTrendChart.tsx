
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Sample ESG trend data
const sampleData = [
  { month: 'Jan', esg: 65, benchmark: 60 },
  { month: 'Feb', esg: 67, benchmark: 61 },
  { month: 'Mar', esg: 70, benchmark: 62 },
  { month: 'Apr', esg: 68, benchmark: 62 },
  { month: 'May', esg: 72, benchmark: 63 },
  { month: 'Jun', esg: 76, benchmark: 64 },
  { month: 'Jul', esg: 78, benchmark: 64 },
  { month: 'Aug', esg: 75, benchmark: 65 },
  { month: 'Sep', esg: 80, benchmark: 66 },
  { month: 'Oct', esg: 82, benchmark: 67 },
  { month: 'Nov', esg: 85, benchmark: 68 },
  { month: 'Dec', esg: 87, benchmark: 69 },
];

interface ESGTrendChartProps {
  data?: typeof sampleData;
  title?: string;
  description?: string;
  className?: string;
}

export function ESGTrendChart({ 
  data = sampleData,
  title = "ESG Score Trend",
  description = "12-month historical ESG performance",
  className,
}: ESGTrendChartProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
              <XAxis dataKey="month" />
              <YAxis domain={[50, 100]} />
              <Tooltip 
                formatter={(value) => [`${value}`, 'Score']}
                contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px' }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="esg" 
                name="Your Portfolio" 
                stroke="#4B9560" 
                activeDot={{ r: 8 }} 
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="benchmark" 
                name="Industry Benchmark" 
                stroke="#3A7CA5" 
                strokeDasharray="5 5" 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
