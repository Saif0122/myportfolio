
import React from 'react';
import { motion } from 'framer-motion';

export const FeaturedCaseStudy: React.FC = () => {
  const metrics = [
    { label: "Lighthouse Score", value: "95+", color: "text-emerald-400" },
    { label: "Load Time Reduction", value: "40%", color: "text-[#00F5FF]" },
    { label: "Concurrent Users", value: "10k+", color: "text-purple-400" },
    { label: "Scalability Limit", value: "1M+", color: "text-blue-400" }
  ];

  return (
    <section className="py-32 bg-[#070B14] relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-[#00F5FF] font-mono text-xs uppercase tracking-[0.4em] block mb-4">Deep Dive</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-4">FEATURED CASE STUDY</h2>
          <p className="text-gray-500 text-lg md:text-xl font-light">From Idea to Scalable Production System</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Visual Asset */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00F5FF]/50 to-purple-500/50 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-[#111827] border border-white/10">
              <img 
                src="https://picsum.photos/1200/800?random=10" 
                alt="AI Dashboard Architecture" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <div className="flex gap-2">
                  {['React', 'Node.js', 'Vercel'].map(t => (
                    <span key={t} className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] text-white font-mono">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">AI Dashboard Pro: Enterprise Analytics</h3>
            <p className="text-gray-400 font-light text-lg mb-8">
              A real-time analytics engine processing millions of events per hour, providing predictive insights via LLM integration.
            </p>

            <div className="space-y-8 mb-10">
              <div>
                <h4 className="text-[#00F5FF] text-xs font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F5FF]"></span> THE PROBLEM
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  The client faced significant latency issues with their legacy data visualization tool, which couldn't handle the 200% growth in user activity, leading to system timeouts and poor user retention.
                </p>
              </div>
              <div>
                <h4 className="text-purple-400 text-xs font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span> THE SOLUTION
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  I architected a distributed MERN infrastructure utilizing Redis for caching and WebSockets for real-time streaming, reducing data latency by 65% and implementing an AI insights layer for automated reporting.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {metrics.map((m, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 group hover:border-[#00F5FF]/30 transition-colors">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">{m.label}</p>
                  <p className={`text-xl font-black ${m.color}`}>{m.value}</p>
                </div>
              ))}
            </div>

            <button className="w-fit flex items-center gap-3 px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-xl hover:bg-[#00F5FF] hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] transition-all">
              View Full Case Study
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
