import React from "react"
import { graphql } from "gatsby"
// import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import Layout from "../components/layout"
import { Highlight } from "../components/highlight"
// import { node } from "prop-types"


const IndexPage = ( {data} ) => {
  const imageData = data.allContentfulLayoutBackgroundImage.edges[0].node.image.fluid
  return (
    <Layout>
      <BackgroundImage
        className="background"
        tag={section}
        fluid={imageData}
      >
        Test
        <Highlight/>

      </BackgroundImage>
    </Layout>
  )
}

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
