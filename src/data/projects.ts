// Define the Project type
export interface Project {
  id: number;
  title: string;
  description: string;
  overview: string;
  problemStatement?: string;
  image: string;
  github: string;
  demo: string;
  featured: boolean;
  category: string;
  completedDate: string;
  role: string;
  technologies: string[];
  features: string[];
  challenges: {
    title: string;
    description: string;
    solution: string;
  }[];
}

// Sample project data
export const projects: Project[] = [
  // {
  //   id: 1,
  //   title: "Basa Finder Platform",
  //   description:
  //     "A smart rental platform built with Next.js and TailwindCSS, featuring role-based access, secure payments, and responsive design.",
  //   overview:
  //     "This portfolio website showcases my skills, projects, and professional experience in a modern, responsive design. It features smooth animations, dark theme, and an intuitive user interface.",
  //   problemStatement:
  //     "I needed a professional online presence that would showcase my skills and projects in an engaging way while providing an optimal viewing experience across all devices.",
  //   image:
  //     "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
  //   github: "#",
  //   demo: "#",
  //   featured: true,
  //   category: "Web",
  //   completedDate: "March 2025",
  //   role: "Full Stack Developer",
  //   technologies: ["React", "TailwindCSS", "Framer Motion", "TypeScript"],
  //   features: [
  //     "Responsive design that works across all devices",
  //     "Dark theme with subtle animations",
  //     "Project showcase with filtering",
  //     "Contact form with validation",
  //     "Blog section with categorization",
  //     "Skills visualization with progress indicators",
  //   ],
  //   challenges: [
  //     {
  //       title: "Optimizing Performance",
  //       description:
  //         "The initial design included heavy animations that caused performance issues on mobile devices.",
  //       solution:
  //         "Implemented lazy loading for images and optimized animations to run only when elements are in viewport using Intersection Observer.",
  //     },
  //     {
  //       title: "Cross-Browser Compatibility",
  //       description:
  //         "Some CSS features were not working consistently across all browsers.",
  //       solution:
  //         "Used PostCSS with autoprefixer to ensure CSS compatibility and implemented fallbacks for newer CSS features.",
  //     },
  //   ],
  // },
  {
    id: 1,
    title: "Basa Finder Platform",
    description:
      "A smart rental platform built with Next.js and TailwindCSS, featuring role-based access, secure payments, and responsive design.",
    overview:
      "Basa Finder is a full-stack web application designed to simplify rental housing in Bangladesh, allowing tenants, landlords, and admins to interact through dedicated dashboards with secure features.",
    problemStatement:
      "Traditional rental systems lacked transparency and digital access for users in Bangladesh. A centralized and scalable platform was needed for smoother interactions and management.",
    image:
      "https://i.ibb.co.com/FLSNbSsf/Basa-Finder-Smart-Rental-Housing-Solution-feature.png",
    github: "https://github.com/mizan-rh/basa-finder-client",
    demo: "https://basa-finder-client-swart.vercel.app/",
    featured: true,
    category: "Web",
    completedDate: "March 2025",
    role: "Full Stack Developer",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "Shadcn UI",
      "TypeScript",
      "Framer Motion",
    ],
    features: [
      "Role-based dashboards for tenants, landlords, and admins",
      "Responsive design with modern UI components",
      "Secure rent payments via ShurjoPay integration",
      "Property listing with filters and media upload",
      "Request approval and communication workflow",
      "Admin tools for user and content management",
    ],
    challenges: [
      {
        title: "Payment Integration",
        description:
          "Integrating a localized payment gateway (ShurjoPay) was complex due to limited documentation and testing access.",
        solution:
          "Collaborated with ShurjoPay support, used sandbox mode extensively, and created robust success/failure handlers.",
      },
      {
        title: "Dynamic Role-Based Routing",
        description:
          "Managing access control for three distinct user roles was initially error-prone.",
        solution:
          "Implemented dynamic route guards and context-based auth state using JWT tokens and secure cookies.",
      },
    ],
  },
  // {
  //   id: 2,
  //   title: "E-Commerce Dashboard",
  //   description:
  //     "An admin dashboard for e-commerce platforms with analytics, inventory management, and order processing.",
  //   overview:
  //     "This comprehensive e-commerce admin dashboard provides store owners with powerful tools to manage products, track orders, and analyze sales performance with intuitive visualizations.",
  //   image:
  //     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  //   github: "#",
  //   demo: "#",
  //   featured: true,
  //   category: "Web",
  //   completedDate: "January 2025",
  //   role: "Frontend Developer",
  //   technologies: [
  //     "Next.js",
  //     "TypeScript",
  //     "Prisma",
  //     "PostgreSQL",
  //     "Recharts",
  //     "Tailwind CSS",
  //   ],
  //   features: [
  //     "Real-time sales analytics dashboard",
  //     "Inventory management system",
  //     "Order processing workflow",
  //     "Customer management",
  //     "Product catalog with image upload",
  //     "Role-based access control",
  //   ],
  //   challenges: [
  //     {
  //       title: "Complex Data Visualization",
  //       description:
  //         "Creating meaningful visualizations for complex sales data was challenging.",
  //       solution:
  //         "Utilized Recharts library and implemented custom chart components with tooltips to make data more understandable.",
  //     },
  //     {
  //       title: "Real-time Updates",
  //       description:
  //         "The dashboard needed to reflect changes in real-time without constant page refreshes.",
  //       solution:
  //         "Implemented WebSocket connections for real-time data updates and used React Query for efficient server state management.",
  //     },
  //   ],
  // },
  {
    id: 2,
    title: "Bike Store E-Commerce Platform",
    description:
      "A full-stack e-commerce platform for bike sales with user authentication, product management, and order processing.",
    overview:
      "Bike Store Client is a comprehensive web application for browsing, purchasing, and managing bikes. It features an admin panel for managing inventory, orders, and users, alongside a user-friendly front-end for customers.",
    problemStatement:
      "The traditional bike selling model lacked an efficient online platform for customers to browse and purchase bikes, and for admins to manage inventory and orders seamlessly.",
    image:
      "https://i.ibb.co.com/jkPHGTWb/Home-Bike-Shop-Online-Delivary-feature.png",
    github: "https://github.com/mizan-rh/bike-store-client",
    demo: "https://bike-store-b4-a4-frontend.vercel.app/",
    featured: true,
    category: "Web",
    completedDate: "April 2025",
    role: "Full Stack Developer",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT (JSON Web Tokens)",
      "Vercel",
    ],
    features: [
      "Admin panel for product and order management",
      "Customer-friendly bike browsing and purchasing system",
      "Secure user authentication with JWT",
      "Role-based access control for admins and customers",
      "Responsive design for mobile and desktop",
      "Real-time order processing and status updates",
    ],
    challenges: [
      {
        title: "User Authentication",
        description:
          "Implementing secure login and role-based access control using JWT tokens presented challenges related to session management and token security.",
        solution:
          "Utilized secure HTTP-only cookies for storing tokens and implemented middleware to validate user roles before granting access to sensitive pages.",
      },
      {
        title: "Product Management",
        description:
          "Allowing admins to add, edit, and remove bike products efficiently while ensuring a seamless UI for both admins and customers was a challenge.",
        solution:
          "Developed a dynamic product management dashboard using React and MongoDB, enabling easy CRUD operations with real-time updates to the front-end.",
      },
    ],
  },
  // {
  //   id: 3,
  //   title: "Yoga Class Booking Website",
  //   description:
  //     "A collaborative task management application with real-time updates, notifications, and team features.",
  //   overview:
  //     "A productivity application designed to help teams collaborate effectively on projects through task management, real-time updates, and progress tracking.",
  //   image:
  //     "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
  //   github: "#",
  //   demo: "#",
  //   featured: true,
  //   category: "Web",
  //   completedDate: "November 2024",
  //   role: "Full Stack Developer",
  //   technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
  //   features: [
  //     "Drag-and-drop task boards",
  //     "Real-time collaboration",
  //     "Push notifications",
  //     "File attachments",
  //     "Task commenting system",
  //     "Deadline tracking with calendar integration",
  //   ],
  //   challenges: [
  //     {
  //       title: "State Management Complexity",
  //       description:
  //         "Managing state across multiple components and real-time updates proved challenging.",
  //       solution:
  //         "Implemented Redux with custom middleware to handle async operations and real-time updates from Firebase.",
  //     },
  //     {
  //       title: "User Authentication",
  //       description:
  //         "Needed a secure yet flexible authentication system with different permission levels.",
  //       solution:
  //         "Utilized Firebase Authentication with custom claims and rules to implement role-based permissions.",
  //     },
  //   ],
  // },
  {
    id: 3,
    title: "Yogayuq Yoga Class Booking Platform",
    description:
      "A yoga class booking platform with role-based access, secure payments, and responsive design.",
    overview:
      "Yogayuq is a web application that enables users to browse, book, and manage yoga classes. It includes dashboards for admins and instructors, secure login, and a user-friendly interface for students.",
    problemStatement:
      "Traditional yoga studios often lack a centralized digital solution for class booking and instructor management. Yogayuq solves this by offering an online platform for seamless scheduling and communication.",
    image: "https://i.ibb.co.com/Y5PVrxQ/Yogayuq-feature.png",
    github: "https://github.com/mizan-rh/yogayuq-client-side",
    demo: "https://summer-camp-ec2ea.web.app/",
    featured: true,
    category: "Web",
    completedDate: "April 2025",
    role: "Frontend Developer",
    technologies: [
      "React",
      "Firebase",
      "Tailwind CSS",
      "React Router",
      "Axios",
      "Framer Motion",
      "React Hook Form",
    ],
    features: [
      "Role-based dashboards for admins, instructors, and students",
      "Secure authentication with Firebase",
      "Class booking and approval system",
      "Real-time updates and notifications",
      "Animations with Framer Motion",
      "Responsive and clean UI design",
    ],
    challenges: [
      {
        title: "Role-Based Access Control",
        description:
          "Managing access between students, instructors, and admins required careful logic to prevent unauthorized access.",
        solution:
          "Implemented conditional rendering and protected routes using Firebase auth and custom role-checking logic.",
      },
      {
        title: "Class Booking Management",
        description:
          "Enabling real-time updates to class availability was complex due to asynchronous data handling.",
        solution:
          "Used Firebase Realtime Database and state management to ensure booking data was synced and updated properly.",
      },
    ],
  },
  // {
  //   id: 4,
  //   title: "Fitness Tracking Mobile App",
  //   description:
  //     "A mobile application for tracking workouts, nutrition, and progress with personalized recommendations.",
  //   overview:
  //     "A comprehensive fitness companion app that helps users track their workouts, monitor nutrition, and visualize progress over time with AI-powered recommendations.",
  //   image:
  //     "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  //   github: "#",
  //   demo: "#",
  //   featured: false,
  //   category: "Mobile",
  //   completedDate: "August 2024",
  //   role: "Mobile Developer",
  //   technologies: ["React Native", "TypeScript", "Firebase", "TensorFlow.js"],
  //   features: [
  //     "Workout tracking with exercise library",
  //     "Nutrition diary and calorie calculator",
  //     "Progress photos and measurements",
  //     "AI-powered exercise form detection",
  //     "Social sharing and challenges",
  //     "Personalized workout recommendations",
  //   ],
  //   challenges: [
  //     {
  //       title: "Cross-Platform Performance",
  //       description:
  //         "Ensuring smooth performance across both iOS and Android platforms, especially for camera-based features.",
  //       solution:
  //         "Utilized platform-specific code when necessary and implemented efficient rendering techniques to minimize performance bottlenecks.",
  //     },
  //     {
  //       title: "Offline Functionality",
  //       description:
  //         "Users needed access to their workout plans even without internet connection.",
  //       solution:
  //         "Implemented robust offline storage with synchronization when connectivity is restored using a custom sync engine.",
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   title: "Smart Home IoT Dashboard",
  //   description:
  //     "A web interface for controlling smart home devices with automation capabilities and energy monitoring.",
  //   overview:
  //     "An intuitive dashboard that connects various smart home devices and provides a unified interface for control, automation, and energy consumption monitoring.",
  //   image:
  //     "https://images.unsplash.com/photo-1558002038-1055907bb7d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  //   github: "#",
  //   demo: "#",
  //   featured: false,
  //   category: "IoT",
  //   completedDate: "May 2024",
  //   role: "IoT Developer",
  //   technologies: ["React", "Node.js", "MQTT", "WebSockets", "Chart.js"],
  //   features: [
  //     "Device discovery and management",
  //     "Real-time device status monitoring",
  //     "Automations with conditional logic",
  //     "Energy usage visualization",
  //     "Voice control integration",
  //     "Mobile-responsive interface",
  //   ],
  //   challenges: [
  //     {
  //       title: "Device Integration",
  //       description:
  //         "Integrating with multiple device protocols and ensuring consistent behavior.",
  //       solution:
  //         "Developed an adapter pattern system that standardizes device communication regardless of the underlying protocol.",
  //     },
  //     {
  //       title: "Real-time Communication",
  //       description:
  //         "Needed low-latency communication between devices and the dashboard.",
  //       solution:
  //         "Implemented a lightweight MQTT broker with WebSocket bridge to ensure real-time updates with minimal overhead.",
  //     },
  //   ],
  // },
];

// Helper function to find project by ID
export const findProjectById = (id: number): Project | undefined => {
  return projects.find((project) => project.id === id);
};
