module.exports = {
  siteMetadata: {
    title: 'Gatsby Modern Starter',
    language: 'en',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-htaccess-redirects`,
      options: {
        prefix: "<IfModule mod_rewrite.c>\nRewriteEngine On",
        suffix: "</IfModule>",
      },
    },

  ],
};
