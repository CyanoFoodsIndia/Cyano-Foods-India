import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Zap, Shield, Heart, Leaf, CheckCircle, Star } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Zap,
      title: "High Protein Content",
      description: "Plant-based protein for optimal health",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Rich in Antioxidants",
      description: "Strengthens your immune system",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Heart,
      title: "Essential Nutrients",
      description: "Vitamins and minerals for energy",
      color: "text-red-600",
      bgColor: "bg-red-50",
      gradient: "from-red-500 to-rose-500",
    },
    {
      icon: CheckCircle,
      title: "Safe & Pure",
      description: "Zero preservatives, clean nutrition",
      color: "text-green-600",
      bgColor: "bg-green-50",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Produced with sustainability in mind",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      icon: Star,
      title: "Nutrient Dense",
      description: "Most complete superfood on Earth",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      gradient: "from-blue-500 to-indigo-500",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="benefits">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-5 select-none" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="inline-flex items-center bg-emerald-100 text-emerald-800 text-sm px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 mr-2" aria-hidden="true" />
              WHY CHOOSE SPIRULINA
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              The Power of {" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Natural Superfood
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlock the benefits of nature's most complete superfood
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative rounded-2xl focus-within:ring-2 focus-within:ring-emerald-500">
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${benefit.gradient}`} />

                <CardContent className="p-8 text-center">
                  <div
                    className={`w-20 h-20 ${benefit.bgColor} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <benefit.icon className={`w-10 h-10 ${benefit.color}`} aria-hidden="true" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>

                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Spirulina Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <Card className="border-0 shadow-xl overflow-hidden rounded-2xl">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">Pure Organic Spirulina</h3>
                  <p className="text-lg text-emerald-100 leading-relaxed mb-6">
                    A natural, blue-green microalgae and one of the most nutrient-dense superfoods on Earth.
                    Cultivated in mineral-rich water without chemicals, packed with plant-based protein,
                    amino acids, vitamins, minerals, and antioxidants.
                  </p>
                  <p className="text-emerald-100">
                    Sustainably produced without synthetic fertilizers or preservatives,
                    it preserves its full nutritional profile and remains gentle on the environment.
                  </p>
                </div>

                <div className="relative">
                  <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm will-change-transform">
                    <Leaf className="w-32 h-32 text-white/80" aria-hidden="true" />
                  </div>
                  <div className="absolute inset-0 bg-white/5 rounded-full animate-pulse" aria-hidden />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
