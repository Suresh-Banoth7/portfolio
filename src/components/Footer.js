import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
    <footer className="bg-gray-900 text-white py-8 text-center rounded-t-[50px]">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://github.com/SureshBanoth" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
          <Github className="w-7 h-7" />
        </a>
        <a href="https://linkedin.com/in/suresh-banoth" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
          <Linkedin className="w-7 h-7" />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
          <Twitter className="w-7 h-7" />
        </a>
      </div>
      <p className="mb-1">&copy; {new Date().getFullYear()} Suresh Banoth. All rights reserved.</p>
      <p className="text-sm text-gray-500">San Francisco, CA | +1 (415) 494-1637 | sureshbanoth0397@gmail.com</p>
    </footer>
  );
export default Footer  