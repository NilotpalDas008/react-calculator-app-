/**
 * Performs arithmetic calculations based on the operator
 * @param {number} prev - Previous value
 * @param {number} curr - Current value
 * @param {string} op - Operation (+, -, ×, ÷)
 * @returns {object} {result: number|string, error: string|null}
 */
export const calculate = (prev, curr, op) => {
  if (!prev || !curr) {
    return { result: null, error: 'Invalid expression' };
  }

  const a = parseFloat(prev);
  const b = parseFloat(curr);

  if (isNaN(a) || isNaN(b)) {
    return { result: null, error: 'Invalid number' };
  }

  switch (op) {
    case '+':
      return { result: a + b, error: null };
    case '-':
      return { result: a - b, error: null };
    case '×':
      return { result: a * b, error: null };
    case '÷':
      if (b === 0) {
        return { result: null, error: 'Cannot divide by zero' };
      }
      return { result: a / b, error: null };
    default:
      return { result: null, error: 'Invalid operation' };
  }
};
