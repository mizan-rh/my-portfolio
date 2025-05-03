
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { AwardIcon } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    logo: "https://placehold.co/200x200/6C63FF/FFFFFF?text=AWS",
    date: "2023",
    description: "Validated expertise in designing distributed systems on AWS. Demonstrated knowledge of AWS architecture best practices."
  },
  {
    title: "Professional Frontend Developer",
    organization: "Meta",
    logo: "https://placehold.co/200x200/F81894/FFFFFF?text=META",
    date: "2022",
    description: "Mastered advanced React concepts, state management solutions, and modern JavaScript development techniques."
  },
  {
    title: "Certified UX Designer",
    organization: "Google",
    logo: "https://placehold.co/200x200/6C63FF/FFFFFF?text=Google",
    date: "2021",
    description: "Comprehensive understanding of UX design principles, user research methodologies, and prototyping techniques."
  }
];

interface CertificationsProps {
  insideTab?: boolean;
}

const Certifications = ({ insideTab = false }: CertificationsProps) => {
  // Don't render section wrapper when inside tab
  if (insideTab) {
    return <CertificationsContent />;
  }
  
  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-highlight/5 blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-secondary_accent/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-highlight font-mono">05.</span> Certifications
          </h2>
          <div className="h-1 w-32 bg-gradient mb-12"></div>
          
          <CertificationsContent />
        </div>
      </div>
    </section>
  );
};

const CertificationsContent = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card className="bg-dark-surface border-gray-800 h-full overflow-hidden group">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden">
                  <img src={cert.logo} alt={cert.organization} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-200 group-hover:text-highlight transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <div className="text-highlight text-sm">{cert.organization}</div>
                </div>
              </div>
              <div className="flex justify-end mb-3">
                <div className="text-gray-400 text-sm">{cert.date}</div>
              </div>
              <p className="text-gray-400">{cert.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default Certifications;
