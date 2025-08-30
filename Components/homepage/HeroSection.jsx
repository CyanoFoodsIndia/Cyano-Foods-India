import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Leaf, Heart, Globe, Sparkles, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden pt-24 sm:pt-24 lg:pt-24 pb-6 sm:pb-8 min-h-[92svh] md:min-h-[92svh] lg:min-h-[100svh]"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        <motion.div
          className="absolute top-20 left-6 sm:left-10 w-56 h-56 sm:w-64 sm:h-64 bg-emerald-100 rounded-full opacity-20 blur-xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-6 sm:right-10 w-64 h-64 sm:w-80 sm:h-80 bg-teal-100 rounded-full opacity-20 blur-xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 py-4 sm:py-6">
        <div className="text-center max-w-[92vw] md:max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 sm:mb-5"
          >
            <Badge className="inline-flex items-center bg-emerald-100 text-emerald-800 hover:bg-emerald-200 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium">
              <Sparkles className="w-4 h-4 mr-2" aria-hidden="true" />
              Empowering Health & Agriculture Naturally
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-bold text-gray-900 mb-5 leading-[1.1] lg:whitespace-nowrap text-[clamp(1.25rem,7vw,2.25rem)] sm:text-[clamp(1.75rem,6vw,3rem)] md:text-[clamp(2.25rem,5vw,4rem)] lg:text-[clamp(3rem,4vw,5rem)]"
          >
            Welcome to {" "}
            <span className="block lg:inline bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Cyano Foods India
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-1"
          >
            Building a healthier world by blending science, sustainability, and tradition. Founded with a vision to
            harness the power of Spirulina and other natural superfoods.
          </motion.p>

          {/* CTAs: aligned & equal height */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-stretch mb-8 sm:mb-10"
          >
            <Button
              size="lg"
              className="inline-flex items-center justify-center h-12 md:h-14 w-full sm:w-auto px-6 md:px-8 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500"
              aria-label="Explore Our Products"
            >
              Explore Our Products
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="inline-flex items-center justify-center h-12 md:h-14 w-full sm:w-auto px-6 md:px-8 border-emerald-600 text-emerald-600 hover:bg-emerald-50 rounded-full text-base md:text-lg font-semibold focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500"
              aria-label="Learn Our Story"
            >
              Learn Our Story
            </Button>
          </motion.div>

          {/* Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-2.5 sm:mb-3">
                <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-emerald-600" aria-hidden="true" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-0.5 sm:mb-1">Health Innovators</h3>
              <p className="text-gray-600 text-sm sm:text-base">With Spirulina at the core</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-2.5 sm:mb-3">
                <Leaf className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-teal-600" aria-hidden="true" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-0.5 sm:mb-1">Agricultural Reformers</h3>
              <p className="text-gray-600 text-sm sm:text-base">Sustainable solutions for farms</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-2.5 sm:mb-3">
                <Globe className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-0.5 sm:mb-1">Made in India</h3>
              <p className="text-gray-600 text-sm sm:text-base">Local strength, global vision</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-emerald-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-emerald-600 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
