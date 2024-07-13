/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverAction: true,
  },
};

export default nextConfig;

// pour le server action on ajoute :  experimental: {serverAction : true}
