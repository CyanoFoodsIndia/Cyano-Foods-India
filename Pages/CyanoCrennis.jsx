import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge.jsx';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Wheat, Sparkles, ArrowRight, Shield } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import productsData from '@/entities/ProductsCrennis.json';
import useScrollToTop from "../Components/useScrollToTop";
import { useNavigate } from 'react-router-dom';

 
const fallbackImg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='100%' height='100%' fill='%23fef3c7'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23d97706' font-family='sans-serif' font-size='16'>Image coming soon</text></svg>";

const ProductCard = ({ product, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group"
  >
    <Card className="h-full border-2 border-gray-100 hover:border-yellow-300 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.image_url || fallbackImg}
          alt={product.name || 'Product image'}
          loading="lazy"
          className="max-h-40 md:max-h-64 object-contain mx-auto transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        {product.category && (
          <Badge className="absolute top-4 left-4 bg-white text-yellow-800 shadow-sm">
            {product.category}
          </Badge>
        )}
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
          {product.short_description}
        </p>
        <div className="mt-auto">
          <Link to={`/ProductDetail?id=${product.id}`}>
          <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full flex items-center justify-center gap-x-2 group-hover:scale-105 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-400">
  View Product
  <ArrowRight className="w-4 h-4" />
</Button>

          </Link>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default function CyanoCrennisPage() {

  useScrollToTop(); 
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = () => {
      setIsLoading(true);
      try {
        // Filter products by brand (case-insensitive)
        const filteredProducts = productsData.filter(product => 
          product.brand && product.brand.toLowerCase() === 'cyano crennis'
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error loading products:', error);
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="bg-gradient-to-b from-yellow-50 via-white to-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-8 py-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Badge className="bg-yellow-100 text-yellow-800 text-lg px-6 py-3 rounded-full mb-6 font-semibold">
            <Wheat className="w-5 h-5 mr-2" />
            Cyano Crennis
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Spirulina in Agriculture
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cyano Crennis represents the agricultural wing of Cyano India, bringing the power of Spirulina into farming. It enriches soil, boosts crop yields, enhances stress tolerance, and reduces the need for chemical inputs, making it a game-changer in sustainable and regenerative agriculture.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(5).fill(0).map((_, i) => (
              <Card key={i} className="h-full border-2 border-gray-100 shadow-lg overflow-hidden flex flex-col">
                <Skeleton className="h-56 w-full" />
                <CardContent className="p-6 flex flex-col flex-grow">
                  <Skeleton className="h-6 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6 mb-6" />
                  <Skeleton className="h-10 w-full rounded-full mt-auto" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : products.length > 0 ? (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center">
              <Sparkles className="w-6 h-6 mr-3 text-yellow-500" /> Product Portfolio
            </h2>
            <div className="w-24 h-1 bg-yellow-500 rounded-full mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-24">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              No products found for "Cyano Crennis".
            </h3>
            <p className="text-gray-600 mb-6">
              Please check the product data or contact support.
            </p>
            <Link to="/">
              <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 rounded-full">
                Go Home
              </Button>
            </Link>
          </div>
        )}
      </div>
      <div className="bg-yellow-50/50">
        <div className="container mx-auto px-6 lg:px-8 py-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready for a Greener Future?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Empower your farm with sustainable, chemical-free solutions. Explore our full range of agricultural products.</p>
          <Link to="/spirulina-agriculture">
          <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-full px-8 font-bold text-lg">
             Spirulina in Agriculture
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
