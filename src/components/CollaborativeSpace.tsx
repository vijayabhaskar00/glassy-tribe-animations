import { motion } from "framer-motion";
import { Users, MessageSquare, Video, Share2 } from "lucide-react";

export const CollaborativeSpace = () => {
  const features = [
    {
      icon: Users,
      title: "Group Study",
      description: "Form study groups and learn together",
    },
    {
      icon: MessageSquare,
      title: "Real-time Chat",
      description: "Instant communication with peers",
    },
    {
      icon: Video,
      title: "Video Sessions",
      description: "Face-to-face virtual meetings",
    },
    {
      icon: Share2,
      title: "Resource Sharing",
      description: "Share notes and study materials",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-blue-500/5" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
            Collaborative Learning Space
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Learn better together in our virtual collaborative environment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8 flex items-start space-x-6"
            >
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-4 rounded-lg">
                <feature.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};