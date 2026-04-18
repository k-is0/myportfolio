export const profile = {
  shortName: "Kevin",
  fullName: "Kevin",
  role: "Design engineer",
  location: "London",
  email: "hello@kevin.example",
  links: {
    linkedin: "https://www.linkedin.com/in/kevin",
    github: "https://github.com/kevin",
  },
  positioning:
    "Design engineer working on cleantech hardware and product systems. Concert pianist on the side. Based in London.",
  signoff: "Built in Helvetica. London, 2026.",
} as const;

export type Profile = typeof profile;
