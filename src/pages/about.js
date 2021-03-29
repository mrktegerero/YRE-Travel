import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero3 from "../components/Hero/Hero3"
import Team from "../components/Team/Team"

const about = () => (
  <Layout>
    <SEO title="Team" />
    <Hero3 />
    <Team />
  </Layout>
)

export default about
