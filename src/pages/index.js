import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { Highlight } from "../components/highlight"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import BackgroundImage from 'gatsby-background-image'
import "../css/index.css"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {

  // store esssential contentful data
  const backgroundImageData = data.contentfulLayoutBackgroundImage.image.fluid
  const logoImageData = data.contentfulLogo.image.svg.dataURI
  const navItemData = data.allContentfulNavItem.edges
  const highlightFeatureData = data.contentfulLayoutHighlightedFeature.feature
  const layoutCopyData = data.contentfulLayoutCopy

  return (
    <Layout>
      <div className="index-body">
        <BackgroundImage className="background-image" fluid={backgroundImageData}>
          <div className="background-overlay"></div>

          <Header logoImageData={logoImageData} navItemData={navItemData}/>

          <div className="index-middle">
            <div className="hero-copy">
              <p className="subheadline">{layoutCopyData.subHeadline}</p>
              <h1 className="headline">{layoutCopyData.headline}</h1>
              <p className="short-description">{layoutCopyData.shortDescription}</p>
              <Link 
                to="#" 
                className="button primary">
                  {layoutCopyData.ctaTitle}<FontAwesomeIcon icon={faChevronRight} size="xs" className="bracket-on"/>
              </Link>
              <Link 
                to="#" className="button secondary">
                  {layoutCopyData.ctaTitle2}<FontAwesomeIcon icon={faChevronRight} size="xs" className="bracket-on"/>
              </Link>
            </div>

            <div className="highlight-section">
              {highlightFeatureData.map(data => (
                // because the mobile phone image needs styling different from the helicopoter and VR headset images, I put in a bool prop value to check if its the mobile image
                <Highlight 
                  title={data.title} 
                  imgSrc={data.image.fluid.src} 
                  shortDescription={data.shortDescription} 
                  mobile={data.title === "Mobile" ? true : null}/>
              ))}
            </div>
          </div>

          {/* dummy-square as a ruler from the bottom */}
          {/* <div className="dummy-square">hello</div> */}

        </BackgroundImage>
      </div>
    </Layout>
  )
}


export default IndexPage

export const query = graphql`
  query myQuery {
    contentfulLayoutBackgroundImage {
      image {
        fluid {
          src
        }
        title
      }
    }

    contentfulLogo {
      image {
        svg {
          dataURI
        }
        title
      }
    }

    allContentfulNavItem (sort: {fields: [order], order: ASC}) {
      edges {
        node {
          title
          visualStyle
        }
      }
    }
    
    contentfulLayoutCopy {
      title
      headline
      subHeadline
      shortDescription
      ctaTitle
      ctaTitle2
    }

    contentfulLayoutHighlightedFeature {
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
  
  `
  
