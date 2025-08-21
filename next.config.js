/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_HOST: "https://prod.imkloud.com/api",
    apiKey: "4MrokA3pBgjfsguf2M9aymTQDREqnE",
    orgId: "PdgT9y6tZ5XRtWaCb",
    userId: "8aumx9G9iTZxhp8Dc",
    type: "apiKey",
    server: "live",
    domainName: "http://localhost:3000",
    API_HOST_ADMIN: "https://prod.imkloud.com/api",
    API_HOST_ADMIN2: "https://prod.imkloud.com/api",
    // siteTitle: "Dental clinic | Island Dental",
    // siteDescription:
    //   "Island Dental was built on the belief that dental care should be a blend of advanced technology and genuine, personalized care",
    // siteName: "Island Dental",
    // siteLink: "https://www.smileselectdental.vercel.app/",
    // siteImage: "/images/smileselectdental/smileselectdental.jpg",
    // callNumberFormat: "(909) 334-4015",
    // callNumber: "9093344015",
    // imagePath: "/images/smileselectdental/",
  },
};

module.exports = nextConfig;
