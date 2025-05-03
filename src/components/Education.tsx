import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
// import { BookIcon } from "lucide-react";

const educations = [
  {
    degree: "Master of Business Administration",
    institution: "National University",
    logo: "https://placehold.co/200x200/6C63FF/FFFFFF?text=SU",
    duration: "2022 - 2023",
    // description: "Specialized in Human-Computer Interaction and Web Technologies. Completed thesis on 'Improving User Experience through Adaptive Interfaces'."
  },
  {
    degree: "Bachelor of Business Administration",
    institution: "National University",
    logo: "https://placehold.co/200x200/F81894/FFFFFF?text=UCB",
    duration: "2017 - 2021",
    // description: "Graduated with honors. Focused on software engineering and database systems. Participated in multiple hackathons and coding competitions."
  },
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
    <section id="education" className="relative py-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute w-64 h-64 rounded-full top-1/4 right-1/4 bg-highlight/5 blur-3xl"></div>
        <div className="absolute w-64 h-64 rounded-full bottom-1/4 left-1/4 bg-secondary_accent/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-2 text-3xl font-bold">
            <span className="font-mono text-highlight">04.</span> Education
          </h2>
          <div className="w-32 h-1 mb-12 bg-gradient"></div>

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
          <Card className="relative overflow-hidden border-gray-800 bg-dark-surface">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient"></div>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
                <div className="flex flex-col items-center md:w-1/4 md:items-start">
                  <div className="w-16 h-16 mb-2 overflow-hidden rounded-lg">
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="mt-2 text-sm text-gray-400">
                    {edu.duration}
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="mb-1 text-xl font-semibold text-gray-200">
                    {edu.degree}
                  </h3>
                  <div className="mb-3 text-highlight">{edu.institution}</div>
                  {/* <p className="text-gray-400">{edu.description}</p> */}
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
