import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A smart rental platform built with Next.js and TailwindCSS, featuring role-based access, secure payments, and responsive design.",
    image:
      "https://i.ibb.co.com/FLSNbSsf/Basa-Finder-Smart-Rental-Housing-Solution-feature.png",
    github: "https://github.com/mizan-rh/basa-finder-client?tab=readme-ov-file",
    demo: "https://basa-finder-client-swart.vercel.app/",
    featured: true,
    technologies: [
      "Next.js",
      "Shadcn UI",
      "TypeScript",
      "Cloudinary",
      "ShurjoPay",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    description:
      "An admin dashboard for e-commerce platforms with analytics, inventory management, and order processing.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    github: "#",
    demo: "#",
    featured: true,
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, notifications, and team features.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    github: "#",
    demo: "#",
    featured: true,
    technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 rounded-full h-1/3 bg-highlight/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 rounded-full h-1/3 bg-secondary_accent/5 blur-3xl"></div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-2 text-3xl font-bold">
            <span className="font-mono text-highlight">02.</span> My Projects
          </h2>
          <div className="w-32 h-1 mb-12 bg-gradient"></div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className={cn(
                  "grid md:grid-cols-12 gap-6 md:gap-12 items-center",
                  index % 2 === 1 ? "md:text-right" : ""
                )}
              >
                <div
                  className={cn(
                    "md:col-span-7 relative z-10 group",
                    index % 2 === 1 ? "md:order-2" : ""
                  )}
                >
                  <div className="relative overflow-hidden border border-gray-800 rounded-lg">
                    <div className="aspect-video">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover object-top w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 transition-opacity duration-300 bg-dark/50 backdrop-blur-sm group-hover:opacity-0"></div>
                  </div>
                </div>

                <div
                  className={cn(
                    "md:col-span-5",
                    index % 2 === 1 ? "md:order-1" : ""
                  )}
                >
                  <p className="mb-1 font-mono text-highlight">
                    Featured Project
                  </p>
                  <h3 className="mb-4 text-2xl font-bold text-gray-200">
                    {project.title}
                  </h3>

                  <Card className="mb-4 border-gray-800 bg-dark-surface">
                    <CardContent className="p-5">
                      <p className="text-gray-300">{project.description}</p>
                    </CardContent>
                  </Card>

                  <div
                    className={cn(
                      "flex flex-wrap gap-2 mb-6",
                      index % 2 === 1 ? "md:justify-end" : ""
                    )}
                  >
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-gray-300 border-gray-700 bg-dark-surface"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div
                    className={cn(
                      "flex gap-4",
                      index % 2 === 1 ? "md:justify-end" : ""
                    )}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-0 hover:text-highlight"
                    >
                      <Button
                        variant="ghost"
                        className="p-0 hover:bg-transparent hover:text-highlight"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                      </Button>
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-0 hover:text-highlight"
                    >
                      <Button
                        variant="ghost"
                        className="p-0 hover:bg-transparent hover:text-highlight"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                          ></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                      </Button>
                    </a>
                    <Button
                      className="border bg-highlight/10 border-highlight text-highlight hover:bg-highlight/20"
                      onClick={() => navigate(`/project/${project.id}`)}
                    >
                      Project Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <Button
              className="border bg-dark-surface border-highlight text-highlight hover:bg-highlight/10"
              onClick={() => navigate("/projects")}
            >
              View More Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
