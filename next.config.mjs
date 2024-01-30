/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_URI:
      "mongodb+srv://zeeshan:12345@cluster0.7iulkky.mongodb.net/notebook?retryWrites=true&w=majority",
  },
};

export default nextConfig;
