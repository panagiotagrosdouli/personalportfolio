export function ResearchFigure() {
  return (
    <div className="rounded-sm border border-stone-200 bg-[#fbfaf7] p-6 shadow-[0_30px_90px_-72px_rgba(28,25,23,0.75)]">
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-900">Motion forecasting sketch</p>
        <p className="text-xs text-stone-400">smart intersection</p>
      </div>
      <svg viewBox="0 0 720 460" role="img" aria-label="Minimal diagram of predicted trajectories at a smart intersection" className="h-full w-full">
        <rect x="0" y="0" width="720" height="460" fill="#fbfaf7" />
        <rect x="285" y="0" width="150" height="460" fill="#f1eee7" />
        <rect x="0" y="160" width="720" height="140" fill="#f1eee7" />
        <line x1="360" y1="0" x2="360" y2="460" stroke="#d6d3cc" strokeWidth="2" strokeDasharray="12 14" />
        <line x1="0" y1="230" x2="720" y2="230" stroke="#d6d3cc" strokeWidth="2" strokeDasharray="12 14" />
        <path d="M80 355 C165 320 220 292 310 246" fill="none" stroke="#14532d" strokeWidth="6" strokeLinecap="round" />
        <path d="M80 355 C170 342 240 318 342 270" fill="none" stroke="#14532d" strokeWidth="2" strokeDasharray="8 10" opacity="0.5" />
        <path d="M80 355 C150 292 235 260 330 212" fill="none" stroke="#14532d" strokeWidth="2" strokeDasharray="8 10" opacity="0.5" />
        <path d="M640 105 C540 130 465 165 405 218" fill="none" stroke="#78716c" strokeWidth="5" strokeLinecap="round" />
        <path d="M640 105 C560 155 500 195 415 245" fill="none" stroke="#78716c" strokeWidth="2" strokeDasharray="8 10" opacity="0.45" />
        <circle cx="80" cy="355" r="14" fill="#14532d" />
        <circle cx="640" cy="105" r="12" fill="#78716c" />
        <rect x="438" y="236" width="62" height="32" rx="8" fill="#1c1917" opacity="0.9" />
        <circle cx="486" cy="272" r="7" fill="#1c1917" opacity="0.9" />
        <circle cx="452" cy="272" r="7" fill="#1c1917" opacity="0.9" />
        <text x="55" y="395" fill="#14532d" fontSize="18" fontWeight="600">pedestrian</text>
        <text x="575" y="86" fill="#78716c" fontSize="18" fontWeight="600">cyclist</text>
        <text x="440" y="225" fill="#1c1917" fontSize="18" fontWeight="600">vehicle</text>
        <text x="38" y="45" fill="#1c1917" fontSize="22" fontWeight="700">Observed motion and predicted futures</text>
        <text x="38" y="75" fill="#78716c" fontSize="16">Uncertainty-aware trajectories for safer decisions</text>
      </svg>
    </div>
  );
}
