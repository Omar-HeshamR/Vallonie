/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/AboutUs/OurCommitments': { page: '/AboutUs/OurCommitments' },
  //   }
  // },
  // images: {
  // loader: 'akamai',
  // path: './Assets',
  // },
  // images: {
  //   unoptimized: true
  // },
}

module.exports = nextConfig


// images: {
//   loader: 'akamai',
//   path: './Assets',
// },