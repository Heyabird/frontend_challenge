import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import "../css/global.css"
import "../css/header.css"

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() { 
    // const navItemData = data.allContentfulNavItem.edges
    const {navItemData, logoImageData} = this.props;

    // navItemData is undefined in a false render error during build, so I put this line to prevent false render errors crashing the build process (src: https://stackoverflow.com/a/54742888/14652359)
    if (navItemData === undefined) return null;

    return (
      <div id="header">
        <a href="#"><img id="logo" src={logoImageData}/></a>
        <nav id="nav">
          {navItemData.map(edge => ( 
            <Link to="" className={edge.node.visualStyle==="Blue Button" ? "button primary" : null }>{edge.node.title}</Link>
            ))}
        </nav>
      </div>
    )
  }
}

