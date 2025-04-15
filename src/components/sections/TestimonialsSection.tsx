
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    quote: "EcoInvest Insights has transformed how we approach ESG integration in our investment strategy. The analytics are comprehensive and intuitive.",
    author: "Sarah Johnson",
    role: "Portfolio Manager, Green Horizon Funds",
    avatar: "/placeholder.svg"
  },
  {
    quote: "The impact measurement tools have helped us quantify and report our sustainable investments with unprecedented clarity and accuracy.",
    author: "Michael Chen",
    role: "Director of Impact Investing, Future Capital",
    avatar: "/placeholder.svg"
  },
  {
    quote: "As a financial advisor focused on sustainable options, this platform has been invaluable for helping my clients align their investments with their values.",
    author: "Elena Rodriguez",
    role: "Independent Financial Advisor",
    avatar: "/placeholder.svg"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Trusted by Leading Sustainable Investors</h2>
          <p className="text-muted-foreground text-lg">
            See why investment professionals and individual investors choose our platform for their sustainable finance needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-none shadow-md">
              <CardContent className="pt-6">
                <QuoteIcon className="h-8 w-8 text-eco-green/20 mb-4" />
                <p className="text-lg mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
