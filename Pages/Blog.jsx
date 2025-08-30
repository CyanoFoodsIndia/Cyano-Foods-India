import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowRight } from 'lucide-react';

const BlogCard = ({ title, excerpt, image, category, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group"
  >
    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative h-52">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <CardContent className="p-6">
        <Badge className="mb-4">{category}</Badge>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{excerpt}</p>
        <Button variant="link" className="p-0 font-semibold text-emerald-600">
          Read More <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  </motion.div>
);

export default function BlogPage() {
  const posts = [
    { title: "The Science of Spirulina: A Deep Dive", excerpt: "Explore the peer-reviewed research that backs the incredible health claims of this superfood...", image: "https://images.unsplash.com/photo-1579169825453-8d4b4653cc2c?w=500&q=80", category: "Science", delay: 0.1 },
    { title: "Spirulina in Your Kitchen: 5 Easy Recipes", excerpt: "From smoothies to energy bars, discover delicious and simple ways to incorporate Spirulina into your daily diet.", image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=500&q=80", category: "Lifestyle", delay: 0.2 },
    { title: "A Farmer's Guide to Spirulina Biofertilizers", excerpt: "Learn the best practices for applying Cyano Crennis products to maximize your crop yield and soil health.", image: "https://images.unsplash.com/photo-1492496913980-501348b61469?w=500&q=80", category: "Agriculture", delay: 0.3 }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-8 py-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="bg-gray-100 text-gray-800 text-lg px-6 py-3 rounded-full mb-6 font-semibold">
            <BookOpen className="w-5 h-5 mr-2" />
            Our Blog
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Insights from the World of Spirulina
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, research, and stories from Cyano Foods India.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => <BlogCard key={post.title} {...post} />)}
        </div>
      </div>
    </div>
  );
}