export function TrajectoryConcept() {
  return (
    <figure className="w-full" aria-labelledby="trajectory-caption">
      <div className="overflow-hidden rounded-[1.65rem] border border-[var(--line)] bg-[#eaf0ec] p-3 shadow-[0_30px_75px_rgba(5,36,29,0.10)] sm:p-5">
        <div className="mb-3 flex items-center justify-between gap-3 px-2">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#275d55]">Motion forecasting / conceptual</span>
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-[#41635e]"><span className="h-1.5 w-1.5 rounded-full bg-[#0f6b58]" /> MULTIMODAL</span>
        </div>
        <svg viewBox="0 0 500 480" role="img" aria-labelledby="trajTitle trajDesc" className="h-auto w-full rounded-xl bg-[#f5f8f4]">
          <title id="trajTitle">Illustrative trajectory prediction at a smart urban intersection</title>
          <desc id="trajDesc">Top-down street intersection with observed paths in dotted lines and three families of predicted future trajectories shown as coloured paths and uncertainty regions.</desc>
          <defs>
            <pattern id="roadGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M24 0H0V24" fill="none" stroke="#c8d8d0" strokeWidth=".6" />
            </pattern>
            <linearGradient id="pedFan" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#28aa91" stopOpacity=".33" /><stop offset="100%" stopColor="#28aa91" stopOpacity=".02" /></linearGradient>
            <linearGradient id="cycleFan" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#436cc7" stopOpacity=".28" /><stop offset="100%" stopColor="#436cc7" stopOpacity="0" /></linearGradient>
          </defs>
          <rect x="0" y="0" width="500" height="480" fill="url(#roadGrid)" />
          <g fill="#dae4df" stroke="#b8cac1" strokeWidth="1">
            <rect x="191" width="118" height="480" />
            <rect y="180" width="500" height="118" />
          </g>
          <rect x="191" y="180" width="118" height="118" fill="#dae4df" />
          <g stroke="#8ca99c" strokeWidth="1.5" strokeDasharray="8 10" opacity=".8">
            <path d="M250 0V172 M250 306V480 M0 239H180 M320 239H500" />
          </g>
          <g fill="#f8fbf8" opacity=".94">
            {Array.from({ length: 7 }, (_, i) => (
              <g key={i}>
                <rect x={195 + i * 16} y="157" width="8" height="17" />
                <rect x={195 + i * 16} y="304" width="8" height="17" />
                <rect x="164" y={184 + i * 16} width="18" height="8" />
                <rect x="317" y={184 + i * 16} width="18" height="8" />
              </g>
            ))}
          </g>
          <path d="M137 113 Q154 144 184 178" fill="none" stroke="#47695f" strokeWidth="2.5" strokeDasharray="3 6"/>
          <path d="M184 178 C218 195 267 201 353 238 L 328 332 C264 288 209 245 184 178Z" fill="url(#pedFan)" />
          <g fill="none" strokeLinecap="round">
            <path className="trajectory-draw" d="M184 178 Q246 200 345 244" stroke="#0f8f79" strokeWidth="4" />
            <path className="trajectory-draw" d="M184 178 Q239 244 291 322" stroke="#0f8f79" strokeWidth="2.3" opacity=".65" style={{animationDelay: ".25s"}}/>
            <path className="trajectory-draw" d="M184 178 Q204 268 215 339" stroke="#0f8f79" strokeWidth="1.8" opacity=".45" style={{animationDelay: ".45s"}}/>
          </g>
          <circle cx="184" cy="178" r="6" fill="#0f8f79" stroke="white" strokeWidth="2.5" />
          <path d="M484 218L335 218" fill="none" stroke="#47695f" strokeWidth="2.5" strokeDasharray="3 6" />
          <path d="M335 218 L200 170 L200 249Z" fill="url(#cycleFan)" />
          <g fill="none" strokeLinecap="round">
            <path className="trajectory-draw" d="M335 218Q272 220 203 218" stroke="#426cc0" strokeWidth="3.4" style={{animationDelay: ".15s"}}/>
            <path className="trajectory-draw" d="M335 218Q263 210 226 153L220 88" stroke="#426cc0" strokeWidth="2" opacity=".55" style={{animationDelay: ".4s"}}/>
          </g>
          <rect x="329" y="212" width="12" height="12" rx="3" fill="#426cc0" stroke="white" strokeWidth="2" />
          <path d="M265 473V350" fill="none" stroke="#47695f" strokeWidth="2.5" strokeDasharray="3 6" />
          <g fill="none" strokeLinecap="round">
            <path className="trajectory-draw" d="M265 339Q270 282 333 266L426 266" stroke="#bd8632" strokeWidth="3.3" style={{animationDelay: ".25s"}} />
            <path className="trajectory-draw" d="M265 339L265 207" stroke="#bd8632" strokeWidth="1.8" opacity=".55" style={{animationDelay: ".5s"}}/>
          </g>
          <path d="M265 329L273 343H257Z" fill="#bd8632" stroke="white" strokeWidth="1.4" />
          <g fill="#2b554c" fontSize="10" fontFamily="monospace" letterSpacing="1" fontWeight="600">
            <path d="M337 244L386 132" stroke="#6b9285" strokeWidth="1" fill="none"/>
            <text x="478" y="120" textAnchor="end">MOTION FORECASTING</text>
            <path d="M137 113L76 61" stroke="#6b9285" strokeWidth="1" fill="none"/>
            <text x="20" y="52">PERCEPTION</text>
            <path d="M242 306L94 409" stroke="#6b9285" strokeWidth="1" fill="none"/>
            <text x="19" y="424">UNCERTAINTY</text>
          </g>
          <g fill="#6c857b" fontSize="10" fontFamily="monospace">
            <text x="16" y="462">OBSERVED · t−Δ … t</text><text x="483" y="462" textAnchor="end">FORECAST · t … t+H</text>
          </g>
        </svg>
        <div className="flex flex-wrap gap-x-4 gap-y-2 px-2 pt-4 font-mono text-[10px] text-[#365e55]">
          <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-[#0f8f79]" />Pedestrian</span>
          <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-sm bg-[#426cc0]" />Cyclist</span>
          <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-sm bg-[#bd8632]" />E-scooter</span>
          <span className="flex items-center gap-1.5"><i className="w-4 border-t border-dashed border-[#365e55]" />Observed</span>
        </div>
      </div>
      <figcaption id="trajectory-caption" className="mt-3 text-xs italic leading-5 text-[var(--muted)]">
        Conceptual illustration of multimodal trajectory forecasting — not actual thesis data or model outputs.
      </figcaption>
    </figure>
  );
}

export function SegmentationConcept() {
  return (
    <figure>
      <div className="rounded-[1.6rem] border border-[var(--line)] bg-[#eef4f1] p-4 shadow-[0_20px_50px_rgba(5,36,29,.06)]">
        <div className="mb-3 flex justify-between font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#345b50]">
          <span>Semantic scene understanding</span><span>Illustration</span>
        </div>
        <svg viewBox="0 0 540 330" role="img" aria-label="Conceptual semantic segmentation scene with road, sidewalk, pedestrian, and obstacle labels" className="w-full rounded-xl bg-[#f8faf7]">
          <rect width="540" height="330" fill="#e6f0ec"/>
          <rect y="0" width="540" height="133" fill="#d2e1dc"/>
          <path d="M0 330L207 132H330L540 330Z" fill="#b1d2c6" stroke="#0f6b58" strokeWidth="1.5"/>
          <path d="M0 330V156L207 132L139 330Z" fill="#d2dceb" stroke="#597dbb" strokeWidth="1.4"/>
          <path d="M540 330V156L330 132L405 330Z" fill="#d2dceb" stroke="#597dbb" strokeWidth="1.4"/>
          <rect x="36" y="39" width="119" height="139" fill="#a3bbb1" opacity=".6"/>
          <rect x="400" y="25" width="102" height="148" fill="#a3bbb1" opacity=".6"/>
          <circle cx="300" cy="174" r="14" fill="#c59138" opacity=".8"/>
          <rect x="286" y="192" width="28" height="62" rx="10" fill="#c59138" opacity=".8"/>
          <rect x="230" y="219" width="40" height="34" fill="#af6c68" opacity=".7" stroke="#864e4b"/>
          {([["SIDEWALK",230,294],["ROAD",38,285],["PERSON",330,190],["OBSTACLE",174,220],["BUILDING",42,33]] as const).map(([t,x,y])=>(
            <g key={t}>
              <rect x={x-5} y={y-14} width={t.length*7+13} height="19" rx="3" fill="#fcfdfb" opacity=".95" />
              <text x={x} y={y} fontFamily="monospace" fontSize="11" fill="#204940" fontWeight="600">{t}</text>
            </g>
          ))}
        </svg>
      </div>
      <figcaption className="mt-3 text-xs italic text-[var(--muted)]">Conceptual scene diagram — not robot footage or evaluated segmentation output.</figcaption>
    </figure>
  );
}
