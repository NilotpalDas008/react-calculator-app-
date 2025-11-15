/**
 * Button Component
 * Reusable button for calculator with frosted glass effect and micro-interactions
 */
export const Button = ({ value, onClick, className = '', span = false, dataKey = null, dataAction = null }) => (
  <button
    onClick={onClick}
    data-key={dataKey}
    data-action={dataAction}
    className={`
      ${span ? 'col-span-2' : ''}
      p-4 rounded-xl font-semibold text-lg
      transition-all duration-150 transform
      hover:scale-110 active:scale-90
      shadow-md hover:shadow-xl active:shadow-sm
      drop-shadow-md hover:drop-shadow-lg
      backdrop-blur-sm border border-white/40 dark:border-white/20
      ring-1 ring-white/30 dark:ring-white/10
      hover:ring-2 active:ring-1
      hover:brightness-110 active:brightness-95
      focus:outline-none focus:ring-2 focus:ring-offset-2
      ${className}
    `}
  >
    <span className="relative z-10 block drop-shadow-sm">{value}</span>
    <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-30 active:opacity-50 transition-opacity duration-150 bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>
  </button>
);
