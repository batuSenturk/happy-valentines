import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const memories = [
  {
    date: "First Meeting",
    description: "The day our eyes met and our story began",
  },
  {
    date: "First Date",
    description: "A magical evening that marked the start of our journey",
  },
  {
    date: "First Kiss",
    description: "A moment that made time stand still",
  },
  {
    date: "Moving In Together",
    description: "Creating our home and sharing our lives",
  },
];

export const Timeline = () => {
  return (
    <section className="py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-romantic-dark text-center mb-12">
        Remember When...
      </h2>
      <div className="max-w-3xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-romantic/50" />
        
        {memories.map((memory, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`flex items-center mb-12 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-romantic-dark rounded-full" />
            
            {/* Content */}
            <div className={`w-1/2 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}>
              <Card className="bg-white/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-romantic-dark">{memory.date}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-romantic-dark/80">{memory.description}</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};