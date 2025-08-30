import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge.jsx';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Package, Info, Tag } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import productsCrennisData from '@/entities/ProductsCrennis.json';

const fallbackImg =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><rect width='100%' height='100%' fill='%23fef3c7'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23d97706' font-family='sans-serif' font-size='16'>Image coming soon</text></svg>";

export default function ProductDetailPage() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load product
  useEffect(() => {
    setIsLoading(true);
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const productId = urlParams.get('id');
      if (productId) {
        const found = productsCrennisData.find((p) => String(p.id) === String(productId));
        if (found) setProduct(found);
      }
    } catch (e) {
      console.error('Error loading product:', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // ✅ Compute these BEFORE any early return & without hooks
  const isVeda = product?.brand === 'Cyano Veda';
  const brandPage = isVeda ? '/cyano-veda' : '/cyano-crennis';

  if (isLoading) {
    return (
      <div className="container mx-auto px-6 lg:px-8 py-24 pt-32">
        <Skeleton className="h-10 w-48 mb-12" />
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Skeleton className="w-full aspect-square rounded-2xl" />
          </div>
          <div className="md:col-span-7">
            <Skeleton className="h-8 w-32 mb-4" />
            <Skeleton className="h-12 w-3/4 mb-6" />
            <Skeleton className="h-20 w-full mb-8" />
            <Skeleton className="h-6 w-1/4 mb-4" />
            <Skeleton className="h-24 w-full mb-8" />
            <Skeleton className="h-12 w-full rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found.</h2>
        <Link to="/">
          <Button>Go back to Homepage</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-b ${isVeda ? 'from-rose-50' : 'from-yellow-50'} via-white to-white min-h-screen`}>
      <div className="container mx-auto px-6 lg:px-8 py-24 pt-32">
        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link to={brandPage}>
            <Button variant="outline" className="mb-8 rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {product.brand}
            </Button>
          </Link>
        </motion.div>

        {/* Main */}
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Image */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="md:col-span-5">
            <div className="mx-auto w-full max-w-[480px] md:max-w-none md:sticky md:top-28">
              <img
                src={product.image_url || fallbackImg}
                alt={product.name || 'Product image'}
                className="w-full rounded-2xl shadow-2xl aspect-square object-cover"
                onError={(e) => { e.currentTarget.src = fallbackImg; }}
              />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="md:col-span-7">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className={`${isVeda ? 'bg-pink-100 text-pink-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {product.brand}
              </Badge>
              {product.category ? (
                <Badge variant="outline" className="gap-1">
                  <Tag className="w-3.5 h-3.5" />
                  {product.category}
                </Badge>
              ) : null}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">{product.name}</h1>
            {product.short_description ? (
              <p className="text-lg text-gray-600 mb-8">{product.short_description}</p>
            ) : null}

            {Array.isArray(product.benefits) && product.benefits.length > 0 && (
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500" /> Benefits
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {product.benefits.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {product.usage_instructions ? (
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Info className="w-5 h-5 mr-2 text-blue-500" /> How to Use
                  </h3>
                  <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                    {product.usage_instructions}
                  </p>
                </CardContent>
              </Card>
            ) : null}

            {product.specifications && typeof product.specifications === 'object' && (
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Specifications</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([k, v]) => (
                      <div key={k} className="rounded-lg border bg-white p-4 text-sm flex items-start justify-between">
                        <span className="font-semibold text-gray-800 mr-4">{k}</span>
                        <span className="text-gray-600">{String(v)}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <Button
              size="lg"
              className={`w-full text-lg rounded-full shadow-lg ${isVeda ? 'bg-pink-600 hover:bg-pink-700' : 'bg-yellow-600 hover:bg-yellow-700'} text-white`}
            >
              <Package className="w-5 h-5 mr-2" /> Enquire Now
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
