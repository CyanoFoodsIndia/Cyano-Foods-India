import React from "react";
import Header from "@/components/layout/Header.jsx";
import { Leaf, Home, Sprout, Heart, Fish, TreePine } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>

      <footer className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Cyano Foods India</h3>
                  <p className="text-emerald-300 text-sm">Premium Spirulina Solutions</p>
                </div>
              </div>
              <p className="text-emerald-100 text-sm leading-relaxed">
                Leading provider of high-quality Spirulina products for health, agriculture, and industrial applications across India.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-emerald-100">Our Solutions</h4>
              <div className="space-y-2">
              <Link to="/spirulina-health"><p className="text-emerald-200 text-sm"><u>Health & Nutrition</u></p></Link>
              <Link to="/spirulina-agriculture"><p className="text-emerald-200 text-sm"><u>Agricultural Applications</u></p></Link>
              <Link to="/spirulina-aqua-poultry"><p className="text-emerald-200 text-sm"><u>Aquaculture & Poultry</u></p></Link>
              <Link to="/spirulina-animal-feed"><p className="text-emerald-200 text-sm"><u>Animal Feed Industry</u></p></Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-emerald-100">Quality Commitment</h4>
              <p className="text-emerald-200 text-sm leading-relaxed">
                Sustainable production practices, premium quality standards, and innovative solutions for a healthier future.
              </p>
            </div>
          </div>
          
          <div className="border-t border-emerald-700 mt-8 pt-8 text-center">
            <p className="text-emerald-300 text-sm">
              © 2024 Cyano Foods India OPC Pvt Ltd. All rights reserved. | Empowering health through nature's superfood.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
