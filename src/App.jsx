import { useEffect, useState } from 'react'
import THEME from './constants/theme'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved === THEME.DARK
  })

  useEffect(() => {
    localStorage.setItem('theme', isDark ? THEME.DARK : THEME.LIGHT)
  }, [isDark])

  return (
    <div className={`app ${isDark ? 'theme-dark' : 'theme-light'}`}>
      <header className="topbar">
        <title>Daily Logbook</title>
        <div className="brand">DailyLogbook</div>
        <nav className="nav">
          <span className="nav-item active">Calendar</span>
          <span className="nav-item">My Entries</span>
        </nav>
        <div className="menu-actions">
          <button
            className={`theme-toggle ${isDark ? 'on' : 'off'}`}
            type="button"
            onClick={() => setIsDark((value) => !value)}
            aria-label="Toggle theme"
            title={isDark ? 'Light Mode' : 'Dark Mode'}
          >
            <span className="toggle-track" aria-hidden="true">
              <span className="toggle-thumb">
                {isDark ? '☾' : '☀'}
              </span>
            </span>
          </button>
          <button className="burger" type="button" aria-label="Open menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main className="content">
        <section className="entry-card">
          <h1>April 1, 2026</h1>
          <div className="divider" />
          <div className="mood">
            <span className="label">Mood:</span>
            <span className="value">Good day</span>
          </div>
          <div className="divider" />
          <p>This is just a test.</p>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-left"></div>
        <div className="footer-actions">
          <button className="btn primary" type="button">
            Edit Entry
          </button>
          <button className="btn" type="button">
            Back to calendar
          </button>
        </div>
      </footer>
    </div>
  )
}

export default App
