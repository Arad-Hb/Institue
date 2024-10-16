/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '*.tahlildadeh.com',
            port: '',
            pathname: '/**',
          }
          
        ],
      }
};

export default nextConfig;
