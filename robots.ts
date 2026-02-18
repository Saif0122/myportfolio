
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/private/", "/api/"],
      },
    ],
    sitemap: "https://saiful.code/sitemap.xml",
  };
}
