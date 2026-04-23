export const about = {
  paragraphs: [
    "Currently finishing an MSc in Design Engineering at Imperial's Dyson School, specialising in Cleantech Innovation. The thesis is on ultrasonic microplastic separation — a resonant acoustic field that sorts particles from water without filters. Before Imperial, BEng Design Engineering at Bath, graduating 2:1 with a MATLAB/Simulink mission simulation for an electric VTOL flying emergency medical response.",
    "Across internships and coursework, I've taken hardware from simulation to working product in cleantech, embedded systems, and advanced manufacturing. Currently the embedded lead at My Little Beacon, bringing up the audio chain and cellular stack on a compact GSM device for children. Before that, UI/UX engineer on a real-time bio-impedance hydration dashboard adopted as the reference interface for pilot trials, and five years running an independent piano tuition practice that I handed on at graduation.",
    "The other half of the story is music. ARSM performance diploma, public performances at the Royal Albert Hall, Westminster Abbey, and St Margaret's; a decade-plus on piano and percussion. The two practices reward patience with detail, and punish handwaving.",
  ],
  now: [
    "Writing up the MSc thesis on ultrasonic microplastic separation.",
    "Embedded lead on the My Little Beacon pre-production prototype.",
    "Open to an 8-week placement in venture, product, or strategy work from June 2026.",
    "Based in London; comfortable working remotely.",
  ],
  education: [
    {
      period: "2025 — 2026",
      label: "MSc Design Engineering (Cleantech Innovation)",
      where: "Imperial College London · Dyson School",
    },
    {
      period: "2022 — 2025",
      label: "BEng Design Engineering (Hons) — 2:1",
      where: "University of Bath",
    },
    {
      period: "2020 — 2022",
      label: "A Levels — Maths A*, Further Maths A*, Physics A, Economics B",
      where: "Harris Westminster Sixth Form",
    },
  ],
  experience: [
    {
      period: "2025 — present",
      label: "Hardware Engineer (Embedded lead)",
      where: "My Little Beacon",
    },
    {
      period: "2025",
      label: "UI/UX Engineer",
      where: "Smart Hydration Group",
    },
    {
      period: "2020 — 2025",
      label: "Founder — Private Piano Tuition Practice",
      where: "Self-directed · London & Bath",
    },
    {
      period: "2024 — 2025",
      label: "Mechanical Design Engineer",
      where: "Mechatronics project · University of Bath",
    },
  ],
  performances: [
    {
      period: "2014 — present",
      label: "Concert Pianist · Percussion Ensemble",
      where: "Royal Albert Hall · Westminster Abbey · St Margaret's",
    },
    {
      period: "2019",
      label: "ARSM Performance Diploma",
      where: "Royal Schools of Music",
    },
    {
      period: "2023 — 2025",
      label: "Events Manager · Social Secretary",
      where: "Bath Streetdance Society",
    },
    {
      period: "2009 — 2016",
      label: "Shaolin Martial Arts",
      where: "London & Beijing",
    },
  ],
  tools: [
    "Fusion 360",
    "KiCad",
    "STM32 · Embedded C / C++",
    "MATLAB · Simulink",
    "Python",
    "DfAM · 3D printing",
    "Figma",
    "Git",
    "TypeScript",
  ],
  photos: {
    portrait: {
      src: "/images/kevin-portrait.svg",
      alt: "Portrait of Kevin",
      width: 1200,
      height: 1500,
      caption: "London, 2026",
    },
    candid: {
      src: "/images/kevin-piano.svg",
      alt: "Kevin at the piano",
      width: 1800,
      height: 1200,
      caption: "Elgar Room rehearsal, Royal Albert Hall",
    },
  },
} as const;
