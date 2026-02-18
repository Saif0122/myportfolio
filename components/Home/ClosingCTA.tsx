
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ClosingCTA: React.FC = () => {
  return (
    <section className="py-40 bg-[#070B14] relative overflow-hidden">
      {/* Animated Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00F5FF]/10 rounded-full blur-[150px] animate-soft-pulse pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-8">
            LET’S BUILD SOMETHING <br />
            <span className="text-[#00F5FF]">POWERFUL</span> TOGETHER.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12">
            I help startups and businesses build fast, scalable, and AI-powered web applications with modern engineering disciplines.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-[#00F5FF] to-[#3B82F6] text-black font-black uppercase tracking-widest rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,245,255,0.5)] active:scale-95"
            >
              <span className="relative z-10">Hire Me</span>
              <svg className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>

            <Link 
              to="/contact" 
              className="group px-12 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white font-black uppercase tracking-widest rounded-2xl transition-all hover:bg-white/10 hover:border-white/20 active:scale-95 shadow-[0_0_20px_rgba(0,0,0,0.2)]"
            >
              Schedule a Call
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
