/**
 * ============================================================================
 * YADHU // ABYSSAL WRAITH — ULTRA-SMOOTH 60FPS HORRIFYING KJII-240 ENGINE
 * ============================================================================
 * 1. SPACE_PORTALS (All 11 websites with custom icons & abyssal glow)
 * 2. ULTRA-SMOOTH BEGINNING + SUB-FRAME ALPHA BLENDED 240-FRAME KJII ENGINE
 *    - Uses lightweight WebP frames (`kjii_fast/ezgif-frame-XXX.webp`)
 *    - Preloads & GPU-decodes Frames 1 -> 85 sequentially FIRST so the
 *      beginning is 100% silk-smooth from millisecond zero
 *    - Sub-frame cross-dissolve interpolation between adjacent frames
 *    - Autonomous eerie wraith breathing & cursor-stalking parallax at the top
 *    - Horror Climax FX: Chromatic phantom double-vision, foreground swirling
 *      ash/blood embers, heartbeat crimson vignette, and lightning strobes
 * 3. ABYSSAL ASH & BLOOD EMBER BACKGROUND CANVAS ENGINE
 * 4. LIVE ORBITING RITUAL RADAR (11 clickable orbiting relics)
 * 5. HOLOGRAPHIC PORTAL DECK + CATEGORY FILTER + PRICING SWITCHER
 * ============================================================================
 */

const SPACE_PORTALS = [
  {
    id: "crackone",
    name: "CrackOne Inbox",
    tag: "SUBSPACE COMM TERMINAL",
    category: "comms",
    sector: "SHADOW // 01",
    url: "https://inbox.crackone.org/login",
    host: "inbox.crackone.org",
    accent: "#ff0038",
    glow: "rgba(255, 0, 56, 0.38)",
    orbitRing: 1,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><circle cx="18" cy="15" r="2"/></svg>`
  },
  {
    id: "33mail",
    name: "33Mail Relay",
    tag: "PHANTOM ALIAS SHROUD",
    category: "comms",
    sector: "SHADOW // 02",
    url: "https://www.33mail.com/",
    host: "33mail.com",
    accent: "#00f59b",
    glow: "rgba(0, 245, 155, 0.35)",
    orbitRing: 1,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M8 11h8"/><path d="M12 7v8"/></svg>`
  },
  {
    id: "byteplus",
    name: "BytePlus Playground",
    tag: "ABYSSAL NEURAL SANDBOX",
    category: "ai",
    sector: "ORACLE // 03",
    url: "https://ai.byteplus.com/en/playground",
    host: "ai.byteplus.com",
    accent: "#b565ff",
    glow: "rgba(181, 101, 255, 0.38)",
    orbitRing: 1,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><line x1="12" y1="22" x2="12" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/></svg>`
  },
  {
    id: "simplelogin",
    name: "SimpleLogin Cloak",
    tag: "NAMELESS IDENTITY MASK",
    category: "comms",
    sector: "SHADOW // 04",
    url: "https://simplelogin.io/",
    host: "simplelogin.io",
    accent: "#ff0038",
    glow: "rgba(255, 0, 56, 0.38)",
    orbitRing: 2,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1.5"/></svg>`
  },
  {
    id: "videocutter",
    name: "Video Logo Eraser",
    tag: "OPTICAL TRACE PURIFIER",
    category: "media",
    sector: "OPTICAL // 05",
    url: "https://online-video-cutter.com/remove-logo",
    host: "online-video-cutter.com",
    accent: "#ff5500",
    glow: "rgba(255, 85, 0, 0.38)",
    orbitRing: 2,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="2" y="4" width="15" height="16" rx="2"/><polygon points="17 9 22 6 22 18 17 15 17 9"/><line x1="6" y1="8" x2="13" y2="16"/></svg>`
  },
  {
    id: "deepseek",
    name: "DeepSeek Perchance",
    tag: "VOID LOGIC ORACLE",
    category: "ai",
    sector: "ORACLE // 06",
    url: "https://perchance.org/deepseek",
    host: "perchance.org/deepseek",
    accent: "#00e5ff",
    glow: "rgba(0, 229, 255, 0.35)",
    orbitRing: 2,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="3" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="21"/><line x1="3" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="21" y2="12"/></svg>`
  },
  {
    id: "raphael",
    name: "Raphael AI Forge",
    tag: "DARK-MATTER IMAGE FORGE",
    category: "ai",
    sector: "ORACLE // 07",
    url: "https://raphael.app/",
    host: "raphael.app",
    accent: "#ff0038",
    glow: "rgba(255, 0, 56, 0.42)",
    orbitRing: 2,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="4"/></svg>`
  },
  {
    id: "proton",
    name: "Proton Mail Vault",
    tag: "SWISS CRYPT ENCRYPTION",
    category: "comms",
    sector: "SHADOW // 08",
    url: "https://proton.me/mail/pricing?ref=mailheropricing",
    host: "proton.me/mail",
    accent: "#b565ff",
    glow: "rgba(181, 101, 255, 0.38)",
    orbitRing: 3,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"/><path d="m9 12 2 2 4-4"/></svg>`
  },
  {
    id: "pollinations",
    name: "Pollinations AI",
    tag: "SPECTRAL SYNTHESIS NEXUS",
    category: "ai",
    sector: "ORACLE // 09",
    url: "https://pollinations.ai/",
    host: "pollinations.ai",
    accent: "#00f59b",
    glow: "rgba(0, 245, 155, 0.35)",
    orbitRing: 3,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><circle cx="5" cy="19" r="2"/><line x1="9.8" y1="9.8" x2="6.5" y2="6.5"/><line x1="14.2" y1="9.8" x2="17.5" y2="6.5"/><line x1="14.2" y1="14.2" x2="17.5" y2="17.5"/><line x1="9.8" y1="14.2" x2="6.5" y2="17.5"/></svg>`
  },
  {
    id: "freeaimodels",
    name: "FreeAI Models Chat",
    tag: "LEGION NEURAL UPLINK",
    category: "ai",
    sector: "ORACLE // 10",
    url: "https://freeaimodels.online/chat/x1mynx8mv3t3xza",
    host: "freeaimodels.online",
    accent: "#00e5ff",
    glow: "rgba(0, 229, 255, 0.35)",
    orbitRing: 3,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8"/><path d="M8 13h5"/></svg>`
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs Sonic",
    tag: "POSSESSED VOICE SYNTH",
    category: "media",
    sector: "SONIC // 11",
    url: "https://elevenlabs.io/app/home",
    host: "elevenlabs.io",
    accent: "#ff0038",
    glow: "rgba(255, 0, 56, 0.42)",
    orbitRing: 3,
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M2 12h3l3-8 4 16 4-12 3 4h3"/></svg>`
  }
];

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

// Quintic smootherstep for ultra-liquid beginning & stage transitions
function smootherstep(edge0, edge1, x) {
  const t = clamp((x - edge0) / Math.max(0.0001, edge1 - edge0), 0, 1);
  return t * t * t * (t * (t * 6 - 15) + 10);
}

/* ============================================================================
   2. ULTRA-SMOOTH 240-FRAME KJII HORROR ENGINE (SUB-FRAME BLEND + HORROR FX)
   ============================================================================ */
const TOTAL_FRAMES = 240;
const frameImages = new Array(TOTAL_FRAMES + 1).fill(null);
let warpBoost = 0;

function getFastFramePath(index) {
  const padded = String(clamp(Math.round(index), 1, TOTAL_FRAMES)).padStart(3, "0");
  return `kjii_fast/ezgif-frame-${padded}.webp`;
}

function findNearestLoadedFrame(targetIndex) {
  const idx = clamp(Math.round(targetIndex), 1, TOTAL_FRAMES);
  if (frameImages[idx]?.complete && frameImages[idx].naturalWidth > 0) {
    return frameImages[idx];
  }
  for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
    const prev = idx - offset;
    const next = idx + offset;
    if (prev >= 1 && frameImages[prev]?.complete && frameImages[prev].naturalWidth > 0) {
      return frameImages[prev];
    }
    if (next <= TOTAL_FRAMES && frameImages[next]?.complete && frameImages[next].naturalWidth > 0) {
      return frameImages[next];
    }
  }
  return null;
}

/**
 * Smootherstep S-curve stage transform for the 5 horrifying feature overlays
 */
function applyStageTransform(el, p, start, enterEnd, exitStart, end, isFirst, isLast, horrorTremor) {
  if (!el) return;

  let opacity = 0;
  let y = 64;
  let scale = 0.94;
  let blur = 8;

  if (p >= start && p <= end) {
    if (isFirst && p <= exitStart) {
      const drift = smootherstep(0, exitStart, p);
      opacity = 1;
      y = lerp(0, -26, drift);
      scale = lerp(1, 1.035, drift);
      blur = 0;
    } else if (p < enterEnd) {
      const t = smootherstep(start, enterEnd, p);
      opacity = t;
      y = lerp(64, 0, t);
      scale = lerp(0.94, 1, t);
      blur = lerp(8, 0, t);
    } else if (p <= exitStart || isLast) {
      const drift = smootherstep(enterEnd, exitStart, p);
      opacity = 1;
      y = lerp(0, -18, drift);
      scale = lerp(1, 1.02, drift);
      blur = 0;
    } else {
      const t = smootherstep(exitStart, end, p);
      opacity = 1 - t;
      y = lerp(-18, -74, t);
      scale = lerp(1.02, 0.95, t);
      blur = lerp(0, 9, t);
    }
  }

  const jx = opacity > 0.2 ? (Math.random() - 0.5) * horrorTremor * 5 : 0;
  const jy = opacity > 0.2 ? (Math.random() - 0.5) * horrorTremor * 5 : 0;

  el.style.opacity = opacity.toFixed(3);
  el.style.transform = `translate3d(${jx.toFixed(1)}px, ${(y + jy).toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
  el.style.filter = `blur(${blur.toFixed(1)}px)`;
}

function initKnopSequenceAndScroll() {
  const seqCanvas = document.getElementById("knop-sequence-canvas");
  const heroTrack = document.getElementById("hero-stage");
  const horrorFlash = document.getElementById("horror-flash");
  const horrorVignette = document.getElementById("horror-vignette");
  const progressBar = document.getElementById("scroll-progress-bar");
  const navReadout = document.getElementById("nav-scroll-readout");
  const frameReadout = document.getElementById("frame-readout");
  const hudFrameCounter = document.getElementById("hud-frame-counter");
  const hudFrameFill = document.getElementById("hud-frame-fill");
  const hudBufferStatus = document.getElementById("hud-buffer-status");
  const heroRailFill = document.getElementById("hero-rail-fill");
  const railDots = document.querySelectorAll(".rail-dot");

  const featStages = [
    document.getElementById("hero-feat-0"),
    document.getElementById("hero-feat-1"),
    document.getElementById("hero-feat-2"),
    document.getElementById("hero-feat-3"),
    document.getElementById("hero-feat-4")
  ];

  if (!seqCanvas || !heroTrack) return;
  const ctx = seqCanvas.getContext("2d", { alpha: false });

  function resizeSeqCanvas() {
    seqCanvas.width = window.innerWidth;
    seqCanvas.height = window.innerHeight;
  }
  resizeSeqCanvas();
  window.addEventListener("resize", resizeSeqCanvas);

  // Subtle cursor-stalking parallax so the Wraith feels alive & watching you
  let mouseTargetX = 0;
  let mouseTargetY = 0;
  let mouseSmoothX = 0;
  let mouseSmoothY = 0;

  window.addEventListener(
    "mousemove",
    (e) => {
      mouseTargetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseTargetY = (e.clientY / window.innerHeight - 0.5) * 2;
    },
    { passive: true }
  );

  // Foreground Floating Horror Ash & Blood Cinders on the Hero Canvas
  const ASH_COUNT = 65;
  const ashParticles = Array.from({ length: ASH_COUNT }, () => ({
    x: Math.random(),
    y: Math.random(),
    size: 1 + Math.random() * 3.2,
    vy: -(0.0004 + Math.random() * 0.0012),
    vx: (Math.random() - 0.5) * 0.0008,
    alpha: 0.2 + Math.random() * 0.65,
    isCrimson: Math.random() > 0.58
  }));

  /**
   * Draws two adjacent frames with sub-frame alpha blending + horrifying
   * phantom echo & ash particles so slow or fast scrolling is 60fps liquid silk!
   */
  function drawBlendedFrames(exactFrameFloat, dynamicScale, panX, panY, horrorIntensity, nowSec) {
    const floorIdx = clamp(Math.floor(exactFrameFloat), 1, TOTAL_FRAMES);
    const ceilIdx = clamp(floorIdx + 1, 1, TOTAL_FRAMES);
    const blendAlpha = exactFrameFloat - floorIdx;

    const imgA = findNearestLoadedFrame(floorIdx);
    if (!imgA) return;

    const cw = seqCanvas.width;
    const ch = seqCanvas.height;
    const iw = imgA.naturalWidth || 1440;
    const ih = imgA.naturalHeight || 810;

    // Slight extra scale margin so cursor-stalking & horror tremor never show edges
    const scale = Math.max(cw / iw, ch / ih) * dynamicScale;
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2 + panX;
    const dy = (ch - dh) / 2 + panY;

    // 1. Base frame
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;
    ctx.drawImage(imgA, dx, dy, dw, dh);

    // 2. Sub-frame cross-dissolve for 60fps silkiness
    const imgB = frameImages[ceilIdx];
    if (blendAlpha > 0.015 && imgB?.complete && imgB.naturalWidth > 0) {
      ctx.globalAlpha = blendAlpha;
      ctx.drawImage(imgB, dx, dy, dw, dh);
      ctx.globalAlpha = 1;
    }

    // 3. Horrifying Phantom Double-Vision / Lunge Shockwave Overlay
    if (horrorIntensity > 0.05) {
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = Math.min(0.28, horrorIntensity * 0.24);
      const echoScale = 1 + horrorIntensity * 0.032;
      const ew = dw * echoScale;
      const eh = dh * echoScale;
      const jitterX = Math.sin(nowSec * 38) * (8 * horrorIntensity);
      const jitterY = Math.cos(nowSec * 31) * (5 * horrorIntensity);
      ctx.drawImage(imgA, (cw - ew) / 2 + jitterX, (ch - eh) / 2 + jitterY, ew, eh);
      ctx.restore();
    }

    // 4. Foreground Swirling Ash & Blood Embers
    ctx.save();
    const windBoost = 1 + warpBoost * 4.5 + horrorIntensity * 3;
    for (let i = 0; i < ASH_COUNT; i++) {
      const p = ashParticles[i];
      p.y += p.vy * windBoost;
      p.x += p.vx * windBoost + Math.sin(nowSec * 1.8 + i) * 0.0004;

      if (p.y < -0.05) {
        p.y = 1.05;
        p.x = Math.random();
      }
      if (p.x < -0.05) p.x = 1.05;
      if (p.x > 1.05) p.x = -0.05;

      const px = p.x * cw;
      const py = p.y * ch;

      ctx.beginPath();
      if (p.isCrimson) {
        ctx.fillStyle = `rgba(255, 16, 68, ${(p.alpha * (0.65 + horrorIntensity * 0.35)).toFixed(2)})`;
      } else {
        ctx.fillStyle = `rgba(225, 232, 245, ${(p.alpha * 0.45).toFixed(2)})`;
      }
      ctx.arc(px, py, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  // Beginning-First Sequential Preloader + GPU Bitmap Decode:
  // Loads Frames 1..85 sequentially FIRST so the beginning is 100% smooth immediately!
  const loadQueue = [];
  const queuedSet = new Set();

  function enqueueFrame(idx) {
    if (idx >= 1 && idx <= TOTAL_FRAMES && !queuedSet.has(idx)) {
      queuedSet.add(idx);
      loadQueue.push(idx);
    }
  }

  // 1. Load first 85 frames in strict order so the opening is 100% locked
  for (let i = 1; i <= 85; i++) enqueueFrame(i);
  // 2. Load every 2nd frame for the rest of the sequence
  for (let i = 86; i <= TOTAL_FRAMES; i += 2) enqueueFrame(i);
  // 3. Fill in all remaining odd frames
  for (let i = 87; i <= TOTAL_FRAMES; i++) enqueueFrame(i);

  let loadedCount = 0;
  let inFlight = 0;
  const MAX_CONCURRENT = 8;

  function pumpQueue() {
    while (inFlight < MAX_CONCURRENT && loadQueue.length > 0) {
      const nextIdx = loadQueue.shift();
      inFlight++;
      const img = new Image();
      img.decoding = "async";
      img.src = getFastFramePath(nextIdx);

      img.onload = () => {
        const finalize = () => {
          inFlight--;
          loadedCount++;
          frameImages[nextIdx] = img;

          if (hudBufferStatus) {
            const pct = Math.min(100, Math.round((loadedCount / TOTAL_FRAMES) * 100));
            hudBufferStatus.textContent =
              pct < 100 ? `AWAKENING WRAITH (${pct}%)` : "240 FRAMES · WRAITH UNLEASHED";
          }
          pumpQueue();
        };

        if (typeof img.decode === "function") {
          img.decode().then(finalize).catch(finalize);
        } else {
          finalize();
        }
      };

      img.onerror = () => {
        inFlight--;
        pumpQueue();
      };
    }
  }

  pumpQueue();

  let targetY = window.scrollY;
  let smoothY = window.scrollY;
  let lastY = window.scrollY;
  let smoothHeroProgress = 0;
  let smoothFrameFloat = 1;
  const startTimestamp = performance.now();

  window.addEventListener(
    "scroll",
    () => {
      targetY = window.scrollY;
      const delta = Math.abs(targetY - lastY);
      warpBoost = clamp(delta / 75, 0, 1.8);
      lastY = targetY;
    },
    { passive: true }
  );

  function tick(now) {
    const nowSec = (now - startTimestamp) / 1000;

    // Multi-stage ultra-silky exponential damping (eliminates wheel stepping completely)
    smoothY = lerp(smoothY, targetY, 0.075);
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const globalProgress = clamp(smoothY / maxScroll, 0, 1);

    if (progressBar) progressBar.style.width = `${(globalProgress * 100).toFixed(2)}%`;
    if (navReadout) navReadout.textContent = `${String(Math.round(globalProgress * 100)).padStart(2, "0")}%`;

    // Hero scroll progress (0.0 -> 1.0 across the 650vh track)
    const rect = heroTrack.getBoundingClientRect();
    const scrollableHero = Math.max(1, heroTrack.offsetHeight - window.innerHeight);
    const rawHeroProgress = clamp(-rect.top / scrollableHero, 0, 1);
    smoothHeroProgress = lerp(smoothHeroProgress, rawHeroProgress, 0.075);

    // Ultra-Smooth Opening Emergence & Sinister Breathing at the Beginning:
    // Smoothly glides from Frame 1 to Frame 18 on page load, then gently breathes
    const introEase = smootherstep(0, 2.8, nowSec);
    const eerieBreathing = Math.sin(nowSec * 1.15) * 4.5 + Math.cos(nowSec * 0.6) * 2.0;
    const idleOpeningFrame = clamp(1 + introEase * 13 + eerieBreathing, 1, 24);
    const idleWeight = smootherstep(0, 1, clamp(1 - smoothHeroProgress * 11, 0, 1));

    const scrollTargetFrame = 1 + smoothHeroProgress * (TOTAL_FRAMES - 1);
    const blendedTargetFrame = lerp(scrollTargetFrame, Math.max(scrollTargetFrame, idleOpeningFrame), idleWeight);

    // Liquid sub-frame smoothing
    smoothFrameFloat = lerp(smoothFrameFloat, blendedTargetFrame, 0.11);
    const currentFrameInt = clamp(Math.round(smoothFrameFloat), 1, TOTAL_FRAMES);

    // Horror Climax Detection:
    // Peak terror occurs during the Wraith's claw lunge & lightning storm (Frames 118..182)
    const lungeProximity =
      currentFrameInt >= 110 && currentFrameInt <= 190
        ? Math.sin(((currentFrameInt - 110) / 80) * Math.PI)
        : 0;
    const horrorIntensity = clamp(lungeProximity * 0.85 + warpBoost * 0.35, 0, 1);

    // Heartbeat & cinematic scale + cursor stalking parallax
    mouseSmoothX = lerp(mouseSmoothX, mouseTargetX, 0.05);
    mouseSmoothY = lerp(mouseSmoothY, mouseTargetY, 0.05);

    const heartbeatPulse = Math.pow(Math.max(0, Math.sin(nowSec * 3.6)), 6) * (0.012 + horrorIntensity * 0.025);
    const openingZoom = lerp(1.085, 1.02, introEase);
    const dynamicScale = openingZoom + heartbeatPulse + lungeProximity * 0.035;

    const tremorX = horrorIntensity > 0.15 ? (Math.random() - 0.5) * horrorIntensity * 14 : 0;
    const tremorY = horrorIntensity > 0.15 ? (Math.random() - 0.5) * horrorIntensity * 10 : 0;
    const panX = -mouseSmoothX * 14 + tremorX;
    const panY = -mouseSmoothY * 9 + tremorY;

    drawBlendedFrames(smoothFrameFloat, dynamicScale, panX, panY, horrorIntensity, nowSec);

    // Lightning Flash & Crimson Heartbeat Vignette
    if (horrorFlash) {
      const isLightningFrame =
        (currentFrameInt >= 134 && currentFrameInt <= 142) ||
        (currentFrameInt >= 156 && currentFrameInt <= 166) ||
        Math.sin(nowSec * 7.3) > 0.985;
      const flashAlpha = isLightningFrame ? 0.18 + Math.random() * 0.25 : horrorIntensity * 0.08;
      horrorFlash.style.opacity = flashAlpha.toFixed(3);
    }

    if (horrorVignette) {
      const glowRadius = Math.round(95 + heartbeatPulse * 1800 + horrorIntensity * 90);
      const glowAlpha = (0.18 + horrorIntensity * 0.42).toFixed(2);
      horrorVignette.style.boxShadow = `inset 0 0 ${glowRadius}px rgba(255, 0, 56, ${glowAlpha})`;
    }

    const paddedFrame = String(currentFrameInt).padStart(3, "0");
    if (frameReadout) frameReadout.textContent = `FRAME ${paddedFrame} / 240`;
    if (hudFrameCounter) hudFrameCounter.textContent = `FRAME ${paddedFrame} / 240`;
    if (hudFrameFill) hudFrameFill.style.width = `${(smoothHeroProgress * 100).toFixed(1)}%`;
    if (heroRailFill) heroRailFill.style.height = `${(smoothHeroProgress * 100).toFixed(1)}%`;

    // Continuously animate all 5 horrifying feature text overlays on top
    const p = smoothHeroProgress;
    applyStageTransform(featStages[0], p, 0.0, 0.04, 0.14, 0.21, true, false, horrorIntensity);
    applyStageTransform(featStages[1], p, 0.18, 0.25, 0.35, 0.42, false, false, horrorIntensity);
    applyStageTransform(featStages[2], p, 0.39, 0.46, 0.56, 0.63, false, false, horrorIntensity);
    applyStageTransform(featStages[3], p, 0.60, 0.67, 0.77, 0.84, false, false, horrorIntensity * 1.4);
    applyStageTransform(featStages[4], p, 0.81, 0.88, 0.98, 1.0, false, true, horrorIntensity);

    const activeStageIdx = clamp(Math.floor(p * 5), 0, 4);
    railDots.forEach((dot, idx) => {
      dot.classList.toggle("is-active", idx <= activeStageIdx);
    });

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

/* ============================================================================
   3. ABYSSAL ASH & BLOOD EMBER WARP CANVAS ENGINE (LOWER SECTIONS)
   ============================================================================ */
function initCosmosCanvas() {
  const canvas = document.getElementById("cosmos-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const STAR_COUNT = 220;
  const stars = Array.from({ length: STAR_COUNT }, () => ({
    x: (Math.random() - 0.5) * width * 2,
    y: (Math.random() - 0.5) * height * 2,
    z: Math.random() * width,
    color: Math.random() > 0.45 ? "#ff0038" : Math.random() > 0.25 ? "#ff5500" : "#e8f0ff"
  }));

  function renderStars() {
    ctx.fillStyle = "rgba(2, 1, 5, 0.42)";
    ctx.fillRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;
    const speed = 1.8 + warpBoost * 24;
    warpBoost *= 0.92;

    for (let i = 0; i < STAR_COUNT; i++) {
      const s = stars[i];
      s.z -= speed;
      if (s.z <= 1) {
        s.z = width;
        s.x = (Math.random() - 0.5) * width * 2;
        s.y = (Math.random() - 0.5) * height * 2;
      }

      const sx = (s.x / s.z) * (width * 0.55) + cx;
      const sy = (s.y / s.z) * (height * 0.55) + cy;
      const radius = Math.max(0.4, (1 - s.z / width) * 2.6);

      if (sx >= 0 && sx < width && sy >= 0 && sy < height) {
        ctx.beginPath();
        ctx.fillStyle = s.color;
        ctx.arc(sx, sy, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    requestAnimationFrame(renderStars);
  }

  requestAnimationFrame(renderStars);
}

/* ============================================================================
   4. INTERACTIVE ORBITAL RITUAL RADAR (11 WEBSITES ORBITING LIVE)
   ============================================================================ */
function initOrbitalStarMap() {
  const container = document.getElementById("orbital-nodes-container");
  const stage = document.getElementById("starmap-stage");
  if (!container || !stage) return;

  const radii = { 1: 95, 2: 165, 3: 235 };
  let isPaused = false;

  stage.addEventListener("mouseenter", () => {
    isPaused = true;
  });
  stage.addEventListener("mouseleave", () => {
    isPaused = false;
  });

  const nodeElements = SPACE_PORTALS.map((portal, index) => {
    const a = document.createElement("a");
    a.href = portal.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "star-node";
    a.style.setProperty("--node-color", portal.accent);
    a.setAttribute("aria-label", `Launch ${portal.name}`);
    a.innerHTML = `
      <div class="star-node-orb">${portal.icon}</div>
      <span class="star-node-label">${portal.name}</span>
    `;
    container.appendChild(a);

    return {
      el: a,
      ring: portal.orbitRing,
      angle: (index / SPACE_PORTALS.length) * Math.PI * 2,
      speed: (0.0045 / portal.orbitRing) * (portal.orbitRing % 2 === 0 ? -1 : 1)
    };
  });

  function animateOrbit() {
    if (!isPaused) {
      const rect = stage.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const scaleFactor = Math.min(1, rect.width / 560);

      nodeElements.forEach((n) => {
        n.angle += n.speed;
        const r = radii[n.ring] * scaleFactor;
        const x = cx + Math.cos(n.angle) * r;
        const y = cy + Math.sin(n.angle) * r;
        n.el.style.left = `${x}px`;
        n.el.style.top = `${y}px`;
      });
    }
    requestAnimationFrame(animateOrbit);
  }

  requestAnimationFrame(animateOrbit);
}

/* ============================================================================
   5. RENDER THE 11 PORTAL CARDS, FILTERS & PRICING
   ============================================================================ */
function renderPortalCards(filter = "all") {
  const grid = document.getElementById("portals-grid");
  if (!grid) return;

  const filtered =
    filter === "all"
      ? SPACE_PORTALS
      : SPACE_PORTALS.filter((item) => item.category === filter);

  grid.innerHTML = filtered
    .map(
      (portal, i) => `
      <article
        class="portal-card fm-reveal is-inview"
        style="--portal-accent: ${portal.accent}; --portal-glow: ${portal.glow}; transition-delay: ${(i % 3) * 60}ms"
        role="listitem"
      >
        <div>
          <div class="portal-visual-banner">
            <div class="portal-cyber-grid" aria-hidden="true"></div>
            <div class="portal-orbit-ring" aria-hidden="true"></div>
            <span class="portal-sector-tag">${portal.sector}</span>
            <span class="portal-live-dot" title="Online"></span>
            <div class="portal-icon-medallion" aria-hidden="true">
              ${portal.icon}
            </div>
          </div>

          <div class="portal-body">
            <span class="portal-short-tag">${portal.tag}</span>
            <h3 class="portal-title">${portal.name}</h3>
            <span class="portal-host">↗ ${portal.host}</span>
          </div>
        </div>

        <div style="padding: 0 1.4rem 1.4rem;">
          <a
            href="${portal.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="portal-launch-btn"
            aria-label="Open ${portal.name} in new tab"
          >
            <span>Unseal Gate</span>
            <span aria-hidden="true">⚡</span>
          </a>
        </div>
      </article>
    `
    )
    .join("");
}

function initFiltersAndReveals() {
  const chips = document.querySelectorAll(".filter-chip");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      renderPortalCards(chip.dataset.filter || "all");
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = Number(entry.target.dataset.fmDelay || 0);
          setTimeout(() => entry.target.classList.add("is-inview"), delay);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".fm-reveal").forEach((el) => observer.observe(el));

  const btns = document.querySelectorAll(".cadence-btn");
  const figures = document.querySelectorAll(".price-figure");
  const periods = document.querySelectorAll(".price-period");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cadence = btn.dataset.cadence || "monthly";
      btns.forEach((b) => b.classList.toggle("is-active", b === btn));

      figures.forEach((f) => {
        const val = f.getAttribute(`data-price-${cadence}`);
        if (val !== null) f.textContent = val;
      });
      periods.forEach((p) => {
        const val = p.getAttribute(`data-period-${cadence}`);
        if (val !== null) p.textContent = val;
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initKnopSequenceAndScroll();
  initCosmosCanvas();
  renderPortalCards("all");
  initOrbitalStarMap();
  initFiltersAndReveals();
});
