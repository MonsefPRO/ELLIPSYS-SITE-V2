/** @type {import('next').NextConfig} */

const securityHeaders = [
  { key: "X-Frame-Options",        value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
  { key: "Referrer-Policy",        value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy",     value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // next/font sert les polices depuis le même domaine — plus besoin de fonts.googleapis.com
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.googleadservices.com https://www.google.com https://googleads.g.doubleclick.net https://eu.posthog.com https://us.posthog.com https://cdn.curator.io",
      "style-src 'self' 'unsafe-inline' https://cdn.curator.io",
      // Polices servies localement par next/font
      "font-src 'self' https://cdn.curator.io",
      "img-src 'self' data: blob: https://www.googletagmanager.com https://www.google.com https://www.google.fr https://googleads.g.doubleclick.net https://www.googleadservices.com https://images.pexels.com https://images.unsplash.com https://*.supabase.co https://*.cdninstagram.com https://*.fbcdn.net https://media.licdn.com https://*.linkedin.com https://*.tiktokcdn.com https://p16-sign.tiktokcdn-us.com https://*.tiktokcdn-us.com",
      "connect-src 'self' https://www.googletagmanager.com https://www.google.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://eu.posthog.com https://us.posthog.com https://*.supabase.co wss://*.supabase.co https://cdn.curator.io https://curator.io",
      "media-src 'self'",
      "frame-src https://td.doubleclick.net https://www.googletagmanager.com",
      "worker-src 'self' blob:",
      "manifest-src 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
  { key: "X-XSS-Protection", value: "1; mode=block" },
];

const nextConfig = {
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },

  // ─── Reverse-proxy PostHog ───────────────────────────────────────────────
  // Contourne les ad-blockers (uBlock, Brave, AdGuard…) qui bloquent *.i.posthog.com.
  // Les requêtes partent vers ellipsys-solutions.com/ingest/* et sont rewrités côté Netlify.
  async rewrites() {
    return [
      { source: "/ingest/static/:path*", destination: "https://eu-assets.i.posthog.com/static/:path*" },
      { source: "/ingest/:path*",        destination: "https://eu.i.posthog.com/:path*" },
      { source: "/ingest/decide",        destination: "https://eu.i.posthog.com/decide" },
    ];
  },
  // Important pour que les rewrites PostHog fonctionnent sans /
  skipTrailingSlashRedirect: true,

  poweredByHeader: false,
  reactStrictMode: true,

  // ─── Tree-shaking des grosses librairies ─────────────────────────────────
  // Réduit drastiquement le bundle JS en n'important que les icônes/composants réellement utilisés
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  images: {
    // Compression WebP/AVIF automatique pour toutes les images next/image
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "**.supabase.co" },
    ],
  },
};

module.exports = nextConfig;
