// src/components/BatikPattern.jsx
"use client";

export default function BatikPattern({
  motif = "parang",
  className = "",
  opacity = 10,
  color = "text-[#9C6644]",
}) {
  const opacityValue = Math.min(Math.max(opacity / 100, 0), 1);

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ opacity: opacityValue }}
    >
      <svg
        className={`w-full h-full ${color}`}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {motif === "parang" && (
            <pattern
              id="parang"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0,50 Q25,25 50,50 T100,50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M0,75 Q25,50 50,75 T100,75"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <circle cx="25" cy="37" r="1" fill="currentColor" />
              <circle cx="75" cy="62" r="1" fill="currentColor" />
            </pattern>
          )}

          {motif === "kawung" && (
            <pattern
              id="kawung"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <ellipse
                cx="40"
                cy="20"
                rx="12"
                ry="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <ellipse
                cx="40"
                cy="60"
                rx="12"
                ry="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <ellipse
                cx="20"
                cy="40"
                rx="18"
                ry="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <ellipse
                cx="60"
                cy="40"
                rx="18"
                ry="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <circle cx="40" cy="40" r="3" fill="currentColor" />
            </pattern>
          )}

          {motif === "megamendung" && (
            <pattern
              id="megamendung"
              x="0"
              y="0"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M20,100 Q40,80 60,100 T100,100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M25,85 Q42,70 60,85 T95,85"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M30,70 Q45,58 60,70 T90,70"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <circle cx="60" cy="20" r="3" fill="currentColor" />
            </pattern>
          )}

          {motif === "truntum" && (
            <pattern
              id="truntum"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="2" fill="currentColor" />
              <circle cx="5" cy="5" r="1.5" fill="currentColor" />
              <circle cx="55" cy="5" r="1.5" fill="currentColor" />
              <circle cx="5" cy="55" r="1.5" fill="currentColor" />
              <circle cx="55" cy="55" r="1.5" fill="currentColor" />
              <circle cx="30" cy="5" r="1" fill="currentColor" />
              <circle cx="5" cy="30" r="1" fill="currentColor" />
            </pattern>
          )}

          {motif === "sidomukti" && (
            <pattern
              id="sidomukti"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M40,5 L75,40 L40,75 L5,40 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M40,15 L65,40 L40,65 L15,40 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.8"
              />
              <circle cx="40" cy="40" r="4" fill="currentColor" />
            </pattern>
          )}
        </defs>

        <rect width="100%" height="100%" fill={`url(#${motif})`} />
      </svg>
    </div>
  );
}
