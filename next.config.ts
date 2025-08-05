import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // opcional: adiciona "/" ao final das URLs
  basePath: '',
  images: {
    unoptimized: true, // necessário para output: 'export'
  },
  transpilePackages: ['gsap', 'lenis'],
  webpack: (config) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      'bufferutil': 'commonjs bufferutil',
    });
    return config;
  }
};

export default nextConfig;
