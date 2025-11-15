 import { useCalculator } from '../hooks/useCalculator';
import { Display } from '../components/Display';
import { ButtonGrid } from '../components/ButtonGrid';
import { HistoryPanel } from '../components/HistoryPanel';
import { Toast } from '../components/Toast';

/**
 * Calculator Page
 * Main calculator interface with display and button grid
 */
export const Calculator = () => {
  const {
    currentValue,
    previousValue,
    operation,
    darkMode,
    history,
    showHistory,
    toast,
    handleNumber,
    handleDecimal,
    handleOperation,
    handleEquals,
    handleClear,
    handleDelete,
    toggleDarkMode,
    setShowHistory,
    clearHistory,
  } = useCalculator();

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-800 p-4 transition-colors duration-300">
        <div className="w-full max-w-md">
          {/* Dark Mode Toggle & History Button */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="p-2 rounded-lg bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/50 dark:border-white/20 shadow-lg hover:shadow-xl hover:bg-white/40 dark:hover:bg-white/20 transition-all"
              aria-label="Toggle history"
              title="View calculation history"
            >
              📜
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/50 dark:border-white/20 shadow-lg hover:shadow-xl hover:bg-white/40 dark:hover:bg-white/20 transition-all"
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Calculator Card */}
          <div className="bg-white/20 dark:bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-6 transition-all duration-300 border border-white/40 dark:border-white/20 ring-1 ring-white/30 dark:ring-white/10">
            {/* Display */}
            <Display
              previousValue={previousValue}
              operation={operation}
              currentValue={currentValue}
            />

            {/* Button Grid */}
            <ButtonGrid
              onNumber={handleNumber}
              onDecimal={handleDecimal}
              onOperation={handleOperation}
              onEquals={handleEquals}
              onClear={handleClear}
              onDelete={handleDelete}
            />

            {/* Footer */}
            <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
              <p>Keyboard shortcuts </p>
              <p className="text-xs mt-1">ESC: Clear | Backspace: Delete | Calculate: Equals</p>
            </div>
          </div>
        </div>
      </div>

      {/* History Panel */}
      <HistoryPanel
        isOpen={showHistory}
        history={history}
        onClose={() => setShowHistory(false)}
        onClearHistory={clearHistory}
      />

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
      />
    </div>
  );
};
