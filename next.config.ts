import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(
        "https://apuedge.com/wp-content/uploads/bh_accretiondisk_sim_stationary_websize.gif",
      ),
    ],
  },
}

export default nextConfig
