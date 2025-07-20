/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  trailingSlash: true, // opcional: adiciona "/" ao final das URLs
  // Configuração de porta (alternativa)
  // experimental: {
  //   serverComponentsExternalPackages: [],
  // },
};

export default nextConfig;
