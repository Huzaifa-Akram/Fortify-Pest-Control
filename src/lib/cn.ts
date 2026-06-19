type ClassValue = string | number | null | false | undefined;

/** Tiny className combiner — joins truthy values with a space. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
