/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirect() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
