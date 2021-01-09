import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"
import "../css/highlight.css"

export const Highlight = ({data}) => {
    // const imageData = data.allContentfulLayoutBackgroundImage.edges[0].node.image.fluid

    return (
        <div class="highlight">
          <p class="highlight-title">Augmented Reality</p>
          <p class="highlight-description">An interactive experience like no other.</p>
          <a class="highlight-learn-more">Learn more <i class="fas fa-chevron-right"></i></a>
        </div>
    )
}

export const query = graphql`
  query highlightQuery {
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