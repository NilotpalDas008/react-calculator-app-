/**
 * Utility function to trigger button press animation
 * Finds button by data attribute and applies active state animation
 */
export const triggerButtonAnimation = (key) => {
  let button = null;

  // Map keyboard keys to button attributes
  const keyMap = {
    '0': { dataKey: '0' },
    '1': { dataKey: '1' },
    '2': { dataKey: '2' },
    '3': { dataKey: '3' },
    '4': { dataKey: '4' },
    '5': { dataKey: '5' },
    '6': { dataKey: '6' },
    '7': { dataKey: '7' },
    '8': { dataKey: '8' },
    '9': { dataKey: '9' },
    '.': { dataAction: '.' },
    '+': { dataAction: '+' },
    '-': { dataAction: '-' },
    '*': { dataAction: '*' },
    '/': { dataAction: '/' },
    'Backspace': { dataAction: 'del' },
    'Enter': { dataAction: 'equals' },
    '=': { dataAction: 'equals' },
    'Escape': { dataAction: 'clear' },
  };

  const selector = keyMap[key];
  if (!selector) return;

  // Find button by data attribute
  if (selector.dataKey) {
    button = document.querySelector(`[data-key="${selector.dataKey}"]`);
  } else if (selector.dataAction) {
    button = document.querySelector(`[data-action="${selector.dataAction}"]`);
  }

  if (!button) return;

  // Add active state
  button.classList.add('scale-90', 'active:shadow-md');

  // Remove active state after animation completes
  setTimeout(() => {
    button.classList.remove('scale-90', 'active:shadow-md');
  }, 150);
};
