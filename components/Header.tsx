
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Header: React.FC = () => {
  const location = useLocation();
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0A0F1C]/80 backdrop-blur-md border-b border-[#00F5FF]/10">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black tracking-tight text-white group flex items-center">
          <span className="group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all">saif</span>
          <span className="text-[#00F5FF] font-medium group-hover:drop-shadow-[0_0_8px_rgba(0,245,255,0.5)] transition-all">.code</span>
          <span className="hidden sm:inline font-light ml-4 text-[10px] uppercase tracking-[0.3em] text-gray-500">MERN Specialist</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm font-medium transition-colors hover:text-[#00F5FF] ${
                  isActive ? 'text-[#00F5FF]' : 'text-gray-400'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[#00F5FF]"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <Link 
          to="/contact" 
          className="px-6 py-2 bg-[#00F5FF]/10 border border-[#00F5FF]/50 text-[#00F5FF] text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#00F5FF] hover:text-black transition-all"
        >
          Hire Me
        </Link>
      </nav>
    </header>
  );
};
