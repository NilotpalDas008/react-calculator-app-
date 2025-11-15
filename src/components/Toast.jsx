  /**
 * Toast Component
 * Displays error or info notifications with animations
 */
export const Toast = ({ message, type = 'error', isVisible }) => {
  if (!isVisible) return null;

  const bgColor = {
    error: 'bg-red-500/90 dark:bg-red-600/90',
    warning: 'bg-yellow-500/90 dark:bg-yellow-600/90',
    success: 'bg-green-500/90 dark:bg-green-600/90',
    info: 'bg-blue-500/90 dark:bg-blue-600/90',
  }[type] || 'bg-red-500/90 dark:bg-red-600/90';

  const icons = {
    error: '⚠️',
    warning: '⚡',
    success: '✓',
    info: 'ℹ️',
  };

  return (
    <div className={`
      fixed top-20 left-1/2 transform -translate-x-1/2 -translate-y-full
      animate-in slide-in-from-top-2 duration-300 z-50
      ${bgColor}
      backdrop-blur-md
      rounded-lg px-4 py-3 shadow-lg
      border border-white/40 dark:border-white/20
      flex items-center gap-2
      text-white font-semibold text-sm
    `}>
      <span className="text-lg">{icons[type]}</span>
      <span>{message}</span>
    </div>
  );
};
