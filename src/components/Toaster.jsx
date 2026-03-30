import { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ToastContext = createContext();

export function ToasterProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'success') => {
    const id = Date.now();
  
    setToasts((prev) => [...prev, { id, message, type }]);
  
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 5000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {children}
      <div className="fixed top-4 right-4 z-[10000] flex flex-col gap-2 max-w-sm">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 300, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 300, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={`p-4 rounded-2xl shadow-2xl border flex items-center gap-3 text-white max-w-sm ${
                toast.type === 'success' 
                  ? 'bg-gradient-to-r from-green-500 to-green-600 border-green-400/50' 
                  : 'bg-gradient-to-r from-red-500 to-red-600 border-red-400/50'
              }`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                toast.type === 'success' ? 'bg-green-400/20' : 'bg-red-400/20'
              }`}>
                {toast.type === 'success' ? '✅' : '❌'}
              </div>
              <span className="font-medium text-sm leading-relaxed flex-1">{toast.message}</span>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-white/80 hover:text-white p-1 -m-1 rounded-full hover:bg-white/20 transition-colors"
              >
                ✕
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToasterProvider');
  }
  return context;
}
