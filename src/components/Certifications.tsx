import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Full Stack Web Development",
    organization: "Programming Hero",
    logo: "https://placehold.co/200x200/6C63FF/FFFFFF?text=AWS",
    date: "2023",
    description:
      "Mastered advanced React concepts, state management solutions, and modern JavaScript development techniques.",
  },
  // {
  //   title: "Professional Frontend Developer",
  //   organization: "Meta",
  //   logo: "https://placehold.co/200x200/F81894/FFFFFF?text=META",
  //   date: "2022",
  //   description: "Mastered advanced React concepts, state management solutions, and modern JavaScript development techniques."
  // },
  // {
  //   title: "Certified UX Designer",
  //   organization: "Google",
  //   logo: "https://placehold.co/200x200/6C63FF/FFFFFF?text=Google",
  //   date: "2021",
  //   description: "Comprehensive understanding of UX design principles, user research methodologies, and prototyping techniques."
  // }
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
    <section id="certifications" className="relative py-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute w-64 h-64 rounded-full bottom-1/4 right-1/4 bg-highlight/5 blur-3xl"></div>
        <div className="absolute w-64 h-64 rounded-full top-1/4 left-1/4 bg-secondary_accent/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-2 text-3xl font-bold">
            <span className="font-mono text-highlight">05.</span> Certifications
          </h2>
          <div className="w-32 h-1 mb-12 bg-gradient"></div>

          <CertificationsContent />
        </div>
      </div>
    </section>
  );
};

const CertificationsContent = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card className="h-full overflow-hidden border-gray-800 bg-dark-surface group">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 overflow-hidden rounded-lg">
                  <img
                    src={cert.logo}
                    alt={cert.organization}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-200 transition-colors duration-300 group-hover:text-highlight">
                    {cert.title}
                  </h3>
                  <div className="text-sm text-highlight">
                    {cert.organization}
                  </div>
                </div>
              </div>
              <div className="flex justify-end mb-3">
                <div className="text-sm text-gray-400">{cert.date}</div>
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
