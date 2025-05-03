
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import project data that we'll create next
import { projects } from "@/data/projects";

const Projects = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(projects);
  
  // Filter projects based on selected category
  useEffect(() => {
    if (filter === 'all') {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter(project => 
        project.category.toLowerCase() === filter.toLowerCase()
      ));
    }
  }, [filter]);

  return (
    <div className="bg-dark text-white min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-highlight/10 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">All Projects</h1>
            <p className="text-gray-400 max-w-2xl mb-12">
              Browse through my collection of projects. Each project represents a unique challenge and solution in my developer journey.
            </p>
            
            <Tabs defaultValue="all" className="mb-12">
              <TabsList className="bg-dark-surface border border-gray-800">
                <TabsTrigger value="all" onClick={() => setFilter('all')}>All</TabsTrigger>
                <TabsTrigger value="web" onClick={() => setFilter('web')}>Web</TabsTrigger>
                <TabsTrigger value="mobile" onClick={() => setFilter('mobile')}>Mobile</TabsTrigger>
                <TabsTrigger value="design" onClick={() => setFilter('design')}>Design</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleProjects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-dark-surface border-gray-800 overflow-hidden h-full flex flex-col group">
                    <div className="relative aspect-video overflow-hidden">
                      <div className="absolute inset-0 bg-dark/50 backdrop-blur-sm group-hover:opacity-0 transition-opacity duration-300"></div>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="outline" className="bg-dark-surface border-gray-700 text-gray-300">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="bg-dark-surface border-gray-700 text-gray-300">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-200 mb-2 group-hover:text-highlight transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-6 flex-grow">
                        {project.description.length > 100 
                          ? `${project.description.substring(0, 100)}...` 
                          : project.description
                        }
                      </p>
                      
                      <div className="flex justify-between items-center mt-auto">
                        <Button 
                          variant="ghost" 
                          className="hover:bg-transparent hover:text-highlight"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                          </svg>
                        </Button>
                        <Button 
                          className="bg-gradient hover:opacity-90 transition-opacity"
                          onClick={() => navigate(`/project/${project.id}`)}
                        >
                          Project Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
