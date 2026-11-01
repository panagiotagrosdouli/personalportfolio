import type { NextRequest } from "next/server";

/** Streams only three explicitly allowlisted, public, thesis-authored Git LFS videos. */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const sources: Record<string, string> = {
  pedestrian: "panagros/qualitative_results/pedestrian/prediction_videos/01_sample_0169.mp4",
  cyclist: "panagros/qualitative_results/cyclist/prediction_videos/01_sample_0335.mp4",
  "cycle-scooter": "panagros/qualitative_results/cycle_scooter/prediction_videos/01_sample_0077.mp4",
};
const gitRepo = "PanagiotaGr/Trajectory-Prediction-of-Vulnerable-Road-Users-";

function isMp4(bytes: Uint8Array) {
  return bytes.length >= 12 &&
    String.fromCharCode(bytes[4], bytes[5], bytes[6], bytes[7]) === "ftyp";
}

async function loadVerifiedVideo(clip: string): Promise<Uint8Array | null> {
  const path = sources[clip];
  if (!path) return null;
  const endpoints = [
    `https://media.githubusercontent.com/media/${gitRepo}/main/${path}`,
    `https://github.com/${gitRepo}/raw/refs/heads/main/${path}`,
  ];
  for (const url of endpoints) {
    try {
      const result = await fetch(url, {
        headers: { Accept: "video/mp4,application/octet-stream" },
        redirect: "follow",
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(10000),
      });
      if (!result.ok) continue;
      const raw = new Uint8Array(await result.arrayBuffer());
      if (raw.length > 0 && raw.length < 25_000_000 && isMp4(raw)) return raw;
    } catch {
      // Try the alternative public GitHub LFS content endpoint.
    }
  }
  return null;
}

function asBody(bytes: Uint8Array): ArrayBuffer {
  const buffer = new ArrayBuffer(bytes.byteLength);
  new Uint8Array(buffer).set(bytes);
  return buffer;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ clip: string }> },
) {
  const { clip } = await params;
  if (!Object.hasOwn(sources, clip)) return new Response("Not found", { status: 404 });
  const bytes = await loadVerifiedVideo(clip);
  if (!bytes) return new Response("Video unavailable at source; use its original GitHub link.", {
    status: 502,
    headers: { "Cache-Control": "no-store" },
  });

  const size = bytes.length;
  const range = request.headers.get("range");
  const match = range?.match(/^bytes=(\d*)-(\d*)$/);
  const baseHeaders = {
    "Content-Type": "video/mp4",
    "Accept-Ranges": "bytes",
    "Cache-Control": "public, max-age=3600",
    "X-Content-Type-Options": "nosniff",
  };
  if (match) {
    const suffix = !match[1] && match[2] ? Number(match[2]) : null;
    const start = suffix !== null ? Math.max(0, size - suffix) : Number(match[1] || 0);
    const end = suffix !== null ? size - 1 : match[2] ? Math.min(size - 1, Number(match[2])) : size - 1;
    if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start < 0 || start > end || start >= size) {
      return new Response(null, {
        status: 416,
        headers: { ...baseHeaders, "Content-Range": `bytes */${size}` },
      });
    }
    return new Response(asBody(bytes.slice(start, end + 1)), {
      status: 206,
      headers: {
        ...baseHeaders,
        "Content-Length": String(end - start + 1),
        "Content-Range": `bytes ${start}-${end}/${size}`,
      },
    });
  }
  return new Response(asBody(bytes), {
    status: 200,
    headers: { ...baseHeaders, "Content-Length": String(size) },
  });
}
