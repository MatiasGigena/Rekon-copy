/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    images: {
        imageSizes: [16, 32, 48, 56, 64, 72, 80, 96, 128, 256, 384],
        deviceSizes: [
          16, 32, 48, 64, 96, 128, 256, 384, 512, 640, 750, 828, 1080, 1200, 1920,
          2048, 3840
        ]
      },
    
}

module.exports = nextConfig
