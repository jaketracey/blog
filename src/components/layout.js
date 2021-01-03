import React from "react"
import { Link } from "gatsby"
import Animation from '../components/animations';
import logo from "../../content/assets/logo.json";

const Layout = ({ location, title, description, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Animation animation={logo} loop={false} />
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
      <a class="skip-to-content-link" href="#main-content">
        Skip to content
      </a>
      <header className="global-header">{header}</header>
      <main id="main-content">{children}</main>
      <footer className="main-footer">
        <nav class="links" aria-label="Personal links">
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="https://twitter.com/jaketracey">Twitter</a></li>
            <li><a href="https://linkedin.com/in/jaketracey">LinkedIn</a></li>
          </ul>
        </nav>
        <p>All great deeds and all great thoughts have a ridiculous beginning. Great works are often born on a street corner or in a restaurant's revolving door. - Albert Camus</p>
      </footer>
    </div>
  )
}

export default Layout
