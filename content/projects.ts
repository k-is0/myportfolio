import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "ultrasonic-microplastic-separation",
    title: "Ultrasonic Microplastic Separation",
    year: 2026,
    category: "Cleantech / Research",
    descriptor:
      "A resonant acoustic field that sorts microplastics out of contaminated water streams, no filters required.",
    role: "Engineering lead — MSc Cleantech Innovation",
    client: "Imperial College London — Dyson School",
    tools: [
      "MATLAB",
      "Acoustic simulation",
      "Benchtop prototyping",
      "Transducer tuning",
    ],
    cover: {
      kind: "image",
      src: "/images/projects/ultrasonic/cover.png",
      alt: "FLOWSONIC benchtop ultrasonic separation rig — flow chamber with transducers alongside signal generator, oscilloscope, and power supplies.",
      width: 2252,
      height: 1260,
    },
    layout: { span: 8, aspect: "16 / 10" },
    featured: true,
    body: [
      {
        kind: "para",
        text: "The premise is simple in principle, tricky in practice. A resonant acoustic field in water creates pressure minima where particles migrate by density and size. Tune the transducer, tune the chamber, and microplastics collect along a line that runs the length of the flow. No filters, no consumables, no pressure drop to speak of.",
      },
      {
        kind: "image",
        src: "/images/projects/ultrasonic/kevin-at-bench-v5.jpeg",
        alt: "Placing the transducer leads against the acrylic flow chamber on the Dyson School lab bench.",
        width: 768,
        height: 884,
        caption: "Setting the transducers against the acrylic chamber wall. Dyson School lab, Imperial.",
      },
      {
        kind: "quote",
        text: "Acoustic separation isn't slow. It's just patient.",
      },
      {
        kind: "para",
        text: "The MATLAB side models particle migration under the standing-wave pressure field to predict separation efficiency across particle sizes, and to pick a transducer frequency before committing to hardware.",
      },
      {
        kind: "image",
        src: "/images/projects/ultrasonic/oscilloscope.png",
        alt: "Rigol oscilloscope trace showing the transducer drive signal and response at resonance.",
        width: 2166,
        height: 1050,
        caption: "Drive signal and response at resonance, captured on the scope.",
      },
      {
        kind: "para",
        text: "The physical side is where it gets honest: pump clogs on the RS Online M400 cleared with inline filtration, and a transducer impedance mismatch that was quietly killing signal power transfer until it wasn't.",
      },
      {
        kind: "image",
        src: "/images/projects/ultrasonic/separation-papers.png",
        alt: "Three filter papers from the left, middle, and right of the chamber, showing green microplastic particles concentrated in the middle.",
        width: 1652,
        height: 968,
        caption: "Filter papers from left, middle, and right positions in the chamber. Particles collect along the central pressure node.",
      },
    ],
  },
  {
    slug: "my-little-beacon",
    title: "My Little Beacon",
    year: 2025,
    category: "Product / Hardware",
    descriptor:
      "A compact, affordable GSM device so children can reach their emergency contacts at a press.",
    role: "Embedded lead — pre-production prototype",
    client: "My Little Beacon Ltd.",
    tools: [
      "Embedded C",
      "STM32",
      "Audio codec",
      "Cellular module",
      "Acoustic echo cancellation",
    ],
    cover: {
      kind: "placeholder",
      pattern: "beacon",
      alt: "A single point with radiating dashed lines, suggesting a beacon signal",
    },
    layout: { span: 7, aspect: "4 / 5" },
    featured: true,
    body: [
      {
        kind: "para",
        text: "A small device for young children to reach their emergency contacts without a phone in their pocket. Working directly with the founder as the embedded lead, the brief was to get the pre-production prototype to a point where call quality was reliable enough to ship.",
      },
      {
        kind: "quote",
        text: "The hardware has to get out of the way so the parent doesn't notice it.",
      },
      {
        kind: "para",
        text: "Most of the work sat in the audio chain: microphone capture, digital processing, cellular transmission, and speaker output. Getting that chain to deliver clean voice calls end-to-end meant configuring the onboard audio codec, cellular module, and system clocking. Real-time signal processing included an adaptive filter for acoustic echo cancellation running on a resource-constrained microcontroller; call quality was then validated on live hardware, and power-delivery failures on the cellular module were traced to component-level root cause.",
      },
    ],
  },
  {
    slug: "hydration-dashboard",
    title: "Smart Hydration Dashboard",
    year: 2025,
    category: "Product / UI",
    descriptor:
      "A real-time dashboard that turns raw bio-impedance readings into hydration metrics people can act on.",
    role: "UI/UX engineer — Smart Hydration Group",
    client: "Smart Hydration Group",
    tools: ["Figma", "Data visualisation", "User testing"],
    cover: {
      kind: "placeholder",
      pattern: "pulse",
      alt: "A hand-drawn waveform suggesting a bio-signal trace",
    },
    layout: { span: 5, aspect: "4 / 5" },
    featured: true,
    body: [
      {
        kind: "para",
        text: "Raw bio-impedance is noisy and unfriendly. The dashboard's job was to translate it into hydration metrics that made sense to two very different audiences at once: thirty-plus test users tracking their own numbers, and the seven-person engineering team diagnosing the sensor behind them.",
      },
      {
        kind: "para",
        text: "Alongside the hardware team, the UI had to stay faithful to what the sensor was actually measuring. No prettier-than-true curves. User testing against the previous interface showed a 40% improvement in data clarity and usability, and the high-fidelity Figma prototype and interaction guide were adopted as the reference interface for the company's upcoming pilot trials.",
      },
    ],
  },
  {
    slug: "evtol-medical-response",
    title: "Electric VTOL Medical Response Simulation",
    year: 2025,
    category: "Aerospace / Simulation",
    descriptor:
      "A MATLAB/Simulink mission simulation for an electric VTOL flying emergency medical response.",
    role: "BEng final year project",
    client: "University of Bath",
    tools: ["MATLAB", "Simulink", "Mission modelling"],
    cover: {
      kind: "placeholder",
      pattern: "wireframe",
      alt: "Angled wireframe outline of a hybrid-lift aircraft form",
    },
    layout: { span: 5, aspect: "4 / 5" },
    featured: true,
    body: [
      {
        kind: "para",
        text: "The mission profile is the interesting part. Emergency medical response for an electric VTOL cuts across every phase the aircraft is bad at: vertical take-off into forward transition, cruise over an unfamiliar route, hover at a constrained landing site. Each phase costs energy and time differently.",
      },
      {
        kind: "para",
        text: "Built in MATLAB and Simulink, the model takes an aircraft configuration, a battery spec, and a call location, and returns whether the mission closes. The useful answers weren't about whether the vehicle flew. They were about how much of the operating envelope shrinks once you insist on a wounded passenger and a return leg.",
      },
    ],
  },
  {
    slug: "autonomous-robotic-gripper",
    title: "Autonomous Robotic Gripper",
    year: 2025,
    category: "Robotics / Mechatronics",
    descriptor:
      "A gantry-mounted gripper that locates magnets and places markers, built in four weeks by a team of three.",
    role: "Mechanical design engineer",
    client: "University of Bath",
    tools: ["Fusion 360", "Mechatronics", "3D printing", "PETG / Nylon"],
    cover: {
      kind: "placeholder",
      pattern: "grip",
      alt: "Two opposing arcs forming a gripper jaw",
    },
    layout: { span: 7, aspect: "4 / 5" },
    featured: true,
    body: [
      {
        kind: "para",
        text: "Three people, four weeks, a fully functional prototype at the end of it. The gripper sat on a gantry, detected magnets in the work area, and placed markers where it found them. Constraints were sharp enough that every decision had to buy its weight in assembly time.",
      },
      {
        kind: "quote",
        text: "Every sensor you don't add is one you don't have to debug.",
      },
      {
        kind: "para",
        text: "The end-effector was designed in Fusion 360 around a rack-and-pinion actuation paired with a dual-hook geometry. Material optimisation tests walked the print material from PLA to PETG and finally Nylon, cutting friction by around 30%. It took 3rd place for accuracy and speed in the cohort demonstration.",
      },
    ],
  },
  {
    slug: "smart-acl-rehab-sleeve",
    title: "Smart ACL Rehabilitation Sleeve",
    year: 2025,
    category: "Medtech / Wearables",
    descriptor:
      "Wireless-charged wearable for post-surgery knee rehabilitation, built to EU MDR.",
    role: "Group project — embedded + mechanical",
    client: "Imperial College London",
    tools: ["EU MDR", "Embedded firmware", "Wireless power", "Soft goods"],
    cover: {
      kind: "placeholder",
      pattern: "curve",
      alt: "Anatomical bezier curve suggesting a knee profile",
    },
    layout: { span: 5, aspect: "4 / 5" },
    featured: true,
    body: [
      {
        kind: "para",
        text: "Post-surgery ACL rehab is a long game: six months of targeted loading, carefully measured range of motion, strength progression across defined phases. The sleeve monitors flexion angle, compression pressure, and quad activation, and nudges the wearer when the prescribed exercise drifts out of spec.",
      },
      {
        kind: "quote",
        text: "A rehab device that's uncomfortable doesn't get worn. A rehab device that isn't worn doesn't exist.",
      },
      {
        kind: "para",
        text: "Everything was sized against EU MDR Class IIa, which meant IEC 60601 for electrical safety, ISO 10993 for biocompatibility, and a traceability matrix that kept pace with the hardware revisions. The wireless charger was the easy part.",
      },
    ],
  },
  {
    slug: "dfam-tpu-flip-flop",
    title: "DfAM TPU Flip Flop",
    year: 2025,
    category: "Industrial design / AM",
    descriptor:
      "A TPU flip flop designed end-to-end for mass production on HP Multi Jet Fusion.",
    role: "Coursework — Design for Additive Manufacturing",
    client: "Imperial College London",
    tools: ["Fusion 360", "HP Multi Jet Fusion", "TPU", "DfAM"],
    cover: {
      kind: "placeholder",
      pattern: "lattice",
      alt: "Hexagonal honeycomb lattice suggesting a gyroid cell pattern",
    },
    layout: { span: 7, aspect: "4 / 5" },
    featured: true,
    body: [
      {
        kind: "para",
        text: "The module brief was direct: design a flip flop ready to be mass produced and sold online, with 3D printing as the manufacturing route. Taking it seriously meant sizing everything against HP Multi Jet Fusion in TPU: build orientation, part packing, unit cost, wash cycle. Not just the form.",
      },
      {
        kind: "para",
        text: "The midsole is a functionally graded lattice, denser at the heel, opener through the arch, medium at the ball. The grading is driven by the pressure map of a walking gait, and it prints overnight in a single piece. The rest of the work is the boring, necessary side of DfAM: which face lies on the build plate, how many pairs fit in a job, how the strap survives de-caking.",
      },
    ],
  },
  {
    slug: "piano-tuition-practice",
    title: "Private Piano Tuition Practice",
    year: 2025,
    category: "Practice / Teaching",
    descriptor:
      "A five-year independent teaching practice with 25+ students, built on referrals and handed on at graduation.",
    role: "Founder",
    client: "Self-directed — London & Bath",
    tools: ["Teaching", "Online lesson delivery", "Client relationships"],
    cover: {
      kind: "placeholder",
      pattern: "steps",
      alt: "Ascending bars suggesting graded progression",
    },
    layout: { span: 6, aspect: "4 / 5" },
    featured: false,
    body: [
      {
        kind: "para",
        text: "Started in sixth form, ran through university. Twenty-five-plus students across five years, £5,000+ in revenue, a client base built entirely on referrals and community networks. Lessons were pitched per-student, starting with beginners and children and later expanding to adult and elderly learners, breaking classical technique into pieces that actually fit the pace and the physical ability of whoever was sitting at the keyboard.",
      },
      {
        kind: "para",
        text: "The pandemic killed in-person overnight, so the whole practice moved online. Lesson delivery was re-engineered around video, remote practice feedback, and the slower feedback loops that came with that. On graduation, the practice was handed over to a successor; it still operates in Bath today.",
      },
    ],
  },
  {
    slug: "concert-piano-performance",
    title: "Concert Piano & Percussion",
    year: 2024,
    category: "Practice / Performance",
    descriptor:
      "ARSM performance diploma. Recitals at the Royal Albert Hall, Westminster Abbey, and St Margaret's.",
    role: "Pianist · Percussion Ensemble · RMS Symphonic Orchestra",
    tools: ["Solo recital", "Chamber performance", "Orchestral percussion"],
    cover: {
      kind: "placeholder",
      pattern: "keys",
      alt: "A row of piano keys",
    },
    layout: { span: 6, aspect: "4 / 5" },
    featured: false,
    body: [
      {
        kind: "para",
        text: "A decade-plus practice on piano and percussion, running in parallel with the engineering degrees. ARSM performance diploma for solo piano; public performance at the Royal Albert Hall, Westminster Abbey, and St Margaret's.",
      },
      {
        kind: "para",
        text: "It is the other half of how I work. The two practices inform each other more than people assume. Both reward patience with detail, and both punish handwaving.",
      },
    ],
  },
  {
    slug: "shaolin-martial-arts",
    title: "Shaolin Martial Arts",
    year: 2016,
    category: "Practice / Discipline",
    descriptor:
      "Seven years of structured training between London and Beijing; public performances at 14.",
    role: "Student",
    tools: ["Structured forms", "Long-horizon practice"],
    cover: {
      kind: "placeholder",
      pattern: "radial",
      alt: "A radial compass figure suggesting structured forms",
    },
    layout: { span: 6, aspect: "4 / 5" },
    featured: false,
    body: [
      {
        kind: "para",
        text: "Seven years of structured Shaolin training, spread across London and Beijing. Competed and performed publicly at age fourteen in Chinatown, Soho, and at the O2 in Canary Wharf.",
      },
      {
        kind: "para",
        text: "A foundational experience in discipline and long-horizon practice. It is the oldest thing on this list, and probably the one that shaped the others most.",
      },
    ],
  },
  {
    slug: "bath-streetdance",
    title: "Bath Streetdance Society",
    year: 2025,
    category: "Leadership / Events",
    descriptor:
      "Two years on committee, Social Secretary then Events Manager, running socials, workshops, and performances.",
    role: "Events Manager · Social Secretary",
    client: "University of Bath",
    tools: ["Event production", "Budgeting", "Vendor coordination"],
    cover: {
      kind: "placeholder",
      pattern: "cascade",
      alt: "Offset diagonal strokes suggesting rhythm",
    },
    layout: { span: 6, aspect: "4 / 5" },
    featured: false,
    body: [
      {
        kind: "para",
        text: "Two years on committee, Social Secretary in the first year and Events Manager in the second, for a society of around fifty active members and a hundred-plus registered. Fifteen fully booked-out events over that run: socials, workshops, performance nights.",
      },
      {
        kind: "para",
        text: "The interesting part was the logistics layer behind it: budgets, venue bookings, vendor coordination, cash flow over £1,000, all delivered on the kind of deadlines you can't renegotiate once the tickets are sold.",
      },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project;
  next: Project;
} | null {
  const i = featuredProjects.findIndex((p) => p.slug === slug);
  if (i === -1) return null;
  const len = featuredProjects.length;
  return {
    prev: featuredProjects[(i - 1 + len) % len],
    next: featuredProjects[(i + 1) % len],
  };
}
