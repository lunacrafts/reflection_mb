const withTM = require("next-transpile-modules")(["narnia-trpc", "openai-sdk", "openai-trpc"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withTM(nextConfig);
