import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../App'
import HeroVisual from '../components/HeroVisual'
import { MINISTER_EMAIL, MINISTER_LETTER, MINISTER_MAILTO } from '../content'

export default function HomePage() {
  const overviewRef = useReveal<HTMLDivElement>()
  const problemRef = useReveal<HTMLDivElement>()
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
          <h1>Use the tiers. Protect the signal.</h1>
          <p className="hero-support">
            BC sends every Alert Ready message at the highest, non-opt-out
            priority—overriding Do Not Disturb and training people to tune out.
            Modern phones already support tiered alerts; we should use them.
          </p>
          <div className="btn-row">
            <a className="btn btn-primary" href="#take-action">
              Email the Minister
            </a>
            <a className="btn btn-secondary" href="#how-it-works">
              Learn how it works
            </a>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section split-sea">
        <div className="section-inner">
          <div className="overview-grid reveal" ref={overviewRef}>
            <div>
              <h2>Alerts should match the emergency</h2>
              <p className="lede">
                Wireless Public Alerting can deliver different alert types at different
                priority levels. In the United States, only the National/Presidential
                level is mandatory; AMBER, Severe, and Extreme alerts can be configured.
                In Canada, WPAS currently sends all messages at the highest non-opt-out
                level—the Presidential equivalent. Every Alert Ready notification arrives
                with the same urgency.
              </p>
              <p className="lede">
                Tiered alerting is not a downgrade of safety. It keeps critical warnings
                audible while reducing the fatigue that makes people silence their phones
                entirely.
              </p>
            </div>
            <div className="tier-compare">
              <div className="tier-row bad">
                <strong>Canada now</strong>
                <span>
                  One mandatory highest-priority code for every Alert Ready wireless alert.
                </span>
              </div>
              <div className="tier-row good">
                <strong>Phones support</strong>
                <span>
                  Distinct CMAS/WEA tiers already built into modern Android and iOS devices.
                </span>
              </div>
              <div className="tier-row good">
                <strong>U.S. model</strong>
                <span>
                  Mandatory national alerts; optional configuration for AMBER and threat
                  tiers.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section split-mist">
        <div className="section-inner reveal" ref={problemRef}>
          <h2>One siren for everything</h2>
          <p className="lede">
            When every alert uses the top priority code, phones treat them all the same:
            loud, intrusive, and impossible to filter. On many devices, Alert Ready
            overrides Do Not Disturb. That matters at night—and during the day, when
            repeated high-priority pings teach people that “emergency” does not always
            mean “act now.”
          </p>
          <ul className="problem-list">
            <li>No per-type control when everything is sent at the mandatory level.</li>
            <li>
              People who want fewer overnight interruptions often silence all wireless
              alerts—or put phones in airplane mode.
            </li>
            <li>
              The CRTC is reviewing improvements to the National Public Alerting System
              (proceeding 2025-180). BC should push for tiered standards devices already
              support.
            </li>
          </ul>
          <p className="note-callout">
            Looking for sleep tonight? See{' '}
            <Link to="/workarounds">temporary workarounds</Link>—and why they are a blunt
            substitute for tiered alerts.
          </p>
        </div>
      </section>

      <section id="the-cost" className="section stats-band">
        <div className="section-inner reveal" ref={statsRef}>
          <h2>The cost of a single-tier system</h2>
          <p className="lede">
            Alert Ready is valuable. Sending every message at maximum intrusion is what
            burns trust. Here is what we can measure—and what we can only estimate.
          </p>
          <div className="stats-grid">
            <article className="stat">
              <div className="stat-value">55</div>
              <div className="stat-label">BC Alert Ready alerts, 2023–2025</div>
              <div className="stat-years">
                <span>
                  <em>27</em> in 2023
                </span>
                <span>
                  <em>16</em> in 2024
                </span>
                <span>
                  <em>12</em> in 2025
                </span>
              </div>
              <p className="stat-note">
                Verified provincial totals from Alert Ready’s public alert count. Each
                arrives at the same highest wireless priority.
              </p>
            </article>
            <article className="stat">
              <div className="stat-value">~1M+</div>
              <div className="stat-label">Estimated person-nights disrupted</div>
              <p className="stat-note">
                Order-of-magnitude estimate: roughly ~8 overnight-disruptive alerts over
                three years × ~500k–1.5M devices in reach × ~60% audible despite Do Not
                Disturb. Not an official census—meant to show scale.
              </p>
            </article>
            <article className="stat">
              <div className="stat-value">?</div>
              <div className="stat-label">Opt-outs &amp; “boy who cried wolf” workarounds</div>
              <p className="stat-note">
                No official BC survey. Public discussion shows airplane mode at night,
                phones off or away from bed, attempts to disable severe alerts (which
                silences all WPA), and uninstalling apps—which does not stop cell-broadcast
                Alert Ready.
              </p>
              <span className="coming-soon">Self-reported tracker — coming later</span>
            </article>
          </div>
        </div>
      </section>

      <section id="take-action" className="section action-panel">
        <div className="section-inner reveal" ref={actionRef}>
          <h2>Ask BC to adopt tiered Alert Ready</h2>
          <p className="lede">
            Tell the Minister and your MLA that modern phones already support tiers—and
            that BC should use them so real emergencies still cut through.
          </p>
          <div className="action-layout">
            <div className="contact-block">
              <div className="contact-item">
                <h3>Email the Minister</h3>
                <p>
                  Hon. Kelly Greene
                  <br />
                  Minister of Emergency Management and Climate Readiness
                  <br />
                  <a href={`mailto:${MINISTER_EMAIL}`}>{MINISTER_EMAIL}</a>
                </p>
                <div className="btn-row">
                  <a className="btn btn-ink" href={MINISTER_MAILTO}>
                    Open email draft
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <h3>Contact your MLA</h3>
                <p>
                  Find your representative and ask them to support tiered Wireless Public
                  Alerting—and to reference CRTC proceeding 2025-180.
                </p>
                <div className="btn-row">
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
              <h3>Letter you can send</h3>
              <pre>{MINISTER_LETTER}</pre>
              <button type="button" className="btn btn-ink" onClick={copyLetter}>
                Copy letter
              </button>
              <div className="copy-toast" role="status" aria-live="polite">
                {copied ? 'Copied to clipboard.' : ''}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
