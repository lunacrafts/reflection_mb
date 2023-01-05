const withTM = require("next-transpile-modules")(["narnia-trpc", "luna-trpc", "narnia-trpc-context", "openai-sdk", "openai-trpc"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withTM(nextConfig);
