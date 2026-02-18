
import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-[#070B14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <span className="text-[#00F5FF] font-mono text-xs uppercase tracking-[0.4em] block mb-4">Feedback</span>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">WHAT CLIENTS SAY</h2>
      </div>

      <div className="flex gap-8 px-6 animate-scroll-container">
        <motion.div 
          className="flex gap-8"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div key={i} className="min-w-[400px] p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white text-lg font-light leading-relaxed mb-8 italic">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00F5FF] to-white/20" />
                <div>
                  <p className="text-sm font-bold text-white uppercase">{t.name}</p>
                  <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
