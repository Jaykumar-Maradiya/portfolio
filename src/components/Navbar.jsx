import { useTheme } from '../contexts/ThemeContext.jsx';

export default function Navbar() {
  const { theme, toggleTheme, isDark } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case 'light': return '☀️';
      case 'dark': return '🌙';
      default: return '💻';
    }
  };
  return (
    <div className="fixed top-0 w-full backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm dark:shadow-gray-900/50 flex justify-between p-4 text-gray-900 dark:text-gray-100 z-50">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">Jay.dev</h1>

      <div className="flex items-center gap-6">
        <a href="#about" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors text-gray-900 dark:text-gray-100">About</a>
        <a href="#projects" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors text-gray-900 dark:text-gray-100">Projects</a>
        <a href="#contact" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors text-gray-900 dark:text-gray-100">Contact</a>
        
        <button
          onClick={() => {
            const next = { light: 'dark', dark: 'system', system: 'light' }[theme];
            toggleTheme(next);
          }}
          className="p-2 rounded-lg bg-gray-200/50 dark:bg-gray-800/50 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all flex items-center gap-1 text-sm border border-gray-300 dark:border-gray-600 rounded-full"
          title={`Switch to ${{ light: 'Dark', dark: 'System', system: 'Light' }[theme]} mode`}
          aria-label="Toggle theme"
        >
          {getIcon()}
        </button>
      </div>
    </div>
  );
}
