/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
  typescript: {
    ignoreBuildErrors: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    }
  },
  devIndicators: {
    buildActivityPosition: "bottom-right",
  },
  trailingSlash: true,
};

export default nextConfig;
