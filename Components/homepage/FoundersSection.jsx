import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Users, Quote, Leaf, Heart, Globe } from "lucide-react";

export default function FoundersSection() {
  const founders = [
    {
      name: "Swathi Jandhyala",
      role: "Founder & CEO",
      image:
        "././Images/profile female.png",
      vision: [
        "Make chemical-free, plant-based nutrition accessible to every family.",
        "Empower farmers with natural, soil-enriching alternatives.",
        "Transform Spirulina into a household name for health and wellness.",
        "Pioneered awareness campaigns highlighting Spirulina’s role in combating malnutrition.",
      ],
      quote:
        "Real change starts from the root — whether it's our food, our soil, or our values.",
      description:
        "A passionate innovator, entrepreneur, and advocate for natural health and sustainable agriculture. With deep-rooted belief in nature's healing power and a background in Spirulina research.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Sastry Jandhyala",
      role: "Co-Founder",
      image:
        "././Images/profile male.png",
      vision: [
        "Cypro Jill Jelly and a diverse range of organic personal care products.",
        "Crennis – Nature Veda, a bio-solution brand for soil, pest, and crop management.",
        "A growing network of Spirulina farmers, entrepreneurs, and wellness advocates across India.",
      ],
      quote:
        "Our work is not just business — it is a responsibility to the next generation.",
      description:
        "A visionary entrepreneur passionate about natural health and sustainable agriculture. With rural roots and hands-on natural farming experience, champions Spirulina as a superfood for public health.",
      gradient: "from-blue-500 to-teal-500",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="founders">
      {/* Soft animated blobs */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-purple-100 rounded-full opacity-20 blur-xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-60 h-60 bg-teal-100 rounded-full opacity-20 blur-xl"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -40, 0], y: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="inline-flex items-center bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4 mr-2" aria-hidden="true" />
              MEET OUR FOUNDERS
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Visionary Leaders Behind {" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Cyano Foods India
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate innovators driving our mission for a healthier, more sustainable future
            </p>
          </motion.div>
        </div>

        {/* Founders grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-2xl focus-within:ring-2 focus-within:ring-emerald-500">
                <div className={`h-2 bg-gradient-to-r ${founder.gradient}`} />
                <CardContent className="p-0">
                  <div className="p-8 pb-0">
                    <div className="flex items-center gap-6 mb-8">
                      <div className="relative">
                        <img
                          src={founder.image}
                          alt={`${founder.name} portrait`}
                          loading="lazy"
                          className="w-24 h-24 rounded-2xl object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300 will-change-transform"
                        />
                        <div
                          className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r ${founder.gradient} rounded-full flex items-center justify-center border-2 border-white`}
                        >
                          <Heart className="w-4 h-4 text-white" aria-hidden="true" />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                        <Badge variant="outline" className="text-sm">
                          {founder.role}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">{founder.description}</p>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Leaf className="w-5 h-5 text-emerald-600 mr-2" aria-hidden="true" />
                        Key Contributions:
                      </h4>
                      <ul className="space-y-2">
                        {founder.vision.map((item) => (
                          <li key={item} className="flex items-start">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={`bg-gradient-to-r ${founder.gradient} p-6 text-white relative`}>
                    <Quote className="w-8 h-8 text-white/30 absolute top-4 left-4" aria-hidden="true" />
                    <p className="text-lg italic font-medium pl-8">“{founder.quote}”</p>
                    <p className="text-right text-white/80 mt-2 font-medium">— {founder.name}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="border-0 shadow-lg bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl">
            <CardContent className="p-8">
              <Globe className="w-12 h-12 text-emerald-600 mx-auto mb-4" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join the Green Revolution</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the healing power of Spirulina and sustainable solutions with Cyano Foods India.
                Together, let's build a healthier, chemical-free future for families, farms, and the planet.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
