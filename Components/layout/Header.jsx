import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, TestTube2, Book, Menu, X, ChevronDown, Sparkles, Droplets, Wheat, Heart } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#hero", isHash: true },
    { name: "About Us", href: "/#about", isHash: true },
    { name: "Cyano Veda", href: "/cyano-veda" },
    { name: "Cyano Crennis", href: "/cyano-crennis" },
  ];
  
  const spirulinaDropdownLinks = [
    { title: "Spirulina in Health", href: "/spirulina-health", description: "Discover its benefits for human wellness.", icon: Heart },
    { title: "Spirulina in Agriculture", href: "/spirulina-agriculture", description: "Revolutionizing farming practices.", icon: Wheat },
    { title: "Spirulina in Aqua & Poultry", href: "/spirulina-aqua-poultry", description: "Enhancing livestock health.", icon: Droplets },
    { title: "Spirulina in Animal Feed", href: "/spirulina-animal-feed", description: "A sustainable feed solution.", icon: TestTube2 },
  ];

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };
  
  const mobileLinkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-white/95 shadow-lg backdrop-blur-md border-b border-emerald-100" 
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
  <div className="relative">
    <img
      src="././Images/logo.png"   // ← served from public
      alt="Cyano Foods India"
      className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
      width={140}
      height={40}
    />
  </div>
  <div>
    <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
      Cyano Foods
    </span>
    <p className="text-xs text-gray-500 font-medium">India OPC Pvt Ltd</p>
  </div>
</Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  className="px-3 py-2 rounded-md font-semibold hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-300"
                  onClick={link.isHash ? (e) => {
                    e.preventDefault();
                    const hash = link.href.split('#')[1];
                    // If we're on the homepage, just scroll to the section
                    if (window.location.pathname === '/') {
                      const element = document.getElementById(hash);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    } else {
                      // If we're on a different page, navigate to homepage first, then scroll
                      window.location.href = `/#${hash}`;
                    }
                  } : undefined}
                >
                  {link.name}
                </Link>
              ))}

              <div className="relative group">
                <Link to="/what-is-spirulina" className="px-3 py-2 rounded-md font-semibold hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-300 flex items-center gap-1">
                  What is Spirulina?
                  <ChevronDown className="w-4 h-4" />
                </Link>
                <div className="absolute left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white border border-emerald-100 rounded-lg shadow-lg w-80 p-3 transition-all duration-300 z-50">
                  <ul className="grid gap-1">
                    {spirulinaDropdownLinks.map((item) => (
                      <li key={item.title}>
                        <Link to={item.href} className="flex items-start gap-3 p-3 rounded-md hover:bg-emerald-50 transition-colors">
                          <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                            <item.icon className="w-4 h-4 text-emerald-600" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">{item.title}</div>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link to="#contact" className="ml-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full px-6 py-2 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Contact Us
                <Sparkles className="w-4 h-4 ml-2 inline" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md hover:bg-emerald-50"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className="lg:hidden bg-white/95 backdrop-blur-md shadow-xl border-t border-emerald-100"
            >
              <div className="container mx-auto px-6 lg:px-8 py-6">
                <motion.ul variants={mobileMenuVariants} className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <motion.li variants={mobileLinkVariants} key={link.name}>
                      <Link
                        to={link.href}
                        className="block py-3 px-4 text-lg font-semibold text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300"
                        onClick={(e) => {
                          if (link.isHash) {
                            e.preventDefault();
                            const hash = link.href.split('#')[1];
                            // If we're on the homepage, just scroll to the section
                            if (window.location.pathname === '/') {
                              const element = document.getElementById(hash);
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                              }
                            } else {
                              // If we're on a different page, navigate to homepage first, then scroll
                              window.location.href = `/#${hash}`;
                            }
                          }
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                  <motion.li variants={mobileLinkVariants}>
                    <details className="group">
                      <summary className="py-3 px-4 text-lg font-semibold text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300 flex justify-between items-center cursor-pointer">
                        <Link to="/what-is-spirulina" onClick={() => setIsMobileMenuOpen(false)}>What is Spirulina?</Link>
                        <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform duration-300"/>
                      </summary>
                      <ul className="pl-4 pt-2 flex flex-col gap-2 border-l-2 border-emerald-100 ml-4">
                        {spirulinaDropdownLinks.map((link) => (
                          <li key={link.title}>
                            <Link 
                              to={link.href} 
                              className="block py-2 px-3 text-base text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300" 
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {link.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </motion.li>
                  <motion.li variants={mobileLinkVariants}>
                    <Link
                      to="/blog"
                      className="block py-3 px-4 text-lg font-semibold text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Blog
                    </Link>
                  </motion.li>
                </motion.ul>
                <motion.div variants={mobileLinkVariants} className="mt-6 pt-4 border-t border-emerald-100">
                  <Link className="w-full inline-block text-center bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full py-3 font-semibold shadow-lg" to="#contact">
                    Contact Us
                    <Sparkles className="w-4 h-4 ml-2 inline" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}