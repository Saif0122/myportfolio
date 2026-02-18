
import React from 'react';
import { motion } from 'framer-motion';

const techLogos = [
  { name: 'React', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 14.667c-1.474 0-2.667-1.193-2.667-2.667S10.526 9.333 12 9.333s2.667 1.193 2.667 2.667-1.193 2.667-2.667 2.667z"/><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 1.333c5.89 0 10.667 4.777 10.667 10.667S17.89 22.667 12 22.667 1.333 17.89 1.333 12 6.11 1.333 12 1.333z"/></svg> },

  { name: 'Next.js', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.3 18.2L10.3 8.3V16h-1.5V6h1.5l7.9 9.8V6h1.5v12.2h-1.4z"/></svg> },

  { name: 'TypeScript', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M1.3 1.3v21.4h21.4V1.3H1.3zm13.3 11h2.2v6.6h-2.2v-6.6zm-5.6 0h2.2v6.6H9v-6.6z"/></svg> },

  { name: 'JavaScript', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M0 0h24v24H0z"/><path fill="#000" d="M13.4 17.3c.3.6.7 1.1 1.5 1.1.6 0 1-.3 1-.8 0-.6-.5-.8-1.3-1.2l-.4-.2c-1.1-.5-1.8-1.1-1.8-2.4 0-1.2.9-2.1 2.3-2.1 1 0 1.7.3 2.2 1.3l-1.2.8c-.3-.5-.6-.7-1-.7-.5 0-.8.3-.8.7 0 .5.3.7 1.1 1l.4.2c1.3.6 2 1.2 2 2.6 0 1.5-1.2 2.3-2.8 2.3-1.6 0-2.6-.8-3.1-1.8l1.3-.7zM7.4 17.4c.2.4.4.7.9.7.5 0 .8-.2.8-1V12h1.6v5.1c0 1.5-.9 2.2-2.2 2.2-1.2 0-1.9-.6-2.3-1.4l1.2-.5z"/></svg> },

  { name: 'HTML5', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M1.5 0h21l-1.9 21.6L12 24l-8.6-2.4L1.5 0z"/></svg> },

  { name: 'CSS3', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M1.5 0h21l-1.9 21.6L12 24l-8.6-2.4L1.5 0z"/></svg> },

  { name: 'Tailwind CSS', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 6c-3 0-4.5 1.5-6 4 2-1.5 3-2 4.5-2 1 0 1.7.5 2.5 1.5C14 10.5 15 12 17 12c3 0 4.5-1.5 6-4-2 1.5-3 2-4.5 2-1 0-1.7-.5-2.5-1.5C14 7.5 13 6 12 6z"/></svg> },

  { name: 'Git', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M23.6 10.5l-10-10c-.5-.5-1.3-.5-1.8 0l-2 2 2.5 2.5c.6-.2 1.3-.1 1.8.4.6.6.6 1.6 0 2.2-.5.5-1.2.6-1.8.4L9.7 9.5v6.1c.2.1.5.3.7.5.6.6.6 1.6 0 2.2-.6.6-1.6.6-2.2 0-.6-.6-.6-1.6 0-2.2.2-.2.4-.3.7-.5V8.7L.4 3.2c-.5-.5-.5-1.3 0-1.8l2-2c.5-.5 1.3-.5 1.8 0l10 10c.5.5.5 1.3 0 1.8z"/></svg> },

  { name: 'GitHub', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 .5C5.7.5.7 5.5.7 11.8c0 4.9 3.2 9 7.6 10.4.6.1.8-.3.8-.6v-2.2c-3.1.7-3.8-1.5-3.8-1.5-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.7-.7 2.1-1.1.1-.7.4-1.1.7-1.4-2.5-.3-5.2-1.2-5.2-5.6 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1.9-.2 1.8-.3 2.7-.3s1.8.1 2.7.3c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.7 1.1 2.9 0 4.4-2.7 5.3-5.2 5.6.4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.4-1.4 7.6-5.5 7.6-10.4C23.3 5.5 18.3.5 12 .5z"/></svg> },

  { name: 'Framer Motion', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M3 3h18v18H3z"/></svg> },

  { name: 'Redux', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M16.5 8.5c.8-.8 2.1-.8 2.9 0 .8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.2-.2-.4-.5-.5-.8-1.5 0-2.8.6-3.7 1.5l-1.1-1.1c1.2-1.2 2.9-1.9 4.9-1.9.1-.3.3-.6.4-.6z"/></svg> }
];


export const TechMarquee: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A0F1C] relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00F5FF]/5 via-transparent to-purple-500/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#00F5FF] font-mono text-xs uppercase tracking-[0.4em] block mb-4">Architecture</span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">MY CORE TECHNOLOGY STACK</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {techLogos.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ y: 0, opacity: 0 }}
              whileInView={{ opacity: 1 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                opacity: { duration: 0.5, delay: i * 0.1 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }
              }}
              className="flex flex-col items-center group"
            >
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-[#00F5FF] group-hover:border-[#00F5FF]/50 group-hover:bg-[#00F5FF]/5 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_20px_rgba(0,245,255,0.2)]">
                {tech.icon}
              </div>
              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 group-hover:text-white transition-colors">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
