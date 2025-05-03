
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BookIcon } from "lucide-react";

const educations = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    logo: "https://placehold.co/200x200/6C63FF/FFFFFF?text=SU",
    duration: "2016 - 2018",
    description: "Specialized in Human-Computer Interaction and Web Technologies. Completed thesis on 'Improving User Experience through Adaptive Interfaces'."
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of California, Berkeley",
    logo: "https://placehold.co/200x200/F81894/FFFFFF?text=UCB",
    duration: "2012 - 2016",
    description: "Graduated with honors. Focused on software engineering and database systems. Participated in multiple hackathons and coding competitions."
  }
];

interface EducationProps {
  insideTab?: boolean;
}

const Education = ({ insideTab = false }: EducationProps) => {
  // Don't render section wrapper when inside tab
  if (insideTab) {
    return <EducationContent />;
  }
  
  return (
    <section id="education" className="py-24 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-highlight/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-secondary_accent/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-highlight font-mono">04.</span> Education
          </h2>
          <div className="h-1 w-32 bg-gradient mb-12"></div>
          
          <EducationContent />
        </div>
      </div>
    </section>
  );
};

const EducationContent = () => {
  return (
    <div className="space-y-8">
      {educations.map((edu, index) => (
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
                    <img src={edu.logo} alt={edu.institution} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-gray-400 text-sm mt-2">{edu.duration}</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold text-gray-200 mb-1">{edu.degree}</h3>
                  <div className="text-highlight mb-3">{edu.institution}</div>
                  <p className="text-gray-400">{edu.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default Education;
