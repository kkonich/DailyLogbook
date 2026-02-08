import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import THEME from './constants/theme'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved === THEME.DARK
  })
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const saved = localStorage.getItem('language')
    if (saved) {
      i18n.changeLanguage(saved)
    }
  }, [i18n])

  useEffect(() => {
    localStorage.setItem('theme', isDark ? THEME.DARK : THEME.LIGHT)
  }, [isDark])

  return (
    <div className={`app ${isDark ? 'theme-dark' : 'theme-light'}`}>
      <header className="topbar">
        <title>Daily Logbook</title>
        <div className="brand">{t('brand')}</div>
        <nav className="nav">
          <span className="nav-item active">{t('navCalendar')}</span>
          <span className="nav-item">{t('navEntries')}</span>
        </nav>
        <div className="menu-actions">
          <label className="language">
            <span className="sr-only">{t('languageLabel')}</span>
            <select
              className="language-select"
              value={i18n.language}
              onChange={(event) => {
                const next = event.target.value
                i18n.changeLanguage(next)
                localStorage.setItem('language', next)
              }}
              aria-label={t('languageLabel')}
            >
              <option value="en">English</option>
              <option value="de">Deutsch</option>
            </select>
          </label>
          <button
            className={`theme-toggle ${isDark ? 'on' : 'off'}`}
            type="button"
            onClick={() => setIsDark((value) => !value)}
            aria-label={t('toggleTheme')}
            title={isDark ? t('lightMode') : t('darkMode')}
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
            <span className="label">{t('moodLabel')}</span>
            <span className="value">{t('moodValue')}</span>
          </div>
          <div className="divider" />
          <p>{t('entryText')}</p>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-left"></div>
        <div className="footer-actions">
          <button className="btn primary" type="button">
            {t('editEntry')}
          </button>
          <button className="btn" type="button">
            {t('backToCalendar')}
          </button>
        </div>
      </footer>
    </div>
  )
}

export default App
