export const ResearchPattern = () => (
  <svg
    viewBox="0 0 200 200"
    className="absolute right-4 bottom-4 h-40 w-40 origin-bottom-right opacity-10 transition-all duration-500 ease-out group-hover:scale-150 group-hover:rotate-6 group-hover:opacity-20"
  >
    {/* DNA Helix */}
    <path
      fill="currentColor"
      d="M60,20 Q100,60 60,100 Q20,140 60,180"
      strokeWidth="4"
      stroke="currentColor"
      fill="none"
    />
    <path
      fill="currentColor"
      d="M140,20 Q100,60 140,100 Q180,140 140,180"
      strokeWidth="4"
      stroke="currentColor"
      fill="none"
    />
    {/* Connecting lines */}
    <line x1="60" y1="40" x2="140" y2="40" stroke="currentColor" strokeWidth="4" />
    <line x1="60" y1="80" x2="140" y2="80" stroke="currentColor" strokeWidth="4" />
    <line x1="60" y1="120" x2="140" y2="120" stroke="currentColor" strokeWidth="4" />
    <line x1="60" y1="160" x2="140" y2="160" stroke="currentColor" strokeWidth="4" />
    {/* Molecules */}
    <circle cx="60" cy="40" r="6" fill="currentColor" />
    <circle cx="140" cy="80" r="6" fill="currentColor" />
    <circle cx="60" cy="120" r="6" fill="currentColor" />
    <circle cx="140" cy="160" r="6" fill="currentColor" />
  </svg>
)

export const PatientCarePattern = () => (
  <svg
    viewBox="0 0 200 200"
    className="absolute right-4 bottom-4 h-40 w-40 origin-bottom-right opacity-10 transition-all duration-500 ease-out group-hover:scale-150 group-hover:rotate-6 group-hover:opacity-20"
  >
    {/* Heartbeat Line */}
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      d="M20,100 L40,100 L60,100 L70,70 L80,130 L90,100 L180,100"
    />
    {/* Heart */}
    <path
      fill="currentColor"
      d="M100,140 C60,100 20,120 20,160 C20,200 60,200 100,170 C140,200 180,200 180,160 C180,120 140,100 100,140"
    />
    {/* Care Circles */}
    <circle cx="100" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="4" />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      d="M85,50 L115,50 M100,35 L100,65"
    />
  </svg>
)

export const GlobalPattern = () => (
  <svg
    viewBox="0 0 200 200"
    className="absolute right-4 bottom-4 h-40 w-40 origin-bottom-right opacity-10 transition-all duration-500 ease-out group-hover:scale-150 group-hover:rotate-6 group-hover:opacity-20"
  >
    {/* Globe */}
    <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="4" />
    {/* Latitude Lines */}
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      d="M20,100 C20,60 180,60 180,100 C180,140 20,140 20,100"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      d="M40,70 C40,40 160,40 160,70 C160,100 40,100 40,70"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      d="M40,130 C40,100 160,100 160,130 C160,160 40,160 40,130"
    />
    {/* Longitude Lines */}
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      d="M100,20 C60,20 60,180 100,180 C140,180 140,20 100,20"
    />
    {/* Connection Points */}
    <circle cx="70" cy="60" r="4" fill="currentColor" />
    <circle cx="130" cy="140" r="4" fill="currentColor" />
    <circle cx="100" cy="100" r="4" fill="currentColor" />
  </svg>
)

export const AnalyticsPattern = () => (
  <svg
    viewBox="0 0 200 200"
    className="absolute right-4 bottom-4 h-40 w-40 origin-bottom-right opacity-10 transition-all duration-500 ease-out group-hover:scale-150 group-hover:rotate-6 group-hover:opacity-20"
  >
    {/* Graph Grid */}
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      d="M40,40 L40,160 L160,160"
    />
    {/* Bar Chart */}
    <rect x="60" y="120" width="20" height="40" fill="currentColor" />
    <rect x="90" y="80" width="20" height="80" fill="currentColor" />
    <rect x="120" y="60" width="20" height="100" fill="currentColor" />
    {/* Trend Line */}
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeDasharray="4,4"
      d="M50,140 C80,120 100,80 150,60"
    />
    {/* Data Points */}
    <circle cx="70" cy="120" r="4" fill="currentColor" />
    <circle cx="100" cy="80" r="4" fill="currentColor" />
    <circle cx="130" cy="60" r="4" fill="currentColor" />
  </svg>
)

export const InnovationPattern = () => (
  <svg
    viewBox="0 0 200 200"
    className="absolute right-4 bottom-4 h-40 w-40 origin-bottom-right opacity-10 transition-all duration-500 ease-out group-hover:scale-150 group-hover:rotate-6 group-hover:opacity-20"
  >
    {/* Light Bulb */}
    <path
      fill="currentColor"
      d="M100,20 C60,20 40,50 40,90 C40,120 60,140 80,160 L120,160 C140,140 160,120 160,90 C160,50 140,20 100,20"
    />
    {/* Filament */}
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      d="M80,160 L80,180 L120,180 L120,160"
    />
    {/* Innovation Sparks */}
    <path
      fill="currentColor"
      d="M60,40 L40,20 L70,30 L50,10 L80,30"
    />
    <path
      fill="currentColor"
      d="M140,40 L160,20 L130,30 L150,10 L120,30"
    />
    {/* Energy Rings */}
    <circle cx="100" cy="90" r="30" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="8,8" />
    <circle cx="100" cy="90" r="20" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="6,6" />
    <circle cx="100" cy="90" r="10" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="4,4" />
  </svg>
)
