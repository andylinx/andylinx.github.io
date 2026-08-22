/** @type {import('next').NextConfig} */
const isStaticExport =
  process.env.STATIC_EXPORT === "1" || process.env.EDGEONE === "1";
const isEdgeOneBuild = process.env.EDGEONE === "1";

const nextConfig = {
  images: {
    // Keep images unoptimized so the same codebase works on:
    // 1. Vercel (fine either way for this template), and
    // 2. EdgeOne static export, where the Next.js image optimizer is unavailable.
    unoptimized: true
  },
  // EdgeOne Pages deployment path:
  // - export pure static files to /out
  // - force trailing slashes so routes resolve to folder/index.html
  //   (for example, /en/ -> out/en/index.html)
  //
  // Vercel / standard Next.js deployment path:
  // - keep the default server-aware Next.js output
  // - allow proxy.ts to handle locale redirects at request time
  ...(isStaticExport
    ? {
        output: "export",
        trailingSlash: true
      }
    : {})
};

export default nextConfig;
