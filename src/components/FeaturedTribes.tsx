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
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-pink-500/5" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Popular Tribes
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Join these thriving communities of students sharing similar interests and goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tribes.map((tribe, index) => (
            <motion.div
              key={tribe.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:scale-105 transition-all duration-300 backdrop-blur-md bg-white/5 border-white/10 overflow-hidden">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-colors">
                    <tribe.icon className="w-7 h-7 text-purple-400" />
                  </div>
                  <CardTitle className="text-white text-2xl">{tribe.title}</CardTitle>
                  <CardDescription className="text-gray-400">{tribe.description}</CardDescription>
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