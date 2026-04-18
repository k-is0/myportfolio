import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "ultrasonic-microplastic-separation",
    title: "Ultrasonic Microplastic Separation",
    year: 2026,
    category: "Cleantech / Research",
    descriptor:
      "A resonant acoustic field that sorts particles from water without filters.",
    role: "MSc thesis lead",
    client: "Imperial College London — Dyson School",
    tools: [
      "COMSOL Multiphysics",
      "Acoustic Modelling",
      "Bench-top prototyping",
      "CAD",
    ],
    cover: {
      kind: "placeholder",
      pattern: "rings",
      alt: "Concentric ring diagram suggesting an acoustic standing wave",
    },
    layout: { span: 12, aspect: "16 / 10" },
    featured: true,
    body: [
      {
        kind: "para",
        text: "The premise is simple in principle, tricky in practice. A standing wave in water creates pressure nodes where particles collect by density. Tune the frequency and the geometry, and microplastics congregate along a pressure minimum that runs the length of the channel. No filters, no consumables, no pressure drop to speak of.",
      },
      {
        kind: "quote",
        text: "Acoustic separation isn't slow — it's just patient.",
      },
      {
        kind: "para",
        text: "The hard part is sustaining a clean resonance at scale. The chamber wants to couple with its mountings; the amplifier wants to drift; cavitation wants to break symmetry the moment the field gets pushed any higher. Most of the thesis is spent characterising the failure modes, not the successes.",
      },
    ],
  },
  {
    slug: "my-little-beacon",
    title: "My Little Beacon",
    year: 2024,
    category: "Product / Hardware",
    descriptor:
      "A GSM emergency-call device designed for people who don't carry phones.",
    role: "Founding hardware engineer",
    client: "My Little Beacon Ltd.",
    tools: ["KiCad", "STM32", "Industrial design", "DfM"],
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
        text: "The brief was a product for people whose daily lives don't include carrying a phone — children, mostly. A single button, a GSM fix, three preset numbers. It had to survive being dropped, swum with, and forgotten in a pocket through a wash cycle.",
      },
      {
        kind: "quote",
        text: "The hardware has to get out of the way so the parent doesn't notice it.",
      },
      {
        kind: "para",
        text: "Most of the engineering work was in the things that never make it to the spec sheet: thermal paths so the board doesn't brown out after ten minutes in the sun, an antenna tuned to survive a rubber overmould, a battery chemistry that holds charge in a drawer for six months. DfM ate half the schedule.",
      },
    ],
  },
  {
    slug: "tiltrotor-evtol-simulation",
    title: "Tiltrotor eVTOL Simulation",
    year: 2022,
    category: "Aerospace / Simulation",
    descriptor:
      "MATLAB-based flight dynamics modelling for a hybrid-lift aircraft.",
    role: "BEng dissertation",
    client: "University of Bath",
    tools: ["MATLAB", "Simulink", "Flight dynamics"],
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
        text: "The target vehicle was a tiltrotor — fixed wing in cruise, helicopter in hover, something complicated in between. I built a 6-DOF model with Blade Element Momentum Theory for the rotors, first-principles lift and drag for the wing, and a finite-state transition logic to manage the tilt schedule.",
      },
      {
        kind: "para",
        text: "The interesting answers weren't about whether the vehicle flew. They were about what the flight control system has to give up to trade between vertical and forward modes. Half the simulation was spent finding the transition corridor where the rotors stall before the wing lifts.",
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
    year: 2024,
    category: "Industrial Design / AM",
    descriptor:
      "A functionally graded Gyroid lattice midsole, printed on HP Multi Jet Fusion.",
    role: "Coursework — DfAM specialism",
    client: "Imperial College London",
    tools: ["nTopology", "HP Multi Jet Fusion", "TPU"],
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
        text: "Flip flops are a surprisingly honest design problem. The sole has to be stiff enough to push off, soft enough not to bruise, and vary continuously along its length without any discrete layers to delaminate. Multi Jet Fusion in TPU is one of the few processes that prints a continuously graded lattice without post-processing.",
      },
      {
        kind: "para",
        text: "The midsole is a functionally graded Gyroid — dense at the heel, open at the arch, medium at the ball. The grading is driven by the measured pressure map of a walking gait. It prints overnight in one piece. On sand the grip was better than the injection-moulded pair I was comparing it against, which was the only performance benchmark I had.",
      },
    ],
  },
  {
    slug: "autonomous-robotic-gripper",
    title: "Autonomous Robotic Gripper",
    year: 2021,
    category: "Robotics / Mechatronics",
    descriptor:
      "A compliant end-effector for unstructured picking tasks.",
    role: "Undergrad project",
    client: "University of Bath",
    tools: ["ROS", "OpenCV", "Mechatronics", "Compliant mechanisms"],
    cover: {
      kind: "placeholder",
      pattern: "grip",
      alt: "Two opposing arcs forming a gripper jaw",
    },
    layout: { span: 12, aspect: "16 / 9" },
    featured: true,
    body: [
      {
        kind: "para",
        text: "The gripper is compliant: no sensors, no force feedback, no servo positioning. Just a four-bar linkage with a soft silicone pad that conforms to whatever it's closing around. A single motor drives two jaws through a cam that keeps grip force roughly constant across a wide object range.",
      },
      {
        kind: "quote",
        text: "Every sensor you don't add is one you don't have to debug.",
      },
      {
        kind: "para",
        text: "The vision side was OpenCV and a crude depth map — enough to find the centroid of whatever was on the table and point the arm. The interesting result was how forgiving the system became once mechanical compliance did the work that stiff grippers ask of the controller.",
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
