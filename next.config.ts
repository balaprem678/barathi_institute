import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/index.php', destination: '/', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/aboutus.php', destination: '/about', permanent: true },
      { source: '/contactus.php', destination: '/contact', permanent: true },
      { source: '/gallery.php', destination: '/gallery', permanent: true },
      { source: '/gallery.html', destination: '/gallery', permanent: true },
      { source: '/catwise_gallery.php', destination: '/gallery', permanent: true },
      { source: '/courses.php', destination: '/courses', permanent: true },
      { source: '/facilities.php', destination: '/facilities', permanent: true },
      { source: '/facilities.html', destination: '/facilities', permanent: true },
      { source: '/placements.php', destination: '/placements', permanent: true },
      { source: '/scholarship.php', destination: '/scholarship', permanent: true },
      { source: '/testimonials.php', destination: '/student-testimonials', permanent: true },
      { source: '/admission.php', destination: '/admission', permanent: true },
      { source: '/registration.php', destination: '/register', permanent: true },
      { source: '/degree_courses.php', destination: '/courses/degree', permanent: true },
      { source: '/diploma_courses.php', destination: '/courses/diploma', permanent: true },
      { source: '/paramedical_courses.php', destination: '/courses/paramedical', permanent: true },
      { source: '/hotel_management.php', destination: '/courses/hotel-management', permanent: true },
      // Catch-all for any other .php and .html files to home page
      { source: '/:path*.php', destination: '/', permanent: true },
      { source: '/:path*.html', destination: '/', permanent: true },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
