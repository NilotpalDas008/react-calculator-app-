import { useState, useEffect } from 'react';
import { calculate } from '../utils/calculatorUtils';
import { triggerButtonAnimation } from '../utils/buttonAnimationUtils';

/**
 * Custom hook for calculator logic
 * Manages all calculator state and operations
 */
export const useCalculator = () => {
  const [currentValue, setCurrentValue] = useState('0');
  const [previousValue, setPreviousValue] = useState('');
  const [operation, setOperation] = useState('');
  const [overwrite, setOverwrite] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [toast, setToast] = useState({ message: '', type: 'error', isVisible: false });

  // Load history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('calculatorHistory');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error('Failed to load history:', e);
      }
    }
  }, []);

  // Save history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('calculatorHistory', JSON.stringify(history));
  }, [history]);

  // Auto-hide toast after 3 seconds
  useEffect(() => {
    if (toast.isVisible) {
      const timer = setTimeout(() => {
        setToast({ ...toast, isVisible: false });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.isVisible]);

  // Setup keyboard event listeners
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key >= '0' && e.key <= '9') {
        handleNumber(e.key);
        triggerButtonAnimation(e.key);
      }
      else if (e.key === '.') {
        handleDecimal();
        triggerButtonAnimation('.');
      }
      else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        const opMap = { '+': '+', '-': '-', '*': '×', '/': '÷' };
        handleOperation(opMap[e.key]);
        triggerButtonAnimation(e.key);
      }
      else if (e.key === 'Enter' || e.key === '=') {
        handleEquals();
        triggerButtonAnimation('Enter');
      }
      else if (e.key === 'Escape') {
        handleClear();
        triggerButtonAnimation('Escape');
      }
      else if (e.key === 'Backspace') {
        handleDelete();
        triggerButtonAnimation('Backspace');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentValue, previousValue, operation, overwrite]);

  const handleNumber = (digit) => {
    if (overwrite) {
      setCurrentValue(digit);
      setOverwrite(false);
    } else {
      setCurrentValue(currentValue === '0' ? digit : currentValue + digit);
    }
  };

  const handleDecimal = () => {
    if (overwrite) {
      setCurrentValue('0.');
      setOverwrite(false);
    } else if (!currentValue.includes('.')) {
      setCurrentValue(currentValue + '.');
    }
  };

  const handleOperation = (op) => {
    // If we have a previous operation waiting, evaluate it first
    if (previousValue && !overwrite && currentValue) {
      // Check if previous operation has higher precedence
      const shouldEvaluate = shouldPrecedeOperation(operation, op);
      
      if (shouldEvaluate) {
        // Evaluate the pending operation first
        const { result, error } = calculate(previousValue, currentValue, operation);
        if (error) {
          setToast({ message: error, type: 'error', isVisible: true });
          setCurrentValue('Error');
          setPreviousValue('');
          setOperation('');
          return;
        }
        setCurrentValue(String(result));
        setPreviousValue(String(result));
      }
    } else if (!previousValue) {
      setPreviousValue(currentValue);
    }
    
    setOperation(op);
    setOverwrite(true);
  };

  const shouldPrecedeOperation = (prevOp, nextOp) => {
    const precedence = {
      '+': 1,
      '-': 1,
      '×': 2,
      '÷': 2,
    };
    return (precedence[prevOp] || 0) >= (precedence[nextOp] || 0);
  };

  const handleEquals = () => {
    if (!previousValue || !operation) return;

    const { result, error } = calculate(previousValue, currentValue, operation);

    if (error) {
      setToast({ message: error, type: 'error', isVisible: true });
      setCurrentValue('Error');
      setPreviousValue('');
      setOperation('');
      setOverwrite(true);
    } else {
      setCurrentValue(String(result));
      // Add to history
      const expression = `${previousValue} ${operation} ${currentValue} = ${result}`;
      setHistory([expression, ...history.slice(0, 49)]);
      setPreviousValue('');
      setOperation('');
      setOverwrite(true);
    }
  };

  const handleClear = () => {
    setCurrentValue('0');
    setPreviousValue('');
    setOperation('');
    setOverwrite(false);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const handleDelete = () => {
    if (currentValue.length === 1 || currentValue === 'Error') {
      setCurrentValue('0');
    } else {
      setCurrentValue(currentValue.slice(0, -1));
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return {
    // State
    currentValue,
    previousValue,
    operation,
    darkMode,
    history,
    showHistory,
    toast,
    // Handlers
    handleNumber,
    handleDecimal,
    handleOperation,
    handleEquals,
    handleClear,
    handleDelete,
    toggleDarkMode,
    setShowHistory,
    clearHistory,
  };
};
