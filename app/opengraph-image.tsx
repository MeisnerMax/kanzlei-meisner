import { ImageResponse } from "next/og";

export const alt = "Stephanie Meisner – Mediation & Konfliktklärung";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#F4F1EA",
          color: "#192522",
          padding: "72px 82px",
          fontFamily: "serif"
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -110,
            top: -120,
            width: 510,
            height: 510,
            borderRadius: "50%",
            border: "2px solid rgba(130,150,139,.45)"
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -20,
            top: -30,
            width: 330,
            height: 330,
            borderRadius: "50%",
            border: "2px solid rgba(130,150,139,.45)"
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "sans-serif",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#C7785B"
            }}
          >
            Stephanie Meisner · Mediation & Konfliktklärung
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 74, lineHeight: 1.02 }}>
              Aus festgefahren
            </div>
            <div style={{ display: "flex", fontSize: 74, lineHeight: 1.02, color: "#52685F" }}>
              wird verhandelbar.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "sans-serif",
              fontSize: 24,
              color: "rgba(25,37,34,.66)"
            }}
          >
            Neutral. Vertraulich. Klar strukturiert.
          </div>
        </div>
      </div>
    ),
    size
  );
}
