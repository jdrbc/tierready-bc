export const MINISTER_LETTER = `Dear Minister,

I am writing to request that BC update our use of Alert Ready to use the tiered coding capabilities already built into modern mobile devices.

Currently, the mandate to send all notifications at the "highest priority" level—regardless of the type of emergency—overrides user settings and "Do Not Disturb" modes.

This leads to alert fatigue and causes many to silence their phones entirely. If you review online discussions of this topic you will see that citizens are showing this exhaustion by:

- disabling the severe alert level (opting out of all alerts since it is not possible to configure each tier),
- keeping phones in airplane mode at night,
- turning phones off at night,
- keeping phones away from the bedside at night,
- or even uninstalling the alerting software entirely

I urge the adoption of tiered alerting make use of the existing distinct codes for each type of alert. This will prevent alert fatigue and make the system more useful and safe.`

export const MINISTER_EMAIL = 'EMCR.Minister@gov.bc.ca'
export const MINISTER_MAILTO = `mailto:${MINISTER_EMAIL}?subject=${encodeURIComponent(
  'Request: adopt tiered Alert Ready / Wireless Public Alerting in BC',
)}&body=${encodeURIComponent(MINISTER_LETTER)}`
