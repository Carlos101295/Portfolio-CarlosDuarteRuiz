import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="brand">
        carlos-duarte-ruiz<span className="dot">.</span>dev
      </Link>
      <nav>
        <a
          href="https://github.com/Carlos101295"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <img src="/images/github.png" alt="" className="social-icon icon-github" />
          github.com/Carlos101295
        </a>
      </nav>
    </header>
  )
}
