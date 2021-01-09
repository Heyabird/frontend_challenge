import React from "react"
import { graphql } from "gatsby"
// import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import Layout from "../components/layout"
import { Highlight } from "../components/highlight"
// import { node } from "prop-types"


const IndexPage = ( {data} ) => (
// const IndexPage = ( props ) => (

  <Layout>
    {/* <img src={data.allContentfulLayoutBackgroundImage.edges[0].node.image.fluid.src}/> */}
    {/* <BackgroundImage
      fluid={props.data.indexImage.childImageSharp.fluid}
    > */}
    <BackgroundImage
      className="background"
      fluid={data.allContentfulLayoutBackgroundImage.edges[0].node.image.fluid}
    >
      Test
      <Highlight/>
    </BackgroundImage>
  </Layout>
)

export default IndexPage

// export const query = graphql`
//   query {
//     indexImage: file(relativePath: { eq: "blue.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 1800) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

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
