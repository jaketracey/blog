module.exports = {
  siteMetadata: {
    title: `Jake Tracey`,
    author: {
      name: `Jake Tracey`,
      summary: `a programmer who lives in Melbourne, Australia`,
    },
    description: `Thoughts on web accessibility, user experience and technology.`,
    siteUrl: `https://jaketracey.com/`,
    social: {
      twitter: `jaketracey`,
    },
  },
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-3PWBCSFDYH`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jake Tracey`,
        short_name: `blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#f8f8f8`,
        display: `standalone`,
        icon: `content/assets/logo.svg`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-transformer-remark",
        options: {
          plugins: [
            {
            resolve: "gatsby-remark-lottie",
            options: {
              // Whether or not to generate static SVG placeholders.
              // If this is false, an empty div will render until
              // the lottie script starts the animation.
              generatePlaceholders: true,
  
              // lottie-web is loaded from CDN to start the animations.
              // This controls which version of the script is loaded.
              lottieVersion: "5.7.1",
  
              // The renderer to use (html, canvas, or svg). The static
              // placeholder will always be an SVG despite this value.
              // See the lottie-web docs: https://github.com/airbnb/lottie-web#html
              renderer: "svg",
  
              // Whether or not to loop the animation.
              // See the lottie-web docs: https://github.com/airbnb/lottie-web#html
              loop: false,
  
              // Whether or not to autoplay the animation on load.
              // See the lottie-web docs: https://github.com/airbnb/lottie-web#html
              autoplay: true
            }
          }]
        }
    }
  ],
}
