import { motion } from 'motion/react';

export const LightRays = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30 mix-blend-screen">
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_90deg_at_50%_0%,rgba(0,0,0,0)_0deg,rgba(255,106,43,0.1)_10deg,rgba(0,0,0,0)_20deg)]"
          style={{ transformOrigin: '50% 0%' }}
        />
      </div>
    </div>
  );
};
