// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative flex items-center min-h-screen pt-16 overflow-hidden bg-center bg-cover after:absolute after:inset-0 after:bg-black/30 after:backdrop-blur-sm after:z-0"
//       style={{
//         backgroundImage:
//           "linear-gradient(to bottom, rgba(15, 17, 23, 0.85), rgba(15, 17, 23, 0.95)), url('https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
//       }}
//     >
//       {/* Animated background elements */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute w-64 h-64 rounded-full top-1/4 left-1/4 bg-highlight/20 blur-3xl animate-float"></div>
//         <div className="absolute rounded-full bottom-1/4 right-1/3 w-96 h-96 bg-secondary_accent/20 blur-3xl animate-pulse-slow"></div>
//         <div className="absolute w-32 h-32 rounded-full top-1/3 right-1/4 bg-highlight/10 blur-2xl animate-glow"></div>
//       </div>

//       <div className="container relative z-10 px-4 mx-auto">
//         <div className="max-w-3xl">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="mb-4 font-mono text-highlight"
//           >
//             Hi, my name is
//           </motion.p>

//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl"
//           >
//             <span className="text-gray-200">John Doe</span>
//           </motion.h1>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="mb-8 text-3xl font-bold text-gray-400 md:text-5xl lg:text-6xl"
//           >
//             {/* I build <span className="text-gradient">digital experiences</span>. */}
//             I build{" "}
//             <span className="text-gradient text-gradient-animated">
//               digital experiences
//             </span>
//             .
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="max-w-2xl mb-10 text-lg leading-relaxed text-gray-400 md:text-xl"
//           >
//             I'm a software developer specializing in building (and occasionally
//             designing) exceptional digital experiences. Currently, I'm focused
//             on building accessible, human-centered products.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="flex flex-wrap gap-4"
//           >
//             <Button
//               type="button"
//               className="px-4 py-2 text-white shadow-lg bg-gradient shadow-highlight/20 sm:px-5 md:px-6 md:py-6 focus-ring"
//               size="lg"
//               onClick={() =>
//                 document
//                   .getElementById("projects")
//                   ?.scrollIntoView({ behavior: "smooth" })
//               }
//               aria-label="View my projects"
//             >
//               <span className="relative z-10">View My Work</span>
//             </Button>
//             <Button
//               type="button"
//               variant="outline"
//               size="lg"
//               className="relative px-4 py-2 overflow-hidden border-highlight text-highlight hover:bg-highlight/10 sm:px-5 md:px-6 md:py-6 focus-ring group"
//               onClick={() =>
//                 document
//                   .getElementById("contact")
//                   ?.scrollIntoView({ behavior: "smooth" })
//               }
//               aria-label="Contact me"
//             >
//               <span className="absolute inset-0 w-0 transition-all duration-300 bg-gradient-soft group-hover:w-full opacity-20"></span>
//               <span className="relative z-10">Contact Me</span>
//             </Button>
//           </motion.div>
//         </div>

//         {/* Enhanced code snippet decoration with animation */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           // className="absolute right-0 hidden p-4 border rounded-lg shadow-xl lg:block bottom-20 glass shadow-highlight/5 border-white/10"
//           className="absolute hidden p-4 transition duration-300 border shadow-md rounded- lg:block bottom-20 right-5 bg-white/5 backdrop-blur-3xl border-white/5 hover:shadow-lg"
//         >
//           <pre className="font-mono text-xs text-gray-400">
//             <code className="block">
//               <span className="text-secondary_accent">const</span>{" "}
//               <span className="text-indigo-300">developer</span> = {`{`}
//               <br /> <span className="text-gray-400">name</span>:{" "}
//               <span className="text-emerald-300">'John Doe'</span>,
//               <br /> <span className="text-gray-400">skills</span>: [
//               <span className="text-emerald-300">'React'</span>,{" "}
//               <span className="text-emerald-300">'TypeScript'</span>,{" "}
//               <span className="text-emerald-300">'Node.js'</span>],
//               <br /> <span className="text-gray-400">passionate</span>:{" "}
//               <span className="text-orange-300">true</span>,
//               <br /> <span className="text-gray-400">coffee</span>:{" "}
//               <span className="text-purple-300">() =&gt;</span>{" "}
//               <span className="text-emerald-300">'Always needed'</span>
//               <br />
//               {`};`}
//               <br />
//               <br />
//               <span className="text-gray-600">
//                 // Let's build something amazing together
//               </span>
//               <br />
//               <span className="text-indigo-300">developer</span>.
//               <span className="text-purple-300">createAwesomeProject</span>();
//             </code>
//           </pre>
//         </motion.div>
//       </div>

//       {/* Enhanced scroll indicator with animation */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.7 }}
//         className="absolute z-10 transform -translate-x-1/2 bottom-10 left-1/2 animate-bounce"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="text-gray-400"
//         >
//           <path d="M12 5v14M5 12l7 7 7-7"></path>
//         </svg>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      role="region"
      aria-labelledby="hero-heading"
      className="relative flex items-center min-h-screen px-4 pt-16 overflow-hidden bg-center bg-cover sm:px-6 lg:px-8 after:absolute after:inset-0 after:bg-black/30 after:backdrop-blur-sm after:z-0"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(15, 17, 23, 0.85), rgba(15, 17, 23, 0.95)), url('https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-64 h-64 rounded-full top-1/4 left-1/4 bg-highlight/20 blur-3xl animate-float"></div>
        <div className="absolute rounded-full bottom-1/4 right-1/3 w-96 h-96 bg-secondary_accent/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute w-32 h-32 rounded-full top-1/3 right-1/4 bg-highlight/10 blur-2xl animate-glow"></div>
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-highlight"
          >
            Hi, I am
          </motion.p>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl text-balance"
          >
            <span className="text-gray-200">Mizanur Rahman</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 text-3xl font-bold text-gray-400 md:text-5xl lg:text-6xl text-balance"
          >
            {/* I build{" "} */}
            <span className="text-gradient text-gradient-animated">
              Full Stack Developer
            </span>
            .
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl mb-10 text-lg leading-relaxed text-gray-400 md:text-xl"
          >
            As a MERN stack developer, I craft dynamic, responsive web
            applications using MongoDB, Express.js, React/Next, and Node.js. I’m
            passionate about creating clean, accessible, and user-friendly
            digital experiences that solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              type="button"
              className="px-4 py-2 text-white shadow-lg bg-gradient shadow-highlight/20 sm:px-5 md:px-6 md:py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight"
              size="lg"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              aria-label="View my projects"
            >
              <span className="relative z-10">View My Work</span>
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="relative px-4 py-2 overflow-hidden border-highlight text-highlight hover:bg-highlight/10 sm:px-5 md:px-6 md:py-6 group focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              aria-label="Contact me"
            >
              <span className="absolute inset-0 w-0 transition-all duration-300 bg-gradient-soft group-hover:w-full opacity-20"></span>
              <span className="relative z-10">Contact Me</span>
            </Button>
          </motion.div>
        </div>

        {/* Code snippet decoration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute hidden p-4 transition duration-300 border shadow-md rounded- lg:block bottom-20 right-5 bg-white/5 backdrop-blur-3xl border-white/5 hover:shadow-lg"
        >
          <pre className="max-w-full overflow-x-auto font-mono text-xs text-gray-400">
            <code className="block">
              <span className="text-secondary_accent">const</span>{" "}
              <span className="text-indigo-300">developer</span> = {`{`}
              <br /> <span className="text-gray-400">name</span>:{" "}
              <span className="text-emerald-300">'Mizanur Rahman'</span>,
              <br /> <span className="text-gray-400">skills</span>: [
              <span className="text-emerald-300">'Next.js'</span>,{" "}
              <span className="text-emerald-300">'TypeScript'</span>,{" "}
              <span className="text-emerald-300">'Express.js'</span>],
              <br /> <span className="text-gray-400">passionate</span>:{" "}
              <span className="text-orange-300">true</span>,
              <br /> <span className="text-gray-400">coffee</span>:{" "}
              <span className="text-purple-300">() =&gt;</span>{" "}
              <span className="text-emerald-300">'Always needed'</span>
              <br />
              {`};`}
              <br />
              <br />
              <span className="text-gray-600">
                // Let's build something amazing together
              </span>
              <br />
              <span className="text-indigo-300">developer</span>.
              <span className="text-purple-300">createAwesomeProject</span>();
            </code>
          </pre>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute z-10 transform -translate-x-1/2 bottom-10 left-1/2 animate-bounce"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400"
        >
          <path d="M12 5v14M5 12l7 7 7-7"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
