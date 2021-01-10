import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"
import "../css/highlight.css"
import "../css/global.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const Highlight = (props) => {
  console.log("img src", props.imgSrc)
    // const featureData = data.allContentfulFeature.nodes[0].title
    return (
      <>
        <div id={props.mobileHighlight ? 'mobile-highlight' : null} className="highlight">
          <img className="highlight-image" src={props.imgSrc}/>
          <p className="highlight-title">{props.title}</p>
          <p className="highlight-description">{props.shortDescription}</p>
          <a href="#" className="highlight-learn-more">Learn more <FontAwesomeIcon icon={faChevronRight} size="xs"/></a>
        </div>
      </>
    )
}
