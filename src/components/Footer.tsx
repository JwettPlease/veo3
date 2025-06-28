import React from 'react';
import { Github, Twitter, Film } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-pink-800 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Film className="h-6 w-6 text-pink-300" />
            <span className="text-lg font-medium">CineGen AI</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-pink-200 hover:text-white">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-pink-200 hover:text-white">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-pink-700 text-center text-sm text-pink-300">
          <p>© {new Date().getFullYear()} CineGen AI. All rights reserved.</p>
          <p className="mt-2">Professional scene generation for filmmakers and content creators.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
