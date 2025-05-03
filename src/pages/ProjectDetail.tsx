import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ExternalLinkIcon, GithubIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Import project data
import { findProjectById, projects } from "@/data/projects";

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
        navigate("/projects");
      }
      setLoading(false);
    }
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white bg-dark">
        <div className="animate-pulse text-highlight">
          Loading project details...
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white bg-dark">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">Project not found</h2>
          <Button onClick={() => navigate("/projects")}>
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white bg-dark">
      <Navbar />

      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-highlight/10 to-transparent"></div>
        <div className="absolute rounded-full -top-40 -right-40 w-96 h-96 bg-primary/5 blur-3xl" />
        <div className="absolute rounded-full -bottom-40 -left-40 w-96 h-96 bg-secondary/5 blur-3xl" />

        <div className="container relative px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <Button
              variant="ghost"
              className="flex items-center gap-2 mb-6 hover:bg-transparent hover:text-highlight"
              onClick={() => navigate("/projects")}
            >
              <ChevronLeftIcon size={16} />
              Back to Projects
            </Button>

            <div className="grid gap-8 mb-12 md:grid-cols-12">
              <div className="md:col-span-8">
                <h1 className="mb-4 text-3xl font-bold md:text-4xl text-gradient">
                  {project.title}
                </h1>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="bg-dark-surface border-highlight text-highlight"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <p className="mb-8 leading-relaxed text-gray-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    className="flex items-center gap-2 text-white transition-opacity bg-gradient hover:opacity-90"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <ExternalLinkIcon size={16} />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="border-highlight text-highlight hover:bg-highlight/10"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <GithubIcon size={16} className="mr-2" />
                    View Code
                  </Button>
                </div>
              </div>

              <div className="md:col-span-4">
                <Card className="overflow-hidden border-gray-800 bg-dark-surface">
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-semibold text-gradient">
                      Project Details
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-400">Category</p>
                        <p className="text-white">{project.category}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Completed</p>
                        <p className="text-white">{project.completedDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Role</p>
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
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <Tabs defaultValue="overview" className="mb-12">
              <TabsList className="mb-6 border border-gray-800 bg-dark-surface">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="challenges">Challenges</TabsTrigger>
              </TabsList>

              <TabsContent
                value="overview"
                className="p-6 border border-gray-800 rounded-md bg-dark-surface"
              >
                <div className="prose prose-invert max-w-none">
                  <h2 className="mb-4 text-2xl font-bold">Project Overview</h2>
                  <p className="mb-4">{project.overview}</p>
                  {project.problemStatement && (
                    <>
                      <h3 className="mb-3 text-xl font-semibold">
                        Problem Statement
                      </h3>
                      <p>{project.problemStatement}</p>
                    </>
                  )}
                </div>
              </TabsContent>

              <TabsContent
                value="features"
                className="p-6 border border-gray-800 rounded-md bg-dark-surface"
              >
                <div className="prose prose-invert max-w-none">
                  <h2 className="mb-4 text-2xl font-bold">Key Features</h2>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="mt-1 text-highlight">▹</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent
                value="challenges"
                className="p-6 border border-gray-800 rounded-md bg-dark-surface"
              >
                <div className="prose prose-invert max-w-none">
                  <h2 className="mb-4 text-2xl font-bold">
                    Challenges & Solutions
                  </h2>
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="mb-6">
                      <h3 className="mb-2 text-xl font-semibold">
                        {challenge.title}
                      </h3>
                      <p className="mb-2">{challenge.description}</p>
                      <p className="font-semibold text-highlight">Solution:</p>
                      <p>{challenge.solution}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* Related Projects */}
            {projects.filter(
              (p) => p.id !== project.id && p.category === project.category
            ).length > 0 && (
              <div className="mb-8">
                <h2 className="mb-6 text-2xl font-bold">Related Projects</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {projects
                    .filter(
                      (p) =>
                        p.id !== project.id && p.category === project.category
                    )
                    .slice(0, 3)
                    .map((relatedProject) => (
                      <Card
                        key={relatedProject.id}
                        className="overflow-hidden border-gray-800 bg-dark-surface group"
                      >
                        <div className="overflow-hidden aspect-video">
                          <img
                            src={relatedProject.image}
                            alt={relatedProject.title}
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="mb-2 font-semibold transition-colors group-hover:text-highlight">
                            {relatedProject.title}
                          </h3>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="p-0 hover:bg-transparent hover:text-highlight"
                            onClick={() =>
                              navigate(`/project/${relatedProject.id}`)
                            }
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
