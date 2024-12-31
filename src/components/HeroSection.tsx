import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0A0F1E]" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-orange-500/10 animate-gradient bg-300%" />
        <div className="absolute inset-0 bg-[url('https://assets.website-files.com/6502af467b2a8c4ee8159a5b/6502af467b2a8c4ee8159a81_noise.png')] opacity-30 mix-blend-soft-light" />
      </div>
      
      {/* Enhanced floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
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
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-gradient-to-r from-[#9b87f5] via-[#D6BCFA] to-[#FFDEE2] rounded-full blur-3xl opacity-30"
            />
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-100 animate-gradient bg-300%">
              Student Tribe
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-[#E4D5FF] font-heading">
              Where Learning Meets Community
            </p>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-[#B4B9C5] mb-12 glass-effect p-8 rounded-2xl max-w-3xl mx-auto shadow-xl"
          >
            Join the next generation of learners in our vibrant digital campus. Connect, collaborate, and grow together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-8 py-6 rounded-xl w-full sm:w-auto group shadow-lg shadow-purple-500/25"
            >
              Get Started 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass-effect text-white text-lg px-8 py-6 rounded-xl hover:bg-white/10 w-full sm:w-auto shadow-lg"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0F1E] to-transparent pointer-events-none" />
    </section>
  );
};