import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams, useParams, Link } from "react-router-dom";
import { Product } from "@/entities/Product";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft } from "lucide-react";

const fallbackImg =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 400'><rect width='100%' height='100%' fill='%23f1f5f9'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23474747' font-family='sans-serif' font-size='18'>Image coming soon</text></svg>";

const normalize = (v) => (v ?? "").toString().trim();
const slugify = (s) => normalize(s).toLowerCase().replace(/\s+/g, "-");

const matchByIdOrSlug = (p, targetRaw) => {
  if (!p || !targetRaw) return false;
  const target = decodeURIComponent(String(targetRaw)).toLowerCase();

  // Possible keys for a product
  const candidates = [
    normalize(p.id),
    normalize(p.slug),
    slugify(p.name),
  ]
    .filter(Boolean)
    .map((v) => v.toLowerCase());

  return candidates.includes(target);
};

export default function ProductDetails() {
  const [searchParams] = useSearchParams();
  const routeParams = useParams();
  const target = searchParams.get("id") || routeParams.id || "";

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      try {
        // Try to fetch all products (some ORMs support this, some don’t)
        let list = [];
        try {
          list = await Product.filter({}); // all
        } catch {
          // Fallback: try both brands if your entity doesn’t allow empty filter
          const veda = await Product.filter({ brand: "Cyano Veda" });
          const crennis = await Product.filter({ brand: "Cyano Crennis" });
          list = [...(Array.isArray(veda) ? veda : []), ...(Array.isArray(crennis) ? crennis : [])];
        }

        const found =
          (Array.isArray(list) && list.find((p) => matchByIdOrSlug(p, target))) || null;

        if (!cancelled) setProduct(found);
      } catch (e) {
        console.error("ProductDetail load error:", e);
        if (!cancelled) setProduct(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [target]);

  if (loading) {
    return (
      <div className="container mx-auto px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-6 w-72" />
          </div>
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
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-6 lg:px-8 py-24 text-center">
        <h1 className="text-3xl font-bold mb-2">Product not found</h1>
        <p className="text-gray-600 mb-6">
          We couldn’t find a product for <span className="font-semibold break-all">“{target}”</span>.
        </p>
        <Link to={-1}>
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </Link>
      </div>
    );
  }

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
    <div className="container mx-auto px-6 lg:px-8 py-24">
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
          <Link to={-1}>
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
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
    </div>
  );
}
