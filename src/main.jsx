import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import { ToasterProvider } from './components/Toaster.jsx'; // ✅ import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ToasterProvider>   ✅ wrap here
        <App />
      </ToasterProvider>
    </ThemeProvider>
  </StrictMode>
);
