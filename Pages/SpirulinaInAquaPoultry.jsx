import React from "react";
import { motion } from "framer-motion";
import { Fish, Egg, Shield, Beaker, Target } from "lucide-react";
import useScrollToTop from "../Components/useScrollToTop";

export default function SpirulinaInAquaPoultryPage() {
  useScrollToTop(); 
  const aquaBenefits = [
    { title: "Improved FCR", description: "15-20% better Feed Conversion Ratio - less feed, reducing costs.", stat: "15-20% Better" },
    { title: "Faster Growth", description: "Accelerated growth rates, especially in juveniles and moulting shrimp.", stat: "Enhanced Speed" },
    { title: "Reduced Mortality", description: "Stronger immune systems lead to lower disease impact and higher survival.", stat: "Lower Deaths" },
    { title: "Disease Management", description: "Natural resistance to bacteria and viruses without antibiotics.", stat: "Natural Protection" }
  ];

  const poultryResults = {
    broilers: [
      { metric: "FCR Improvement", value: "5-15%", description: "Better feed efficiency" },
      { metric: "Growth Rate", value: "+5-12%", description: "Higher body weight" },
      { metric: "Meat Quality", value: "Enhanced", description: "Higher omega-3s, better taste" },
      { metric: "Mortality", value: "-12-15%", description: "Stronger immunity" }
    ],
    layers: [
      { metric: "Egg Production", value: "+10-15%", description: "More eggs per bird" },
      { metric: "Egg Quality", value: "Superior", description: "Rich yolk color, stronger shells" },
      { metric: "Feed Efficiency", value: "Improved", description: "Better FCR" },
      { metric: "Health", value: "Enhanced", description: "Fewer disease outbreaks" }
    ]
  };

  const whitegutTreatment = [
    { ingredient: "Spirulina", dosage: "3-5% in feed (up to 10%)", benefit: "Restores gut health, boosts immunity" },
    { ingredient: "Probiotics", dosage: "Bacillus & Lactobacillus", benefit: "Beneficial bacteria colonization" },
    { ingredient: "Vitamin C", dosage: "500-1000 mg/kg feed", benefit: "Antioxidant support, stress reduction" },
    { ingredient: "Garlic Extract", dosage: "1-2% natural antibacterial", benefit: "Pathogenic bacteria control" }
  ];

  const nutritionalBenefits = [
    "Protein-Rich (60-70%) with balanced amino acids",
    "Omega-3 & 6 fatty acids for healthy development",
    "Vitamins A, B, C, E for growth and immunity",
    "Minerals: calcium, magnesium, iron, phosphorus",
    "Phycocyanin & carotenoids for antioxidant protection",
    "Natural pigmentation enhancement"
  ];

  const environmentalBenefits = [
    "Reduced waste through improved digestibility",
    "Better pond health with oxygen stabilisation",
    "Sustainable alternative to fishmeal",
    "Lower carbon footprint vs conventional feeds",
    "Absorbs ammonia & nitrates from water",
    "Supports eco-friendly farming practices"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-cyan-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center gap-4 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl">
                <Fish className="w-10 h-10 text-white" />
              </div>
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl flex items-center justify-center shadow-2xl">
                <Egg className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Spirulina in{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Aqua & Poultry
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Enhanced growth rates, superior disease resistance, and improved feed conversion for sustainable farming success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ✅ Aquaculture Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Aquaculture{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Benefits
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming fish and shrimp farming with superior nutrition and natural protection.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {aquaBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{benefit.title}</h3>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">{benefit.stat}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Nutritional + Environmental Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Beaker className="w-6 h-6 text-blue-600" />Nutritional Benefits
                </h3>
                <div className="space-y-3">
                  {nutritionalBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-600" />Environmental Benefits
                </h3>
                <div className="space-y-3">
                  {environmentalBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ✅ White Gut Disease Treatment */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              White Gut Disease{" "}
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                Treatment
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Natural, effective solution for WGD in fish and shrimp through targeted nutrition.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Spirulina Treatment Formula</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whitegutTreatment.map((treatment, index) => (
                <motion.div
                  key={treatment.ingredient}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg text-center"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{treatment.ingredient}</h4>
                  <p className="text-orange-600 font-semibold mb-3">{treatment.dosage}</p>
                  <p className="text-gray-600 text-sm">{treatment.benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ✅ Poultry Performance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Poultry{" "}
              <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                Performance
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven results in broiler meat production and layer egg quality.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Broilers */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
                  <Target className="w-8 h-8 text-orange-600" />Broilers (Meat Birds)
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {poultryResults.broilers.map((result, index) => (
                    <motion.div
                      key={result.metric}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl p-4 text-center shadow-lg"
                    >
                      <h4 className="font-bold text-gray-900 mb-2">{result.metric}</h4>
                      <p className="text-2xl font-bold text-orange-600 mb-2">{result.value}</p>
                      <p className="text-gray-600 text-sm">{result.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Layers */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-3xl p-8 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
                  <Egg className="w-8 h-8 text-amber-600" />Layers (Egg Birds)
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {poultryResults.layers.map((result, index) => (
                    <motion.div
                      key={result.metric}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl p-4 text-center shadow-lg"
                    >
                      <h4 className="font-bold text-gray-900 mb-2">{result.metric}</h4>
                      <p className="text-2xl font-bold text-amber-600 mb-2">{result.value}</p>
                      <p className="text-gray-600 text-sm">{result.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}