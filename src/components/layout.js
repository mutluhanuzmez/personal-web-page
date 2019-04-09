import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import "../styles/layout.css"


class Layout extends React.Component {

  render() {
    const { title, children } = this.props
    let header
    let navItemStyle = {
      float: "right"
    }

    let titleStyle = {
      float: 'left',
      boxShadow: `none`,
      textDecoration: `none`,
      color: "#CEF",
      paddingLeft: rhythm(6 / 3),
    }

    let labelStyle = {
      float: 'left',
      boxShadow: `none`,
      textDecoration: `none`,
      color: "#CEF",
      paddingLeft: rhythm(6 / 3),
      marginTop: rhythm(2 / 3)
    }


    header = (
      <div className="Header">
        <ul className="Navbar" style={{ paddingRight: rhythm(3 / 4) }}>
          <h1>
            <Link
              style={titleStyle}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <h3>
            <i style={labelStyle}>{"Computer Engineering Student"}</i>
          </h3>

          <li className="NavLi">
            <Link
              to={`/contact`}
            >
              {"Contact"}
            </Link>
          </li>
          <li className="NavLi">
            <Link
              to={`/whoami`}
            >
              {"Who Am I?"}
            </Link>
          </li>
          <li className="NavLi">
            <Link
              to={`/personalStack`}
            >
              {"Personal Stack"}
            </Link>
          </li>
          <li className="NavLi">
            <Link
              to={`/`}
            >
              {"Blog"}
            </Link>
          </li>

        </ul>
      </div>
    )

    return (
      <div>
        <header>{header}</header>
        <main
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(48),
            padding: `${rhythm(1, 5)} ${rhythm(3 / 4)}`
          }}
        >{children}</main>
        <footer>
          {/* © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> */}
        </footer>
      </div>
    )
  }
}

export default Layout;
