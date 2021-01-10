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
    const {navItemArray, logoImageData} = this.props;

    // navItemArray is undefined in the render error during build, so I put this line to prevent false render errors crashing the build process (src: https://stackoverflow.com/a/54742888/14652359)
    if (navItemArray === undefined) return null;

    return (
      <div id="header">
        <a href="#"><img id="logo" src={logoImageData}/></a>
        <nav id="nav">
          <Link to="#">{navItemArray[3]}</Link>
          <Link to="#">{navItemArray[2]}</Link>
          <Link to="#">{navItemArray[1]}</Link>
          <a href="#" className="button primary">{navItemArray[0]}&nbsp; <FontAwesomeIcon icon={faChevronRight} size="xs"/></a>
        </nav>
      </div>
    )
  }
}

