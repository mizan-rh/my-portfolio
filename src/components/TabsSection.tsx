
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import { motion } from "framer-motion";
import { BriefcaseIcon, BookIcon, AwardIcon } from "lucide-react";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section id="professional" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
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
              <span className="text-highlight font-mono text-xl">04.</span>
              <h2 className="text-3xl font-bold">Professional</h2>
            </div>
            <div className="h-1 w-32 bg-gradient mx-auto"></div>
            <p className="text-gray-400 max-w-2xl mx-auto mt-6">
              My professional background, experience, and educational journey that have shaped my career.
            </p>
          </motion.div>

          <Tabs 
            defaultValue="experience" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="bg-dark-surface border border-gray-800 p-1">
                <TabsTrigger 
                  value="experience" 
                  className="data-[state=active]:bg-highlight data-[state=active]:text-dark flex gap-2 items-center"
                  onClick={() => setActiveTab("experience")}
                >
                  <BriefcaseIcon className="h-4 w-4" />
                  Experience
                </TabsTrigger>
                <TabsTrigger 
                  value="education" 
                  className="data-[state=active]:bg-highlight data-[state=active]:text-dark flex gap-2 items-center"
                  onClick={() => setActiveTab("education")}
                >
                  <BookIcon className="h-4 w-4" />
                  Education
                </TabsTrigger>
                <TabsTrigger 
                  value="certifications" 
                  className="data-[state=active]:bg-highlight data-[state=active]:text-dark flex gap-2 items-center"
                  onClick={() => setActiveTab("certifications")}
                >
                  <AwardIcon className="h-4 w-4" />
                  Certifications
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="experience" className="mt-0">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="p-1"
              >
                <Experience insideTab={true} />
              </motion.div>
            </TabsContent>
            
            <TabsContent value="education" className="mt-0">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="p-1"
              >
                <Education insideTab={true} />
              </motion.div>
            </TabsContent>

            <TabsContent value="certifications" className="mt-0">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="p-1"
              >
                <Certifications insideTab={true} />
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
