/** @type {import('next').NextConfig} */
const nextConfig = {
    // Vercel native — no static export, no basePath
    images: {
        // Profile photo uses Next.js Image — let Vercel optimize it
        unoptimized: false,
    },
};

export default nextConfig;
