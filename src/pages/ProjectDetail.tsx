
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeftIcon, GithubIcon, ExternalLinkIcon } from "lucide-react";
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import project data
import { projects, findProjectById } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Fetch project details
  useEffect(() => {
    if (id) {
      const projectData = findProjectById(parseInt(id));
      if (projectData) {
        setProject(projectData);
      } else {
        // Project not found, redirect to projects page
        navigate('/projects');
      }
      setLoading(false);
    }
  }, [id, navigate]);
  
  if (loading) {
    return (
      <div className="bg-dark text-white min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-highlight">Loading project details...</div>
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className="bg-dark text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Button onClick={() => navigate('/projects')}>Back to Projects</Button>
        </div>
      </div>
    );
  }

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
            <Button 
              variant="ghost" 
              className="mb-6 hover:bg-transparent hover:text-highlight flex items-center gap-2"
              onClick={() => navigate('/projects')}
            >
              <ChevronLeftIcon size={16} />
              Back to Projects
            </Button>
            
            <div className="grid md:grid-cols-12 gap-8 mb-12">
              <div className="md:col-span-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">{project.title}</h1>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-dark-surface border-highlight text-highlight">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <p className="text-gray-300 mb-8 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    className="bg-gradient hover:opacity-90 transition-opacity flex items-center gap-2"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLinkIcon size={16} />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-highlight text-highlight hover:bg-highlight/10"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <GithubIcon size={16} className="mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
              
              <div className="md:col-span-4">
                <Card className="bg-dark-surface border-gray-800 overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-gradient">Project Details</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-400 text-sm">Category</p>
                        <p className="text-white">{project.category}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Completed</p>
                        <p className="text-white">{project.completedDate}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Role</p>
                        <p className="text-white">{project.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="relative mb-12">
              <div className="aspect-[16/9] overflow-hidden rounded-lg border border-gray-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <Tabs defaultValue="overview" className="mb-12">
              <TabsList className="bg-dark-surface border border-gray-800 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="challenges">Challenges</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="border border-gray-800 rounded-md p-6 bg-dark-surface">
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                  <p className="mb-4">{project.overview}</p>
                  {project.problemStatement && (
                    <>
                      <h3 className="text-xl font-semibold mb-3">Problem Statement</h3>
                      <p>{project.problemStatement}</p>
                    </>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="features" className="border border-gray-800 rounded-md p-6 bg-dark-surface">
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-highlight mt-1">▹</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="challenges" className="border border-gray-800 rounded-md p-6 bg-dark-surface">
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                      <p className="mb-2">{challenge.description}</p>
                      <p className="text-highlight font-semibold">Solution:</p>
                      <p>{challenge.solution}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            {/* Related Projects */}
            {projects.filter(p => p.id !== project.id && p.category === project.category).length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">Related Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {projects
                    .filter(p => p.id !== project.id && p.category === project.category)
                    .slice(0, 3)
                    .map(relatedProject => (
                      <Card key={relatedProject.id} className="bg-dark-surface border-gray-800 overflow-hidden group">
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={relatedProject.image} 
                            alt={relatedProject.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-2 group-hover:text-highlight transition-colors">
                            {relatedProject.title}
                          </h3>
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="p-0 hover:bg-transparent hover:text-highlight"
                            onClick={() => navigate(`/project/${relatedProject.id}`)}
                          >
                            View Project →
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

export default ProjectDetail;
