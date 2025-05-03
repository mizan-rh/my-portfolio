
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BriefcaseIcon } from "lucide-react";

const experiences = [
  {
    position: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    logo: "https://placehold.co/200x200/6C63FF/FFFFFF?text=TI",
    duration: "2023 - Present",
    description: "Lead frontend development for enterprise SaaS platform. Architected and implemented complex UI components and improved performance by 40%. Mentored junior developers and established best practices."
  },
  {
    position: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    logo: "https://placehold.co/200x200/F81894/FFFFFF?text=DS",
    duration: "2020 - 2023",
    description: "Developed responsive web applications using React and TypeScript. Collaborated with UX designers to implement user-friendly interfaces. Integrated RESTful APIs and optimized web performance."
  },
  {
    position: "Web Developer",
    company: "Creative Agency",
    logo: "https://placehold.co/200x200/6C63FF/FFFFFF?text=CA",
    duration: "2018 - 2020",
    description: "Built custom websites for clients across various industries. Created interactive UI components and animations. Worked with WordPress, HTML5, CSS3, and JavaScript."
  }
];

interface ExperienceProps {
  insideTab?: boolean;
}

const Experience = ({ insideTab = false }: ExperienceProps) => {
  // Don't render section wrapper when inside tab
  if (insideTab) {
    return <ExperienceContent />;
  }
  
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-highlight/5 blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-secondary_accent/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-highlight font-mono">03.</span> Work Experience
          </h2>
          <div className="h-1 w-32 bg-gradient mb-12"></div>
          
          <ExperienceContent />
        </div>
      </div>
    </section>
  );
};

const ExperienceContent = () => {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card className="bg-dark-surface border-gray-800 overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full w-1 bg-gradient"></div>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <div className="md:w-1/4 flex flex-col items-center md:items-start">
                  <div className="w-16 h-16 rounded-lg overflow-hidden mb-2">
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-gray-400 text-sm mt-2">{exp.duration}</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold text-gray-200 mb-1">{exp.position}</h3>
                  <div className="text-highlight mb-3">{exp.company}</div>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;
