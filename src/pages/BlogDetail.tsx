
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeftIcon, CalendarIcon, ClockIcon, UserIcon } from "lucide-react";
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import blog data
import { Blog, blogs, findBlogById } from "@/data/blogs";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  
  // Fetch blog details
  useEffect(() => {
    if (id) {
      const blogData = findBlogById(parseInt(id));
      if (blogData) {
        setBlog(blogData);
        
        // Get related blogs based on tags
        const related = blogs
          .filter(b => b.id !== blogData.id && b.tags.some(tag => blogData.tags.includes(tag)))
          .slice(0, 3);
        setRelatedBlogs(related);
      } else {
        // Blog not found, redirect to blogs page
        navigate('/blogs');
      }
      setLoading(false);
    }
  }, [id, navigate]);
  
  if (loading) {
    return (
      <div className="bg-dark text-white min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-highlight">Loading blog content...</div>
      </div>
    );
  }
  
  if (!blog) {
    return (
      <div className="bg-dark text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Blog not found</h2>
          <Button onClick={() => navigate('/blogs')}>Back to Blogs</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-dark text-white min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-secondary/10 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Button 
              variant="ghost" 
              className="mb-6 hover:bg-transparent hover:text-highlight flex items-center gap-2"
              onClick={() => navigate('/blogs')}
            >
              <ChevronLeftIcon size={16} />
              Back to Blogs
            </Button>
            
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-dark-surface border-highlight text-highlight">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">{blog.title}</h1>
              
              <div className="flex flex-wrap gap-6 text-gray-400 text-sm mb-8">
                <div className="flex items-center gap-2">
                  <UserIcon size={16} />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon size={16} />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon size={16} />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>
            
            <div className="relative mb-12">
              <div className="aspect-[16/9] overflow-hidden rounded-lg border border-gray-800">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none mb-16">
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
            
            {/* Share and Tags */}
            <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 border-t border-b border-gray-800 py-6 mb-16">
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="bg-dark-surface border-gray-700 text-gray-300">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Share:</span>
                <Button variant="ghost" size="sm" className="p-2 h-auto w-auto hover:bg-gray-800 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Button>
                <Button variant="ghost" size="sm" className="p-2 h-auto w-auto hover:bg-gray-800 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Button>
                <Button variant="ghost" size="sm" className="p-2 h-auto w-auto hover:bg-gray-800 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Button>
              </div>
            </div>
            
            {/* Related Articles */}
            {relatedBlogs.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedBlogs.map(relatedBlog => (
                    <Card key={relatedBlog.id} className="bg-dark-surface border-gray-800 overflow-hidden group">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={relatedBlog.image} 
                          alt={relatedBlog.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2 group-hover:text-highlight transition-colors">
                          {relatedBlog.title}
                        </h3>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="p-0 hover:bg-transparent hover:text-highlight"
                          onClick={() => navigate(`/blog/${relatedBlog.id}`)}
                        >
                          Read Article →
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogDetail;
