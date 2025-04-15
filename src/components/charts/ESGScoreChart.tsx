
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Sample ESG score data
const sampleData = [
  { category: 'Environment', score: 78, benchmark: 65 },
  { category: 'Social', score: 65, benchmark: 62 },
  { category: 'Governance', score: 82, benchmark: 70 },
  { category: 'Controversy', score: 95, benchmark: 80 },
  { category: 'Climate', score: 85, benchmark: 60 },
];

interface ESGScoreChartProps {
  data?: typeof sampleData;
  title?: string;
  description?: string;
  className?: string;
}

export function ESGScoreChart({ 
  data = sampleData,
  title = "ESG Score Breakdown",
  description = "Portfolio ESG performance compared to industry benchmark",
  className,
}: ESGScoreChartProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius="70%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="category" />
              <Tooltip 
                formatter={(value) => [`${value}`, 'Score']}
                labelFormatter={(label) => `${label} Rating`}
                contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px' }}
              />
              <Radar 
                name="Your Portfolio" 
                dataKey="score" 
                stroke="#4B9560" 
                fill="#4B9560" 
                fillOpacity={0.4} 
              />
              <Radar 
                name="Benchmark" 
                dataKey="benchmark" 
                stroke="#3A7CA5" 
                fill="#3A7CA5" 
                fillOpacity={0.2} 
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
