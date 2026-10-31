import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async redirects() {
    return [
      // Legacy .php URLs
      { source: "/calibration.php", destination: "/services/calibration/", permanent: true },
      { source: "/electrical-calibration.php", destination: "/services/calibration/electrical/", permanent: true },
      { source: "/physical-calibration.php", destination: "/services/calibration/mechanical/", permanent: true },
      { source: "/optical-calibration.php", destination: "/services/calibration/dimensional/", permanent: true },
      { source: "/mass-calibration.php", destination: "/services/calibration/mechanical/", permanent: true },
      { source: "/pressure-calibration.php", destination: "/services/calibration/pressure/", permanent: true },
      { source: "/instruments-rental-supply", destination: "/services/rental/", permanent: true },
      { source: "/instruments-rental-supply/", destination: "/services/rental/", permanent: true },
      { source: "/engineering.php", destination: "/services/", permanent: true },
      { source: "/about-us.php", destination: "/about/", permanent: true },
      { source: "/contact-us.php", destination: "/contact/", permanent: true },

      // Removed pages (were indexed previously)
      { source: "/services/engineering/", destination: "/services/", permanent: true },
      { source: "/industries/medical-pharma/", destination: "/industries/", permanent: true },
      { source: "/industries/military-defense/", destination: "/industries/", permanent: true },
    ];
  },
};

export default nextConfig;
