/**
 * Generates elegant, on-brand SVG placeholder images as data URIs.
 * No network requests are made, so imagery always renders instantly and
 * offline. Swap these out for real product photography later by pointing
 * `image` fields in lib/data.ts at real files in /public.
 */

type PlaceholderTone = "purple" | "gold" | "lavender" | "ink";

const TONES: Record<PlaceholderTone, [string, string, string]> = {
  purple: ["#5B21B6", "#7C3AED", "#312E81"],
  gold: ["#D4AF37", "#F3E3A3", "#B4912B"],
  lavender: ["#EDE9FE", "#C4B5FD", "#5B21B6"],
  ink: ["#312E81", "#5B21B6", "#1E1B4B"],
};

function hashSeed(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function initials(label: string): string {
  return label
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

/**
 * Builds a soft, luxury-styled SVG placeholder (gradient field + monogram
 * ring + faint botanical line motif) encoded as a data URI.
 */
export function placeholderImage(
  label: string,
  tone: PlaceholderTone = "purple",
  ratio: "square" | "portrait" | "landscape" | "wide" = "square"
): string {
  const [c1, c2, c3] = TONES[tone];
  const seed = hashSeed(label);
  const dims = {
    square: [800, 800],
    portrait: [800, 1000],
    landscape: [900, 700],
    wide: [1200, 600],
  }[ratio];
  const [w, h] = dims;
  const angle = (seed % 360).toFixed(0);
  const monogram = initials(label) || "ML";
  const ringR = Math.min(w, h) * 0.22;
  const cx = w / 2;
  const cy = h / 2;

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="rotate(${angle} 0.5 0.5)">
      <stop offset="0%" stop-color="${c1}" stop-opacity="0.16"/>
      <stop offset="55%" stop-color="#FFFDFB" stop-opacity="1"/>
      <stop offset="100%" stop-color="${c2}" stop-opacity="0.14"/>
    </linearGradient>
    <linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c3}"/>
      <stop offset="100%" stop-color="${c1}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <g opacity="0.55">
    <path d="M0 ${h * 0.15} Q ${w * 0.25} ${h * 0.05} ${w * 0.5} ${h * 0.15} T ${w} ${h * 0.15}" stroke="${c1}" stroke-width="1" fill="none" opacity="0.25"/>
    <path d="M0 ${h * 0.85} Q ${w * 0.25} ${h * 0.95} ${w * 0.5} ${h * 0.85} T ${w} ${h * 0.85}" stroke="${c2}" stroke-width="1" fill="none" opacity="0.25"/>
  </g>
  <circle cx="${cx}" cy="${cy}" r="${ringR}" fill="none" stroke="url(#ring)" stroke-width="1.5" opacity="0.7"/>
  <circle cx="${cx}" cy="${cy}" r="${ringR - 14}" fill="none" stroke="${c1}" stroke-width="0.75" opacity="0.3"/>
  <text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="central" font-family="Georgia, 'Playfair Display', serif" font-size="${ringR * 0.65}" fill="${c3}" opacity="0.85" letter-spacing="2">${monogram}</text>
  <text x="${cx}" y="${h - 28}" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" letter-spacing="4" fill="${c1}" opacity="0.45">ARBAN MUSE</text>
</svg>`.trim();

  const encoded = Buffer.from(svg).toString("base64");
  return `data:image/svg+xml;base64,${encoded}`;
}
