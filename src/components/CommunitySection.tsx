import { motion } from "framer-motion";
import { Users, MessageSquare, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const CommunitySection = () => {
  const features = [
    {
      icon: Users,
      title: "Connect with Peers",
      description: "Find and connect with like-minded students from across the globe",
    },
    {
      icon: MessageSquare,
      title: "Engage in Discussions",
      description: "Participate in meaningful conversations about your interests and studies",
    },
    {
      icon: Heart,
      title: "Build Relationships",
      description: "Create lasting friendships and professional connections",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Join Our Vibrant Community
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Connect with fellow students, share experiences, and grow together in our inclusive community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full backdrop-blur-md bg-white/5 border-white/10 hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <feature.icon className="w-12 h-12 mx-auto mb-6 text-blue-400" />
                  <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};