
import React from 'react';
import { motion } from 'framer-motion';

interface FloatingCodeProps {
  code: string;
  className?: string;
  delay?: number;
}

export const FloatingCode: React.FC<FloatingCodeProps> = ({ code, className, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ 
        y: [0, -20, 0],
        opacity: 0.6,
        rotate: [0, 2, -2, 0]
      }}
      transition={{ 
        duration: 6, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay
      }}
      className={`hidden lg:block absolute z-20 p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(0,245,255,0.05)] ${className}`}
    >
      <pre className="text-[10px] md:text-xs text-[#00F5FF] font-mono">
        <code>{code}</code>
      </pre>
    </motion.div>
  );
};
