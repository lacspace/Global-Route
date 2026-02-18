"use client";

import { motion } from "framer-motion";
import { Plane } from "lucide-react";

const destinations = [
  { name: "Toronto", x: 120, y: 180, delay: 0 },
  { name: "Berlin", x: 480, y: 140, delay: 2 },
  { name: "London", x: 420, y: 120, delay: 4 },
  { name: "Dubai", x: 580, y: 280, delay: 1 },
  { name: "Sydney", x: 850, y: 480, delay: 5 },
  { name: "Singapore", x: 750, y: 380, delay: 3 },
];

const INDIA_HUB = { x: 680, y: 320 };

export function FlightAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Abstract World Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:40px_40px]" />
      
      <svg 
        className="w-full h-full min-w-[1000px] min-h-[600px] opacity-40 lg:opacity-60" 
        viewBox="0 0 1000 600" 
        fill="none" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="hub-glow">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Connection Routes */}
        {destinations.map((dest, i) => {
          // Create a dynamic arc path
          const midX = (INDIA_HUB.x + dest.x) / 2;
          const midY = Math.min(INDIA_HUB.y, dest.y) - 150;
          const path = `M ${INDIA_HUB.x} ${INDIA_HUB.y} Q ${midX} ${midY} ${dest.x} ${dest.y}`;

          return (
            <g key={i}>
              {/* Static Path Background */}
              <path
                d={path}
                stroke="var(--primary)"
                strokeWidth="1"
                strokeOpacity="0.1"
                fill="none"
              />

              {/* Animated Glowing Path */}
              <motion.path
                d={path}
                stroke="url(#line-gradient)"
                strokeWidth="2"
                strokeDasharray="10 10"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 2, delay: i * 0.3 }}
              />

              {/* Flying Plane Container */}
              <motion.g
                style={{
                  offsetPath: `path('${path}')`,
                  offsetRotate: "auto 180deg",
                } as any}
                animate={{
                  offsetDistance: ["0%", "100%"],
                  opacity: [0, 1, 1, 0]
                } as any}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: dest.delay,
                  ease: "easeInOut"
                }}
              >
                {/* Visual Trail Effect */}
                <circle r="4" fill="var(--accent)" filter="url(#glow)" className="opacity-50" />
                
                {/* Plane Icon */}
                <g transform="rotate(90) scale(0.8)">
                  <Plane className="w-6 h-6 text-accent fill-accent shadow-xl" />
                </g>
              </motion.g>

              {/* Destination Pulse Node */}
              <g transform={`translate(${dest.x}, ${dest.y})`}>
                <circle r="12" fill="url(#hub-glow)" className="animate-pulse" />
                <circle r="3" fill="var(--accent)" />
                <motion.text
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.5 }}
                  x="8"
                  y="4"
                  className="text-[10px] font-black fill-primary uppercase tracking-tighter"
                >
                  {dest.name}
                </motion.text>
              </g>
            </g>
          );
        })}

        {/* Central Hub (India) */}
        <g transform={`translate(${INDIA_HUB.x}, ${INDIA_HUB.y})`}>
          <circle r="25" fill="url(#hub-glow)" className="animate-ping opacity-20" />
          <circle r="8" fill="var(--primary)" stroke="var(--accent)" strokeWidth="2" filter="url(#glow)" />
          <text
            x="-20"
            y="25"
            className="text-[12px] font-black fill-primary uppercase tracking-widest"
          >
            India Hub
          </text>
        </g>
      </svg>
    </div>
  );
}
