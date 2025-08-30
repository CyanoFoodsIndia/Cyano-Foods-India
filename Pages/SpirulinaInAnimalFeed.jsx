import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TreePine, Milk, TrendingUp, Leaf, Shield, Droplets, Sparkles } from "lucide-react";
import useScrollToTop from "../Components/useScrollToTop";

export default function SpirulinaInAnimalFeedPage() {
  useScrollToTop(); 
  const benefits = [
    { icon: TrendingUp, title: "Better FCR", description: "More efficient feed-to-mass conversion across all livestock categories.", stat: "15–20% Improvement" },
    { icon: Sparkles, title: "Enhanced Production", description: "Increased milk yield, better meat quality, and improved reproductive health.", stat: "Higher Quality" },
    { icon: Shield, title: "Stronger Immunity", description: "Reduced mortality and disease outbreaks through natural immune support.", stat: "Lower Mortality" },
    { icon: Leaf, title: "Environmental Benefits", description: "Reduced methane emissions, lower antibiotic use, and sustainable farming.", stat: "Eco-Friendly" }
  ];

  const livestockResults = {
    dairy: [
      { animal: "Dairy Cows", improvement: "+18%", metric: "Milk Yield", benefit: "Higher protein & fat content" },
      { animal: "Buffalo", improvement: "+15%", metric: "Milk Production", benefit: "Richer nutritional profile" },
      { animal: "Goats", improvement: "+20%", metric: "Milk Quality", benefit: "Enhanced omega fatty acids" }
    ],
    meat: [
      { animal: "Beef Cattle", improvement: "+12%", metric: "Weight Gain", benefit: "Lean muscle development" },
      { animal: "Pigs", improvement: "+16%", metric: "Growth Rate", benefit: "Reduced fat, better meat" },
      { animal: "Goats", improvement: "+14%", metric: "Meat Quality", benefit: "Improved taste & texture" }
    ]
  };

  const feedFormula = [
    { component: "Spirulina", percentage: "5–10%", purpose: "Primary protein & nutrients" },
    { component: "Corn Silage", percentage: "30–40%", purpose: "Energy source" },
    { component: "Barley/Wheat", percentage: "20–30%", purpose: "Carbohydrates" },
    { component: "Alfalfa Hay", percentage: "15–20%", purpose: "Fiber content" },
    { component: "Mineral Mix", percentage: "2–5%", purpose: "Vitamin & mineral balance" }
  ];

  const environmentalImpacts = [
    { title: "Reduced Methane Emissions", description: "Easier digestion leads to less rumen fermentation and lower methane.", icon: Droplets },
    { title: "Sustainable Feed Source", description: "Requires less land and water compared to soy and corn.", icon: Leaf },
    { title: "Lower Antibiotic Use", description: "Natural immunity boost reduces dependency on synthetic medications.", icon: Shield }
  ];

  // --- UX helpers ---
  const reduce = useReducedMotion();
  const rise = (delay = 0) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay }, viewport: { once: true, amount: 0.2 } };

  // Tailwind-safe gradient palette for feed bars (no dynamic class names)
  const barGradients = [
    "from-amber-600 to-orange-500",
    "from-amber-500 to-orange-400",
    "from-amber-400 to-orange-300",
    "from-amber-300 to-orange-200",
    "from-amber-200 to-orange-100",
  ];

  // Parse "5–10%" / "30-40%" / "15%" -> use the upper bound (or the number itself) for width
  const parsePercentWidth = (str) => {
    if (!str) return 0;
    // Normalize dash types (en dash / hyphen)
    const clean = String(str).replace(/–/g, "-").replace(/\s/g, "");
    const parts = clean.split("-");
    const pick = parts[1] || parts[0] || "0";
    const num = parseFloat(pick.replace("%", "")) || 0;
    return Math.max(0, Math.min(100, num));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-orange-600/5" aria-hidden />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            {...(reduce ? {} : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 } })}
            className="text-center mb-12 md:mb-16"
          >
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl">
                <TreePine className="w-10 h-10 text-white" aria-hidden="true" />
              </div>
            </div>
            <h1 className="font-bold mb-4 md:mb-6 leading-tight text-[clamp(2rem,6vw,4.5rem)] md:text-[clamp(2.5rem,5vw,5rem)]">
              Spirulina in{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                Animal Feed
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Powerful feed additive transforming livestock farming with improved FCR, enhanced milk yield, superior
              meat quality, and sustainable environmental benefits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div {...rise(0)} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Key{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                Benefits
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive improvements across all aspects of livestock farming.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                {...rise(index * 0.1)}
                whileHover={reduce ? undefined : { scale: 1.02 }}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-100"
              >
                <div className="flex items-start gap-5 md:gap-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-7 h-7 md:w-8 md:h-8 text-white" aria-hidden="true" />
                  </div>
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">{benefit.title}</h3>
                      <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap">
                        {benefit.stat}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Livestock Results */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div {...rise(0)} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Livestock{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                Performance
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Proven results across dairy and meat production systems.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-12">
            {/* Dairy */}
            <motion.div
              {...(reduce ? {} : { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8 }, viewport: { once: true, amount: 0.2 } })}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center flex items-center justify-center gap-3">
                  <Milk className="w-7 h-7 md:w-8 md:h-8 text-blue-600" /> Dairy Production
                </h3>
                <div className="space-y-5 md:space-y-6">
                  {livestockResults.dairy.map((result, index) => (
                    <motion.div
                      key={result.animal}
                      {...rise(index * 0.1)}
                      className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-5 md:p-6"
                    >
                      <div className="flex justify-between items-center mb-2 md:mb-3">
                        <h4 className="text-lg md:text-xl font-bold text-gray-900">{result.animal}</h4>
                        <span className="text-xl md:text-2xl font-bold text-blue-600">{result.improvement}</span>
                      </div>
                      <p className="text-blue-700 font-semibold mb-1 md:mb-2">{result.metric}</p>
                      <p className="text-gray-600 text-sm">{result.benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Meat */}
            <motion.div
              {...(reduce ? {} : { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8, delay: 0.2 }, viewport: { once: true, amount: 0.2 } })}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center flex items-center justify-center gap-3">
                  <TreePine className="w-7 h-7 md:w-8 md:h-8 text-green-600" /> Meat Production
                </h3>
                <div className="space-y-5 md:space-y-6">
                  {livestockResults.meat.map((result, index) => (
                    <motion.div
                      key={result.animal}
                      {...rise(index * 0.1)}
                      className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 md:p-6"
                    >
                      <div className="flex justify-between items-center mb-2 md:mb-3">
                        <h4 className="text-lg md:text-xl font-bold text-gray-900">{result.animal}</h4>
                        <span className="text-xl md:text-2xl font-bold text-green-600">{result.improvement}</span>
                      </div>
                      <p className="text-green-700 font-semibold mb-1 md:mb-2">{result.metric}</p>
                      <p className="text-gray-600 text-sm">{result.benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feed Formula */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div {...rise(0)} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Dairy Cow Feed{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                Formula
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              A sample balanced feed formula incorporating Spirulina for optimal dairy performance.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-amber-100">
              {/* Proportional bars */}
              <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-4 pb-4 border-b">
                {feedFormula.map((item, index) => {
                  const width = parsePercentWidth(item.percentage);
                  const gradient = barGradients[index % barGradients.length];
                  return (
                    <div
                      key={item.component}
                      style={{ width: mdOrUp() ? `${width}%` : "100%" }}
                      className={`p-4 rounded-lg text-white bg-gradient-to-br ${gradient} shadow-sm`}
                    >
                      <p className="font-bold text-base md:text-lg">{item.component}</p>
                      <p className="font-semibold text-xl md:text-2xl">{item.percentage}</p>
                    </div>
                  );
                })}
              </div>

              {/* Quick purposes */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
                {feedFormula.slice(0, 3).map((item) => (
                  <div key={`${item.component}-desc`} className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                    <h4 className="font-semibold text-amber-700">{item.component}</h4>
                    <p className="text-sm text-gray-600">{item.purpose}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Environmental Impacts */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-900 to-orange-800 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div {...rise(0)} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              Sustainable <span className="text-amber-300">Impact</span>
            </h2>
            <p className="text-lg md:text-xl text-amber-100 max-w-3xl mx-auto">
              Spirulina is not just feed; it's a step towards a more sustainable and profitable farming future.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {environmentalImpacts.map((impact, index) => (
              <motion.div
                key={impact.title}
                {...rise(index * 0.2)}
                className="bg-orange-800/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10"
              >
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <impact.icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold mb-3 md:mb-4">{impact.title}</h3>
                <p className="text-orange-100 leading-relaxed">{impact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * Small helper to detect md breakpoint in JS for the feed bars width behavior.
 * (Keeps layout nice: stacked at small screens, proportional at md+)
 */
function mdOrUp() {
  if (typeof window === "undefined") return false;
  return window.matchMedia && window.matchMedia("(min-width: 768px)").matches;
}
