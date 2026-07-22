export const MINISTER_LETTER = `Dear Minister,

Please have BC use the tiered alert codes already built into modern phones for Alert Ready / Wireless Public Alerting.

Right now every wireless alert uses the highest priority level, no matter the emergency type. That overrides Do Not Disturb and wakes people across the province for alerts they often cannot act on.

Alert fatigue shows up as airplane mode at night, phones off or away from bed, disabling “severe” alerts (which turns off all Canadian wireless alerts), and uninstalling apps that do not actually stop cell-broadcast Alert Ready.

Use distinct codes by alert type: keep mandatory full blast for immediate life threats, and lower tiers for other messages. That keeps the system safer and more trusted.

Sincerely,`

export const MINISTER_EMAIL = 'EMCR.Minister@gov.bc.ca'
export const MINISTER_MAILTO = `mailto:${MINISTER_EMAIL}?subject=${encodeURIComponent(
  'Request: adopt tiered Alert Ready / Wireless Public Alerting in BC',
)}&body=${encodeURIComponent(MINISTER_LETTER)}`
