import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, description, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
        <span>{description}</span>
      </h1>
    )
  } else {
    header = (
      <div>
      <Link className="header-link-home" to="/">
        {title}
      </Link>
      <span>{description}</span>
      </div>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} - Jake Tracey
      </footer>
    </div>
  )
}

export default Layout
