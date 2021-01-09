import React from "react"
import { graphql } from "gatsby"
// import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import Layout from "../components/layout"
import { Highlight } from "../components/highlight"
import Header from "../components/header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import "../css/index.css"
import "../css/global.css"

// import { node } from "prop-types"


const IndexPage = ({ data }) => {

  const backgroundImageData = data.allContentfulLayoutBackgroundImage.edges[0].node.image.fluid
  const logoImageData = data.allContentfulNavItem.edges[4].node.image.svg.dataURI
  const highlightFeatureData = data.allContentfulLayoutHighlightedFeature.edges[0].node.feature
  const layoutCopyData = data.allContentfulLayoutCopy.edges
  console.log("highlightFeatureData", highlightFeatureData)

  return (
    <div className="index-body">
      <Layout>
        <BackgroundImage
          className="background-image"
          // tag={section}
          fluid={backgroundImageData}
        >
        <img id="logo" src={logoImageData}/>

        <div className="index-middle">
          <div className="hero-copy">
            <p>{layoutCopyData[2].node.subHeadline}</p>
            <h1>{layoutCopyData[2].node.headline}</h1>
            <p>{layoutCopyData[2].node.shortDescription}</p>
          </div>

          <a className="button primary">{layoutCopyData[1].node.ctaTitle} <FontAwesomeIcon icon={faChevronRight} size="xs"/></a>
          <a className="button secondary">{layoutCopyData[0].node.ctaTitle} <FontAwesomeIcon icon={faChevronRight} size="xs"/></a>

          <div className="highlight-section">
            <Highlight title={highlightFeatureData[0].title} imgSrc={highlightFeatureData[0].image.fluid.src} shortDescription={highlightFeatureData[0].shortDescription}/>
            <Highlight title={highlightFeatureData[1].title} imgSrc={highlightFeatureData[1].image.fluid.src} shortDescription={highlightFeatureData[1].shortDescription}/>
            <Highlight title={highlightFeatureData[2].title} imgSrc={highlightFeatureData[2].image.fluid.src} shortDescription={highlightFeatureData[2].shortDescription}/>
          </div>
        </div>
        </BackgroundImage>
      </Layout>
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

    allContentfulLayoutCopy {
      edges {
        node {
          title
          shortDescription
          subHeadline
          headline
          visualStyle
          ctaTitle
          type
        }
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
  
