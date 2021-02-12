module.exports = {
  siteMetadata: {
    title: "Alec Ostrander | Builder of Cool Stuff",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
