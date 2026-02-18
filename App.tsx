
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { ChatWidget } from './components/AIChat/ChatWidget';
import { PageLoader } from './components/ui/PageLoader';
import { CustomCursor } from './components/ui/CustomCursor';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPostDetail = lazy(() => import('./pages/BlogPostDetail'));
const Contact = lazy(() => import('./pages/Contact'));

// Fallback loader for internal routing
const InternalLoader = () => (
  <div className="h-screen w-screen flex items-center justify-center bg-[#0A0F1C] text-[#00F5FF]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-2 border-[#00F5FF]/20 border-t-[#00F5FF] rounded-full animate-spin"></div>
      <p className="font-mono text-xs tracking-widest uppercase animate-pulse">Synchronizing Data...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#0A0F1C] text-white selection:bg-[#00F5FF]/30 selection:text-[#00F5FF]">
        <PageLoader />
        <CustomCursor />
        <Header />
        
        <main>
          <Suspense fallback={<InternalLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPostDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        
        <ChatWidget />
        
        <footer className="py-12 border-t border-gray-800/50 bg-[#070B14]">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm font-light">
              &copy; 2026 SAIFUL ISLAM. BUILT WITH PRECISION & PASSION.
            </p>
            <div className="flex gap-8">
              {['Github', 'LinkedIn', 'Twitter', 'Medium'].map(platform => (
                <a key={platform} href="#" className="text-xs uppercase tracking-widest text-gray-500 hover:text-[#00F5FF] transition-colors">{platform}</a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
