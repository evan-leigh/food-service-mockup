module.exports = {
  siteMetadata: {
    title: `Food Service Concept / Mockup`,
    description: `This project is an exercise in making a website that relates to the food industry.`,
    author: `Evan Smith`,
  },

  pathPrefix: "/food-service-mockup/src/pages",

  plugins: [
    
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    
    {
      resolve: 'babel-plugin-styled-components',
      options: {
        ssr: false
      }
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `epilogue\:700, 800, 900`,
          `poppins\:400, 600`,
        ],
        display: 'swap'
      }
    },

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
