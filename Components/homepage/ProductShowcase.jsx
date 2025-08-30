import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, Zap, Sparkles } from "lucide-react";

export default function ProductShowcase() {
  const products = [
    {
      name: "Spirulina Jelly Candies",
      subtitle: "High Protein • Natural Sweetness",
      description:
        "Delicious spirulina-infused energy bites loved by kids and adults. A perfect way to get daily nutrients in a tasty treat.",
      image: "././Images/jelly.png",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
    },
    {
      name: "Pure Organic Spirulina Powder",
      subtitle: "Antioxidant Rich • 100% Natural",
      description:
        "Premium spirulina packed with over 10 vitamins and minerals. A plant-based protein powerhouse for health.",
      image: "././Images/powder.png",
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      name: "Cyano Spirulina Personal Care",
      subtitle: "Natural Care • Gentle Formula",
      description:
        "Haircare and skincare enriched with spirulina. Natural, gentle, and effective for everyday use.",
      image: "././Images/personal.png",
      color: "from-blue-500 to-teal-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-emerald-100 text-emerald-800 text-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              CYANO FOODS COLLECTION
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Premium{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Spirulina Products
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Delicious, natural Spirulina products for health and wellness
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Image Area (Option 3: fixed container + contained image) */}
                <div className={`relative ${product.bgColor}`}>
                  <div className="flex items-center justify-center h-48 md:h-56 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-40 md:max-h-56 object-contain mx-auto transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Soft gradient sheen */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${product.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  {/* Corner icon */}
                  <div className="absolute top-4 right-4">
                    <div
                      className={`w-12 h-12 ${product.bgColor} rounded-xl flex items-center justify-center border border-white/30 shadow-sm`}
                    >
                      <Star className={`w-6 h-6 ${product.iconColor}`} />
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <Badge variant="outline" className="mb-4 text-xs">
                    {product.subtitle}
                  </Badge>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <Button className="w-full flex items-center justify-center gap-x-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full py-3 font-semibold group-hover:scale-105 transition-all duration-300">
                    Learn More
                    <Zap className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center items-center text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            "A healthier generation and a greener earth are not dreams — they
            are decisions we make every day."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
