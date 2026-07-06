import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fbfaf7",
          color: "#1c1917",
          padding: 72,
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, textTransform: "uppercase", color: "#064e3b" }}>
          Panagiota Grosdouli
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 86, lineHeight: 0.95, letterSpacing: -4, maxWidth: 940 }}>
            Robotics research for safer autonomous systems.
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.45, maxWidth: 880, color: "#57534e" }}>
            Trajectory prediction · uncertainty-aware navigation · intelligent systems
          </div>
        </div>
        <div style={{ height: 1, width: "100%", background: "#d6d3d1" }} />
      </div>
    ),
    size,
  );
}
