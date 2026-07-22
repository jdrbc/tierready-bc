import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './App.css'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1))
      if (target) {
        target.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <Link to="/" className="brand-lockup" aria-label="TierReady BC home">
          <span className="brand">TierReady</span>
          <span className="mark">BC</span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <Link to="/#how-it-works">Overview</Link>
          <Link to="/#the-cost">The cost</Link>
          <Link to="/workarounds">Workarounds</Link>
          <Link className="nav-cta" to="/#take-action">
            Take action
          </Link>
        </nav>
      </header>
      <Outlet />
      <footer className="site-footer">
        <div className="section-inner">
          <div className="brand">TierReady BC</div>
          <p>
            An advocacy site, not a government service. Alert counts are from{' '}
            <a href="https://www.alertready.ca/alert-count/" rel="noreferrer" target="_blank">
              alertready.ca/alert-count
            </a>
            . Sleep-disruption figures are order-of-magnitude estimates based on stated
            assumptions, not official statistics. Opt-out patterns are qualitative
            observations from public discussion. Policy context:{' '}
            <a
              href="https://www.crtc.gc.ca/eng/archive/2025/2025-180.htm"
              rel="noreferrer"
              target="_blank"
            >
              CRTC proceeding 2025-180
            </a>
            . Find your MLA at{' '}
            <a href="https://www.leg.bc.ca/members" rel="noreferrer" target="_blank">
              leg.bc.ca/members
            </a>
            .
          </p>
          <p>
            <Link to="/">Home</Link>
            {' · '}
            <Link to="/workarounds">Workarounds</Link>
            {' · '}
            <Link to="/#take-action">Contact your MLA &amp; Minister</Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
