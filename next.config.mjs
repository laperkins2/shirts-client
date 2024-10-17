/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ulkeaypxbtvkzcsvomji.supabase.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
export default nextConfig;
