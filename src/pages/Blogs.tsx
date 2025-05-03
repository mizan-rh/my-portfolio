
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { motion } from 'framer-motion';
import { SearchIcon, TagIcon, CalendarIcon } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import blog data
import { blogs } from "@/data/blogs";

const Blogs = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleBlogs, setVisibleBlogs] = useState(blogs);
  
  // Filter blogs based on search term
  useEffect(() => {
    if (searchTerm === '') {
      setVisibleBlogs(blogs);
    } else {
      setVisibleBlogs(
        blogs.filter(blog => 
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
          blog.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        )
      );
    }
  }, [searchTerm]);

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
            className="max-w-6xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Blog & Articles</h1>
            <p className="text-gray-400 max-w-2xl mb-12">
              Explore my thoughts, tutorials, and insights on web development, design, and technology.
            </p>
            
            {/* Search and filter */}
            <div className="mb-12 relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              <Input 
                type="text" 
                placeholder="Search articles..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-dark-surface border-gray-800 focus-visible:ring-highlight"
              />
            </div>
            
            {/* Blog list */}
            {visibleBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleBlogs.map((blog, index) => (
                  <motion.div 
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-dark-surface border-gray-800 overflow-hidden h-full flex flex-col group">
                      <div className="relative aspect-video overflow-hidden">
                        <div className="absolute inset-0 bg-dark/50 backdrop-blur-sm group-hover:opacity-0 transition-opacity duration-300"></div>
                        <img 
                          src={blog.image} 
                          alt={blog.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex justify-between items-center mb-3 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <CalendarIcon size={14} />
                            <span>{blog.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <TagIcon size={14} />
                            <span>{blog.tags[0]}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-200 mb-2 group-hover:text-highlight transition-colors">
                          {blog.title}
                        </h3>
                        
                        <p className="text-gray-400 mb-6 flex-grow">
                          {blog.summary}
                        </p>
                        
                        <div className="flex justify-between items-center mt-auto">
                          <div className="flex flex-wrap gap-2">
                            {blog.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="outline" className="bg-dark-surface border-gray-700 text-gray-300">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button 
                            variant="ghost" 
                            className="hover:bg-transparent hover:text-highlight"
                            onClick={() => navigate(`/blog/${blog.id}`)}
                          >
                            Read More →
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                <p className="text-gray-400 mb-6">Try changing your search criteria.</p>
                <Button onClick={() => setSearchTerm('')}>Clear Search</Button>
              </div>
            )}
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blogs;
