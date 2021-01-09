import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import "../css/global.css"


const Header = props => {

  // const logoImageData = data.allContentfulNavItem.edges
  console.log("props test", props.logoURI);
  console.log("props test", props.test);
  const logoURI = props.logoURI
  console.log("props", logoURI)
  return (
  <>

        <img id="logo" src={props.logoImageData}/>
        <nav id="nav">
          <a>{props.navItemData[3].node.title}</a>
          <a>{props.navItemData[2].node.title}</a>
          <a>{props.navItemData[1].node.title}</a>
          <a href="#" class="button primary">{props.navItemData[0].node.title} <FontAwesomeIcon icon={faChevronRight} size="xs"/></a>
        </nav>
  </>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
