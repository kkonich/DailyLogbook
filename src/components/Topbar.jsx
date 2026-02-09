function Topbar({
  t,
  language,
  onLanguageChange,
  isDark,
  onToggleTheme,
  activeNav,
  onNavSelect,
}) {
  return (
    <header className="topbar">
      <div className="brand">{t('brand')}</div>

      <nav className="nav">
        <a
          className={`nav-item ${activeNav === 'calendar' ? 'active' : ''}`}
          href="#calendar"
          aria-label={t('navCalendar')}
          onClick={() => onNavSelect('calendar')}
        >
          {t('navCalendar')}
        </a>
        <a
          className={`nav-item ${activeNav === 'today' ? 'active' : ''}`}
          href="#today"
          aria-label={t('navToday')}
          onClick={() => onNavSelect('today')}
        >
          {t('navToday')}
        </a>
      </nav>

      <div className="menu-actions">
        <label className="language">
          <span className="sr-only">{t('languageLabel')}</span>
          <select
            className="language-select"
            value={language}
            onChange={onLanguageChange}
            aria-label={t('languageLabel')}
          >
            <option value="en">English</option>
            <option value="de">Deutsch</option>
          </select>
        </label>

        <button
          className={`theme-toggle ${isDark ? 'on' : 'off'}`}
          type="button"
          onClick={onToggleTheme}
          aria-label={t('toggleTheme')}
          title={isDark ? t('lightMode') : t('darkMode')}
        >
          <span className="toggle-track" aria-hidden="true">
            <span className="toggle-thumb">{isDark ? '☾' : '☀︎'}</span>
          </span>
        </button>

        <button className="burger" type="button" aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </div>

    </header>
  )
}

export default Topbar
