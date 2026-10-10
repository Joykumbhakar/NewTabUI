'use strict';

/* ─────────────────────────────────────────────────────
   1. CONSTANTS, ICONS & DATA
───────────────────────────────────────────────────── */
const SVG_LIB = {
  globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/>',
  sunrise: '<path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 6 4-4 4 4"/><path d="M16 18a4 4 0 0 0-8 0"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  sunset: '<path d="M12 10V2"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m16 5-4 4-4-4"/><path d="M16 18a4 4 0 0 0-8 0"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
  warning: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  image: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
  video: '<polygon points="23 7 16 12 23 17 23 7"/><rect width="15" height="14" x="1" y="5" rx="2" ry="2"/>',
  music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  key: '<path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/><path d="m21 2-9.6 9.6"/><circle cx="7.5" cy="15.5" r="5.5"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  bookmark: '<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>',
  shopping: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>',
  creditcard: '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>',
  gift: '<polyline points="20 12 20 22 4 22 4 12"/><rect width="20" height="5" x="2" y="7"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>',
  cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
  cloudrain: '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/>',
  cloudsnow: '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M8 15h.01"/><path d="M8 19h.01"/><path d="M12 17h.01"/><path d="M12 21h.01"/><path d="M16 15h.01"/><path d="M16 19h.01"/>',
  cloudlightning: '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"/><polyline points="13 11 9 17 15 17 11 23"/>',
  cloudsun: '<path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M20 12h2"/><path d="m19.07 4.93-1.41 1.41"/><path d="M15.947 8.65 15.947 8.65A5.002 5.002 0 0 0 6.545 11.2 5.5 5.5 0 0 0 8 22h9a5 5 0 0 0 0-10Z"/>',
  thermometer: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  laptop: '<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>',
  smartphone: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
  tv: '<rect width="20" height="15" x="2" y="7" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/>',
  headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',
  mic: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/>',
  file: '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/>',
  folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
  trash: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
  edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',
  plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  history: '<polyline points="12 8 12 12 14 14"/><path d="M3.05 11a9 9 0 1 1 .5 4m-.5-4v4h4"/>',
  menu: '<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>',
  play: '<polygon points="5 3 19 12 5 21 5 3"/>',
  award: '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
  briefcase: '<rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2-2v16"/>',
  map: '<polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/>',
  youtube: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>',
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  twitter: '<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>',
  reddit: '<path d="M12 8c2.6 0 5 1.4 6 3.5a3 3 0 1 1-1.3 5.5c-1 1.7-3.4 2.8-5.9 2.8s-4.8-1.1-5.9-2.8A3 3 0 1 1 5 11.5C6 9.4 8.4 8 12 8z"/><path d="M12 8V4m0 0l2 2m-2-2l-2 2"/><circle cx="12" cy="14" r="1"/>',
  figma: '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>',
  discord: '<path d="M9 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/><path d="M15 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/><path d="M7 6.4C8.6 5.5 10.3 5 12 5c1.7 0 3.4.5 5 1.4A10.7 10.7 0 0 1 20 18a10.6 10.6 0 0 1-4.2-1 9 9 0 0 1-7.6 0A10.6 10.6 0 0 1 4 18 10.7 10.7 0 0 1 7 6.4z"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  instagram: '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
  slack: '<rect width="3" height="8" x="13" y="2" rx="1.5"/><path d="M19 8.5v1A1.5 1.5 0 0 1 17.5 11h-1A1.5 1.5 0 0 1 15 9.5v-1A1.5 1.5 0 0 1 16.5 7h1A1.5 1.5 0 0 1 19 8.5z"/><rect width="3" height="8" x="8" y="14" rx="1.5"/><path d="M5 15.5v-1A1.5 1.5 0 0 1 6.5 13h1A1.5 1.5 0 0 1 9 14.5v1A1.5 1.5 0 0 1 7.5 17h-1A1.5 1.5 0 0 1 5 15.5z"/><rect width="8" height="3" x="14" y="13" rx="1.5"/><path d="M15.5 19h-1A1.5 1.5 0 0 1 13 17.5v-1A1.5 1.5 0 0 1 14.5 15h1A1.5 1.5 0 0 1 17 16.5v1A1.5 1.5 0 0 1 15.5 19z"/><rect width="8" height="3" x="2" y="8" rx="1.5"/><path d="M8.5 5h1A1.5 1.5 0 0 1 11 6.5v1A1.5 1.5 0 0 1 9.5 9h-1A1.5 1.5 0 0 1 7 7.5v-1A1.5 1.5 0 0 1 8.5 5z"/>',
  duckduckgo: '<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm3 14h-6c-1.1 0-2-.9-2-2 0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2 0 1.1-.9 2-2 2zM9.5 9c-.8 0-1.5-.7-1.5-1.5S8.7 6 9.5 6s1.5.7 1.5 1.5S10.3 9 9.5 9zm5 0c-.8 0-1.5-.7-1.5-1.5S13.7 6 14.5 6s1.5.7 1.5 1.5S15.3 9 14.5 9z"/>',
  google: '<path d="M21.5 12.2c0-.8-.1-1.6-.2-2.3H12v4.4h5.4c-.2 1.4-.9 2.6-2.1 3.4v2.8h3.3c1.9-1.8 3-4.5 3-7.5z"/><path d="M12 22c2.7 0 5-.9 6.6-2.4l-3.3-2.8c-.9.6-2.1 1-3.4 1-2.6 0-4.8-1.7-5.6-4h-3.4v2.7A9.9 9.9 0 0 0 12 22z"/><path d="M6.4 13.8c-.2-.6-.3-1.3-.3-1.9s.1-1.3.3-1.9V7.3H3A9.9 9.9 0 0 0 2 12c0 1.6.4 3.1 1 4.5l3.4-2.7z"/><path d="M12 5.4c1.5 0 2.8.5 3.8 1.5l2.8-2.9C17 2.5 14.7 1.6 12 1.6 7.4 1.6 3.4 4.3 1.5 8.3l3.4 2.7C5.7 7.1 8.6 5.4 12 5.4z"/>',
  bing: '<path d="M6.3 2v20h4.4v-8.2l3.4-3.4 3.5 11.6h4.8l-5.6-17.6-6.1 6v-8.4z"/>',
  brave: '<path d="M12 2L4 6v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V6l-8-4z"/>'
};

const QUOTES = [
  "Stay hungry, stay foolish.",
  "Simplicity is the ultimate sophistication.",
  "Every moment is a fresh beginning.",
  "Turn your wounds into wisdom.",
  "What you seek is seeking you.",
  "Embrace the glorious mess that you are.",
  "Bite off more than you can chew, then chew it.",
  "No pressure, no diamonds.",
  "Leave no stone unturned.",
  "Make each day your masterpiece."
];

let baseWallpapers = [
  { id:1, name:'Minimal Waves', time:'morning', url:'Backgrounds/Wallpaper.png' },
  { id:2, name:'Abstract Flow', time:'afternoon', url:'Backgrounds/bg.png' },
  { id:3, name:'MacBook Studio', time:'afternoon', url:'Backgrounds/MacBook.png' },
  { id:4, name:'Dark Geometric', time:'night', url:'Backgrounds/5479108.jpg' },
  { id:5, name:'Neon Horizon', time:'night', url:'Backgrounds/wallpaper_hd_1.png' },
  { id:6, name:'Windows Flow', time:'morning', url:'Backgrounds/Windows.jpeg' },
  { id:7, name:'Root Studio', time:'evening', url:'Backgrounds/logo%20root.png' }
];

/* ─────────────────────────────────────────────────────
   2. HELPERS & UTILITIES
───────────────────────────────────────────────────── */
function getSvg(id) {
  const path = SVG_LIB[id] || SVG_LIB['globe'];
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
}

function load(key, def) {
  try {
    const v = localStorage.getItem(key);
    return v !== null ? JSON.parse(v) : def;
  } catch { return def; }
}

function save(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
}

function showToast(msg, icon = 'info') {
  const container = document.getElementById('toastContainer');
  const t = document.createElement('div');
  t.className = 'toast liquid';
  t.innerHTML = `${getSvg(icon)} ${msg}`;
  container.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

function getCurrentTimeOfDay() {
  const hr = new Date().getHours();
  if (hr >= 5 && hr < 12) return 'morning';
  if (hr >= 12 && hr < 17) return 'afternoon';
  if (hr >= 17 && hr < 21) return 'evening';
  return 'night';
}

/* ─────────────────────────────────────────────────────
   3. STATE INITIALIZATION (with fallback arrays)
───────────────────────────────────────────────────── */
let WALLPAPERS = [...baseWallpapers];
let customWps = load('custom_wps', []);
if (!Array.isArray(customWps)) customWps = [];
customWps.forEach(wp => WALLPAPERS.push(wp));

let defaultRotation = baseWallpapers.map(w => w.id);
let savedRotation = load('wp_rotation', defaultRotation);
let rotation = (Array.isArray(savedRotation) && savedRotation.length > 0)
  ? savedRotation.filter(id => WALLPAPERS.some(w => w.id === id))
  : defaultRotation;
if (!rotation.length) rotation = defaultRotation;

let timeWpEnabled  = load('wp_time_auto', true);
let currentWP      = load('wp_current', 0);
if (typeof currentWP !== 'number' || currentWP >= rotation.length || currentWP < 0) {
  currentWP = 0;
}
let engine         = load('searchEngine', 'brave');
let isEditSitesMode = false;

let searchHistory = load('search_history', []);
if (!Array.isArray(searchHistory)) searchHistory = [];

let isStickyOpen = load('sticky_open', false);
let lastKnownTimeOfDay = getCurrentTimeOfDay();

const appState = {
  clock_12h: load('clock_12h', false),
  clock_sec: load('clock_sec', false),
  focus_mode: load('focus_mode', false)
};

/* ─────────────────────────────────────────────────────
   4. CORE LOGIC (Clock, UI State)
───────────────────────────────────────────────────── */
const DAYS   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function tick() {
  const n  = new Date();
  let hr = n.getHours();
  
  let ampmStr = '';
  if (appState.clock_12h) {
    ampmStr = hr >= 12 ? 'PM' : 'AM';
    hr = hr % 12 || 12;
  }
  
  document.getElementById('clkH').textContent = String(hr).padStart(2, '0');
  document.getElementById('clkM').textContent = String(n.getMinutes()).padStart(2, '0');
  document.getElementById('clkS').textContent = String(n.getSeconds()).padStart(2, '0');
  document.getElementById('clkAmPm').textContent = ampmStr;
  document.getElementById('clkDate').textContent = `${DAYS[n.getDay()]} · ${MONTHS[n.getMonth()]} ${n.getDate()}, ${n.getFullYear()}`;
  
  const trueHr = n.getHours();
  let greet = trueHr < 5  ? 'Night owl mode' : trueHr < 12 ? 'Good morning'  : trueHr < 17 ? 'Good afternoon': trueHr < 21 ? 'Good evening'  : 'Good night';
  
  const quoteIndex = n.getDate() % QUOTES.length;
  document.getElementById('greetText').textContent = greet;
  document.getElementById('quoteText').textContent = " • " + QUOTES[quoteIndex];
    
  const cTimeOfDay = getCurrentTimeOfDay();
  if (timeWpEnabled && cTimeOfDay !== lastKnownTimeOfDay) {
    lastKnownTimeOfDay = cTimeOfDay;
    nextWallpaper();
  }
}

function applyState() {
  document.getElementById('clkS').classList.toggle('hidden', !appState.clock_sec);
  document.getElementById('clkAmPm').classList.toggle('hidden', !appState.clock_12h);
  document.body.classList.toggle('focus-mode', appState.focus_mode);
  tick(); // Update UI immediately
}

// Attach listeners for settings toggles
document.querySelectorAll('.setting-toggle').forEach(btn => {
  const key = btn.dataset.key;
  if(appState[key]) btn.classList.add('on');
  btn.addEventListener('click', () => {
    appState[key] = !appState[key];
    btn.classList.toggle('on', appState[key]);
    save(key, appState[key]);
    applyState();
  });
});

document.getElementById('btnFocus').addEventListener('click', () => {
  appState.focus_mode = !appState.focus_mode;
  save('focus_mode', appState.focus_mode);
  const tgl = document.getElementById('focusToggle');
  if(tgl) tgl.classList.toggle('on', appState.focus_mode);
  applyState();
  showToast(appState.focus_mode ? 'Focus Mode ON' : 'Focus Mode OFF', 'zap');
});

// Run Initial state execution
applyState();
setInterval(tick, 1000);

/* ─────────────────────────────────────────────────────
   5. WIDGET PERSISTENCE
───────────────────────────────────────────────────── */
document.querySelectorAll('.widget-toggle').forEach(btn => {
  const targetId = btn.dataset.target;
  const isHidden = load('hide_' + targetId, false);
  const el = document.getElementById(targetId);
  
  if (isHidden) {
    btn.classList.remove('on');
    if (el) el.classList.add('hidden');
  } else {
    btn.classList.add('on');
    if (el) el.classList.remove('hidden');
  }
  
  btn.addEventListener('click', () => {
    btn.classList.toggle('on');
    const willHide = !btn.classList.contains('on');
    if (el) el.classList.toggle('hidden', willHide);
    save('hide_' + targetId, willHide);
  });
});

/* ─────────────────────────────────────────────────────
   6. WALLPAPER LOGIC
───────────────────────────────────────────────────── */
const wpA = document.getElementById('wallpaperA');
const wpB = document.getElementById('wallpaperB');
let activeLayer = 'A';

function getActiveRotationPool() {
  if (!timeWpEnabled) return rotation;
  const cTime = getCurrentTimeOfDay();
  const pool = rotation.filter(id => {
    const w = WALLPAPERS.find(x => x.id === id);
    return w && (w.time === cTime || w.time === 'any');
  });
  return pool.length > 0 ? pool : rotation;
}

function applyWP(layer, id) {
  const wp = WALLPAPERS.find(w => w.id === id) ?? WALLPAPERS[0];
  const el = layer === 'A' ? wpA : wpB;
  el.style.backgroundImage = `url('${wp.url}')`;
  
  const delBtn = document.getElementById('btnDeleteWp');
  if (wp.custom && delBtn) {
    delBtn.style.display = 'block';
    delBtn.dataset.id = wp.id;
  } else if (delBtn) {
    delBtn.style.display = 'none';
  }
}

function crossfadeTo(id) {
  if (activeLayer === 'A') {
    applyWP('B', id);
    wpB.style.opacity = '1';
    wpA.style.opacity = '0';
    activeLayer = 'B';
  } else {
    applyWP('A', id);
    wpA.style.opacity = '1';
    wpB.style.opacity = '0';
    activeLayer = 'A';
  }
}

function nextWallpaper() {
  const pool = getActiveRotationPool();
  if (!pool.length) return;
  
  let idx = pool.indexOf(rotation[currentWP]);
  idx = (idx + 1) % pool.length;
  
  currentWP = rotation.indexOf(pool[idx]);
  if (currentWP === -1) currentWP = 0;
  
  save('wp_current', currentWP);
  crossfadeTo(rotation[currentWP]);
}

function initWallpaper() {
  if (timeWpEnabled) {
    const cTime = getCurrentTimeOfDay();
    const wp = WALLPAPERS.find(w => w.id === rotation[currentWP]);
    if (wp && wp.time !== cTime && wp.time !== 'any') {
      const pool = getActiveRotationPool();
      if (pool.length) {
        let idx = pool.indexOf(rotation[currentWP]);
        idx = (idx + 1) % pool.length;
        currentWP = rotation.indexOf(pool[idx]);
        if (currentWP === -1) currentWP = 0;
        save('wp_current', currentWP);
      }
    }
  }
  const initId = rotation[currentWP % Math.max(rotation.length, 1)] ?? baseWallpapers[0].id;
  applyWP('A', initId);
  wpA.style.opacity = '1';
  wpB.style.opacity = '0';
}
initWallpaper();

/* ─────────────────────────────────────────────────────
   7. CANVAS — COLORED STARS
───────────────────────────────────────────────────── */
const canvas = document.getElementById('bgCanvas');
const ctx    = canvas.getContext('2d');
let W, H, stars = [], shoots = [];
const starColors = ['#ffffff', '#ffd2a6', '#a6c8ff', '#e0a6ff'];

function resizeCanvas() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
  stars = Array.from({ length: 150 }, () => ({
    x: Math.random() * W, y: Math.random() * H,
    r: Math.random() * 1.3 + 0.2,
    o: Math.random() * 0.55 + 0.10,
    tw: Math.random() * Math.PI * 2,
    ts: Math.random() * 0.018 + 0.004,
    c: starColors[Math.floor(Math.random() * starColors.length)]
  }));
}

function drawFrame() {
  ctx.clearRect(0, 0, W, H);

  stars.forEach(s => {
    s.tw += s.ts;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = s.c;
    ctx.globalAlpha = s.o * (0.55 + 0.45 * Math.sin(s.tw));
    ctx.fill();
  });
  ctx.globalAlpha = 1;

  if (Math.random() > 0.997) {
    shoots.push({
      x: Math.random() * W * 0.7, y: Math.random() * H * 0.4,
      len: Math.random() * 150 + 60, sp: Math.random() * 8 + 5,
      ang: Math.PI / 4 + (Math.random() - 0.5) * 0.35,
      life: 1, dec: Math.random() * 0.02 + 0.015,
    });
  }
  shoots = shoots.filter(s => s.life > 0);
  shoots.forEach(s => {
    s.x += Math.cos(s.ang) * s.sp;
    s.y += Math.sin(s.ang) * s.sp;
    s.life -= s.dec;
    const g2 = ctx.createLinearGradient(s.x, s.y, s.x - Math.cos(s.ang) * s.len, s.y - Math.sin(s.ang) * s.len);
    g2.addColorStop(0, `rgba(255,255,255,${s.life * 0.9})`);
    g2.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    ctx.lineTo(s.x - Math.cos(s.ang) * s.len, s.y - Math.sin(s.ang) * s.len);
    ctx.strokeStyle = g2;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  });

  requestAnimationFrame(drawFrame);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
drawFrame();

/* ─────────────────────────────────────────────────────
   8. WALLPAPER PICKER & UPLOAD UI
───────────────────────────────────────────────────── */
const wpGrid = document.getElementById('wpGrid');
const fileUpload = document.getElementById('fileUpload');
const btnUploadWp = document.getElementById('btnUploadWp');
const btnDeleteWp = document.getElementById('btnDeleteWp');

function buildWpGrid() {
  if(!wpGrid) return;
  wpGrid.innerHTML = '';
  WALLPAPERS.forEach(wp => {
    const inRot  = rotation.includes(wp.id);
    const active = rotation[currentWP % Math.max(rotation.length, 1)] === wp.id;
    const div = document.createElement('div');
    div.className = 'wp-thumb' + (inRot ? ' in-rotation' : '') + (active ? ' active' : '');
    div.style.backgroundImage = `url('${wp.url}')`;
    div.title = wp.name;
    div.dataset.id = wp.id;
    
    let tSvg = 'globe';
    if(wp.time === 'morning') tSvg = 'sunrise';
    if(wp.time === 'afternoon') tSvg = 'sun';
    if(wp.time === 'evening') tSvg = 'sunset';
    if(wp.time === 'night') tSvg = 'moon';
    
    div.innerHTML = `
      <div class="wp-time-badge" title="${wp.time}">${getSvg(tSvg)}</div>
      <div class="wp-check">
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="1.5,6 4.5,9.5 10.5,2.5"/>
        </svg>
      </div>
      <div class="wp-dot"></div>`;
    wpGrid.appendChild(div);
  });
}

const uploadWpModal = document.getElementById('uploadWpModal');
const uploadPreview = document.getElementById('uploadPreview');
let pendingUploadDataUrl = null;
let pendingUploadTime = 'any';

if (btnUploadWp) btnUploadWp.addEventListener('click', () => fileUpload.click());

if (fileUpload) fileUpload.addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(evt) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const MAX_W = 1920, MAX_H = 1080;
      let w = img.width, h = img.height;
      if (w > h && w > MAX_W) { h *= MAX_W / w; w = MAX_W; } 
      else if (h > MAX_H) { w *= MAX_H / h; h = MAX_H; }
      
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);
      
      pendingUploadDataUrl = canvas.toDataURL('image/jpeg', 0.65);
      uploadPreview.src = pendingUploadDataUrl;
      
      document.getElementById('upBtnAny').innerHTML = getSvg('globe') + ' Any';
      document.getElementById('upBtnMorning').innerHTML = getSvg('sunrise') + ' Morning';
      document.getElementById('upBtnAfternoon').innerHTML = getSvg('sun') + ' Afternoon';
      document.getElementById('upBtnEvening').innerHTML = getSvg('sunset') + ' Evening';
      document.getElementById('upBtnNight').innerHTML = getSvg('moon') + ' Night';

      uploadWpModal.classList.add('open');
      fileUpload.value = ''; 
    };
    img.src = evt.target.result;
  };
  reader.readAsDataURL(file);
});

document.querySelectorAll('#uploadTimePicker .eng-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('#uploadTimePicker .eng-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    pendingUploadTime = btn.dataset.time;
  });
});

function closeUploadModal() {
  uploadWpModal.classList.remove('open');
  pendingUploadDataUrl = null;
}

document.getElementById('closeUploadWpModalBtn').addEventListener('click', closeUploadModal);
document.getElementById('closeUploadWpModalBg').addEventListener('click', closeUploadModal);
document.getElementById('cancelUploadWpBtn').addEventListener('click', closeUploadModal);

document.getElementById('saveUploadWpBtn').addEventListener('click', () => {
  if(!pendingUploadDataUrl) return;
  const newId = 1000 + Date.now();
  
  const newWp = { 
    id: newId, 
    name: 'Custom', 
    url: pendingUploadDataUrl,
    time: pendingUploadTime,
    custom: true 
  };
  
  customWps.push(newWp);
  try {
    save('custom_wps', customWps);
    WALLPAPERS.push(newWp);
    
    if (!rotation.includes(newId)) rotation.push(newId);
    save('wp_rotation', rotation);
    currentWP = rotation.indexOf(newId);
    save('wp_current', currentWP);
    
    previewWP(newId);
    buildWpGrid();
    showToast('Wallpaper Saved', 'image');
  } catch (err) {
    console.error("Storage limit reached.", err);
    showToast('Storage Limit Reached', 'warning');
  }
  closeUploadModal();
});

if (btnDeleteWp) {
  btnDeleteWp.addEventListener('click', () => {
    const id = parseInt(btnDeleteWp.dataset.id, 10);
    customWps = customWps.filter(w => w.id !== id);
    WALLPAPERS = WALLPAPERS.filter(w => w.id !== id);
    rotation = rotation.filter(r => r !== id);
    if (!rotation.length) rotation.push(baseWallpapers[0].id);
    
    save('custom_wps', customWps);
    save('wp_rotation', rotation);
    
    currentWP = 0;
    save('wp_current', currentWP);
    previewWP(rotation[0]);
    buildWpGrid();
    showToast('Wallpaper Deleted', 'trash');
  });
}

let clickTimer = null;
if (wpGrid) {
  wpGrid.addEventListener('click', e => {
    const thumb = e.target.closest('.wp-thumb');
    if (!thumb) return;
    const id = parseInt(thumb.dataset.id, 10);
    if (clickTimer) {
      clearTimeout(clickTimer);
      clickTimer = null;
      toggleRotation(id);
      buildWpGrid();
    } else {
      clickTimer = setTimeout(() => {
        clickTimer = null;
        previewWP(id);
        buildWpGrid();
      }, 250);
    }
  });
}

function previewWP(id) {
  crossfadeTo(id);
  const idx = rotation.indexOf(id);
  if (idx >= 0) { currentWP = idx; save('wp_current', currentWP); }
}

function toggleRotation(id) {
  const idx = rotation.indexOf(id);
  if (idx >= 0 && rotation.length > 1) {
    rotation.splice(idx, 1);
    if (currentWP >= rotation.length) currentWP = 0;
  } else if (idx < 0) {
    rotation.push(id);
  }
  save('wp_rotation', rotation);
  save('wp_current', currentWP);
}

buildWpGrid();

const timeWpToggleBtn = document.getElementById('timeWpToggle');
if (timeWpToggleBtn) {
  timeWpToggleBtn.classList.toggle('on', timeWpEnabled);
  timeWpToggleBtn.addEventListener('click', () => {
    timeWpEnabled = !timeWpEnabled;
    timeWpToggleBtn.classList.toggle('on', timeWpEnabled);
    save('wp_time_auto', timeWpEnabled);
    if (timeWpEnabled) nextWallpaper();
  });
}

/* ─────────────────────────────────────────────────────
   9. SEARCH (ZOOM / FOCUS / ENGINE / HISTORY)
───────────────────────────────────────────────────── */
const ENGINES = {
  brave:  { url: 'https://search.brave.com/search?q=', label: 'Brave',      icon: 'brave', color: '#ff6b35' },
  google: { url: 'https://www.google.com/search?q=',   label: 'Google',     icon: 'google', color: '#4285f4' },
  ddg:    { url: 'https://duckduckgo.com/?q=',         label: 'DuckDuckGo', icon: 'duckduckgo', color: '#de5833' },
  bing:   { url: 'https://www.bing.com/search?q=',     label: 'Bing',       icon: 'bing', color: '#0078d4' },
};

function renderEngine() {
  const e = ENGINES[engine] ?? ENGINES.brave;
  const eIcon = document.getElementById('engineIcon');
  if (eIcon) {
    eIcon.innerHTML = getSvg(e.icon);
    eIcon.style.color = e.color; // Using SVG stroke="currentColor"
  }
  const eName = document.getElementById('engineName');
  if (eName) eName.textContent = e.label;
  
  document.querySelectorAll('.eng-btn').forEach(b => {
    if(b.dataset.engine) b.classList.toggle('active', b.dataset.engine === engine);
  });
}
renderEngine();

document.querySelectorAll('.eng-btn').forEach(btn => {
  if (btn.dataset.engine) {
    btn.addEventListener('click', () => {
      engine = btn.dataset.engine;
      save('searchEngine', engine);
      renderEngine();
    });
  }
});

const SUGGESTIONS = [
  'GitHub trending', 'YouTube Music', 'Hacker News', 'Product Hunt',
  'Claude AI', 'ChatGPT', 'Stack Overflow', 'MDN Web Docs',
  'Figma', 'Vercel', 'Netlify', 'Reddit programming', 'Dev.to', 'Linear',
];
const siEl = document.getElementById('si');
const acEl = document.getElementById('ac');
const searchOverlay = document.getElementById('searchFocusOverlay');

if (siEl) {
  siEl.addEventListener('focus', () => {
    document.body.classList.add('search-active');
    updateAutocomplete();
  });

  siEl.addEventListener('blur', () => {
    setTimeout(() => {
      document.body.classList.remove('search-active');
      acEl.classList.remove('show');
    }, 200);
  });

  siEl.addEventListener('input', updateAutocomplete);
}

if (searchOverlay && siEl) {
  searchOverlay.addEventListener('mousedown', () => siEl.blur());
}

function updateAutocomplete() {
  const q = siEl.value.trim().toLowerCase();
  let listHTML = '';
  
  if (!q && searchHistory.length > 0) {
    listHTML = searchHistory.map(s => `
      <div class="ac-item history" data-q="${s}">
        ${getSvg('history')}
        ${s}
        <span class="ac-hint">History</span>
      </div>`).join('');
  } else if (q) {
    let combined = [...searchHistory, ...SUGGESTIONS];
    let matches = [...new Set(combined)].filter(s => s.toLowerCase().includes(q)).slice(0, 6);
    
    listHTML = matches.map(s => {
      const isHist = searchHistory.includes(s);
      return `
      <div class="ac-item ${isHist ? 'history' : ''}" data-q="${s}">
        ${getSvg(isHist ? 'history' : 'search')}
        ${s}
        <span class="ac-hint">${isHist ? 'History' : 'Search'}</span>
      </div>`;
    }).join('');
  }
  
  if (listHTML) {
    acEl.innerHTML = listHTML;
    acEl.classList.add('show');
  } else {
    acEl.classList.remove('show');
  }
}

if (acEl) {
  acEl.addEventListener('mousedown', e => {
    const item = e.target.closest('.ac-item');
    if (!item) return;
    siEl.value = item.dataset.q;
    acEl.classList.remove('show');
    siEl.focus();
  });
}

const searchForm = document.getElementById('searchForm');
if (searchForm) {
  searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const q = siEl.value.trim();
    if (!q) return;
    
    searchHistory.unshift(q);
    searchHistory = [...new Set(searchHistory)].slice(0, 5);
    save('search_history', searchHistory);
    
    const url = /^https?:\/\//i.test(q) ? q
      : (q.includes('.') && !q.includes(' ')) ? 'https://' + q
      : (ENGINES[engine]?.url ?? ENGINES.brave.url) + encodeURIComponent(q);
    window.location.href = url;
  });
}

/* ─────────────────────────────────────────────────────
   10. CUSTOM TOP SITES (WITH DRAG & DROP REORDER)
───────────────────────────────────────────────────── */
let SITES = load('custom_sites', [
  { label:'Gmail',   url:'https://gmail.com',   icon:'mail' },
  { label:'YouTube', url:'https://youtube.com', icon:'youtube' },
  { label:'GitHub',  url:'https://github.com',  icon:'github' },
  { label:'Reddit',  url:'https://reddit.com',  icon:'reddit' },
  { label:'X',       url:'https://x.com',       icon:'twitter' },
  { label:'Spotify', url:'https://spotify.com', icon:'music' },
]);
if (!Array.isArray(SITES)) SITES = [];

const tsEl = document.getElementById('topsites');
let draggedIdx = -1;

function renderSites() {
  if(!tsEl) return;
  tsEl.innerHTML = '';
  SITES.forEach((s, i) => {
    const a = document.createElement('a');
    a.className = 'site';
    a.href      = s.url;
    a.target    = '_blank';
    a.rel       = 'noopener noreferrer';
    a.draggable = true;
    
    a.addEventListener('click', (e) => {
      if (isEditSitesMode) {
        e.preventDefault();
        SITES.splice(i, 1);
        save('custom_sites', SITES);
        renderSites();
        showToast('Shortcut Deleted', 'trash');
      }
    });
    
    a.addEventListener('dragstart', e => { 
      draggedIdx = i; 
      a.classList.add('dragging'); 
      e.dataTransfer.effectAllowed = 'move';
    });
    a.addEventListener('dragend', e => { 
      a.classList.remove('dragging'); 
      document.querySelectorAll('.site').forEach(s => s.classList.remove('drag-over')); 
    });
    a.addEventListener('dragover', e => { 
      e.preventDefault(); 
      e.dataTransfer.dropEffect = 'move';
      a.classList.add('drag-over'); 
    });
    a.addEventListener('dragleave', e => { 
      a.classList.remove('drag-over'); 
    });
    a.addEventListener('drop', e => {
      e.preventDefault();
      a.classList.remove('drag-over');
      if (draggedIdx === -1 || draggedIdx === i) return;
      const item = SITES.splice(draggedIdx, 1)[0];
      SITES.splice(i, 0, item);
      save('custom_sites', SITES);
      renderSites();
    });

    a.innerHTML = `
      <div class="site-icon">
        ${getSvg(s.icon)}
      </div>
      <div class="site-delete-badge">${getSvg('x')}</div>
      <span class="site-label">${s.label}</span>`;
    tsEl.appendChild(a);
  });
  
  const addBtn = document.createElement('div');
  addBtn.className = 'site add-btn';
  addBtn.innerHTML = `
    <div class="site-icon" style="border: 2px dashed rgba(255,255,255,0.3); background:rgba(255,255,255,0.05);">
      ${getSvg('plus')}
    </div>
    <span class="site-label">Add Shortcut</span>`;
  addBtn.addEventListener('click', openShortcutModal);
  tsEl.appendChild(addBtn);
}

const editSitesToggle = document.getElementById('editSitesToggle');
if (editSitesToggle) {
  editSitesToggle.addEventListener('click', () => {
    isEditSitesMode = !isEditSitesMode;
    editSitesToggle.classList.toggle('on', isEditSitesMode);
    document.body.classList.toggle('edit-sites-mode', isEditSitesMode);
  });
}

/* ── Add Shortcut Logic ── */
const shortcutModal = document.getElementById('shortcutModal');
const iconPickerGrid = document.getElementById('iconPickerGrid');
let selectedNewIcon = 'star';

function buildIconPicker() {
  if(!iconPickerGrid) return;
  iconPickerGrid.innerHTML = '';
  Object.keys(SVG_LIB).forEach(ic => {
    const div = document.createElement('div');
    div.className = 'icon-option' + (ic === selectedNewIcon ? ' selected' : '');
    div.innerHTML = getSvg(ic);
    div.addEventListener('click', () => {
      selectedNewIcon = ic;
      buildIconPicker();
    });
    iconPickerGrid.appendChild(div);
  });
}

function openShortcutModal() {
  document.getElementById('shortcutName').value = '';
  document.getElementById('shortcutUrl').value = '';
  selectedNewIcon = 'star';
  buildIconPicker();
  shortcutModal.classList.add('open');
}
function closeShortcutModal() {
  shortcutModal.classList.remove('open');
}

document.getElementById('closeShortcutModalBtn').addEventListener('click', closeShortcutModal);
document.getElementById('closeShortcutModalBg').addEventListener('click', closeShortcutModal);
document.getElementById('cancelShortcutBtn').addEventListener('click', closeShortcutModal);

document.getElementById('saveShortcutBtn').addEventListener('click', () => {
  const name = document.getElementById('shortcutName').value.trim();
  let url = document.getElementById('shortcutUrl').value.trim();
  if (!name || !url) return;
  if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
  
  SITES.push({ label: name, url: url, icon: selectedNewIcon });
  save('custom_sites', SITES);
  renderSites();
  closeShortcutModal();
  showToast('Shortcut Added', 'check');
});

renderSites();

/* ─────────────────────────────────────────────────────
   11. QUICK STICKY NOTE
───────────────────────────────────────────────────── */
const stickyNoteWrapper = document.getElementById('stickyNoteWrapper');
const stickyArea = document.getElementById('stickyArea');

if (stickyArea) {
  let stickyCont = load('sticky_content', '');
  // Sanity check in case localstorage broke it
  if(typeof stickyCont !== 'string') stickyCont = '';
  stickyArea.value = stickyCont;

  stickyArea.addEventListener('input', () => {
    save('sticky_content', stickyArea.value);
  });
}

function toggleSticky() {
  isStickyOpen = !isStickyOpen;
  if(stickyNoteWrapper) stickyNoteWrapper.classList.toggle('open', isStickyOpen);
  save('sticky_open', isStickyOpen);
  if(isStickyOpen && stickyArea) stickyArea.focus();
}

if(isStickyOpen && stickyNoteWrapper) stickyNoteWrapper.classList.add('open');

const btnSticky = document.getElementById('btnSticky');
if (btnSticky) btnSticky.addEventListener('click', toggleSticky);
const closeSticky = document.getElementById('closeSticky');
if (closeSticky) closeSticky.addEventListener('click', toggleSticky);


/* ─────────────────────────────────────────────────────
   12. BRAVE STATS
───────────────────────────────────────────────────── */
function loadStats() {
  let s = load('braveStats4', { ads:1142, trk:3678, bw:42.8, tm:10.4 });
  if (!s || typeof s !== 'object') s = { ads:1142, trk:3678, bw:42.8, tm:10.4 };
  
  s.ads  += Math.floor(Math.random() * 9  + 3);
  s.trk  += Math.floor(Math.random() * 16 + 5);
  s.bw    = +(s.bw  + Math.random() * 0.5  + 0.1).toFixed(1);
  s.tm    = +(s.tm  + Math.random() * 0.3  + 0.05).toFixed(1);
  save('braveStats4', s);

  const eAds = document.getElementById('sAds');
  if(eAds) eAds.textContent = s.ads.toLocaleString();
  
  const eTrk = document.getElementById('sTrk');
  if(eTrk) eTrk.textContent = s.trk.toLocaleString();
  
  const eBw = document.getElementById('sBw');
  const eBwU = document.getElementById('sBwU');
  if (eBw && eBwU) {
    if (s.bw >= 1000) {
      eBw.textContent  = (s.bw / 1024).toFixed(2);
      eBwU.textContent = 'GB';
    } else {
      eBw.textContent = s.bw.toFixed(1);
    }
  }
  
  const eTm = document.getElementById('sTm');
  if(eTm) eTm.textContent = s.tm.toFixed(1);
  
  const shieldsCount = document.getElementById('shieldsCount');
  if(shieldsCount) shieldsCount.textContent = (s.ads + s.trk).toLocaleString();
}
loadStats();

/* ─────────────────────────────────────────────────────
   13. WEATHER
───────────────────────────────────────────────────── */
const WX_MAP = {
  0:'sun', 1:'cloudsun', 2:'cloudsun', 3:'cloud', 45:'cloud', 48:'cloud',
  51:'cloudrain', 53:'cloudrain', 61:'cloudrain', 63:'cloudrain', 71:'cloudsnow', 73:'cloudsnow',
  80:'cloudrain', 81:'cloudrain', 95:'cloudlightning', 96:'cloudlightning',
};
const WX_DESC = {
  0:'Clear sky', 1:'Mainly clear', 2:'Partly cloudy', 3:'Overcast',
  45:'Foggy', 51:'Light drizzle', 61:'Light rain', 63:'Moderate rain',
  71:'Light snow', 80:'Rain showers', 95:'Thunderstorm',
};

async function fetchWeather() {
  try {
    // Switch to GeoJS as it does not block Chrome Extensions
    const geo = await fetch('https://get.geojs.io/v1/ip/geo.json').then(r => r.json());
    const w   = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${geo.latitude}&longitude=${geo.longitude}` +
      `&current_weather=true&hourly=relativehumidity_2m,windspeed_10m&timezone=auto`
    ).then(r => r.json());

    const c   = w.current_weather.weathercode;
    const key = WX_MAP[c] ? c : Math.floor(c / 10) * 10;
    
    document.getElementById('wxIcon').innerHTML = getSvg(WX_MAP[key] || 'thermometer');
    document.getElementById('wxTemp').textContent = Math.round(w.current_weather.temperature) + '°C';
    document.getElementById('wxDesc').textContent = WX_DESC[c] ?? 'Weather';
    document.getElementById('wxLoc').textContent  = `${geo.city}, ${geo.country}`;
    document.getElementById('wxHum').textContent  = (w.hourly?.relativehumidity_2m?.[0] ?? '—') + '% humidity';
    document.getElementById('wxWind').textContent = Math.round(w.current_weather.windspeed) + ' km/h';
    
    const wxRows = document.querySelectorAll('.wx-row');
    if(wxRows.length > 1 && !wxRows[0].querySelector('svg')) {
      wxRows[0].insertAdjacentHTML('afterbegin', getSvg('cloudrain'));
      wxRows[1].insertAdjacentHTML('afterbegin', getSvg('cloud'));
    }
    
    document.getElementById('wxExtra').style.display = 'flex';
  } catch (err) {
    console.error("Weather fetch failed:", err);
    const d = document.getElementById('wxDesc');
    if(d) d.textContent = 'Unavailable';
    const i = document.getElementById('wxIcon');
    if(i) i.innerHTML = getSvg('thermometer');
  }
}
fetchWeather();

/* ─────────────────────────────────────────────────────
   14. PANELS OPEN / CLOSE & KEYBOARD
───────────────────────────────────────────────────── */
function openPanel() {
  document.getElementById('overlay').classList.add('open');
  buildWpGrid();
}
function closePanel() {
  document.getElementById('overlay').classList.remove('open');
}

const cBtn = document.getElementById('customizeBtn');
if (cBtn) cBtn.addEventListener('click', openPanel);

const cbBottom = document.getElementById('btnCustomizeBottom');
if (cbBottom) cbBottom.addEventListener('click', openPanel);

const pClose = document.getElementById('panelClose');
if (pClose) pClose.addEventListener('click', closePanel);

const oBg = document.getElementById('overlayBg');
if (oBg) oBg.addEventListener('click', closePanel);

const helpModal = document.getElementById('helpModal');
const btnHelp = document.getElementById('btnHelp');
if(btnHelp) btnHelp.addEventListener('click', () => helpModal.classList.add('open'));
document.getElementById('closeHelpModalBtn').addEventListener('click', () => helpModal.classList.remove('open'));
document.getElementById('closeHelpModalBg').addEventListener('click', () => helpModal.classList.remove('open'));

const btnNextWp = document.getElementById('btnNextWp');
if (btnNextWp) btnNextWp.addEventListener('click', () => nextWallpaper());

const btnRefresh = document.getElementById('btnRefresh');
if (btnRefresh) btnRefresh.addEventListener('click', () => window.location.reload());

document.addEventListener('keydown', e => {
  if (document.activeElement === siEl || document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
  
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown')  nextWallpaper();
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')  {
    const pool = getActiveRotationPool();
    if (!pool.length) return;
    let idx = pool.indexOf(rotation[currentWP]);
    idx = (idx - 1 + pool.length) % pool.length;
    currentWP = rotation.indexOf(pool[idx]);
    if (currentWP === -1) currentWP = 0;
    save('wp_current', currentWP);
    crossfadeTo(rotation[currentWP]);
  }
  
  if (e.key.toLowerCase() === 'f') {
    const fBtn = document.getElementById('btnFocus');
    if (fBtn) fBtn.click();
  }
  if (e.key.toLowerCase() === 's') toggleSticky();
  if (e.key === '?' || e.key === '/') helpModal.classList.add('open');
  
  if (e.key === 'Escape') {
    closePanel();
    closeShortcutModal();
    closeUploadModal();
    helpModal.classList.remove('open');
    if(isStickyOpen) toggleSticky();
  }
});