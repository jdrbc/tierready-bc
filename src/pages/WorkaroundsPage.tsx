import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../useReveal'

type Goal = 'sleep' | 'quiet-day' | 'understand' | 'stay-safe'

const GUIDANCE: Record<Goal, { title: string; body: string }> = {
  sleep: {
    title: 'Need sleep tonight',
    body: 'Airplane mode or powering off blocks Alert Ready while enabled (cell broadcast needs a cellular link). Set a morning reminder to reconnect. Another room may help you sleep through the tone; the alert still arrives.',
  },
  'quiet-day': {
    title: 'Want fewer interruptions',
    body: 'Do Not Disturb often fails for Alert Ready. Canada has no setting to keep true emergencies while muting other Alert Ready categories—everything uses the same top tier. That control is what tiered alerting would add.',
  },
  understand: {
    title: 'Trying to uninstall “the alert app”',
    body: 'Alert Ready is cell broadcast from your carrier, not a consumer app. Removing WeatherCAN or local alert apps will not stop it. Only airplane mode or power off reliably silences WPA.',
  },
  'stay-safe': {
    title: 'Stay reachable for real emergencies',
    body: 'Keep cellular on when you can. Blunt workarounds that silence everything also silence the alerts you may need. Push for tiers so life-threatening warnings can stay loud without one volume for every message.',
  },
}

export default function WorkaroundsPage() {
  const listRef = useReveal<HTMLDivElement>()
  const [goal, setGoal] = useState<Goal>('sleep')
  const advice = useMemo(() => GUIDANCE[goal], [goal])

  return (
    <main id="main">
      <section className="page-hero">
        <div className="section-inner">
          <h1>Workarounds when every alert sounds the same</h1>
          <p>
            Alert Ready uses cell broadcast. Uninstalling apps does not stop it.
            Workarounds cut noise and also cut real warnings. Tiers fix the system.
          </p>
        </div>
      </section>

      <section className="section split-sea">
        <div className="section-inner reveal" ref={listRef}>
          <div className="workaround-list">
            <article className="workaround-item">
              <div>
                <h3>Airplane mode</h3>
                <div className="effect">Stops Alert Ready while on</div>
              </div>
              <p>
                Blocks cell broadcast. Common at night—and you miss alerts until you
                reconnect.
              </p>
            </article>
            <article className="workaround-item">
              <div>
                <h3>Power off</h3>
                <div className="effect">No alerts while off</div>
              </div>
              <p>Works. You are unreachable until the phone is on again.</p>
            </article>
            <article className="workaround-item">
              <div>
                <h3>Phone away from bed</h3>
                <div className="effect">May help sleep; does not stop delivery</div>
              </div>
              <p>The alert still arrives. You may not hear it in time.</p>
            </article>
            <article className="workaround-item">
              <div>
                <h3>Uninstalling apps</h3>
                <div className="effect">Does not stop Alert Ready</div>
              </div>
              <p>
                WPA is carrier cell broadcast. On some U.S.-oriented phones, turning off
                “severe” or emergency toggles can silence all Canadian WPA because Canada
                uses only the highest tier.
              </p>
            </article>
          </div>

          <div className="assistant">
            <h3>Quick help</h3>
            <p>What are you trying to do?</p>
            <div
              className="assistant-options"
              role="radiogroup"
              aria-label="What are you trying to do?"
            >
              {(
                [
                  ['sleep', 'Uninterrupted sleep tonight'],
                  ['quiet-day', 'Fewer Alert Ready interruptions'],
                  ['understand', 'Uninstall the alerting software'],
                  ['stay-safe', 'Stay reachable for real emergencies'],
                ] as const
              ).map(([value, label]) => (
                <label key={value}>
                  <input
                    type="radio"
                    name="goal"
                    value={value}
                    checked={goal === value}
                    onChange={() => setGoal(value)}
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
            <div className="assistant-result" aria-live="polite">
              <strong>{advice.title}</strong>
              <p>{advice.body}</p>
            </div>
          </div>

          <p className="note-callout">
            <Link to="/#take-action">Email the Minister and your MLA</Link> for the system
            fix.
          </p>
        </div>
      </section>
    </main>
  )
}
