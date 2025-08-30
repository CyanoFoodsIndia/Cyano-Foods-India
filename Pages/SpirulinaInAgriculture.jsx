import React from "react";
import { motion } from "framer-motion";
import { Sprout, Shield, Droplets, TrendingUp, Leaf, TreePine, Beaker, Target } from "lucide-react";
import useScrollToTop from "../Components/useScrollToTop";

export default function SpirulinaInAgriculturePage() {
  useScrollToTop(); 
  const benefits = [
    { icon: Shield, title: "Weed Suppression", description: "Releases allelopathic compounds that naturally inhibit weed seed germination.", stat: "Natural Herbicide" },
    { icon: TreePine, title: "Pest & Disease Resistance", description: "Contains biocidal compounds that strengthen crop immunity and reduce pests.", stat: "Chemical-Free" },
    { icon: Droplets, title: "Environmental Impact", description: "Replaces chemical fertilizers, lowers emissions, prevents runoff - a climate-smart solution.", stat: "Lower Emissions" },
    { icon: TrendingUp, title: "Soil Health", description: "Improves soil fertility, structure, pH, and microbial health while enhancing nutrient availability.", stat: "Healthier Soil" }
  ];

  const soilBenefits = [
    "Improves soil fertility, structure, and pH balance", 
    "Enhances nitrogen-fixing bacteria populations", 
    "Increases organic carbon content",
    "Improves nutrient availability (N, P, K, Fe, Zn)", 
    "Biofortifies crops with essential minerals", 
    "Enhances soil microbial diversity"
  ];

  const applicationMethods = [
    { title: "Foliar Spray", description: "Boosts chlorophyll, flowering, and fruit size.", dosage: "2-3% solution", icon: Droplets },
    { title: "Soil Incorporation", description: "Improves NPK availability and root health.", dosage: "25-30 kg/acre", icon: Sprout },
    { title: "Compost Enrichment", description: "Enhances compost nutrients and accelerates decomposition.", dosage: "5-10% of compost", icon: TreePine },
    { title: "Seed Treatment", description: "Improves germination rate, vigor, and root development.", dosage: "1-2% coating", icon: Target }
  ];

  const cropResults = [
    { crop: "Rice", yield: "+22%", benefit: "Weed suppression, improved soil" }, 
    { crop: "Wheat", yield: "+15%", benefit: "Better salt tolerance, higher antioxidants" },
    { crop: "Maize", yield: "+18%", benefit: "Biofortification with Zn & Fe" }, 
    { crop: "Pulses", yield: "+12%", benefit: "Better germination, higher protein" },
    { crop: "Tomato", yield: "+25%", benefit: "Higher yield, disease resistance" }, 
    { crop: "Mango", yield: "+20%", benefit: "Better foliage, flowering, fruit size" }
  ];

  const mechanisms = [
    { title: "Balanced Nutrition", description: "Provides optimal macro & micronutrient ratios." },
    { title: "Natural Hormones", description: "Contains auxins, cytokinins, and gibberellins." },
    { title: "Soil Microbiome", description: "Enhances beneficial microbes and soil biology." },
    { title: "Stress Tolerance", description: "Improves resistance to salinity, drought, and heat." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-transparent to-green-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl">
                <Sprout className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Spirulina in{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                Agriculture
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Revolutionary biofertilizer, biostimulant, and bioprotectant that transforms farming with sustainable solutions for higher yields and healthier soils.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="lg:col-span-2"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-green-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Leaf className="w-6 h-6 text-green-600" />
                  What is Agricultural Spirulina?
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>• <strong>Microscopic blue-green algae</strong> that works as a biofertilizer, biostimulant, and bioprotectant.</p>
                  <p>• <strong>Nutrient Dense:</strong> 60-70% protein, amino acids, B₁₂, β-carotene, minerals (Fe, Zn, Mg).</p>
                  <p>• <strong>Sustainable Alternative:</strong> Replaces chemical fertilizers while enhancing soil health and crop resilience.</p>
                  <p>• <strong>100% Natural & Bioavailable:</strong> Gentle on digestion, highly absorbable, and sourced directly from nature for daily vitality.</p>
                  <p>• <strong>Environmental Benefits:</strong> Helps reduce agricultural pollution by minimizing the use of synthetic chemicals.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white shadow-xl h-full">
                <h3 className="text-2xl font-bold mb-6">Key Statistics</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-3xl font-bold">+22%</p>
                    <p className="text-green-100">Average Yield Increase</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">-40%</p>
                    <p className="text-green-100">Chemical Fertilizer Reduction</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">100%</p>
                    <p className="text-green-100">Natural & Organic</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Agricultural <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for sustainable farming practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={benefit.title} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: index * 0.1 }} 
                viewport={{ once: true }} 
                whileHover={{ scale: 1.05 }} 
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-green-800 font-semibold text-sm">{benefit.stat}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Methods */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Application <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">Methods</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible application methods to suit different farming systems and crop requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationMethods.map((method, index) => (
              <motion.div 
                key={method.title} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: index * 0.1 }} 
                viewport={{ once: true }} 
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <method.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                  <p className="text-green-800 font-semibold text-sm">Dosage: {method.dosage}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Crop Results */}
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
              Proven <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world results from farmers using Spirulina in their agricultural practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cropResults.map((result, index) => (
              <motion.div 
                key={result.crop} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: index * 0.1 }} 
                viewport={{ once: true }} 
                className="bg-gradient-to-br from-white to-green-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{result.crop}</h3>
                  <div className="text-3xl font-bold text-green-600">{result.yield}</div>
                </div>
                <p className="text-gray-600">{result.benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}