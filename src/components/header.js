import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import "../css/global.css"
import "../css/header.css"

const Header = props => {

  // const logoImageData = data.allContentfulNavItem.edges
  console.log("props test", props.logoURI);
  console.log("props test", props.test);
  const logoURI = props.logoURI
  console.log("props", logoURI)
  return (
    <div id="header">
      <a href="#"><img id="logo" src={props.logoImageData}/></a>
      <nav id="nav">
        <a>{props.navItemData[3].node.title}</a>
        <a>{props.navItemData[2].node.title}</a>
        <a>{props.navItemData[1].node.title}</a>
        <a href="#" className="button primary">{props.navItemData[0].node.title}&nbsp; <FontAwesomeIcon icon={faChevronRight} size="xs"/></a>
      </nav>
    </div>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
