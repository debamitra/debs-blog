import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee  } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          &#8592; Back to Home
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer
          style={{
            marginTop: 70,
          }}
        >
          © {new Date().getFullYear()},
          {` `}
          <a style={{ fontWeight: 900, boxShadow: 'none' }} href="https://twitter.com/debamitra_">
            Debamitra Mukherjee
          </a>
        </footer>
    </div>
  )
}

export default Layout
