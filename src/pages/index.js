import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"


const IndexPage = ( {data} ) => (
  <Layout>
    <h1>{data.allContentfulLayoutBackgroundImage.edges.[0].node.title}</h1>
  </Layout>
)

export default IndexPage

export const query = graphql`query MyQuery {
  allContentfulLayoutBackgroundImage {
    edges {
      node {
        title
      }
    }
  }
}`
