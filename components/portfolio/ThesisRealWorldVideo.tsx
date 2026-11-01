"use client";

import { useEffect, useRef, useState } from "react";
import { FiExternalLink, FiFilm, FiPlayCircle } from "react-icons/fi";

// The footage is of Shibuya Crossing in Tokyo. It is real documentary footage,
// NOT an IMPTC sequence and NOT an output or prediction by the thesis models.
// Source: Basile Morin, CC BY-SA 4.0, Wikimedia Commons.
const STREET_VIDEO = "https://upload.wikimedia.org/wikipedia/commons/transcoded/5/53/Shibuya_Crossing%2C_Tokyo%2C_Japan_%28video%29.webm/Shibuya_Crossing%2C_Tokyo%2C_Japan_%28video%29.webm.480p.vp9.webm";
const STREET_POSTER = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Shibuya_Crossing%2C_Tokyo%2C_Japan_%28video%29.webm/960px--Shibuya_Crossing%2C_Tokyo%2C_Japan_%28video%29.webm.jpg";
const STREET_CREDIT = "https://commons.wikimedia.org/wiki/File:Shibuya_Crossing,_Tokyo,_Japan_(video).webm";
const SOURCE_VIDEO = "https://drive.google.com/file/d/1tAPL-fh3EjeYRfe1KNB-tAkhqm6-BDWv/preview";
const SOURCE_VIDEO_PAGE = "https://drive.google.com/file/d/1tAPL-fh3EjeYRfe1KNB-tAkhqm6-BDWv/view";
const IMPTC_REPO = "https://github.com/mh-kav-institute/imptc-dataset";

/** Looping video of a *real* crossing, presented as a thematic, external documentary visual. */
export function ThesisRealWorldVideo({ compact = false }: { compact?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const pref = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => {
      if (pref.matches) videoRef.current?.pause();
      else videoRef.current?.play().catch(() => {});
    };
    syncMotion();
    pref.addEventListener("change", syncMotion);
    return () => pref.removeEventListener("change", syncMotion);
  }, []);

  return (
    <figure className="w-full">
      <div className="overflow-hidden rounded-[1.6rem] border border-[var(--line)] bg-[#0c2420] shadow-[0_20px_65px_rgba(8,40,32,.12)]">
        {!compact && (
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#44665a] bg-[#112c25] px-5 py-3.5 text-[#e9f6ed] sm:px-7">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.13em]">
              <FiFilm aria-hidden="true" className="text-[#a0d9c6]" /> Human motion / urban intersections
            </span>
            <span className="font-mono text-[10px] tracking-[0.1em] text-[#bdd0c5]">REAL RECORDED FOOTAGE</span>
          </div>
        )}
        <div className="relative aspect-video w-full overflow-hidden bg-[#14362f]">
          <video
            ref={videoRef}
            src={STREET_VIDEO}
            poster={STREET_POSTER}
            className="block h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload={compact ? "none" : "metadata"}
            controls={!compact}
            aria-label="Real documentary video of pedestrians moving across Shibuya Crossing in Tokyo. This is not footage of the IMPTC intersection or a thesis model's output."
            onError={() => setVideoFailed(true)}
          >
            Your browser does not support this video. The original is available on Wikimedia Commons.
          </video>
          {videoFailed && (
            <a href={STREET_CREDIT} target="_blank" rel="noopener noreferrer"
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#183c32]/90 px-5 text-center text-sm font-medium text-white">
              <FiPlayCircle size={32} aria-hidden="true" /> Watch the real footage on Wikimedia Commons
            </a>
          )}
          {compact && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07241b]/85 via-[#07241b]/35 to-transparent px-4 pb-3 pt-7">
              <p className="font-serif text-2xl leading-tight text-white">Motion in the real world.</p>
              <span className="text-[10px] text-[#d3e4da]">Real street footage · Tokyo · not IMPTC</span>
            </div>
          )}
        </div>
        {!compact && (
          <div className="flex flex-wrap items-start justify-between gap-3 bg-[#112c25] px-5 py-4 text-[#e9f6ed] sm:px-7">
            <p className="max-w-2xl text-xs leading-6 text-[#d5e5da]">
              Real-world scene for context, recorded at Shibuya Crossing, Tokyo.
              It is <strong>not</strong> an IMPTC dataset sequence, an annotated tracking output,
              or a prediction produced by the thesis.
            </p>
            <a href={STREET_CREDIT} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#a8e3d0] underline underline-offset-4">
              Footage / attribution <FiExternalLink aria-hidden="true"/>
            </a>
          </div>
        )}
      </div>
      {!compact && (
        <figcaption className="mt-3 text-xs leading-6 text-[var(--muted)]">
          Video: Basile Morin, <em>Shibuya Crossing, Tokyo, Japan</em> (2019), Wikimedia Commons,
          {" "}<a className="underline underline-offset-4" href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>.
          The unmodified footage is externally hosted; its original license remains with the creator.
        </figcaption>
      )}
    </figure>
  );
}

/** Official IMPTC dataset sequence video linked from the dataset's public README. */
export function IMPTCOriginalSequenceVideo() {
  return (
    <section className="mt-10 rounded-[1.6rem] border border-[var(--line)] bg-[var(--panel)] p-5 sm:p-7">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[.15em] text-[var(--accent)]">Official IMPTC sequence video</p>
          <h3 className="mt-3 font-serif text-3xl leading-tight">Inside the dataset.</h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
            A real sample-sequence overview shared by the creators of the IMPTC dataset.
            This is dataset demonstration footage, not the thesis model&apos;s predictions or an experimental result.
          </p>
        </div>
        <a href={IMPTC_REPO} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] underline underline-offset-4">
          Dataset source <FiExternalLink aria-hidden="true"/>
        </a>
      </div>
      <div className="relative aspect-video overflow-hidden rounded-[1.2rem] border border-[var(--line)] bg-[#18332d]">
        <iframe
          title="Original IMPTC dataset sample sequence video, from its official public repository"
          src={SOURCE_VIDEO}
          loading="lazy"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
      <p className="mt-4 flex flex-wrap items-center gap-2 text-xs leading-6 text-[var(--muted)]">
        If the embedded Google Drive player is unavailable,{" "}
        <a href={SOURCE_VIDEO_PAGE} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-[var(--accent)] underline underline-offset-4">
          open the original sample video <FiExternalLink aria-hidden="true"/>
        </a>.
      </p>
    </section>
  );
}
