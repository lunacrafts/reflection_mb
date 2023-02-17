const withTM = require("next-transpile-modules")(
  [
    "narnia-trpc",
    "narnia-trpc-context",
    "openai-sdk",
    "openai-trpc",
    "mirrorboards-sdk",
    "mirrorboards-trpc"
  ]
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withTM(nextConfig);
