type ThesisConceptArtProps = {
  compact?: boolean;
};

/**
 * Editorial illustration of the thesis research question.
 * IMPORTANT: All paths are artistic shapes; none represent recorded IMPTC data,
 * trained-model forecasts, or quantitative results.
 * Inline SVG avoids external image URLs and optimizer/caching issues.
 */
export function ThesisConceptArt({ compact = false }: ThesisConceptArtProps) {
  const stripes = Array.from({ length: 7 }, (_, i) => i);
  return (
    <figure className={compact ? "w-full" : "w-full"}>
      <div className={"relative overflow-hidden rounded-[1.4rem] border border-[#cbdcd4] bg-[#ecf4ef] " + (compact ? "shadow-none" : "shadow-[0_30px_75px_rgba(12,52,45,0.10)]")}>
        {!compact && (
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#cbdcd4] px-5 py-4 sm:px-7">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.19em] text-[#24584a]">Motion forecasting / research concept</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#547166]">VRU · Smart intersections</span>
          </div>
        )}
        <svg viewBox="0 0 900 530" role="img" aria-label="Conceptual overhead illustration of an urban intersection: pedestrians, cyclists, scooter and motorcyclist paths, observed-motion context and multiple plausible future movements. Not a model prediction or a measured dataset plot." className="block h-auto w-full">
          <rect width="900" height="530" fill="#eef5f0" />
          <g stroke="#d0dfd6" strokeWidth="1" opacity=".72">
            {Array.from({length: 25},(_,i)=><path key={"v"+i} d={`M${i*38} 0V530`}/>)}
            {Array.from({length: 15},(_,i)=><path key={"h"+i} d={`M0 ${i*38}H900`}/>)}
          </g>
          <g fill="#dde9e2" stroke="#cadcd1" strokeWidth="1.5">
            <rect x="16" y="16" width="275" height="156" rx="17"/>
            <rect x="590" y="16" width="294" height="156" rx="17"/>
            <rect x="16" y="353" width="275" height="160" rx="17"/>
            <rect x="590" y="353" width="294" height="160" rx="17"/>
          </g>
          <g stroke="#b8d3c3" strokeWidth="1.2" fill="none">
            <path d="M39 140V48H132M617 48H852V140M38 380H253V492M618 380V492H858"/>
            <path d="M54 94H264M631 94H857M48 430H258M633 430H860"/>
          </g>
          <path d="M325 0H575V530H325Z" fill="#c6d7ce" stroke="#abc3b7" strokeWidth="2"/>
          <path d="M0 204H900V327H0Z" fill="#c6d7ce" stroke="#abc3b7" strokeWidth="2"/>
          <path d="M325 204H575V327H325Z" fill="#c6d7ce"/>
          <g fill="none" stroke="#f8faf6" strokeWidth="2" strokeDasharray="17 16" opacity=".94">
            <path d="M450 3V190M450 337V527M8 265H310M589 265H892"/>
          </g>
          <g fill="#f5faf6" opacity=".97">
            {stripes.map(i=>(
              <g key={i}>
                <rect x={338+i*33} y="179" width="18" height="18" rx="2"/>
                <rect x={338+i*33} y="333" width="18" height="18" rx="2"/>
                <rect x="300" y={211+i*17} width="19" height="10" rx="2"/>
                <rect x="581" y={211+i*17} width="19" height="10" rx="2"/>
              </g>
            ))}
          </g>
          <g stroke="#b0c6b8" strokeWidth="1" fill="none">
            <path d="M312 184Q312 191 324 201M588 184Q588 191 576 201M312 345Q312 338 324 330M588 345Q588 338 576 330"/>
          </g>
          <g strokeWidth="2.8" fill="none" strokeLinecap="round" strokeDasharray="2 10" opacity=".78">
            <path d="M124 402Q178 375 223 351Q270 326 326 300" stroke="#275a53"/>
            <path d="M776 128Q717 165 663 207Q608 247 547 269" stroke="#325d77"/>
            <path d="M428 480Q426 414 430 342" stroke="#996d37"/>
            <path d="M819 264H657" stroke="#9a656b"/>
          </g>
          <path d="M326 300Q375 265 422 259Q492 260 569 269Q612 274 649 310L623 335Q547 303 497 312Q411 319 339 329Z"
             fill="#4cbb94" opacity=".14"/>
          <path d="M326 300Q397 296 467 323Q538 346 593 425L548 450Q494 387 450 367Q385 336 339 329Z"
             fill="#4cbb94" opacity=".12"/>
          <path d="M547 269Q486 257 430 192Q410 150 409 81L449 79Q460 148 488 174Q525 213 571 230Z"
             fill="#5383c4" opacity=".15"/>
          <g fill="none" strokeLinecap="round">
            <path d="M326 300Q398 270 482 277Q552 286 645 321" stroke="#13876c" strokeWidth="5"/>
            <path d="M326 300Q396 317 461 344Q519 369 572 438" stroke="#31a584" strokeWidth="3" opacity=".85"/>
            <path d="M547 269Q455 232 432 156Q424 130 432 85" stroke="#4476b5" strokeWidth="4.5"/>
            <path d="M547 269Q480 272 414 270Q353 262 286 258" stroke="#6591c9" strokeWidth="2.7" opacity=".78"/>
            <path d="M430 342Q427 273 432 218Q437 188 488 162" stroke="#c4914f" strokeWidth="4"/>
            <path d="M657 264Q631 260 596 264Q575 267 551 295" stroke="#b77c84" strokeWidth="3.5"/>
          </g>
          <g fill="#f9fdf9" strokeWidth="3">
            <circle cx="326" cy="300" r="12" stroke="#13876c"/>
            <circle cx="547" cy="269" r="12" stroke="#4476b5"/>
            <circle cx="430" cy="342" r="12" stroke="#c4914f"/>
            <circle cx="657" cy="264" r="12" stroke="#b77c84"/>
          </g>
          <g fill="#123b33">
            <circle cx="326" cy="300" r="4.5"/>
            <circle cx="547" cy="269" r="4.5"/>
            <circle cx="430" cy="342" r="4.5"/>
            <circle cx="657" cy="264" r="4.5"/>
          </g>
          <g fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontWeight="600" letterSpacing="1.2" fontSize="12" fill="#2d6052">
            <text x="42" y="52">SCENE / 01</text>
            <text x="857" y="52" textAnchor="end">CONTEXT-AWARE MOTION</text>
            <text x="42" y="491" fontSize="11" letterSpacing=".7">PAST MOTION — — —</text>
            <text x="857" y="491" textAnchor="end" fontSize="11" letterSpacing=".7">POSSIBLE FUTURES ━━</text>
          </g>
          <g fontFamily="ui-sans-serif,system-ui,sans-serif" fontWeight="600" fontSize="13">
            <rect x="50" y="312" width="172" height="35" rx="17" fill="#fbfefb" stroke="#b9d2c4"/>
            <circle cx="69" cy="330" r="5" fill="#13876c"/>
            <text x="83" y="334" fill="#26574b">Pedestrian</text>
            <path d="M222 329L311 301" stroke="#77a698" strokeWidth="1.6" fill="none"/>
            <rect x="610" y="115" width="173" height="35" rx="17" fill="#fbfefb" stroke="#b9d2c4"/>
            <circle cx="629" cy="132" r="5" fill="#4476b5"/>
            <text x="643" y="137" fill="#285477">Cyclist</text>
            <path d="M610 133L554 252" stroke="#87a9bc" strokeWidth="1.5" fill="none"/>
            <rect x="486" y="389" width="152" height="35" rx="17" fill="#fbfefb" stroke="#b9d2c4"/>
            <circle cx="505" cy="406" r="5" fill="#c4914f"/>
            <text x="519" y="411" fill="#78592f">E-scooter</text>
            <path d="M485 406L441 350" stroke="#baa079" strokeWidth="1.5" fill="none"/>
            <rect x="675" y="341" width="174" height="35" rx="17" fill="#fbfefb" stroke="#b9d2c4"/>
            <circle cx="694" cy="358" r="5" fill="#b77c84"/>
            <text x="708" y="362" fill="#825a63">Motorcyclist</text>
            <path d="M686 341L665 277" stroke="#c49ea3" strokeWidth="1.5" fill="none"/>
          </g>
          <g transform="translate(695 450)">
            <rect width="170" height="21" rx="9" fill="#dbe9e1"/>
            <text x="85" y="14" textAnchor="middle" fill="#42685b" fontFamily="ui-monospace,monospace" fontSize="8.5" fontWeight="700" letterSpacing=".8">CONCEPTUAL · NOT MODEL OUTPUT</text>
          </g>
        </svg>
      </div>
      {!compact && (
        <figcaption className="mt-3 text-xs leading-6 text-[var(--muted)]">
          Original conceptual illustration of observed-motion context and multiple plausible paths at a smart intersection.
          Paths are illustrative only: they are not dataset tracks, experimental results, or predictions from a trained model.
        </figcaption>
      )}
    </figure>
  );
}
