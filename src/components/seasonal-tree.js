import React, { useEffect, useState } from "react";

const SOUTHERN_TIMEZONES = new Set([
  "America/Argentina/Buenos_Aires", "America/Argentina/Catamarca", "America/Argentina/Cordoba",
  "America/Argentina/Jujuy", "America/Argentina/La_Rioja", "America/Argentina/Mendoza",
  "America/Argentina/Rio_Gallegos", "America/Argentina/Salta", "America/Argentina/San_Juan",
  "America/Argentina/San_Luis", "America/Argentina/Tucuman", "America/Argentina/Ushuaia",
  "America/Asuncion", "America/Bahia", "America/Campo_Grande", "America/Cuiaba",
  "America/La_Paz", "America/Lima", "America/Montevideo", "America/Punta_Arenas",
  "America/Santiago", "America/Sao_Paulo",
  "Africa/Gaborone", "Africa/Harare", "Africa/Johannesburg", "Africa/Lubumbashi",
  "Africa/Lusaka", "Africa/Maputo", "Africa/Maseru", "Africa/Mbabane", "Africa/Windhoek",
  "Africa/Antananarivo", "Africa/Luanda", "Africa/Kinshasa", "Africa/Brazzaville",
  "Pacific/Auckland", "Pacific/Chatham", "Pacific/Easter", "Pacific/Fiji",
  "Pacific/Gambier", "Pacific/Norfolk", "Pacific/Noumea", "Pacific/Pitcairn",
  "Pacific/Port_Moresby", "Pacific/Rarotonga", "Pacific/Tahiti", "Pacific/Tongatapu",
  "Pacific/Apia", "Pacific/Niue",
  "Indian/Mauritius", "Indian/Reunion", "Indian/Mayotte",
]);

function isSouthernHemisphere(tz) {
  if (!tz) return false;
  if (tz.startsWith("Australia/") || tz.startsWith("Antarctica/")) return true;
  return SOUTHERN_TIMEZONES.has(tz);
}

function detectSeason() {
  let tz = "";
  try {
    tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  } catch (e) {
    tz = "";
  }
  const month = new Date().getMonth();
  const northSeason =
    month === 11 || month <= 1 ? "winter"
    : month <= 4 ? "spring"
    : month <= 7 ? "summer"
    : "autumn";
  if (!isSouthernHemisphere(tz)) return northSeason;
  return {
    winter: "summer",
    spring: "autumn",
    summer: "winter",
    autumn: "spring",
  }[northSeason];
}

// Sampling region (tree-zone is now square and aligns 1:1 with the SVG).
const CANOPY = { topMin: 2, topMax: 72, leftMin: 8, leftMax: 92 };
const SAMPLE_SIZE = 240;
const ALPHA_THRESHOLD = 40;

const PARTICLE_CONFIG = {
  spring: { attached: 60, falling: 22 },
  summer: { attached: 22, falling: 14 },
  autumn: { attached: 90, falling: 36 },
  winter: { attached: 38, falling: 36 },
};

const SHAPES = ["a", "b", "c", "d"];
const COLORS = ["1", "2", "3", "4", "5"];

function rand(min, max) { return min + Math.random() * (max - min); }
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function isBranch(data, leftPct, topPct) {
  if (!data) return true;
  const x = Math.floor((leftPct / 100) * SAMPLE_SIZE);
  const y = Math.floor((topPct / 100) * SAMPLE_SIZE);
  if (x < 0 || x >= SAMPLE_SIZE || y < 0 || y >= SAMPLE_SIZE) return false;
  return data[(y * SAMPLE_SIZE + x) * 4 + 3] > ALPHA_THRESHOLD;
}

function findBranchPosition(data, topMax) {
  const maxTop = topMax != null ? topMax : CANOPY.topMax;
  for (let i = 0; i < 300; i++) {
    const left = rand(CANOPY.leftMin, CANOPY.leftMax);
    const top = rand(CANOPY.topMin, maxTop);
    if (isBranch(data, left, top)) return { left, top };
  }
  return { left: rand(CANOPY.leftMin, CANOPY.leftMax), top: rand(CANOPY.topMin, maxTop) };
}

function makeParticles(season, branchData) {
  const cfg = PARTICLE_CONFIG[season] || { attached: 16, falling: 14 };
  const attached = Array.from({ length: cfg.attached }, (_, i) => {
    const pos = findBranchPosition(branchData);
    return {
      id: `a${i}`,
      type: "attached",
      shape: pick(SHAPES),
      color: pick(COLORS),
      top: pos.top.toFixed(1),
      left: pos.left.toFixed(1),
      delay: -rand(0, 6).toFixed(2),
      duration: rand(3, 6).toFixed(2),
      drift: 0,
      scale: rand(0.65, 1.4).toFixed(2),
      rotation: Math.round(rand(0, 360)),
    };
  });
  const falling = Array.from({ length: cfg.falling }, (_, i) => {
    const pos = findBranchPosition(branchData, CANOPY.topMax - 12);
    return {
      id: `f${i}`,
      type: "falling",
      shape: pick(SHAPES),
      color: pick(COLORS),
      top: pos.top.toFixed(1),
      left: pos.left.toFixed(1),
      delay: -rand(0, 20).toFixed(2),
      duration: rand(8, 18).toFixed(2),
      drift: Math.round(rand(-90, 90)),
      scale: rand(0.6, 1.15).toFixed(2),
      rotation: Math.round(rand(0, 360)),
    };
  });
  return [...attached, ...falling];
}

export default function SeasonalTree() {
  const [state, setState] = useState(null);

  useEffect(() => {
    const season = detectSeason();
    let cancelled = false;
    const finalize = (branchData) => {
      if (!cancelled) setState({ season, particles: makeParticles(season, branchData) });
    };
    const img = new Image();
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = SAMPLE_SIZE;
        canvas.height = SAMPLE_SIZE;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, SAMPLE_SIZE, SAMPLE_SIZE);
        finalize(ctx.getImageData(0, 0, SAMPLE_SIZE, SAMPLE_SIZE).data);
      } catch (e) {
        finalize(null);
      }
    };
    img.onerror = () => finalize(null);
    img.src = "/tree.svg";
    return () => { cancelled = true; };
  }, []);

  if (!state) {
    return (
      <div className="seasonal-bg" aria-hidden="true">
        <div className="seasonal-bg__tree-zone">
          <img className="seasonal-bg__tree" src="/tree.svg" alt="" />
        </div>
      </div>
    );
  }

  return (
    <div className={`seasonal-bg seasonal-bg--${state.season}`} aria-hidden="true">
      <div className="seasonal-bg__tree-zone">
        <img className="seasonal-bg__tree" src="/tree.svg" alt="" />
        <div className="seasonal-bg__particles">
          {state.particles.map(p => (
            <span
              key={p.id}
              className={
                "seasonal-bg__particle" +
                ` seasonal-bg__particle--${p.type}` +
                ` seasonal-bg__particle--shape-${p.shape}` +
                ` seasonal-bg__particle--color-${p.color}`
              }
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
                "--drift": `${p.drift}px`,
                "--scale": p.scale,
                "--rot": `${p.rotation}deg`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
