const nextConfig = {
  poweredByHeader: false,
  webpack: (config, options) => {
    const nextCssLoaders = config.module.rules.find(
      (rule) => typeof rule.oneOf === "object",
    )

    nextCssLoaders.oneOf.forEach((loader) => {
      if (
        loader.sideEffects &&
        loader.issuer &&
        loader.issuer.include &&
        loader.issuer.include.endsWith("_app.tsx")
      ) {
        delete loader.issuer
      }
    })

    return config
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId },
  ) {
    return {
      "/": { page: "/" },
      "/teams": {
        page: "/teams",
        query: { title: "WE ARE | Teams" },
      },
      "/events": {
        page: "/events",
        query: { title: "WE ARE | Events" },
      },
      "/wiki": {
        page: "/wiki",
        query: { title: "WE ARE | Wiki" },
      },
    }
  },
  trailingSlash: true,
  env: {
    API_HOST: process.env.API_HOST,
  },
}

module.exports = nextConfig
