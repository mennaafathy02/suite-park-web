export const API_BASE =
  process.env.NEXT_PUBLIC_API_URL?.replace("/api", "") ?? "";

export function getImageUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${API_BASE}/${path.replace(/^\//, "")}`;
}
