import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Fortify Pest Control Inc. — safe, eco-friendly pest control across Winnipeg & Manitoba";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(
    join(process.cwd(), "src/app/apple-icon.png"),
    "base64",
  );
  const logoSrc = `data:image/png;base64,${logo}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #04223e 0%, #033562 55%, #052b4f 100%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Green glow accent */}
        <div
          style={{
            position: "absolute",
            top: -170,
            right: -130,
            width: 540,
            height: 540,
            borderRadius: 9999,
            background: "rgba(86,179,81,0.22)",
            display: "flex",
          }}
        />

        {/* Brand lockup */}
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            width={128}
            height={128}
            src={logoSrc}
            alt=""
            style={{ borderRadius: 28 }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 58,
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: -1,
                lineHeight: 1,
              }}
            >
              FORTIFY
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 23,
                fontWeight: 700,
                color: "#84d07d",
                letterSpacing: 8,
                marginTop: 8,
              }}
            >
              PEST CONTROL INC.
            </div>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: -1.5,
              lineHeight: 1.05,
            }}
          >
            Safe, eco-friendly pest control
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 37,
              fontWeight: 600,
              color: "#cfe0ef",
              marginTop: 16,
            }}
          >
            for homes &amp; businesses across Winnipeg &amp; Manitoba
          </div>
        </div>

        {/* Trust strip */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#56b351",
              color: "#ffffff",
              fontSize: 25,
              fontWeight: 700,
              padding: "12px 26px",
              borderRadius: 9999,
            }}
          >
            100% Satisfaction Guarantee
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#ffffff",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            431-481-7786
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#9cc0df",
              fontSize: 28,
              fontWeight: 600,
              marginLeft: "auto",
            }}
          >
            fortifypest.ca
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
