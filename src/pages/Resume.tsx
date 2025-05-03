import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { DownloadIcon } from "lucide-react";
import { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = () => {
    // In a real application, this would be a link to your actual resume PDF
    const link = document.createElement("a");
    link.href = "/resume-of-mizan.pdf"; // Replace with actual path
    link.download = "resume-of-mizan.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen text-white bg-dark">
      <Navbar />

      <section className="relative pt-32 pb-24">
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-5xl text-gradient">
              Resume
            </h1>
            <p className="mb-10 text-gray-400">
              Download my complete resume to learn more about my professional
              background, skills, and qualifications.
            </p>

            <Button
              onClick={handleDownload}
              className="px-8 py-6 text-lg text-white transition-opacity bg-gradient hover:opacity-90 group"
              size="lg"
            >
              <DownloadIcon className="w-5 h-5 mr-2 text-white group-hover:animate-bounce" />
              Download Resume PDF
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resume;
