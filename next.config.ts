process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err.stack);
});


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
