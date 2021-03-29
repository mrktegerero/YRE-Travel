import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero/Hero"
import Destination from "../components/Destination/Destination"
import Team from "../components/Team/Team"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Destination />
    <Team />
  </Layout>
)

export default IndexPage
