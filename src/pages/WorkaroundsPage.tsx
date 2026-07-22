import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../useReveal'

type Goal = 'sleep' | 'quiet-day' | 'understand' | 'stay-safe'

const GUIDANCE: Record<
  Goal,
  { title: string; body: string; next: string }
> = {
  sleep: {
    title: 'If you need sleep tonight',
    body: 'Airplane mode (or powering the phone off) will block Alert Ready while enabled, because cell broadcast needs a cellular connection. Put a reminder to restore connectivity in the morning. Keeping the phone in another room may help, but the alert can still sound.',
    next: 'These are temporary personal workarounds. The lasting fix is tiered alerts so overnight interruption matches true urgency.',
  },
  'quiet-day': {
    title: 'If you want fewer interruptions during the day',
    body: 'Do Not Disturb is unreliable for Alert Ready—many devices still play the tone. There is no official Canadian setting to keep “true emergencies” while muting other Alert Ready categories, because everything uses the same highest tier.',
    next: 'That missing control is exactly what tiered alerting would restore. Contact your MLA and the Minister from the home page.',
  },
  understand: {
    title: 'If you are trying to uninstall “the alert app”',
    body: 'Alert Ready wireless alerts are not delivered by a consumer app you can uninstall. They arrive via carrier cell broadcast. Removing WeatherCAN, news apps, or local notification apps will not stop Alert Ready.',
    next: 'You can still manage optional app notifications separately. For Alert Ready itself, only connectivity changes (airplane mode / power off) reliably silence it.',
  },
  'stay-safe': {
    title: 'If you want to stay reachable for real emergencies',
    body: 'Keep cellular connectivity on when you can. Learn what an Alert Ready tone means, and keep PreparedBC / local emergency info bookmarked. Blunt workarounds that silence everything also silence the alerts you may need.',
    next: 'Advocate for tiers so the system can stay loud for life-threatening events without exhausting everyone with one-volume-fits-all pings.',
  },
}

export default function WorkaroundsPage() {
  const listRef = useReveal<HTMLDivElement>()
  const assistantRef = useReveal<HTMLDivElement>()
  const [goal, setGoal] = useState<Goal>('sleep')
  const advice = useMemo(() => GUIDANCE[goal], [goal])

  return (
    <main id="main">
      <section className="page-hero">
        <div className="section-inner">
          <h1>What people do when every alert sounds the same</h1>
          <p>
            Alert Ready uses cell broadcast—not apps. Uninstalling weather or news apps
            does not stop Wireless Public Alerting. Some workarounds reduce noise; they
            also reduce your ability to receive legitimate warnings. Tiered alerts are
            the systemic fix.
          </p>
        </div>
      </section>

      <section className="section split-sea">
        <div className="section-inner reveal" ref={listRef}>
          <div className="workaround-list">
            <article className="workaround-item">
              <div>
                <h3>Airplane mode</h3>
                <div className="effect">Stops Alert Ready while enabled</div>
              </div>
              <p>
                Cell broadcast requires an active cellular connection. Airplane mode
                blocks WPA. Many people use this at night—and miss alerts if they forget
                to turn connectivity back on.
              </p>
            </article>
            <article className="workaround-item">
              <div>
                <h3>Power off</h3>
                <div className="effect">No alerts when the phone is off</div>
              </div>
              <p>
                A powered-down phone will not receive WPA. Effective, but you lose all
                reachability until you power back on.
              </p>
            </article>
            <article className="workaround-item">
              <div>
                <h3>Keep the phone away from bed</h3>
                <div className="effect">May reduce sleep disruption; does not stop delivery</div>
              </div>
              <p>
                Moving the phone to another room may help you sleep through audible
                alerts. The alert still arrives; you may simply not hear it in time.
              </p>
            </article>
            <article className="workaround-item">
              <div>
                <h3>Uninstalling apps</h3>
                <div className="effect">Does not stop Alert Ready</div>
              </div>
              <p>
                WPA is delivered by your carrier via cell broadcast, not through optional
                apps. Removing apps may change other notifications, but it will not
                disable Alert Ready. If a settings screen offers “Emergency alerts” or
                “severe” toggles on a U.S.-oriented phone, turning them off can silence
                all Canadian WPA—because Canada uses only the highest tier.
              </p>
            </article>
          </div>

          <div className="assistant reveal" ref={assistantRef}>
            <h3>Guided help</h3>
            <p>
              Pick what you are trying to do. This is on-page guidance—not a substitute
              for official emergency instructions—and it will steer you toward accurate
              options (including when uninstalling will not help).
            </p>
            <div className="assistant-options" role="radiogroup" aria-label="What are you trying to do?">
              {(
                [
                  ['sleep', 'I need uninterrupted sleep tonight'],
                  ['quiet-day', 'I want fewer Alert Ready interruptions'],
                  ['understand', 'I want to uninstall the alerting software'],
                  ['stay-safe', 'I want to stay reachable for real emergencies'],
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
              <p style={{ marginTop: '0.75rem' }}>{advice.next}</p>
            </div>
          </div>

          <p className="note-callout">
            Ready to push for the real fix?{' '}
            <Link to="/#take-action">Email the Minister and contact your MLA</Link>.
          </p>
        </div>
      </section>
    </main>
  )
}
