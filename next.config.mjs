/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // Keep webpack for now (since you need it for better-auth)
  webpack: (config) => {
    config.ignoreWarnings = [
      ...(config.ignoreWarnings || []),
      {
        module: /@better-auth\/kysely-adapter/,
        message: /Export.*doesn't exist in target module/,
      },
    ]
    return config
  },

  // This silences the Turbopack + webpack conflict warning
  turbopack: {},
}

export default nextConfig