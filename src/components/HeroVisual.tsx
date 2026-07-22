export default function HeroVisual() {
  return (
    <svg
      className="phone-frame"
      viewBox="0 0 320 560"
      role="img"
      aria-label="Illustration of a phone showing an emergency alert that overrides quiet hours"
    >
      <defs>
        <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f2f35" />
          <stop offset="100%" stopColor="#06181c" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect x="28" y="18" width="264" height="524" rx="36" fill="#1a2e32" />
      <rect x="38" y="30" width="244" height="500" rx="28" fill="url(#screenGrad)" />
      <rect x="128" y="42" width="64" height="10" rx="5" fill="#0a1f23" />

      <text
        x="160"
        y="92"
        textAnchor="middle"
        fill="rgba(247,251,251,0.55)"
        fontFamily="Bricolage Grotesque, sans-serif"
        fontSize="18"
        fontWeight="700"
      >
        2:17 AM
      </text>

      <g className="phone-pulse" filter="url(#glow)">
        <rect x="58" y="130" width="204" height="210" rx="16" fill="#14525c" />
        <rect x="58" y="130" width="204" height="8" rx="4" fill="#f2b84b" />
        <text
          x="160"
          y="178"
          textAnchor="middle"
          fill="#f2b84b"
          fontFamily="Bricolage Grotesque, sans-serif"
          fontSize="15"
          fontWeight="800"
        >
          EMERGENCY ALERT
        </text>
        <text
          x="160"
          y="200"
          textAnchor="middle"
          fill="rgba(247,251,251,0.7)"
          fontFamily="Bricolage Grotesque, sans-serif"
          fontSize="12"
          fontWeight="600"
        >
          ALERTE D&apos;URGENCE
        </text>
        <text
          x="74"
          y="240"
          fill="#e8f2f3"
          fontFamily="Source Serif 4, Georgia, serif"
          fontSize="14"
        >
          Highest priority.
        </text>
        <text
          x="74"
          y="262"
          fill="#e8f2f3"
          fontFamily="Source Serif 4, Georgia, serif"
          fontSize="14"
        >
          Same code for every
        </text>
        <text
          x="74"
          y="284"
          fill="#e8f2f3"
          fontFamily="Source Serif 4, Georgia, serif"
          fontSize="14"
        >
          alert type. Overrides
        </text>
        <text
          x="74"
          y="306"
          fill="#e8f2f3"
          fontFamily="Source Serif 4, Georgia, serif"
          fontSize="14"
        >
          Do Not Disturb.
        </text>
      </g>

      <g opacity="0.9">
        <rect x="58" y="370" width="204" height="54" rx="10" fill="rgba(247,251,251,0.06)" />
        <text
          x="74"
          y="393"
          fill="rgba(247,251,251,0.55)"
          fontFamily="Bricolage Grotesque, sans-serif"
          fontSize="12"
          fontWeight="700"
        >
          Quiet hours: ON
        </text>
        <text
          x="74"
          y="412"
          fill="rgba(247,251,251,0.75)"
          fontFamily="Source Serif 4, Georgia, serif"
          fontSize="13"
        >
          Still interrupted
        </text>
      </g>

      <rect x="138" y="500" width="44" height="5" rx="2.5" fill="rgba(247,251,251,0.25)" />
    </svg>
  )
}
