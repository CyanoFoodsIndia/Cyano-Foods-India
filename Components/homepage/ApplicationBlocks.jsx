import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Heart, Wheat, Fish, ArrowRight, Sparkles, Leaf, Users } from 'lucide-react';

export default function ApplicationBlocks() {
  const productLines = [
    {
      brand: 'Cyano Veda',
      tagline: 'Health & Wellness',
      title: 'Health Related Products',
      description:
        'Premium Spirulina-based health supplements, personal care products, and wellness solutions designed for optimal human health and vitality.',
      features: [
        'Spirulina Jelly Candies',
        'Organic Spirulina Powder',
        'Natural Personal Care Range',
        'Immunity Boosters',
      ],
      icon: Heart,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      gradient: 'from-red-500 to-pink-500',
      image:
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=480&fit=crop&crop=center',
    },
    {
      brand: 'Cyano Crennis',
      tagline: 'Nature Veda Solutions',
      title: 'Agriculture Related Products',
      description:
        'Revolutionary bio-agricultural solutions combining Spirulina with cow-based natural farming techniques for sustainable, high-yield agriculture.',
      features: [
        'Organic Soil Enhancers',
        'Natural Pest Management',
        'Crop Yield Boosters',
        'Bio-Fertilizer Solutions',
      ],
      icon: Wheat,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      gradient: 'from-yellow-500 to-orange-500',
      badge: 'Cow-Based Farming',
      image:
        'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=480&fit=crop&crop=center',
    },
    {
      brand: 'Aqua & Poultry Solutions',
      tagline: 'Enhanced Nutrition',
      title: 'Spirulina in Aqua & Poultry',
      description:
        'Specialized Spirulina-enriched feed supplements and health boosters for aquaculture and poultry farming, promoting natural growth and immunity.',
      features: [
        'Fish Feed Supplements',
        'Poultry Health Boosters',
        'Aquaculture Solutions',
        'Natural Growth Promoters',
      ],
      icon: Fish,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      gradient: 'from-blue-500 to-teal-500',
      image:
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=480&fit=crop&crop=center',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="products">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Badge className="inline-flex items-center bg-emerald-100 text-emerald-800 text-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            OUR PRODUCT LINES
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Transforming Industries with{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Spirulina Innovation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From personal wellness to sustainable agriculture and livestock care,
            our specialized product lines deliver nature&apos;s best solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {productLines.map((product, index) => (
            <motion.div
              key={product.brand}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group h-full"
            >
              <Card
                className={`h-full border-2 ${product.borderColor} shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-2xl focus-within:ring-2 focus-within:ring-emerald-500`}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.brand} showcase`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 will-change-transform"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                  ></div>

                  {/* Brand Badge */}
                  <div className="absolute top-4 left-4">
                    <div
                      className={`px-3 py-1 ${product.bgColor} rounded-full border ${product.borderColor} backdrop-blur-sm`}
                    >
                      <span className={`text-sm font-bold ${product.color}`}>{product.brand}</span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center backdrop-blur-sm shadow-lg`}>
                      <product.icon className={`w-6 h-6 ${product.color}`} aria-hidden="true" />
                    </div>
                  </div>

                  {/* Special Badge */}
                  {product.badge && (
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-white/90 text-gray-700 backdrop-blur-sm">
                        <Leaf className="w-3 h-3 mr-1" />
                        {product.badge}
                      </Badge>
                    </div>
                  )}
                </div>

                <CardContent className="p-8 flex flex-col flex-grow">
                  <div className="mb-4">
                    {/* Use border-current so the outline always matches the text color */}
                    <Badge
                      variant="outline"
                      className={`text-xs mb-3 border border-current ${product.color}`}
                    >
                      {product.tagline}
                    </Badge>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
                  </div>

                  <div className="mb-8 flex-grow">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Users className="w-4 h-4 mr-2 text-emerald-600" />
                      Key Products:
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          {/* Color dot inherits from a wrapper span to avoid dynamic bg- class purging */}
                          <span className={`${product.color} flex items-start`}>
                            <span className="w-2 h-2 bg-current rounded-full mt-2 mr-3 flex-shrink-0" />
                          </span>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                  <Button
                    className={`w-full bg-gradient-to-r ${product.gradient} hover:shadow-lg text-white rounded-full py-3 font-semibold group-hover:scale-105 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500 inline-flex items-center justify-center gap-2`}
                    aria-label={`Explore ${product.brand}`}
                  >
                    <span className="leading-none">Explore {product.brand}</span>
                    <ArrowRight className="w-4 h-4 block shrink-0 transition-transform group-hover:translate-x-1" />
                  </Button>

                  </div>
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
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-100">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Ready to Transform Your Industry?</h3>
            </div>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have experienced the power of our Spirulina-based solutions.
              From health enhancement to agricultural revolution, we&apos;re here to support your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500"
                aria-label="Get Product Catalog"
              >
                Get Product Catalog
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-full text-lg font-semibold focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500"
                aria-label="Schedule Consultation"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
