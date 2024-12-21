import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Book, Code, Palette } from "lucide-react";

const tribes = [
  {
    title: "Computer Science",
    description: "Join fellow coders and tech enthusiasts",
    icon: Code,
    members: 1200,
  },
  {
    title: "Arts & Design",
    description: "Express your creativity with other artists",
    icon: Palette,
    members: 850,
  },
  {
    title: "Literature",
    description: "Discuss books and writing with bookworms",
    icon: Book,
    members: 950,
  },
  {
    title: "Study Groups",
    description: "Find study partners and ace your exams",
    icon: Users,
    members: 1500,
  },
];

export const FeaturedTribes = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl font-bold mb-4">Popular Tribes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join these thriving communities of students sharing similar interests and goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tribes.map((tribe, index) => (
            <motion.div
              key={tribe.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 backdrop-blur bg-white/80">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <tribe.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{tribe.title}</CardTitle>
                  <CardDescription>{tribe.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    {tribe.members.toLocaleString()} members
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};