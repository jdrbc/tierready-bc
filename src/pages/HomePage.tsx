import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../useReveal'
import HeroVisual from '../components/HeroVisual'
import { MINISTER_LETTER, MINISTER_MAILTO } from '../content'

export default function HomePage() {
  const overviewRef = useReveal<HTMLDivElement>()
  const statsRef = useReveal<HTMLDivElement>()
  const actionRef = useReveal<HTMLDivElement>()
  const [copied, setCopied] = useState(false)

  async function copyLetter() {
    try {
      await navigator.clipboard.writeText(MINISTER_LETTER)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <main id="main">
      <section className="hero" aria-label="Campaign introduction">
        <div className="hero-atmosphere" aria-hidden="true" />
        <div className="hero-visual">
          <HeroVisual />
        </div>
        <div className="hero-content">
          <div className="hero-brand">
            TierReady <span>BC</span>
          </div>
          <h1>Every BC Alert Ready message uses maximum priority</h1>
          <p className="hero-support">
            From AMBER to evacuation orders, all wireless alerts override Do Not Disturb
            province-wide. People mute phones, use airplane mode, or stop trusting the next
            warning.
          </p>
          <div className="btn-row">
            <a className="btn btn-primary" href="#take-action">
              Email Minister Kelly Greene
            </a>
            <button type="button" className="btn btn-secondary" onClick={copyLetter}>
              Copy letter
            </button>
          </div>
          <div className="copy-toast hero-toast" role="status" aria-live="polite">
            {copied ? 'Letter copied.' : ''}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section split-sea">
        <div className="section-inner">
          <div className="overview-grid reveal" ref={overviewRef}>
            <div>
              <h2>Tiered alerts BC can adopt now</h2>
              <p className="lede">
                Keep the loudest alerts for immediate life threats. Use Android and iOS
                tiers for local AMBER and other lower-urgency messages so midnight alerts
                go to people near the search, not the whole province.
              </p>
            </div>
            <div className="tier-compare">
              <div className="tier-row bad">
                <strong>BC now</strong>
                <span>All wireless alerts sent at mandatory highest priority.</span>
              </div>
              <div className="tier-row good">
                <strong>On your phone</strong>
                <span>Separate alert tiers already built into Android and iOS.</span>
              </div>
              <div className="tier-row good">
                <strong>U.S.</strong>
                <span>Mandatory national alerts; other tiers user-configurable.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="the-cost" className="section stats-band">
        <div className="section-inner reveal" ref={statsRef}>
          <h2>2026 overnight AMBERs</h2>
          <div className="stats-grid stats-grid-two">
            <article className="stat">
              <div className="stat-value">55</div>
              <div className="stat-label">BC alerts, 2023–2025</div>
              <p className="stat-note">
                alertready.ca tallies: 27, 16, 12. Every alert used top priority.
              </p>
            </article>
            <article className="stat">
              <div className="stat-value">~3M hrs</div>
              <div className="stat-label">Estimated sleep lost</div>
              <p className="stat-note">
                May 11 Terrace and July 22 West Kelowna AMBERs, both province-wide
                overnight. ~2.4M people × ~45 min × 2 alerts.
              </p>
            </article>
          </div>
          <p className="stat-band-note">
            Estimates, not official counts. See <Link to="/workarounds">workarounds</Link>.
          </p>
        </div>
      </section>

      <section id="take-action" className="section action-panel">
        <div className="section-inner reveal" ref={actionRef}>
          <h2>Email Minister Kelly Greene</h2>
          <p className="lede">
            Ask Minister Greene to adopt tiered Alert Ready. Cite CRTC 2025-180. CC your
            MLA.
          </p>
          <div className="action-layout">
            <div className="contact-block">
              <div className="contact-item">
                <h3>EMCR.Minister@gov.bc.ca</h3>
                <div className="btn-row">
                  <a className="btn btn-ink" href={MINISTER_MAILTO}>
                    Open email draft
                  </a>
                  <a
                    className="btn btn-ghost"
                    href="https://www.leg.bc.ca/members"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Find your MLA
                  </a>
                </div>
              </div>
            </div>
            <div className="letter-box">
              <h3>Letter</h3>
              <pre>{MINISTER_LETTER}</pre>
              <button type="button" className="btn btn-ink" onClick={copyLetter}>
                Copy letter
              </button>
              <div className="copy-toast" role="status" aria-live="polite">
                {copied ? 'Copied.' : ''}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
