import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import "../css/global.css"
import "../css/header.css"

const Header = props => {

  return (
    <div id="header">
      <a href="#"><img id="logo" src={props.logoImageData}/></a>
      <nav id="nav">
        <Link to="#">{props.navItemData[3].node.title}</Link>
        <Link to="#">{props.navItemData[2].node.title}</Link>
        <Link to="#">{props.navItemData[1].node.title}</Link>
        <a href="#" className="button primary">{props.navItemData[0].node.title}&nbsp; <FontAwesomeIcon icon={faChevronRight} size="xs"/></a>
      </nav>
    </div>
  )
}

export default Header
