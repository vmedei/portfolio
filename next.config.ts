/** @type {import('next').NextConfig} */

const nextConfig = {
  // Removido output: 'export' para permitir deploy no Railway
  trailingSlash: true, // opcional: adiciona "/" ao final das URLs
  // Configuração de porta (alternativa)
  // experimental: {
  //   serverComponentsExternalPackages: [],
  // },
};

export default nextConfig;
