import { useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function CTAButton({ children, className = '', ...props }: CTAButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    buttonRef.current.style.setProperty('--x', `${x}px`);
    buttonRef.current.style.setProperty('--y', `${y}px`);
  };

  return (
    <motion.button
      ref={buttonRef}
      initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden group inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,106,43,0.2)] ${className}`}
      {...props}
    >
      {/* Dynamic Glow */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle 80px at var(--x, 50%) var(--y, 50%), rgba(255, 106, 43, 0.4), transparent 100%)'
        }}
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-3">
        <span className="relative">
          {children}
          {/* Underline expansion */}
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent-primary transition-all duration-300 group-hover:w-full" />
        </span>
        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 text-accent-primary" />
      </span>
    </motion.button>
  );
}
