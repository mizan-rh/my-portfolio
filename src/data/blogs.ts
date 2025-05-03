
// Define the Blog type
export interface Blog {
  id: number;
  title: string;
  summary: string;
  content: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
}

// Sample blog data
export const blogs: Blog[] = [
  {
    id: 1,
    title: "The Evolution of Frontend Development: 2025 Edition",
    summary: "Exploring the latest trends, tools, and techniques shaping the frontend development landscape in 2025.",
    content: `
      <p>The world of frontend development continues to evolve at an astonishing pace. As we navigate through 2025, several key trends have emerged that are reshaping how we build user interfaces and web experiences.</p>
      
      <h2>1. AI-Assisted Development</h2>
      <p>The integration of AI into development workflows has become more sophisticated than ever. From intelligent code completion to automated accessibility testing, AI tools are enhancing developer productivity while improving code quality.</p>
      
      <h2>2. WebAssembly Goes Mainstream</h2>
      <p>No longer an experimental technology, WebAssembly has become essential for high-performance web applications. The ability to run code written in languages like Rust and C++ in the browser at near-native speed has opened new possibilities for web applications.</p>
      
      <h2>3. Micro-Frontends Architecture</h2>
      <p>The micro-frontends approach continues to gain traction, allowing teams to build and deploy parts of their applications independently. This architectural style has proven particularly valuable for large organizations with multiple teams working on complex applications.</p>
      
      <h2>4. Server Components</h2>
      <p>The line between client and server rendering has blurred further with the widespread adoption of server components. This paradigm shift allows developers to choose the optimal rendering strategy for each component in their application.</p>
      
      <h2>5. CSS Evolution</h2>
      <p>CSS has seen remarkable advancements, with features like container queries, cascade layers, and subgrid now widely supported across browsers. These features have reduced the need for complex JavaScript solutions for responsive design challenges.</p>
      
      <h2>Conclusion</h2>
      <p>As frontend development continues to mature, the focus has shifted from just making things work to creating performant, accessible, and maintainable applications. The tools and techniques discussed above represent just a snapshot of this exciting field's evolution.</p>
    `,
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    date: "April 15, 2025",
    author: "John Doe",
    readTime: "8 min read",
    tags: ["Frontend", "Web Development", "JavaScript", "Trends"]
  },
  {
    id: 2,
    title: "Building Accessible Web Applications: A Comprehensive Guide",
    summary: "Learn how to create web applications that are truly accessible to all users, regardless of abilities.",
    content: `
      <p>Web accessibility is not just a nice-to-have feature—it's an essential aspect of modern web development. In this guide, we'll explore practical steps to make your web applications more accessible to all users.</p>
      
      <h2>Understanding Accessibility</h2>
      <p>Accessibility (often abbreviated as a11y) refers to designing products, devices, services, or environments for people with disabilities. In the context of web development, it means creating websites and applications that can be used by people with various impairments.</p>
      
      <h2>Key Principles</h2>
      <p>The Web Content Accessibility Guidelines (WCAG) define four principles that form the foundation of web accessibility:</p>
      <ul>
        <li><strong>Perceivable</strong>: Information must be presentable to users in ways they can perceive.</li>
        <li><strong>Operable</strong>: User interface components must be operable.</li>
        <li><strong>Understandable</strong>: Information and interface operation must be understandable.</li>
        <li><strong>Robust</strong>: Content must be robust enough to be interpreted by a wide variety of user agents.</li>
      </ul>
      
      <h2>Practical Implementation</h2>
      <p>Here are some concrete steps you can take to improve accessibility:</p>
      <ol>
        <li>Use semantic HTML elements that clearly describe their purpose.</li>
        <li>Provide alternative text for images.</li>
        <li>Ensure sufficient color contrast for text.</li>
        <li>Make all functionality available from a keyboard.</li>
        <li>Create forms with clear labels and error messages.</li>
        <li>Use ARIA attributes when necessary to enhance accessibility.</li>
        <li>Test your application with screen readers.</li>
      </ol>
      
      <h2>Testing Tools</h2>
      <p>Several tools can help you evaluate the accessibility of your web applications:</p>
      <ul>
        <li>Lighthouse (built into Chrome DevTools)</li>
        <li>axe DevTools</li>
        <li>WAVE (Web Accessibility Evaluation Tool)</li>
        <li>Screen readers like NVDA, JAWS, or VoiceOver</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Building accessible web applications is not just about compliance with standards—it's about ensuring that your content and functionality are available to all users. By following the guidelines outlined in this article, you can create more inclusive digital experiences.</p>
    `,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    date: "March 22, 2025",
    author: "John Doe",
    readTime: "12 min read",
    tags: ["Accessibility", "Web Development", "HTML", "UX"]
  },
  {
    id: 3,
    title: "Optimizing React Applications for Performance",
    summary: "Practical techniques to improve the performance of your React applications without sacrificing developer experience.",
    content: `
      <p>As React applications grow in complexity, performance optimization becomes increasingly important. In this article, we'll explore effective techniques to improve the speed and responsiveness of your React applications.</p>
      
      <h2>Identifying Performance Issues</h2>
      <p>Before optimizing, it's essential to identify where the bottlenecks are in your application. React DevTools Profiler is an invaluable tool for this purpose, allowing you to record and analyze component renders.</p>
      
      <h2>Memoization Techniques</h2>
      <p>React provides several APIs for memoization:</p>
      <ul>
        <li><code>React.memo</code>: Prevents unnecessary re-renders of functional components when props haven't changed.</li>
        <li><code>useMemo</code>: Caches the result of expensive calculations between renders.</li>
        <li><code>useCallback</code>: Caches function instances between renders.</li>
      </ul>
      <p>While these tools are powerful, they should be used judiciously. Over-optimization can lead to code that's harder to maintain without significant performance benefits.</p>
      
      <h2>Code Splitting</h2>
      <p>Code splitting is a technique that allows you to split your bundle into smaller chunks, loading only what's necessary for the current view. React.lazy and Suspense make this process straightforward:</p>
      <pre><code>
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
}
      </code></pre>
      
      <h2>Virtual List Rendering</h2>
      <p>When dealing with long lists, rendering only the items visible in the viewport can significantly improve performance. Libraries like react-window and react-virtualized can help with this.</p>
      
      <h2>State Management Optimization</h2>
      <p>How you structure your state can have a significant impact on performance. Consider these guidelines:</p>
      <ul>
        <li>Keep state as local as possible.</li>
        <li>Normalize complex state to avoid deep nesting.</li>
        <li>Use immutable data patterns correctly.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Performance optimization is an ongoing process that should be guided by measurements rather than assumptions. By applying the techniques discussed in this article, you can create React applications that are both feature-rich and performant.</p>
    `,
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    date: "February 8, 2025",
    author: "John Doe",
    readTime: "10 min read",
    tags: ["React", "Performance", "JavaScript", "Optimization"]
  }
];

// Helper function to find blog by ID
export const findBlogById = (id: number): Blog | undefined => {
  return blogs.find(blog => blog.id === id);
};
