import Image from "next/image";
import { FiExternalLink, FiFilm, FiPlayCircle } from "react-icons/fi";

/**
 * This is actual IMPTC dataset documentation footage: an observed intersection
 * sequence provided by the IMPTC authors, not model predictions or thesis results.
 * The thumbnail comes from the same official dataset repository.
 *
 * Reference: https://github.com/mh-kav-institute/imptc-dataset
 */
const IMPTC_VIDEO_EMBED = "https://drive.google.com/file/d/1tAPL-fh3EjeYRfe1KNB-tAkhqm6-BDWv/preview";
const IMPTC_VIDEO_ORIGINAL = "https://drive.google.com/file/d/1tAPL-fh3EjeYRfe1KNB-tAkhqm6-BDWv/view";
const IMPTC_SOURCE = "https://github.com/mh-kav-institute/imptc-dataset";
const IMPTC_POSTER = "/datasets/imptc/sample_01_overview.jpg";

export function ThesisRealWorldVideo({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <figure className="w-full">
        <div className="relative overflow-hidden bg-[#183e32]">
          <Image
            src={IMPTC_POSTER}
            alt="Authentic overview of the instrumented urban intersection from the IMPTC dataset, used for trajectory prediction research."
            width={600}
            height={500}
            unoptimized
            className="block aspect-video w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#052d22]/20">
            <div className="rounded-full border border-white/75 bg-[#093e31]/80 p-3 text-white shadow-lg">
              <FiPlayCircle size={33} aria-hidden="true" />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#042f25]/95 via-[#042f25]/60 to-transparent px-4 pb-3 pt-7">
            <p className="font-serif text-xl leading-tight text-white">The real IMPTC intersection.</p>
            <p className="mt-1 text-[10px] font-medium text-[#cde5d9]">Official dataset sample video · open project to watch</p>
          </div>
        </div>
        <figcaption className="sr-only">Original intersection visualization from the IMPTC dataset; selecting this project opens the embedded real sample-sequence video.</figcaption>
      </figure>
    );
  }

  return (
    <figure className="w-full">
      <div className="overflow-hidden rounded-[1.6rem] border border-[var(--line)] bg-[#102d25] shadow-[0_18px_58px_rgba(7,39,29,.12)]">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#426253] px-5 py-4 text-[#e8f5ec] sm:px-7">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[.14em]">
            <FiFilm className="text-[#a8e2ca]" aria-hidden="true" /> Real data / IMPTC dataset
          </span>
          <span className="font-mono text-[10px] tracking-[.1em] text-[#c0d7c8]">OFFICIAL SAMPLE FOOTAGE</span>
        </div>
        <div className="relative aspect-video bg-[#153d2f]">
          <iframe
            title="Official IMPTC dataset: video overview of a real traffic-intersection sequence used as source data for trajectory forecasting research"
            src={IMPTC_VIDEO_EMBED}
            loading="lazy"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 bg-[#102d25] px-5 py-4 sm:px-7">
          <p className="max-w-2xl text-xs leading-6 text-[#d7e6da]">
            Actual intersection footage published by the creators of the IMPTC dataset used in this diploma thesis.
            This is a recorded dataset sample, <strong>not a thesis model prediction or evaluation result</strong>.
          </p>
          <a href={IMPTC_VIDEO_ORIGINAL} target="_blank" rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#8cc9ac] px-4 py-2 text-xs font-semibold text-[#baf1d8] transition hover:bg-[#235441]">
            <FiPlayCircle aria-hidden="true" /> Watch original video <FiExternalLink aria-hidden="true" />
          </a>
        </div>
      </div>
      <figcaption className="mt-3 text-xs leading-6 text-[var(--muted)]">
        Source:{" "}
        <a href={IMPTC_SOURCE} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-[var(--accent)]">
          Official IMPTC dataset repository
        </a>.
        The sample video and intersection overview were published by the dataset authors. If the Google Drive player is restricted,
        use the original-video link above.
      </figcaption>
    </figure>
  );
}
