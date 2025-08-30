import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Leaf, Heart, Globe } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-br from-emerald-900 via-teal-800 to-blue-900 text-white relative overflow-hidden" id="contact">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        <motion.div
          className="absolute top-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-24 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="inline-flex items-center bg-white/10 text-white border-white/20 text-sm px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Leaf className="w-4 h-4 mr-2" aria-hidden="true" />
              GET IN TOUCH
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to Transform Your {" "}
              <span className="bg-gradient-to-r from-yellow-300 to-green-300 bg-clip-text text-transparent">
                Health Journey?
              </span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Join thousands of families, farmers, and wellness enthusiasts who trust Cyano Foods India
              for pure, natural, and sustainable health solutions.
            </p>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Heart, title: "For Families", description: "Natural nutrition your family deserves", action: "Shop Products", color: "from-pink-500 to-rose-500" },
            { icon: Leaf, title: "For Farmers", description: "Sustainable solutions for better yields", action: "Explore Agriculture", color: "from-green-500 to-emerald-500" },
            { icon: Globe, title: "For Partners", description: "Join our mission worldwide", action: "Become Partner", color: "from-blue-500 to-teal-500" },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-2xl focus-within:ring-2 focus-within:ring-emerald-400">
              <CardContent className="p-8 text-center flex flex-col items-center">
  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
    <item.icon className="w-8 h-8 text-white" aria-hidden="true" />
  </div>
  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
  <p className="text-emerald-100 mb-6">{item.description}</p>
  <Button
    variant="outline"
    className="relative z-50 flex items-center gap-x-2 border border-white/30 text-white hover:bg-white hover:text-gray-900 transition-colors group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-400 w-[200px] px-4 py-2"
    aria-label={item.action}
  >
    {item.action}
    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
  </Button>
</CardContent>

              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <Card className="border-0 bg-white/10 backdrop-blur-sm rounded-2xl">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-8">Connect With Cyano Foods India</h3>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <h4 className="font-semibold mb-2">Email Us</h4>
                  <a href="mailto:mail@cyanoindia.com" className="text-emerald-100 hover:text-white underline decoration-white/30 underline-offset-4">
                    mail@cyanoindia.com
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <h4 className="font-semibold mb-2">Call Us</h4>
                  <a href="tel:+918924945678" className="text-emerald-100 hover:text-white underline decoration-white/30 underline-offset-4">
                    +91 8924945678
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <h4 className="font-semibold mb-2">Visit Us</h4>
                  <p className="text-emerald-100">India</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="flex items-center justify-center gap-x-2 text-emerald-900 hover:bg-emerald-50 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-400"
                  aria-label="Start Your Journey"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center justify-center gap-x-2 border-white/30 text-white hover:bg-white hover:text-emerald-900 px-8 py-4 rounded-full text-lg font-semibold focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-400"
                  aria-label="Learn More"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
