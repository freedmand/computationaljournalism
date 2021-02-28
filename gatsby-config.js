module.exports = {
  siteMetadata: {
    title: "Computational Journalism",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-subfont`,
      options: {
        silent: true,
        fallback: false,
        inlineFonts: true,
      },
    },
  ],
};
