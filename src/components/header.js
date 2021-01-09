import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

const Header = props => {

  // const logoImageData = data.allContentfulNavItem.edges
  console.log("props test", props.logoURI);
  console.log("props test", props.test);
  const logoURI = props.logoURI
  console.log("props", logoURI)
  return (
  <>
    <header>
      <div
        style={{
          margin: `0 auto`,
          position: 'absolute',
          zIndex: 2,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <p style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              textDecoration: `none`,          
            }}
          >

            {/* <img src={logoImageData}/> */}
          </Link>

          <div
            style={{
              display: `flex`,
              justifyContent: `flex-end`,          
            }}
          >
            <Link>What's included?</Link>
            <Link>Pricing</Link>
            <Link>Sign in</Link>
            <Link>Get Started</Link>
          </div>
        </p>
      </div>
    </header>
  </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

// export const query = graphql`
//   query logoQuery {
//     allContentfulNavItem {
//       edges {
//         node {
//           image {
//             fixed {
//               src
//             }
//           }
//         }
//       }
//     }
//   }
//   `