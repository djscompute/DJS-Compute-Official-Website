import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

// The main Footer component
const Footer = () => {
  return (
    <footer className="text-neutral-300 font-sans bg-gradient-to-b from-black via-slate-950 to-blue-950 rounded-t-3xl relative z-20">
      <div className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Left Section: Social Icons & Contact */}
          <div className="flex flex-col justify-center items-center md:items-start space-y-4">
            <a href="https://www.linkedin.com/company/djscompute/" aria-label="LinkedIn" className="text-neutral-400 hover:text-white hover:scale-110 transform transition-all duration-300 hover:drop-shadow-lg hover:drop-shadow-blue-500/50">
              <Linkedin size={24} className='inline mr-2' /> LinkedIn
            </a>
            <a href="https://www.instagram.com/djscompute/" aria-label="Instagram" className="text-neutral-400 hover:text-white hover:scale-110 transform transition-all duration-300 hover:drop-shadow-lg hover:drop-shadow-pink-500/50">
              <Instagram size={24} className='inline mr-2' /> Instagram
            </a>
            <a href="https://github.com/djscompute/" aria-label="GitHub" className="text-neutral-400 hover:text-white hover:scale-110 transform transition-all duration-300 hover:drop-shadow-lg hover:drop-shadow-purple-500/50">
              <Github size={24} className='inline mr-2'/> GitHub
            </a>
            <a href="mailto:info.djscompute@gmail.com" className="text-neutral-400 hover:text-white hover:scale-110 transform transition-all duration-300 hover:drop-shadow-lg hover:drop-shadow-green-500/50">
              <Mail size={24} className='inline mr-2' /> Email
            </a>
          </div>

          {/* Middle Section: Navigation Links */}
          <nav className="flex flex-col justify-center items-center md:items-start space-y-4">
            <a href="/team" className="hover:text-white hover:scale-105 transform transition-all duration-300 hover:drop-shadow-lg hover:drop-shadow-blue-500/30 relative group">
              <span className="relative z-10">Team</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2"></div>
            </a>
            <a href="/projects" className="hover:text-white hover:scale-105 transform transition-all duration-300 hover:drop-shadow-lg hover:drop-shadow-blue-500/30 relative group">
              <span className="relative z-10">Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2"></div>
            </a>
            <a href="/about" className="hover:text-white hover:scale-105 transform transition-all duration-300 hover:drop-shadow-lg hover:drop-shadow-blue-500/30 relative group">
              <span className="relative z-10">About Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2"></div>
            </a>
          </nav>

          {/* Right Section: Logo */}
          <div className="flex justify-center md:justify-end items-center group">
             <img src="/landing/djs-compute-logo.png" alt="DJS Compute Logo" className="h-20 md:h-24 hover:scale-110 transform transition-all duration-300 hover:drop-shadow-2xl hover:drop-shadow-blue-500/50 group-hover:brightness-110" />
          </div>

        </div>

        {/* Bottom Border and Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-neutral-500 text-sm">
          <p>&copy; {new Date().getFullYear()} DJS Compute. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;