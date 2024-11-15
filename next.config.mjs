/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  env: {
    AUTH_NODEMAILER_GMAIL_USER: process.env.AUTH_NODEMAILER_GMAIL_USER,
    AUTH_NODEMAILER_GMAIL_PASS: process.env.AUTH_NODEMAILER_GMAIL_PASS
  }
};

export default nextConfig;
