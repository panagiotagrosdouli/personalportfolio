// Downloads the author's ORIGINAL Git LFS videos (not Git pointer text) during
// a static Next.js build. Failure is non-fatal: the UI also links to their files.
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const repo = "PanagiotaGr/Trajectory-Prediction-of-Vulnerable-Road-Users-";
const items = [
  ["pedestrian", "panagros/qualitative_results/pedestrian/prediction_videos/01_sample_0169.mp4"],
  ["cyclist", "panagros/qualitative_results/cyclist/prediction_videos/01_sample_0335.mp4"],
  ["cycle-scooter", "panagros/qualitative_results/cycle_scooter/prediction_videos/01_sample_0077.mp4"],
];

const directory = join(process.cwd(), "public", "thesis-media");
await mkdir(directory, { recursive: true });
const validMP4 = (b) => b.length > 16 && b.toString("ascii", 4, 8) === "ftyp";

const jobs = await Promise.all(items.map(async ([name, path]) => {
  const sources = [
    `https://media.githubusercontent.com/media/${repo}/main/${path}`,
    `https://github.com/${repo}/raw/refs/heads/main/${path}`,
  ];
  for (const url of sources) {
    try {
      const r = await fetch(url, {
        redirect: "follow",
        headers: { Accept: "video/mp4,application/octet-stream" },
        signal: AbortSignal.timeout(12000),
      });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const bytes = Buffer.from(await r.arrayBuffer());
      if (!validMP4(bytes) || bytes.length > 25000000) {
        throw new Error("not an MP4 binary (possibly a 131-byte Git LFS pointer)");
      }
      await writeFile(join(directory, `${name}.mp4`), bytes);
      console.log(`[thesis-video] saved ${name}.mp4 (${bytes.length} bytes) from original thesis repository`);
      return true;
    } catch (err) {
      console.warn(`[thesis-video] ${name} source unavailable: ${String(err).slice(0,150)}`);
    }
  }
  console.warn(`[thesis-video] ${name}: file not copied; online original remains linked`);
  return false;
}));

console.log(`[thesis-video] ${jobs.filter(Boolean).length}/${jobs.length} original MP4 assets copied. Build will continue.`);
