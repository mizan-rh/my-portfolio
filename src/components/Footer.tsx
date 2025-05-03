
import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold text-gradient">Portfolio</div>
          </div>
          
          <div className="text-sm text-gray-500">
            &copy; {currentYear} John Doe. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0">
            <a 
              href="#home" 
              className={cn(
                "inline-flex items-center justify-center",
                "w-10 h-10 rounded-full bg-dark-surface text-gray-400",
                "hover:text-highlight border border-gray-800 hover:border-highlight",
                "transition-colors"
              )}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m18 15-6-6-6 6"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
