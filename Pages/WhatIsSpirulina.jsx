import React from "react";
import { motion } from "framer-motion";
import { Leaf, Zap, Shield, Heart, Microscope, Globe, Award, TrendingUp } from "lucide-react";
import useScrollToTop from "../Components/useScrollToTop";

export default function WhatIsSpirulinaPage() {
  useScrollToTop(); 
  const nutritionalData = [
    { label: "Protein", value: "60-70%", icon: "💪", color: "emerald" },
    { label: "Calories", value: "290 kcal", icon: "🔥", color: "orange" },
    { label: "Iron", value: "158% RDI", icon: "🩸", color: "red" },
    { label: "Vitamin A", value: "220% RDI", icon: "👁️", color: "yellow" },
    { label: "Magnesium", value: "49% RDI", icon: "🦴", color: "purple" },
    { label: "Potassium", value: "39% RDI", icon: "❤️", color: "blue" }
  ];

  const benefits = [
    { icon: Shield, title: "Rich Protein Source", description: "60–70% protein with complete amino acid profile, perfect for vegetarians and athletes." },
    { icon: Zap, title: "Antioxidant Powerhouse", description: "Phycocyanin fights oxidative stress and inflammation, protecting cells from damage." },
    { icon: Heart, title: "Boosts Immunity", description: "Enhances macrophages, T-cells, and NK cells for stronger disease resistance." },
    { icon: TrendingUp, title: "Heart Health", description: "Lowers cholesterol, triglycerides, and blood pressure for cardiovascular wellness." }
  ];

  const historicalFacts = [
    { title: "Aztec Superfood", period: "Ancient Mexico", description: "Aztecs consumed Spirulina from Lake Texcoco, calling it 'tecuitlatl' - their primary protein source." },
    { title: "African Tradition", period: "Chad, Africa", description: "Kanembu people dried Spirulina into cakes called 'dihe', still consumed today for nutrition." },
    { title: "Space Food", period: "Modern Era", description: "NASA & ESA explored Spirulina for astronaut nutrition due to rapid growth and complete nutrition." }
  ];
  
  const bioactiveCompounds = [
    { name: "Phycocyanin", benefit: "Powerful antioxidant & anti-inflammatory", color: "bg-blue-100 text-blue-800" },
    { name: "Gamma-Linolenic Acid", benefit: "Essential fatty acid for inflammation", color: "bg-emerald-100 text-emerald-800" },
    { name: "Chlorophyll", benefit: "Detoxification & oxygen delivery", color: "bg-green-100 text-green-800" },
    { name: "Beta-Carotene", benefit: "Vitamin A precursor for eye health", color: "bg-orange-100 text-orange-800" },
    { name: "Polysaccharides", benefit: "Immune system boosters", color: "bg-purple-100 text-purple-800" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-transparent to-emerald-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl">
                <Microscope className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              What is <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">Spirulina?</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A microscopic blue-green algae (cyanobacteria) that's considered one of the world's most nutrient-rich superfoods, packed with protein, vitamins, minerals, and antioxidants.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Card */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="space-y-6"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-emerald-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Leaf className="w-6 h-6 text-emerald-600" />Nature's Perfect Food
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>• Blue-green algae classified as <strong>Arthrospira platensis & maxima</strong></p>
                  <p>• Available in powder, capsule, and tablet forms</p>
                  <p>• Contains 60-70% complete protein with all essential amino acids</p>
                  <p>• Rich in B-complex vitamins, vitamin A, K, E</p>
                  <p>• High in minerals: iron, magnesium, calcium, potassium</p>
                </div>
              </div>
            </motion.div>

            {/* Right Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.4 }} 
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6" />Why Spirulina?
                </h3>
                <div className="space-y-4">
                  {[
                    "Most nutrient-dense food on Earth",
                    "NASA-approved for space missions",
                    "Sustainable & environmentally friendly",
                    "Suitable for all ages and dietary needs"
                  ].map((item, i) => (
                    <div className="flex items-center gap-3" key={i}>
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">{i + 1}</span>
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nutrition Section */}
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
              Nutritional <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">Powerhouse</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Per 100g dry weight - discover why Spirulina is nature's most complete superfood
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nutritionalData.map((item, index) => (
              <motion.div 
                key={item.label} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: index * 0.1 }} 
                viewport={{ once: true }} 
                whileHover={{ scale: 1.05 }} 
                className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className={`text-2xl font-bold text-${item.color}-700 mb-2`}>{item.value}</h3>
                <p className={`text-${item.color}-600 font-medium`}>{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Key Health <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Science-backed benefits that make Spirulina the ultimate superfood
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={benefit.title} 
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6, delay: index * 0.2 }} 
                viewport={{ once: true }} 
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bioactive Compounds Section */}
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
              Bioactive <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">Compounds</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unique compounds that give Spirulina its extraordinary health benefits
            </p>
          </motion.div>

          <div className="space-y-6">
            {bioactiveCompounds.map((compound, index) => (
              <motion.div 
                key={compound.name} 
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6, delay: index * 0.1 }} 
                viewport={{ once: true }} 
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${compound.color} mb-2`}>
                      {compound.name}
                    </span>
                    <p className="text-gray-600">{compound.benefit}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ancient Wisdom, <span className="text-emerald-300">Modern Science</span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Spirulina has nourished civilizations for centuries, now validated by modern research
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {historicalFacts.map((fact, index) => (
              <motion.div 
                key={fact.title} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: index * 0.2 }} 
                viewport={{ once: true }} 
                className="bg-emerald-800/50 backdrop-blur-sm rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{fact.title}</h3>
                <p className="text-emerald-300 text-sm font-semibold mb-4">{fact.period}</p>
                <p className="text-emerald-100 leading-relaxed">{fact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
