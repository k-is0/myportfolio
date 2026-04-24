export const profile = {
  shortName: "Kevin",
  fullName: "Kevin Huang",
  role: "Design engineer",
  location: "London",
  email: "kh2025@ic.ac.uk",
  links: {
    linkedin: "https://linkedin.com/in/kevinnhuang",
    github: "https://github.com/k-is0",
  },
  positioning:
    "Design engineer working on cleantech hardware and product systems. Concert pianist on the side. Based in London.",
  signoff: "Built in Helvetica. London, 2026.",
} as const;

export type Profile = typeof profile;
