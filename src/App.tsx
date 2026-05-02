import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

export type ThemeMode = 'default' | 'terminal';

const THEME_STORAGE_KEY = 'portfolio-theme-mode';

function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') {
      return 'default';
    }

    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return stored === 'terminal' ? 'terminal' : 'default';
  });
  const [showBootSequence, setShowBootSequence] = useState(false);

  useEffect(() => {
    document.body.dataset.theme = themeMode;
    window.localStorage.setItem(THEME_STORAGE_KEY, themeMode);

    return () => {
      delete document.body.dataset.theme;
    };
  }, [themeMode]);

  useEffect(() => {
    if (!showBootSequence) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setShowBootSequence(false);
    }, 1600);

    return () => window.clearTimeout(timeoutId);
  }, [showBootSequence]);

  const toggleTheme = () => {
    const nextTheme = themeMode === 'default' ? 'terminal' : 'default';
    setThemeMode(nextTheme);
    setShowBootSequence(nextTheme === 'terminal');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {showBootSequence ? (
        <div className="boot-sequence" aria-hidden="true">
          <div className="boot-sequence__panel">
            <p className="boot-sequence__line">GitHub Copilot CLI v1.0.39</p>
            <p className="boot-sequence__line">Initializing portfolio shell...</p>
            <p className="boot-sequence__line">Mounting sections: hero, focus, projects, contact</p>
            <p className="boot-sequence__line">Theme mode: terminal</p>
          </div>
        </div>
      ) : null}

      <Navbar themeMode={themeMode} onToggleTheme={toggleTheme} />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
