import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"
import "../css/highlight.css"

export const Highlight = ({data}) => {
    // const imageData = data.allContentfulLayoutBackgroundImage.edges[0].node.image.fluid

    return (
        <div class="highlight">
            <h2>Highlight Feature</h2>
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