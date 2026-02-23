const isGithubActions = process.env.GITHUB_ACTIONS || false;

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: isGithubActions ? "/savya-portfolio" : "",
    assetPrefix: isGithubActions ? "/savya-portfolio/" : "",
    images: {
        unoptimized: true
    }
};

export default nextConfig;
