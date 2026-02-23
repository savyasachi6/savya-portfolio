/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/savya-portfolio",
    assetPrefix: "/savya-portfolio/",
    images: {
        unoptimized: true
    },
    env: {
        NEXT_PUBLIC_BASE_PATH: "/savya-portfolio"
    }
};

export default nextConfig;
