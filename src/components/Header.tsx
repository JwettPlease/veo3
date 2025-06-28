import React from 'react';
import { Film } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-900 to-pink-800 shadow-xl">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Film className="text-white h-10 w-10" />
            <h1 className="text-3xl font-bold text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
                CineGen AI
              </span>
            </h1>
          </div>
          <p className="text-sm text-pink-200">
            Professional-grade scene generation for filmmakers
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
