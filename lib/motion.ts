export const EASE_OUT_EDITORIAL: [number, number, number, number] = [
  0.22, 1, 0.36, 1,
];

export const EASE_IN_OUT_EDITORIAL: [number, number, number, number] = [
  0.65, 0, 0.35, 1,
];

export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};
