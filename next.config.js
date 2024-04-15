/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")("./src/lib/i18n/i18n.ts");

module.exports = withNextIntl({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loremflickr.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/de3tluzbk/**",
      },
    ],
  },
}
)
