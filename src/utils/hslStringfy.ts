/**
 * Put HSL into a string
 */
export default function hslStringfy(h: number, s: number, l: number): string {
  return `hsl(${h}, ${s}%, ${l}%)`;
}
