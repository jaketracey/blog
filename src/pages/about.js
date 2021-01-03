import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import me from "../../content/assets/me.png";

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <h1 class="about-heading">Hello, I'm Jake Tracey, developer and accessibility consultant from Melbourne, Australia.</h1>
      <p><img className="about-picture" src={me} alt="Jake Tracey" /></p>
      <p>My passions are in human computer interaction, user experience, accessibility and virtual reality. For over 15 years I've worked professionally as a front-end developer designing and implementing applications for a variety of industries, from banking, healthcare to gaming and streaming services.</p>
      <p>With the team over at <a href="https://noice.work">Noice</a>, we provide user experience, web development and accessibility consulting.</p>
      <p>I'm also a bit of a foodie and enjoy hiking with my partner, Rihana and our dog, Bean.</p>
      <p>If you're interested in getting in touch, feel free to <a href="mailto:me@jaketracey.com">send me an email</a> or connect with me on Twitter, <a href="https://twitter.com/jaketracey">@jaketracey</a> or on <a href="https://www.linkedin.com/in/jaketracey/">LinkedIn</a>.</p>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
