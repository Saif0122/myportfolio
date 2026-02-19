
import React from 'react';
import { motion } from 'framer-motion';
import { HeroScene } from '../components/3D/HeroScene';
import { SKILLS, PROJECTS, BLOG_POSTS } from '../data/content';
import { Link } from 'react-router-dom';
import { TypingText } from '../components/Hero/TypingText';
import { FloatingCode } from '../components/Hero/FloatingCode';
import { Services } from '../components/Home/Services';
import { TechnicalIntegrity } from '../components/Home/TechnicalIntegrity';
import { Pricing } from '../components/Home/Pricing';
import { Testimonials } from '../components/Home/Testimonials';
import { FAQ } from '../components/Home/FAQ';
import { FeaturedCaseStudy } from '../components/Home/FeaturedCaseStudy';
import { TechMarquee } from '../components/Home/TechMarquee';
import { ClosingCTA } from '../components/Home/ClosingCTA';

const Home: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Client', value: '500+' },
    { label: 'MERN Expertise', value: 'Expert' }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <HeroScene />
        
        {/* Animated Background Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00F5FF]/10 rounded-full blur-[120px] pointer-events-none animate-soft-pulse"></div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0F1C]/50 to-[#0A0F1C] z-[1]"></div>

        {/* Floating Code Snippets */}
        <FloatingCode 
          code={`const engineer = new FullStackDeveloper();`} 
          className="top-1/4 right-[10%]" 
          delay={0}
        />
        <FloatingCode 
          code={`const stack = ["Next.js", "Node.js", "MongoDB", "Redis"]`} 
          className="bottom-1/3 left-[5%]" 
          delay={2}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Live Availability Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8 backdrop-blur-sm"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400 font-mono text-[11px] uppercase tracking-widest font-bold">
                  Hire MERN Stack Developer
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-8">
                <span className="inline-block bg-gradient-to-r from-[#00F5FF] via-[#3B82F6] to-[#00F5FF] bg-clip-text text-transparent animate-text-gradient">
                  MERN STACK
                </span>
                <br />
                <span className="text-white opacity-90 uppercase">Architect</span>
              </h1>

              {/* Dynamic Typing Effect */}
              <div className="mb-10">
                <TypingText />
              </div>

              <h2 className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-12">
                Senior MERN Stack Engineer specializing in <strong>SaaS application development</strong> and <strong>scalable web applications</strong>. I engineer high-performance digital products using the modern MERN ecosystem.
              </h2>

              <div className="flex flex-wrap gap-6 mb-16">
                <Link to="/projects" className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#00F5FF] text-black font-black uppercase tracking-widest rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,245,255,0.4)]">
                  <span className="relative z-10">Project Archive</span>
                  <svg className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <Link to="/contact" className="group inline-flex items-center gap-3 px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white font-black uppercase tracking-widest rounded-xl transition-all hover:bg-white/10 hover:border-white/20 active:scale-95">
                  <span>Custom Development</span>
                </Link>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + (i * 0.1) }}
                  >
                    <p className="text-2xl md:text-3xl font-black text-white mb-1">{stat.value}</p>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-mono">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Tech Stack Marquee */}
      <TechMarquee />

      {/* Featured Case Study */}
      <FeaturedCaseStudy />

      {/* Technical Integrity Section */}
      <TechnicalIntegrity />

      {/* Pricing Models */}
      <Pricing />

      {/* Latest Blog Insights */}
      <section className="py-32 bg-[#070B14] relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-[#00F5FF] font-mono text-xs uppercase tracking-[0.4em] block mb-4">Engineering Blog</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">Latest Technical Insights</h2>
              <p className="text-gray-400 font-light leading-relaxed">
                Expert deep dives into <strong>scalable web applications</strong>, full-stack performance tuning, and 2026 systems architecture.
              </p>
            </div>
            <Link to="/blog" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-white/10 transition-all">
              Full Archive
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl">
            {BLOG_POSTS.slice(0, 2).map((post, i) => (
              <motion.article
                key={post.id}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#00F5FF]/30 transition-all group"
              >
                <div className="flex justify-between text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-6">
                  <span className="px-2 py-0.5 border border-white/10 rounded-md">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00F5FF] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm font-light mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link to={`/blog/${post.slug}`} className="text-[#00F5FF] text-xs font-black uppercase tracking-widest flex items-center gap-2 group/btn">
                  Read Technical Blueprint
                  <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Strong Closing CTA */}
      <ClosingCTA />
    </div>
  );
};

export default Home;
