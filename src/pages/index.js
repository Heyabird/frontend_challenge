import React from "react"
import { graphql } from "gatsby"
// import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import Layout from "../components/layout"
import { Highlight } from "../components/highlight"
import Header from "../components/header"
import "../css/index.css"
import "../css/global.css"

// import { node } from "prop-types"


const IndexPage = ({ data }) => {

  const imageData = data.allContentfulLayoutBackgroundImage.edges[0].node.image.fluid
  const logoImageData = data.allContentfulNavItem.edges[4].node.image.svg.dataURI
  const highlightFeatureData = data.allContentfulLayoutHighlightedFeature.edges[0].node.feature.title
  console.log("highlightFeatureData", highlightFeatureData)

  return (
    <div className="index-body">
      <Layout>
        <BackgroundImage
          className="background-image"
          // tag={section}
          fluid={imageData}
        >
        <img id="logo" src={logoImageData}/>

        <div className="index-middle">
          <div className="hero-copy">
            <p>America's #1 Rated Adventure Platform</p>
            <h1>Take control of your weekends</h1>
            <p>Find adventure anywhere.</p>
          </div>

          <a className="button primary">Get started</a>
          <a className="button secondary">Request a demo</a>

          <div className="highlight-section">
            <Highlight title={highlightFeatureData}/>
            <Highlight/>
            <Highlight/>
          </div>
        </div>
        </BackgroundImage>
      </Layout>
      {/* <Header logoURI={logoImageData} test="test"/> */}
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query myQuery {
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

    allContentfulNavItem {
      edges {
        node {
          image {
            svg {
              dataURI
            }
          }
        }
      }
    }

    allContentfulFeature {
      nodes {
        image {
          fluid {
            src
          }
        }
        title
        shortDescription
      }
    }

    allContentfulLayoutHighlightedFeature {
      edges {
        node {
          feature {
            title
            shortDescription
            image {
              fluid {
                src
              }
            }
          }
        }
      }
    }

  }
  
  `
  
