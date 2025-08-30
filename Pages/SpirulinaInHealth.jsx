import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Heart, Shield, Zap, Users, Baby, User, UserCheck, Activity } from "lucide-react";
import useScrollToTop from "../Components/useScrollToTop";

export default function SpirulinaInHealthPage() {
  useScrollToTop(); 
  const healthBenefits = [
    { icon: Zap, title: "High Protein (60–70%)", description: "Complete amino acid profile - ideal for vegetarians, vegans, and athletes." },
    { icon: Shield, title: "Powerful Antioxidant", description: "Phycocyanin fights oxidative stress & inflammation, protecting cells from damage." },
    { icon: Heart, title: "Boosts Immunity", description: "Increases macrophages, T-cells, and NK cells for stronger disease resistance." },
    { icon: Activity, title: "Heart Health", description: "Lowers LDL cholesterol, triglycerides, and reduces blood pressure naturally." }
  ];

  const demographics = [
    { icon: Baby, title: "Children", benefits: ["Strengthens immunity", "Supports cognitive development", "Prevents deficiencies", "Healthy growth & energy"], color: "from-blue-500 to-blue-600" },
    { icon: Users, title: "Women", benefits: ["Skin glow & anti-ageing", "Hair & nail health", "Bone strength", "Hormonal balance"], color: "from-pink-500 to-pink-600" },
    { icon: User, title: "Men", benefits: ["Builds muscle mass & stamina", "Supports heart health", "Improves energy & recovery", "Enhances fertility"], color: "from-indigo-500 to-indigo-600" },
    { icon: Activity, title: "Athletes", benefits: ["Increases endurance & strength", "Reduces muscle fatigue", "Speeds up recovery", "Natural plant-based protein"], color: "from-orange-500 to-orange-600" },
    { icon: UserCheck, title: "Seniors", benefits: ["Boosts immunity & vitality", "Protects cognitive function", "Supports heart health", "Improves bone density"], color: "from-purple-500 to-purple-600" },
    { icon: Heart, title: "Health Conditions", benefits: ["Anaemia: bioavailable iron", "Diabetes: blood sugar regulation", "Weight management: appetite suppression", "Detox: removes heavy metals"], color: "from-emerald-500 to-emerald-600" }
  ];

  const avoidSpirulina = [
    "Autoimmune diseases (may overstimulate immunity)",
    "PKU, gout, kidney stones, thyroid disorders",
    "Hypercalcemia or high calcium levels",
    "People on blood thinners (due to high Vitamin K)",
    "Seafood/algae allergies"
  ];

  const reduce = useReducedMotion();
  const rise = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay },
          viewport: { once: true, amount: 0.2 },
        };
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-pink-600/5" aria-hidden />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            {...(reduce
              ? {}
              : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 } })}
            className="text-center mb-12 md:mb-16"
          >
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl">
                <Heart className="w-10 h-10 text-white" aria-hidden="true" />
              </div>
            </div>
            <h1 className="font-bold mb-4 md:mb-6 leading-tight text-[clamp(2rem,6vw,4.5rem)] md:text-[clamp(2.5rem,5vw,5rem)]">
              Spirulina for{" "}
              <span className="bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent">Health</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Nature's most complete superfood with 60-70% protein, essential amino acids, vitamins, and minerals for
              optimal health at every age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Health Benefits */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div {...rise(0)} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Key Health{" "}
              <span className="bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent">Benefits</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Science-backed benefits that make Spirulina nature's perfect superfood.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {healthBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                {...rise(index * 0.1)}
                whileHover={reduce ? undefined : { scale: 1.02 }}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-red-100"
              >
                <div className="flex items-start gap-5 md:gap-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-7 h-7 md:w-8 md:h-8 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Everyone */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div {...rise(0)} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Benefits for{" "}
              <span className="bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent">Everyone</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored health benefits for every age group and lifestyle.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {demographics.map((demo, index) => (
              <motion.div
                key={demo.title}
                {...rise(index * 0.1)}
                whileHover={reduce ? undefined : { scale: 1.02 }}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${demo.color} rounded-2xl flex items-center justify-center mb-5 md:mb-6`}>
                  <demo.icon className="w-7 h-7 md:w-8 md:h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 md:mb-6">{demo.title}</h3>
                <ul className="space-y-3">
                  {demo.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex w-5 h-5 items-center justify-center rounded-full bg-red-500 text-white text-[10px]">✓</span>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">{benefit}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16 md:py-20 bg-white text-black">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div {...rise(0)} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              Safety &{" "}
              <span className="bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent">Precautions</span>
            </h2>
            <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
              Important considerations for safe and effective Spirulina use.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-start">
            {/* Who should avoid Spirulina */}
            <motion.div {...(reduce ? {} : { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8 }, viewport: { once: true, amount: 0.2 } })}>
              <h3 className="text-2xl md:text-3xl font-bold mb-5 md:mb-6">Who Should Avoid Spirulina?</h3>
              <ul className="space-y-4">
                {avoidSpirulina.map((item, index) => (
                  <motion.li
                    key={index}
                    {...rise(index * 0.1)}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 inline-flex w-6 h-6 items-center justify-center rounded-full bg-red-600 text-white text-xs">!</span>
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Usage guidelines */}
            <motion.div
              {...(reduce
                ? {}
                : { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8, delay: 0.2 }, viewport: { once: true, amount: 0.2 } })}
              className="bg-gradient-to-br from-red-50 to-pink-50 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-red-100"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-5 md:mb-6">Safe Usage Guidelines</h3>
              <ul className="space-y-4 text-black">
                {[
                  "Start with small doses (1–2g daily) and gradually increase.",
                  "Choose certified, reputable suppliers for quality assurance.",
                  "Mild side effects like headaches may occur initially.",
                  "Consult a doctor for pregnancy, nursing, or medical conditions.",
                ].map((guideline, i) => (
                  <li key={i} className="leading-relaxed">• {guideline}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
