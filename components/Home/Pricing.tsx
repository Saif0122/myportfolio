
import React from 'react';
import { motion } from 'framer-motion';
import { PRICING_PLANS } from '../../data/content';

export const Pricing: React.FC = () => {
  return (
    <section className="py-32 bg-[#0A0F1C]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[#00F5FF] font-mono text-xs uppercase tracking-[0.4em] block mb-4">Investment</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">Engagement Models</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 rounded-[2.5rem] border flex flex-col ${
                plan.isHighlighted 
                  ? 'bg-gradient-to-b from-[#00F5FF]/10 to-white/5 border-[#00F5FF]/50 shadow-[0_0_40px_rgba(0,245,255,0.1)] scale-105 z-10' 
                  : plan.title === 'Custom Development' 
                    ? 'bg-white/5 border-[#3B82F6]/50 shadow-[0_0_25px_rgba(59,130,246,0.15)] ring-1 ring-[#3B82F6]/20' 
                    : 'bg-white/5 border-white/10'
              } transition-all relative overflow-hidden group`}
            >
              {plan.isHighlighted && (
                <div className="absolute top-0 right-0 px-4 py-1 bg-[#00F5FF] text-black text-[10px] font-black uppercase tracking-widest rounded-bl-xl">
                  Most Popular
                </div>
              )}
              {plan.title === 'Custom Development' && (
                <div className="absolute top-0 right-0 px-4 py-1 bg-[#3B82F6] text-white text-[10px] font-black uppercase tracking-widest rounded-bl-xl">
                  Enterprise
                </div>
              )}
              <h3 className="text-2xl font-black text-white mb-2">{plan.title}</h3>
              <p className="text-gray-400 text-sm font-light mb-8 h-10">{plan.description}</p>
              
              <div className="mb-10">
                <p className="text-[#00F5FF] text-3xl font-black">{plan.price}</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 font-mono">Billed per milestone</p>
              </div>

              <div className="flex-1 space-y-4 mb-10">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#00F5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-300 font-light">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-xs transition-all ${
                plan.isHighlighted 
                  ? 'bg-[#00F5FF] text-black shadow-lg shadow-[#00F5FF]/20 hover:scale-[1.02]' 
                  : plan.title === 'Custom Development'
                    ? 'bg-[#3B82F6] text-white shadow-lg shadow-[#3B82F6]/20 hover:scale-[1.02]'
                    : 'bg-white/10 text-white hover:bg-white/20'
              }`}>
                Initialize Sync
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
