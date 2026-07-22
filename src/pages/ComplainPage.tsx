import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../useReveal'
import {
  BC_COMPLAINT_LETTER,
  BC_COMPLAINT_MAILTO,
  CRTC_COMPLAINT_URL,
  EMCR_CONTACTS_URL,
  MINISTER_EMAIL,
  SERVICE_BC_EMAIL,
} from '../content'

export default function ComplainPage() {
  const guideRef = useReveal<HTMLDivElement>()
  const [copied, setCopied] = useState(false)

  async function copyBcLetter() {
    try {
      await navigator.clipboard.writeText(BC_COMPLAINT_LETTER)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <main id="main">
      <section className="page-hero">
        <div className="section-inner">
          <h1>File a complaint</h1>
          <p>
            Carriers must distribute Alert Ready because the CRTC requires it. Issuing
            agencies draw the map. File both if an overnight province-wide alert reached you
            far from the search.
          </p>
        </div>
      </section>

      <section className="section split-sea">
        <div className="section-inner reveal" ref={guideRef}>
          <div className="complaint-grid">
            <article className="complaint-card">
              <h2>1. CRTC</h2>
              <p>
                Start with the CRTC public inquiries / complaint form. Client Services
                triages telecom and broadcasting complaints, including wireless public
                alerting. Pick the emergency alerting / wireless public alert path if the
                form offers it.
              </p>
              <div className="btn-row">
                <a
                  className="btn btn-ink"
                  href={CRTC_COMPLAINT_URL}
                  rel="noreferrer"
                  target="_blank"
                >
                  Open CRTC complaint form
                </a>
              </div>
              <h3>What to put in the CRTC complaint</h3>
              <ul className="complaint-list">
                <li>Date and time of the alert(s)</li>
                <li>Your general location vs. where the alert was about</li>
                <li>Whether it bypassed silent / Do Not Disturb</li>
                <li>That this is recurring, not a one-off</li>
              </ul>
              <p className="complaint-note">
                Geo-targeting that wakes people hundreds of kilometres away is a technical
                complaint, not just annoyance. Volume/timing that ignores phone settings is
                a known CRTC-tracked theme. Asking to “turn alerts off at night” has less
                traction than targeting, DND override, and tiered priorities.
              </p>
            </article>

            <article className="complaint-card">
              <h2>2. BC emergency authority</h2>
              <p>
                The CRTC regulates carrier distribution. Issuers decide how wide the
                polygon is. For provincial practice and targeting, write EMCR (and CC
                Service BC). AMBER Alerts are issued by police (often BC RCMP)—say that in
                your note and ask EMCR to press for tighter targeting and tiered codes.
              </p>
              <p>
                Minister: <a href={`mailto:${MINISTER_EMAIL}`}>{MINISTER_EMAIL}</a>
                <br />
                General: <a href={`mailto:${SERVICE_BC_EMAIL}`}>{SERVICE_BC_EMAIL}</a>
              </p>
              <div className="btn-row">
                <a className="btn btn-ink" href={BC_COMPLAINT_MAILTO}>
                  Open BC email draft
                </a>
                <a
                  className="btn btn-ghost"
                  href={EMCR_CONTACTS_URL}
                  rel="noreferrer"
                  target="_blank"
                >
                  EMCR contacts
                </a>
              </div>
            </article>
          </div>

          <div className="letter-box complaint-letter">
            <h3>BC complaint draft</h3>
            <pre>{BC_COMPLAINT_LETTER}</pre>
            <button type="button" className="btn btn-ink" onClick={copyBcLetter}>
              Copy BC draft
            </button>
            <div className="copy-toast" role="status" aria-live="polite">
              {copied ? 'Copied.' : ''}
            </div>
          </div>

          <p className="note-callout">
            After you file, also{' '}
            <Link to="/#take-action">email Minister Kelly Greene and your MLA</Link> about
            tiered Alert Ready.
          </p>
        </div>
      </section>
    </main>
  )
}
