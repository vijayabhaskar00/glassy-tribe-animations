import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Dynamic background with gradient overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://cdn.dribbble.com/users/1162077/screenshots/4382010/animated-pattern.gif"
        >
          <source
            src="https://cdn.dribbble.com/users/1162077/screenshots/4382010/animated-pattern.gif"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-background/95 to-background/98" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="relative mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full blur-3xl opacity-20"
            />
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 animate-gradient bg-300% relative z-10">
              Student Tribe
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-purple-200/90 font-heading">
              Where Learning Meets Community
            </p>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300/80 mb-12 backdrop-blur-sm bg-black/20 p-4 sm:p-6 rounded-2xl"
          >
            Join the next generation of learners in our vibrant digital campus. Connect, collaborate, and grow together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg px-8 py-6 rounded-xl shadow-lg shadow-purple-500/25 w-full sm:w-auto">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="backdrop-blur-md bg-white/5 border-white/10 text-white text-lg px-8 py-6 rounded-xl hover:bg-white/10 w-full sm:w-auto">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] to-transparent pointer-events-none" />
    </section>
  );
};