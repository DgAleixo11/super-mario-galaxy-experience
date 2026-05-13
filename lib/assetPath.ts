const basePath =
  process.env.NODE_ENV === "production"
    ? "/super-mario-galaxy-experience"
    : "";

export function assetPath(path: string) {
  return `${basePath}${path}`;
}