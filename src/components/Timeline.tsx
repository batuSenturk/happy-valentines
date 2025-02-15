import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const memories = [
  {
    date: "3 Feb 2024",
    description: "when we were on facetime making AI photos of us together",
  },
  {
    date: "8 Feb 2024",
    description: "trying to find a room alone to give you the poem I wrote",
  },
  {
    date: "14 Feb 2024",
    description: "don't even know where to start about this. From seeing your cookies to grabbing you by the waist in the gym to the confession to the first kiss",
  },
  {
    date: "11 Mar 2024",
    description: "the first I love you at the park",
  },
  {
    date: "15 Mar 2024",
    description: "sitting on the bins at station park holding hands",
  },
  {
    date: "24 Mar 2024",
    description: "dancing together at the party as spidermans",
  },
  {
    date: "6 May 2024",
    description: "seeing the meercats at the Wildlife Park",
  },
  {
    date: "4 Jun 2024",
    description: "lying on the grass outside Viv's party talking about kissing",
  },
  {
    date: "14 Jun 2024",
    description: "the first date at Kibou",
  },
  {
    date: "27 Aug 2024",
    description: "trying to make the lipstick heart on our cheeks at Kim's",
  },
  {
    date: "15 Nov 2024",
    description: "our little photoshoot at the park",
  },
  {
    date: "30 Dec 2024",
    description: "watching Brooklyn 99 together until it was really late",
  },
  {
    date: "1 Jan 2025",
    description: "our lovely new year's kiss",
  },
  {
    date: "7 Jan 2025",
    description: "watching ballerina and playing with the cats at mine twice in a day",
  },
];

export const Timeline = () => {
  return (
    <section className="py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-romantic-dark text-center mb-12">
        Remember...
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