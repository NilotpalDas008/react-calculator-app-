/**
 * History Panel Component
 * Displays calculation history in a slide-out sidebar
 */
export const HistoryPanel = ({ isOpen, history, onClose, onClearHistory }) => (
  <>
    {/* Overlay */}
    {isOpen && (
      <div
        className="fixed inset-0 bg-black/40 dark:bg-black/60 transition-opacity duration-300 z-40"
        onClick={onClose}
      />
    )}

    {/* History Sidebar */}
    <div
      className={`
        fixed top-0 right-0 h-full w-80 max-w-full
        bg-gradient-to-b from-white/30 to-white/10 dark:from-white/15 dark:to-white/5
        backdrop-blur-xl border-l border-white/40 dark:border-white/20
        shadow-2xl transform transition-transform duration-300 ease-out z-50
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        flex flex-col
      `}
    >
      {/* Header */}
      <div className="p-5 border-b border-white/20 dark:border-white/10 flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">History</h2>
        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
          aria-label="Close history"
        >
          ✕
        </button>
      </div>

      {/* History List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {history.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
            No calculations yet
          </p>
        ) : (
          history.map((expression, index) => (
            <div
              key={index}
              className="p-3 rounded-lg bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/20 transition-all cursor-pointer group"
            >
              <p className="text-sm text-gray-700 dark:text-gray-300 font-mono break-all group-hover:text-gray-900 dark:group-hover:text-white">
                {expression}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {history.length > 0 && (
        <div className="p-4 border-t border-white/20 dark:border-white/10">
          <button
            onClick={onClearHistory}
            className="w-full py-2 px-4 rounded-lg bg-red-500/70 hover:bg-red-600/80 text-white font-semibold transition-all duration-150 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
          >
            Clear History
          </button>
        </div>
      )}
    </div>
  </>
);
