
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { CodeIcon, BrainIcon } from "lucide-react";

// Create an enhanced SkillProgress component
const SkillProgress = ({ value, className }: { value: number, className?: string }) => {
  return (
    <div className="relative h-3 bg-dark/50 rounded-full overflow-hidden">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`absolute top-0 left-0 h-full rounded-full ${
          value > 85 
            ? 'bg-gradient-to-r from-highlight to-secondary_accent'
            : value > 70 
              ? 'bg-gradient-to-r from-highlight/90 to-secondary_accent/90' 
              : 'bg-gradient-to-r from-highlight/80 to-secondary_accent/80'
        } shadow-lg shadow-highlight/20`}
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute top-0 right-0 bottom-0 left-0 bg-[length:10px_10px] bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)',
          backgroundSize: '10px 10px',
        }}
      />
    </div>
  );
};

const technicalSkills = [
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Next.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Express", level: 85 },
  { name: "GraphQL", level: 70 },
  { name: "PostgreSQL", level: 75 },
  { name: "MongoDB", level: 80 },
  { name: "TailwindCSS", level: 90 },
  { name: "RESTful APIs", level: 90 }
];

const softSkills = [
  { name: "Communication", level: 95 },
  { name: "Team Collaboration", level: 90 },
  { name: "Problem Solving", level: 92 },
  { name: "Adaptability", level: 88 },
  { name: "Time Management", level: 85 },
  { name: "Leadership", level: 80 }
];

interface SkillsProps {
  insideTab?: boolean;
}

const Skills = ({ insideTab = false }: SkillsProps) => {
  // Don't render section wrapper when inside tab
  if (insideTab) {
    return <SkillsContent />;
  }
  
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Enhanced background elements - removed circle backgrounds */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-subtle rounded-full opacity-30" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-highlight font-mono text-xl">03.</span>
              <h2 className="text-3xl font-bold">My Skills</h2>
            </div>
            <div className="h-1 w-32 bg-gradient mx-auto"></div>
            <p className="text-gray-400 max-w-2xl mx-auto mt-6">
              My expertise spans across multiple domains and skill levels, from frontend development to team leadership.
              Below is a comprehensive overview of my technical capabilities and soft skills.
            </p>
          </motion.div>
          
          <SkillsContent />
        </div>
      </div>
    </section>
  );
};

// Separate component for the skills content to avoid duplication
const SkillsContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-dark/80 to-dark border-gray-800/30 overflow-hidden h-full shadow-lg shadow-highlight/10 backdrop-blur-sm hover:shadow-xl hover:shadow-highlight/15 transition-all duration-500 rounded-2xl">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient"></div>
            <CardContent className="p-6 relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient rounded-xl text-dark rotate-3 transform hover:rotate-6 transition-transform duration-300">
                  <CodeIcon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gradient">Technical Skills</h3>
              </div>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-7"
              >
                {technicalSkills.map((skill, index) => (
                  <motion.div 
                    key={skill.name} 
                    className="space-y-2 stagger-item"
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ translateY: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200 font-medium">{skill.name}</span>
                      <Badge 
                        variant="outline" 
                        className="bg-dark/70 border border-white/10 text-highlight/90 backdrop-blur-sm"
                      >
                        {skill.level}%
                      </Badge>
                    </div>
                    <SkillProgress value={skill.level} />
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-dark/80 to-dark border-gray-800/30 overflow-hidden h-full shadow-lg shadow-highlight/10 backdrop-blur-sm hover:shadow-xl hover:shadow-highlight/15 transition-all duration-500 rounded-2xl">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient"></div>
            <CardContent className="p-6 relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient rounded-xl text-dark -rotate-3 transform hover:-rotate-6 transition-transform duration-300">
                  <BrainIcon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gradient">Soft Skills</h3>
              </div>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-7"
              >
                {softSkills.map((skill, index) => (
                  <motion.div 
                    key={skill.name} 
                    className="space-y-2 stagger-item"
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ translateY: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200 font-medium">{skill.name}</span>
                      <Badge 
                        variant="outline" 
                        className="bg-dark/70 border border-white/10 text-highlight/90 backdrop-blur-sm"
                      >
                        {skill.level}%
                      </Badge>
                    </div>
                    <SkillProgress value={skill.level} />
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Technologies */}
      <Technologies />
    </>
  );
};

const Technologies = () => {
  const techStack = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mt-10"
    >
      <h3 className="text-2xl font-semibold mb-10 text-center">
        <span className="relative">
          Technologies I Use
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient"></span>
        </span>
      </h3>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
        {techStack.map((tech, index) => (
          <motion.div 
            key={tech.name} 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -8, scale: 1.1, transition: { duration: 0.2 } }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 flex items-center justify-center mb-3 p-3 rounded-xl glass-dark shadow-lg hover:shadow-highlight/30 transition-all duration-300 group">
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className="w-full h-full object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(108,99,255,0.8)] transition-all duration-300" 
              />
            </div>
            <span className="block text-center text-sm font-medium text-gray-300 group-hover:text-highlight transition-colors duration-300">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
