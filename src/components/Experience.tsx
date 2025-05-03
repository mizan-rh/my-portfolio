import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const experiences = [
  // {
  //   position: "Senior Frontend Developer",
  //   company: "Tech Innovations Inc.",
  //   logo: "https://placehold.co/200x200/6C63FF/FFFFFF?text=TI",
  //   duration: "2023 - Present",
  //   description: "Lead frontend development for enterprise SaaS platform. Architected and implemented complex UI components and improved performance by 40%. Mentored junior developers and established best practices."
  // },
  {
    position: "Frontend Developer",
    company: "Make Real Ltd.",
    logo: "https://placehold.co/200x200/F81894/FFFFFF?text=DS",
    duration: "2023 - 2024",
    description:
      "Developed responsive web applications using React and TypeScript. Collaborated with UX designers to implement user-friendly interfaces. Integrated RESTful APIs and optimized web performance.",
  },
  // {
  //   position: "Web Developer",
  //   company: "Creative Agency",
  //   logo: "https://placehold.co/200x200/6C63FF/FFFFFF?text=CA",
  //   duration: "2018 - 2020",
  //   description: "Built custom websites for clients across various industries. Created interactive UI components and animations. Worked with WordPress, HTML5, CSS3, and JavaScript."
  // }
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
    <section id="experience" className="relative py-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute w-64 h-64 rounded-full bottom-1/4 left-1/4 bg-highlight/5 blur-3xl"></div>
        <div className="absolute w-64 h-64 rounded-full top-1/4 right-1/4 bg-secondary_accent/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-2 text-3xl font-bold">
            <span className="font-mono text-highlight">03.</span> Work
            Experience
          </h2>
          <div className="w-32 h-1 mb-12 bg-gradient"></div>

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
          <Card className="relative overflow-hidden border-gray-800 bg-dark-surface">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient"></div>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
                <div className="flex flex-col items-center md:w-1/4 md:items-start">
                  <div className="w-16 h-16 mb-2 overflow-hidden rounded-lg">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="mt-2 text-sm text-gray-400">
                    {exp.duration}
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="mb-1 text-xl font-semibold text-gray-200">
                    {exp.position}
                  </h3>
                  <div className="mb-3 text-highlight">{exp.company}</div>
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
