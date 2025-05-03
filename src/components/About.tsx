
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute left-0 right-0 h-1/2 bg-gradient-to-b from-dark-surface/30 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-highlight font-mono">01.</span> About Me
          </h2>
          <div className="h-1 w-32 bg-gradient mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <p className="text-gray-300 mb-6">
                Hello! I'm John, a passionate developer with a love for creating digital experiences that live on the web. 
                My journey in web development started back in 2015 when I decided to try customizing a Wordpress theme — turns out 
                hacking together a custom theme taught me a lot about HTML & CSS!
              </p>
              <p className="text-gray-300 mb-6">
                Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, and a tech company. 
                My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
              </p>
              <p className="text-gray-300">
                I also recently launched a course that covers everything you need to build a web app with the React ecosystem.
                Here are a few technologies I've been working with recently:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-1 mt-6">
                {['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js', 'TailwindCSS'].map((tech) => (
                  <div key={tech} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-highlight">▹</span> {tech}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-1 order-first md:order-last">
              <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64">
                <div className="absolute inset-0 rounded-md bg-gradient p-1">
                  <div className="bg-dark h-full w-full rounded-md overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" 
                      alt="John Doe" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            <Card className="bg-dark-surface border-gray-800 overflow-hidden group">
              <CardContent className="p-6">
                <div className="text-highlight mb-4 text-2xl font-semibold">5+</div>
                <h3 className="text-gray-300 font-medium mb-2 group-hover:text-highlight transition-colors duration-300">Years of Experience</h3>
                <p className="text-gray-400 text-sm">Crafting digital experiences that users love</p>
              </CardContent>
            </Card>
            
            <Card className="bg-dark-surface border-gray-800 overflow-hidden group">
              <CardContent className="p-6">
                <div className="text-highlight mb-4 text-2xl font-semibold">50+</div>
                <h3 className="text-gray-300 font-medium mb-2 group-hover:text-highlight transition-colors duration-300">Completed Projects</h3>
                <p className="text-gray-400 text-sm">Delivering solutions that exceed expectations</p>
              </CardContent>
            </Card>
            
            <Card className="bg-dark-surface border-gray-800 overflow-hidden group sm:col-span-2 lg:col-span-1">
              <CardContent className="p-6">
                <div className="text-highlight mb-4 text-2xl font-semibold">20+</div>
                <h3 className="text-gray-300 font-medium mb-2 group-hover:text-highlight transition-colors duration-300">Happy Clients</h3>
                <p className="text-gray-400 text-sm">Building lasting relationships through quality work</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
