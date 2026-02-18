"use client";

import { motion } from "framer-motion";
import { Plane } from "lucide-react";

const destinations = [
  { name: "Canada", x: "15%", y: "30%" },
  { name: "Germany", x: "45%", y: "35%" },
  { name: "UK", x: "40%", y: "25%" },
  { name: "UAE", x: "55%", y: "55%" },
];

export function FlightAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 lg:opacity-30">
      {/* India Central Point */}
      <div 
        className="absolute w-4 h-4 bg-accent rounded-full shadow-[0_0_20px_rgba(163,230,53,0.8)] z-20"
        style={{ left: "70%", top: "60%" }}
      >
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-primary uppercase tracking-tighter bg-white/80 px-2 py-0.5 rounded shadow-sm">
          India
        </div>
      </div>

      <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none" preserveAspectRatio="xMidYMid slice">
        {/* Connection Lines & Planes */}
        {destinations.map((dest, i) => (
          <g key={i}>
            {/* Animated Path */}
            <motion.path
              d={`M 700 360 Q ${parseFloat(dest.x) * 10 + 350} ${Math.min(parseFloat(dest.y) * 6, 360) - 100} ${parseFloat(dest.x) * 10} ${parseFloat(dest.y) * 6}`}
              stroke="url(#gradient-line)"
              strokeWidth="2"
              strokeDasharray="8 8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 2, delay: i * 0.5 }}
            />
            
            {/* Flying Plane */}
            <motion.g
              initial={{ offsetDistance: "0%", opacity: 0 }}
              animate={{ 
                offsetDistance: ["0%", "100%"],
                opacity: [0, 1, 1, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                delay: i * 2, 
                ease: "linear" 
              }}
              style={{
                offsetPath: `path('M 700 360 Q ${parseFloat(dest.x) * 10 + 350} ${Math.min(parseFloat(dest.y) * 6, 360) - 100} ${parseFloat(dest.x) * 10} ${parseFloat(dest.y) * 6}')`,
                offsetRotate: "auto 180deg"
              }}
            >
              <Plane className="w-6 h-6 text-accent fill-accent rotate-90" />
            </motion.g>

            {/* Destination Marker */}
            <circle 
              cx={`${parseFloat(dest.x) * 10}`} 
              cy={`${parseFloat(dest.y) * 6}`} 
              r="3" 
              fill="#A3E635" 
              className="animate-pulse"
            />
          </g>
        ))}

        <defs>
          <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2" />
            <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
