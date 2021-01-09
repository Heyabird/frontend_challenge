import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import { node } from "prop-types"


const IndexPage = ( {data} ) => (
  <Layout>
    <img src={data.allContentfulLayoutBackgroundImage.edges[0].node.image.fluid.src}/>
  </Layout>
)

export default IndexPage

export const query = graphql`query MyQuery {
  allContentfulLayoutBackgroundImage {
    edges {
      node {
        title
        image {
          fluid {
            src
          }
        }
      }
    }
  }
}

`
