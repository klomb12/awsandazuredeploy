/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ipfs.infura.io"],
    loader: 'akamai',
    path: '',
  },

}


module.exports = nextConfig
