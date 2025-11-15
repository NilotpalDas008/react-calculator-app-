/**
 * Display Component
 * Shows current value and operation history with frosted glass effect
 */
export const Display = ({ previousValue, operation, currentValue }) => (
  <div className="bg-gradient-to-br from-white/40 via-white/25 to-white/10 dark:from-white/20 dark:via-white/10 dark:to-white/5 backdrop-blur-lg rounded-2xl p-6 mb-6 min-h-[140px] flex flex-col justify-between shadow-lg border border-white/50 dark:border-white/25 ring-1 ring-white/40 dark:ring-white/15">
    {/* Previous Expression */}
    <div className="mb-4">
      <div className="text-left text-xs sm:text-sm text-gray-600 dark:text-gray-400 tracking-wide uppercase font-medium opacity-75 h-5">
        {previousValue && (
          <span>
            {previousValue}
            <span className="ml-2 font-semibold text-gray-700 dark:text-gray-300">
              {operation}
            </span>
          </span>
        )}
      </div>
      
      {/* Divider */}
      {previousValue && operation && (
        <div className="mt-2 mb-3 h-px bg-gradient-to-r from-white/30 via-white/20 to-transparent dark:from-white/15 dark:via-white/10 dark:to-transparent"></div>
      )}
    </div>

    {/* Current Input */}
    <div className="text-right">
      <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 break-all leading-tight drop-shadow-md">
        {currentValue}
      </div>
      <div className="mt-1 text-xs text-gray-600 dark:text-gray-400">
        {currentValue !== '0' && (
          <span className="opacity-60">= {currentValue}</span>
        )}
      </div>
    </div>
  </div>
);
