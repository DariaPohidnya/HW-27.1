import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
import ErrorBoundary from './ErrorBoundary';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <header className="header">
        <div className="logo">🌐 My SPA</div>
           <nav className="nav">
              <Link to="/">Головна</Link>
              <Link to="/contacts">Контакти</Link>
              <Link to="/about">Про мене</Link>
          </nav>
             <button className="theme-toggle" onClick={toggleTheme}>
             {theme === 'light' ? '🌙 Темна' : '☀️ Світла'}
            </button>
      </header>
      
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
