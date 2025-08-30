import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Heart, Leaf, Globe, Award, Users } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: "Health Innovators",
      description: "With Spirulina at the core",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Leaf,
      title: "Agricultural Reformers",
      description: "Sustainable solutions for farms",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Globe,
      title: "Made in India",
      description: "Local strength, global vision",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Award,
      title: "Quality-First Approach",
      description: "Zero compromise promise",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Top Gradient Line */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="flex items-center gap-2 bg-teal-100 text-teal-800 text-sm px-4 py-2 rounded-full mb-6 w-fit">
              <Users className="w-4 h-4" />
              WHO WE ARE
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              A purpose-driven company committed to{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                health, sustainability, and innovation
              </span>
            </h2>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Cyano Foods India OPC Pvt Ltd is committed to health,
                sustainability, and innovation. We unlock the power of Spirulina
                and natural superfoods to craft healthcare and agricultural
                solutions.
              </p>

              <p>
                We are pioneers in Spirulina-based innovation, offering
                supplements, personal care products, and bio-agriculture
                formulas. Today, we are trusted by parents, farmers,
                entrepreneurs, and wellness seekers across India.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg">
                <p className="text-emerald-800 font-semibold italic">
                  "A healthier generation and a greener earth are not dreams—they
                  are decisions we make every day."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                    >
                      <value.icon className={`w-8 h-8 ${value.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 pt-16 border-t border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                2022
              </div>
              <p className="text-gray-600">Founded with a mission</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">100%</div>
              <p className="text-gray-600">Natural & Organic</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">India+</div>
              <p className="text-gray-600">Growing globally</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
