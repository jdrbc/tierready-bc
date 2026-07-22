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

export const CRTC_COMPLAINT_URL =
  'https://applications.crtc.gc.ca/question/eng/public-inquiries-form'

export const EMCR_CONTACTS_URL =
  'https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/ministries/emergency-management-and-climate-readiness/emergency-management-and-climate-readiness-ministry-contacts'

export const SERVICE_BC_EMAIL = 'ServiceBC@gov.bc.ca'

export const BC_COMPLAINT_LETTER = `Subject: Feedback on overnight province-wide Alert Ready / AMBER Alert targeting

I am writing about Alert Ready wireless alerts issued for British Columbia.

On [DATE/TIME], I received a province-wide AMBER / emergency alert while in [YOUR CITY/AREA]. The incident described was about [ALERT LOCATION]. I could not usefully act on it overnight from where I was.

The alert overrode Do Not Disturb / silent settings at full volume. This is a recurring pattern: Canada sends every wireless Alert Ready message at the highest non-opt-out priority, and BC AMBER Alerts are often province-wide.

Please:
1. Narrow geo-targeting for AMBER and similar alerts to areas where the public can reasonably help that night.
2. Support tiered Wireless Public Alerting so immediate life threats stay mandatory and loud, while other alerts can use lower tiers phones already support.
3. Coordinate with police services that issue AMBER Alerts and with federal partners / CRTC proceeding 2025-180.

I support helping find endangered children. Province-wide midnight full-blast alerts far from the search area reduce trust and push people toward airplane mode.

Sincerely,
[YOUR NAME]
[CITY]`

export const BC_COMPLAINT_MAILTO = `mailto:${MINISTER_EMAIL}?cc=${encodeURIComponent(
  SERVICE_BC_EMAIL,
)}&subject=${encodeURIComponent(
  'Feedback on overnight province-wide Alert Ready / AMBER Alert targeting',
)}&body=${encodeURIComponent(BC_COMPLAINT_LETTER)}`
