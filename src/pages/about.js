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
      <h1 class="about-heading">Hello, I'm Jake Tracey, developer and founder of <a href="https://noice.net.au">Noice</a>, a digital agency in Melbourne, Australia.</h1>
      <p><img className="about-picture" src={me} alt="Jake Tracey" /></p>
      <p>At <a href="https://noice.net.au">Noice</a>, my team and I help clients design, build and ship digital products — from early ideas through to launch and beyond. I've spent more than 15 years as a front-end developer across industries like banking, healthcare, gaming and streaming, and these days I split my time between hands-on engineering and running the business.</p>
      <p>I care a lot about craft — about software that's well-made, fast, and considered. Human-computer interaction, user experience, and the occasional foray into virtual reality are the threads that have run through my whole career.</p>
      <p>Outside of work, I'm a bit of a foodie and spend most weekends hiking with my partner Rihana and our dog Bean.</p>
      <p>Want to work together? Take a look at what we do at <a href="https://noice.net.au">noice.net.au</a>, connect with me on <a href="https://www.linkedin.com/in/jaketracey/">LinkedIn</a>, or <a href="mailto:me@jaketracey.com">send me an email</a>.</p>
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
