import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"
import "../css/highlight.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const Highlight = (props) => {
  console.log("props title", props.title)
    // const featureData = data.allContentfulFeature.nodes[0].title

    return (
        <div className="highlight">
          <p className="highlight-title">{props.title}</p>
          <p className="highlight-description">An interactive experience like no other.</p>
          <a className="highlight-learn-more">Learn more <FontAwesomeIcon icon={faChevronRight} size="xs"/></a>
        </div>
    )
}
