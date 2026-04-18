export type PlaceholderPattern =
  | "rings"
  | "beacon"
  | "wireframe"
  | "curve"
  | "lattice"
  | "grip";

export type CardLayout = {
  span: 4 | 5 | 6 | 7 | 8 | 12;
  aspect: string;
};

export type Cover =
  | {
      kind: "placeholder";
      pattern: PlaceholderPattern;
      alt: string;
    }
  | {
      kind: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
    };

export type ProjectBodyBlock =
  | { kind: "para"; text: string }
  | { kind: "quote"; text: string; cite?: string }
  | {
      kind: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      caption?: string;
    };

export type Project = {
  slug: string;
  title: string;
  year: number;
  category: string;
  descriptor: string;
  role?: string;
  client?: string;
  tools?: string[];
  cover: Cover;
  layout: CardLayout;
  featured?: boolean;
  body?: ProjectBodyBlock[];
};

export type SectionId = "work" | "about" | "index" | "contact";
