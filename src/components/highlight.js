import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import "../css/highlight.css"
import "../css/global.css"

export const Highlight = (props) => {

  return (
    <>
      <div id={props.mobile ? 'mobile-highlight' : null} className="highlight">
        <img className="highlight-image" src={props.imgSrc}/>
        <p className="highlight-title">{props.title}</p>
        <p className="highlight-description">{props.shortDescription}</p>
        <Link to="#" className="highlight-learn-more">Learn more&nbsp; <FontAwesomeIcon icon={faChevronRight} size="xs"/></Link>
      </div>
    </>
  )
}
