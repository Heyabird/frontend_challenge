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

  return (
    <>
      <Layout>
        <BackgroundImage
          className="background"
          // tag={section}
          fluid={imageData}
        >
        <img id="logo" src={logoImageData}/>

        <div class="index-body">
          <div class="hero-copy">
            <p>America's #1 Rated Adventure Platform</p>
            <h1>Take control of your weekends</h1>
            <p>Find adventure anywhere.</p>
          </div>

          <a class="button primary">Get started</a>
          <a class="button secondary">Request a demo</a>

          <div class="highlight-section">
            <Highlight/>
            <Highlight/>
            <Highlight/>
          </div>
        </div>
        </BackgroundImage>
      </Layout>
      <Header logoURI={logoImageData} test="test"/>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query backgroundQuery {
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

  }
  
  `
  
