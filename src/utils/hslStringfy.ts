/**
 * Put HSL into a string
 */
export default function hslStringfy(hsl: number[]): string {
  return `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
}
