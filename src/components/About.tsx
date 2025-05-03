// import { Card, CardContent } from "@/components/ui/card";

// const About = () => {
//   return (
//     <section id="about" className="relative py-24">
//       {/* Background accent */}
//       <div className="absolute left-0 right-0 z-0 h-1/2 bg-gradient-to-b from-dark-surface/30 to-transparent"></div>

//       <div className="container relative z-10 px-4 mx-auto">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="mb-2 text-3xl font-bold">
//             <span className="font-mono text-highlight">01.</span> About Me
//           </h2>
//           <div className="w-32 h-1 mb-12 bg-gradient"></div>

//           <div className="grid items-center gap-8 md:grid-cols-3">
//             <div className="md:col-span-2">
//               <p className="mb-6 text-gray-300">
//                 Hello! I'm John, a passionate developer with a love for creating digital experiences that live on the web.
//                 My journey in web development started back in 2015 when I decided to try customizing a Wordpress theme — turns out
//                 hacking together a custom theme taught me a lot about HTML & CSS!
//               </p>
//               <p className="mb-6 text-gray-300">
//                 Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, and a tech company.
//                 My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
//               </p>
//               <p className="text-gray-300">
//                 I also recently launched a course that covers everything you need to build a web app with the React ecosystem.
//                 Here are a few technologies I've been working with recently:
//               </p>

//               <div className="grid grid-cols-2 mt-6 sm:grid-cols-3 gap-x-2 gap-y-1">
//                 {['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js', 'TailwindCSS'].map((tech) => (
//                   <div key={tech} className="flex items-center gap-2 text-sm text-gray-300">
//                     <span className="text-highlight">▹</span> {tech}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="order-first md:col-span-1 md:order-last">
//               <div className="relative w-48 h-48 mx-auto md:w-64 md:h-64">
//                 <div className="absolute inset-0 p-1 rounded-md bg-gradient">
//                   <div className="w-full h-full overflow-hidden rounded-md bg-dark">
//                     <img
//                       src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
//                       alt="John Doe"
//                       className="object-cover w-full h-full transition-all duration-300 grayscale hover:grayscale-0"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="grid gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-3">
//             <Card className="overflow-hidden border-gray-800 bg-dark-surface group">
//               <CardContent className="p-6">
//                 <div className="mb-4 text-2xl font-semibold text-highlight">5+</div>
//                 <h3 className="mb-2 font-medium text-gray-300 transition-colors duration-300 group-hover:text-highlight">Years of Experience</h3>
//                 <p className="text-sm text-gray-400">Crafting digital experiences that users love</p>
//               </CardContent>
//             </Card>

//             <Card className="overflow-hidden border-gray-800 bg-dark-surface group">
//               <CardContent className="p-6">
//                 <div className="mb-4 text-2xl font-semibold text-highlight">50+</div>
//                 <h3 className="mb-2 font-medium text-gray-300 transition-colors duration-300 group-hover:text-highlight">Completed Projects</h3>
//                 <p className="text-sm text-gray-400">Delivering solutions that exceed expectations</p>
//               </CardContent>
//             </Card>

//             <Card className="overflow-hidden border-gray-800 bg-dark-surface group sm:col-span-2 lg:col-span-1">
//               <CardContent className="p-6">
//                 <div className="mb-4 text-2xl font-semibold text-highlight">20+</div>
//                 <h3 className="mb-2 font-medium text-gray-300 transition-colors duration-300 group-hover:text-highlight">Happy Clients</h3>
//                 <p className="text-sm text-gray-400">Building lasting relationships through quality work</p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-dark-surface/30 to-transparent"
    >
      {/* Background accent */}
      <div className="absolute left-0 right-0 z-0 h-1/2"></div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-2 text-3xl font-bold">
            <span className="font-mono text-highlight">01.</span> About Me
          </h2>
          <div className="w-32 h-1 mb-10 bg-gradient"></div>

          <div className="space-y-6">
            <p className="text-gray-300">
              Hello! I'm a MERN stack developer passionate about building fast,
              accessible, and user-centered web applications. My journey in
              development began with curiosity and a desire to understand how
              things work behind the screen. That curiosity has grown into a
              commitment to writing clean code and delivering thoughtful user
              experiences.
            </p>
            <p className="text-gray-300">
              Over the years, I've worked on a variety of projects—from small
              websites to complex platforms—where I've learned how to balance
              functionality with performance and usability. I care deeply about
              building things that are not only useful, but also intuitive and
              enjoyable to use.
            </p>
            <p className="text-gray-300">
              I'm always open to meaningful collaborations, learning from
              others, and contributing to impactful projects.
            </p>
          </div>

          <div className="grid gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden border-gray-800 bg-dark-surface group">
              <CardContent className="p-6">
                <div className="mb-4 text-2xl font-semibold text-highlight">
                  Consistent
                </div>
                <h3 className="mb-2 font-medium text-gray-300 transition-colors duration-300 group-hover:text-highlight">
                  Learning & Growth
                </h3>
                <p className="text-sm text-gray-400">
                  Continuously building skills and exploring new technologies
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-gray-800 bg-dark-surface group">
              <CardContent className="p-6">
                <div className="mb-4 text-2xl font-semibold text-highlight">
                  Problem Solver
                </div>
                <h3 className="mb-2 font-medium text-gray-300 transition-colors duration-300 group-hover:text-highlight">
                  Strong Foundation
                </h3>
                <p className="text-sm text-gray-400">
                  Focused on writing clean, maintainable, and scalable code
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-gray-800 bg-dark-surface group sm:col-span-2 lg:col-span-1">
              <CardContent className="p-6">
                <div className="mb-4 text-2xl font-semibold text-highlight">
                  Team Player
                </div>
                <h3 className="mb-2 font-medium text-gray-300 transition-colors duration-300 group-hover:text-highlight">
                  Collaborative Mindset
                </h3>
                <p className="text-sm text-gray-400">
                  Enjoy working with others and sharing knowledge
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
