"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: 18, y: 30, label: "IMU" },
  { x: 38, y: 18, label: "Vision" },
  { x: 63, y: 32, label: "SLAM" },
  { x: 78, y: 60, label: "Risk" },
  { x: 48, y: 76, label: "Plan" },
  { x: 22, y: 62, label: "Map" },
];

export function ResearchVisual() {
  return (
    <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--accent-soft)]/30 p-4 research-grid" aria-label="Abstract robotics and sensor-fusion diagram">
      <svg viewBox="0 0 100 100" className="h-full w-full" role="img" aria-labelledby="research-visual-title">
        <title id="research-visual-title">Animated abstraction of robotics perception, SLAM, risk and planning modules</title>
        <defs>
          <radialGradient id="orb" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.12" />
          </radialGradient>
        </defs>
        <g className="text-[var(--accent)]">
          {nodes.map((node, index) => (
            <motion.g key={node.label} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.08 }}>
              <circle cx={node.x} cy={node.y} r="4.2" fill="url(#orb)" />
              <text x={node.x} y={node.y + 9} textAnchor="middle" className="fill-[var(--foreground)] text-[3px] font-semibold uppercase tracking-widest">
                {node.label}
              </text>
            </motion.g>
          ))}
          <motion.path d="M18 30 L38 18 L63 32 L78 60 L48 76 L22 62 Z" fill="none" stroke="currentColor" strokeWidth="0.45" strokeDasharray="2 2" animate={{ strokeDashoffset: [0, -18] }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }} />
          <motion.path d="M18 30 C38 45 58 48 78 60" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" animate={{ pathLength: [0.2, 1, 0.2], opacity: [0.35, 0.9, 0.35] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} />
          <motion.circle cx="50" cy="50" r="18" fill="none" stroke="currentColor" strokeWidth="0.35" animate={{ r: [14, 26, 14], opacity: [0.1, 0.45, 0.1] }} transition={{ duration: 5, repeat: Infinity }} />
        </g>
      </svg>
    </div>
  );
}
