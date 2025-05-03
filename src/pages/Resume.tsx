
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DownloadIcon } from "lucide-react";

const Resume = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = () => {
    // In a real application, this would be a link to your actual resume PDF
    const link = document.createElement('a');
    link.href = '/path-to-your-resume.pdf'; // Replace with actual path
    link.download = 'john-doe-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-dark text-white min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Resume</h1>
            <p className="text-gray-400 mb-10">
              Download my complete resume to learn more about my professional background, skills, and qualifications.
            </p>
            
            <Button 
              onClick={handleDownload}
              className="bg-gradient hover:opacity-90 transition-opacity px-8 py-6 text-lg group"
              size="lg"
            >
              <DownloadIcon className="mr-2 h-5 w-5 group-hover:animate-bounce" />
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
