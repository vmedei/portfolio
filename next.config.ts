/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  trailingSlash: true, // opcional: adiciona "/" ao final das URLs
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  images: {
    unoptimized: true, // necessário para output: 'export'
  },
  // Configuração de porta (alternativa)
  // experimental: {
  //   serverComponentsExternalPackages: [],
  // },
};

export default nextConfig;
