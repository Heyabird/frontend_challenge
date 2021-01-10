import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import Layout from "../components/layout"
import { Highlight } from "../components/highlight"
import Header from "../components/header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Helmet } from "react-helmet";
import "../css/index.css"
import "../css/global.css"

const IndexPage = ({ data }) => {

  const backgroundImageData = data.allContentfulLayoutBackgroundImage.edges[0].node.image.fluid
  const logoImageData = data.allContentfulNavItem.edges[4].node.image.svg.dataURI
  const navItemData = data.allContentfulNavItem.edges
  const highlightFeatureData = data.allContentfulLayoutHighlightedFeature.edges[0].node.feature
  const layoutCopyData = data.allContentfulLayoutCopy.edges
  console.log("highlightFeatureData", highlightFeatureData)

  return (
    <div className="index-body">
      {/* <Layout> */}
        <BackgroundImage
          className="background-image"
          fluid={backgroundImageData}
        >

        <div class="background-overlay background-overlay2"></div>

        <Header logoImageData={logoImageData} navItemData={navItemData}/>
        <div className="index-middle">
          <div className="hero-copy">
            <p className="subheadline">{layoutCopyData[0].node.subHeadline}</p>
            <h1 className="headline">{layoutCopyData[0].node.headline}</h1>
            <p>{layoutCopyData[0].node.shortDescription}</p>
          </div>

          <a href="#" className="button primary">{layoutCopyData[2].node.ctaTitle} <FontAwesomeIcon icon={faChevronRight} size="xs"/></a>
          <a href="#" className="button secondary">{layoutCopyData[1].node.ctaTitle} <FontAwesomeIcon icon={faChevronRight} size="xs"/></a>

          <div className="highlight-section">
            <Highlight title={highlightFeatureData[0].title} imgSrc={highlightFeatureData[0].image.fluid.src} shortDescription={highlightFeatureData[0].shortDescription}/>
            <Highlight title={highlightFeatureData[1].title} imgSrc={highlightFeatureData[1].image.fluid.src} shortDescription={highlightFeatureData[1].shortDescription}/>
            <Highlight title={highlightFeatureData[2].title} imgSrc={highlightFeatureData[2].image.fluid.src} shortDescription={highlightFeatureData[2].shortDescription}/>
          </div>
        </div>
        <div className="dummy-square">hello</div>

        </BackgroundImage>
      {/* </Layout> */}
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
          link
          title
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
  
