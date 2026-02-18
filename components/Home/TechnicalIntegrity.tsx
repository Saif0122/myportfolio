
import React from 'react';
import { motion } from 'framer-motion';

const points = [
  "Clean Architecture & DDD",
  "Strict Type Safety with TypeScript",
  "High Performance & GPU Optimization",
  "Security-First Implementation",
  "Automated CI/CD & Testing",
  "Scalable Backend Infrastructure"
];

export const TechnicalIntegrity: React.FC = () => {
  return (
    <section className="py-32 bg-[#070B14] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#00F5FF] font-mono text-xs uppercase tracking-[0.4em] block mb-4">Engineering Standards</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
            BUILT WITH <br />
            <span className="text-[#00F5FF]">DISCIPLINE</span>
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
            My development process isn't just about making things work—it's about building resilient, future-proof digital assets. I follow industry-leading engineering principles to ensure every line of code adds long-term value.
          </p>
          <div className="flex gap-4 items-center">
            <div className="w-12 h-[1px] bg-[#00F5FF]"></div>
            <p className="text-white font-bold uppercase tracking-widest text-xs">Saiful's Core Philosophy</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-200">{point}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
