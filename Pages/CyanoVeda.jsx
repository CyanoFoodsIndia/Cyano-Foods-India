import React, { useEffect, useMemo, useState } from "react";
import { Product } from "@/entities/Product";
import { Link, useSearchParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart, Sparkles, ArrowRight, ShoppingBag, ArrowLeft } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import useScrollToTop from "../Components/useScrollToTop";

/* ---------- utils ---------- */
const fallbackImg =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 400'><rect width='100%' height='100%' fill='%23fdf2f8'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23db2777' font-family='sans-serif' font-size='16'>Image coming soon</text></svg>";

const normalize = (v) => (v ?? "").toString().trim();
const normBrand = (v) => normalize(v).toLowerCase();
const normCategory = (v) => normalize(v).replace(/\s*Collection$/i, ""); // "Soaps Collection" -> "Soaps"
const slugify = (s) => normalize(s).toLowerCase().replace(/\s+/g, "-");

const makeId = (p) =>
  p?.id ??
  (p?.slug ? encodeURIComponent(p.slug) : encodeURIComponent(slugify(p?.name || "")));

const matchByIdOrSlug = (p, targetRaw) => {
  if (!p || !targetRaw) return false;
  const target = decodeURIComponent(String(targetRaw)).toLowerCase();
  const candidates = [normalize(p.id), normalize(p.slug), slugify(p.name)]
    .filter(Boolean)
    .map((v) => v.toLowerCase());
  return candidates.includes(target);
};

/* ---------- Card (grid) ---------- */
const ProductCard = ({ product, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group"
  >
    <Card className="h-full border-2 border-gray-100 hover:border-pink-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col rounded-2xl focus-within:ring-2 focus-within:ring-pink-300">
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.image_url || fallbackImg}
          alt={product.name || "Product image"}
          loading="lazy"
          className="max-h-40 md:max-h-56 object-contain mx-auto transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        {product.category && (
          <Badge className="absolute top-4 left-4 bg-white text-pink-600 shadow-sm">
            {normCategory(product.category)}
          </Badge>
        )}
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
          {product.short_description}
        </p>
        <div className="mt-auto">
          {/* Local routing via query param on the SAME page */}
          <Link to={`?id=${makeId(product)}`}>
          <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full flex items-center justify-center gap-x-2 group-hover:scale-105 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink-400">
  View Details
  <ArrowRight className="w-4 h-4" />
</Button>

          </Link>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

/* ---------- Detail view (inline) ---------- */
function ProductDetailView({ product, onBack }) {
  const {
    name,
    brand,
    category,
    image_url,
    short_description,
    full_description,
    benefits = [],
    usage_instructions,
    specifications,
  } = product;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{name}</h1>
          <div className="mt-3 flex flex-wrap gap-2">
            {brand && (
              <Badge variant="outline" className="text-gray-700">
                {brand}
              </Badge>
            )}
            {category && <Badge className="bg-emerald-100 text-emerald-700">{category}</Badge>}
          </div>
        </div>
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>

      <Card className="border-0 shadow-lg overflow-hidden">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-gray-50 p-6 flex items-center justify-center">
              <img
                src={image_url || fallbackImg}
                alt={name}
                className="max-h-72 object-contain"
                loading="lazy"
              />
            </div>
            <div className="p-8">
              {short_description && (
                <p className="text-gray-700 leading-relaxed mb-4">{short_description}</p>
              )}
              {full_description && full_description !== short_description && (
                <p className="text-gray-600 leading-relaxed mb-6">{full_description}</p>
              )}

              {Array.isArray(benefits) && benefits.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Benefits</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {benefits.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              )}

              {usage_instructions && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">How to Use</h3>
                  <p className="text-gray-700">{usage_instructions}</p>
                </div>
              )}

              {specifications && typeof specifications === "object" && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Specifications</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {Object.entries(specifications).map(([k, v]) => (
                      <div key={k} className="text-gray-700">
                        <span className="font-medium">{k}: </span>
                        <span>{String(v)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full">
                Enquire Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ---------- Page ---------- */
export default function CyanoVedaPage() {
  useScrollToTop(); 
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedId = searchParams.get("id");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const res = await Product.filter({ brand: "Cyano Veda" });
        const arr = Array.isArray(res) ? res : [];
        const filtered = arr.filter((p) => normBrand(p.brand) === "cyano veda");
        setProducts(filtered.length ? filtered : arr);
      } catch (e) {
        console.error("Failed to load products", e);
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const categories = useMemo(() => {
    const names = new Set(products.map((p) => normCategory(p.category)).filter(Boolean));
    return Array.from(names).map((name) => ({
      name,
      items: products.filter((p) => normCategory(p.category) === name),
    }));
  }, [products]);

  const hasAny = categories.some((c) => c.items.length > 0);

  // Find selected product when id is present
  const selectedProduct = useMemo(() => {
    if (!selectedId || !products.length) return null;
    return products.find((p) => matchByIdOrSlug(p, selectedId)) || null;
  }, [selectedId, products]);

  const clearSelection = () => setSearchParams({}); // drop ?id

  return (
    <div className="bg-gradient-to-b from-rose-50 via-white to-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-8 py-24 pt-28 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="bg-pink-100 text-pink-800 text-lg px-6 py-3 rounded-full mb-6 font-semibold inline-flex items-center">
            <Heart className="w-5 h-5 mr-2" />
            Cyano Veda
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Harnessing Spirulina for Everyday Health & Wellness
          </h1>
          {!selectedProduct && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cyano Veda brings you natural Spirulina-based health products that blend traditional herbs with modern
              science. From skin care to hair care and nutrition, our products are designed to deliver clean, chemical-free
              wellness solutions.
            </p>
          )}
        </motion.div>

        {/* Detail mode */}
        {selectedId ? (
          isLoading ? (
            <div className="max-w-5xl mx-auto">
              <Skeleton className="h-8 w-48 mb-2" />
              <Skeleton className="h-6 w-72 mb-6" />
              <div className="grid md:grid-cols-2 gap-8">
                <Skeleton className="h-64 w-full" />
                <div>
                  <Skeleton className="h-6 w-40 mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6 mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  <Skeleton className="h-10 w-40" />
                </div>
              </div>
            </div>
          ) : selectedProduct ? (
            <ProductDetailView product={selectedProduct} onBack={clearSelection} />
          ) : (
            <div className="text-center py-24">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Product not found</h3>
              <p className="text-gray-600 mb-6 break-all">
                We couldn't find a product for <span className="font-semibold">“{selectedId}”</span>.
              </p>
              <Button variant="outline" onClick={clearSelection} className="border-pink-500 text-pink-600 hover:bg-pink-50 rounded-full">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to products
              </Button>
            </div>
          )
        ) : /* Grid mode */ isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="h-full border-2 border-gray-100 shadow-lg overflow-hidden flex flex-col rounded-2xl">
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
        ) : hasAny ? (
          categories.map((category) => (
            <div key={category.name} className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center">
                  <Sparkles className="w-6 h-6 mr-3 text-pink-500" /> {category.name} Collection
                </h2>
                <div className="w-24 h-1 bg-pink-500 rounded-full mb-8" />
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {category.items.map((product, index) => (
                  <ProductCard key={makeId(product)} product={product} index={index} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-24">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No products found for “Cyano Veda”.</h3>
            <p className="text-gray-600 mb-6">
              Double-check the <span className="font-semibold">brand</span> and <span className="font-semibold">category</span> fields.
              Categories like “Soaps Collection” are supported—we normalize them to “Soaps”.
            </p>
            <Link to="/">
              <Button variant="outline" className="border-pink-500 text-pink-600 hover:bg-pink-50 rounded-full">
                Go Home
              </Button>
            </Link>
          </div>
        )}
      </div>

      {!selectedProduct && (
        <div className="bg-rose-50/50">
          <div className="container mx-auto px-6 lg:px-8 py-16 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Begin Your Wellness Journey?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore our full collection and discover the perfect Spirulina product for your lifestyle.
            </p>
            <Link to="/spirulina-health">
            <Button className="bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full px-8 font-bold text-lg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink-400">
               Spirulina in Health
            </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
