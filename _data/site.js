module.exports = {
  title: "vectorscores",
  email: "john@johnteskemusic.com",
  description: "A new series of dynamic compositions.",
  url: "https://vectorscores.org",
  links: [
    {
      name: "johnteske/vectorscores",
      url: "https://github.com/johnteske/vectorscores",
      icon: "github",
    },
    { name: "johnteskemusic.com", url: "https://johnteskemusic.com" },
  ],
  baseUrl: process.env.SITE_BASE_URL || "",
  scoreBaseUrl: process.env.SCORES_BASE_URL || "http://localhost:8081",
  assetsUrl: "assets",
};
