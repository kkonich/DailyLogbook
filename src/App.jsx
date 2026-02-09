// App.jsx
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import EntryCard from './components/EntryCard'
import Footer from './components/Footer'
import Topbar from './components/Topbar'
import WelcomeCard from './components/WelcomeCard'
import THEME from './constants/theme'
import './App.css'

function safeJsonParse(raw, fallback) {
  if (!raw) return fallback
  try {
    return JSON.parse(raw)
  } catch {
    return fallback
  }
}

function App() {
  const todayKey = useMemo(() => new Date().toISOString().slice(0, 10), [])
  const { t, i18n } = useTranslation()

  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved === THEME.DARK
  })

  const [name, setName] = useState(() => localStorage.getItem('userName') || '')
  const [entries, setEntries] = useState(() =>
    safeJsonParse(localStorage.getItem('entries'), {}),
  )

  // ----- ui state -----
  const [nameInput, setNameInput] = useState('')
  const [mood, setMood] = useState('')
  const [journalText, setJournalText] = useState('')
  const [moodError, setMoodError] = useState(false)
  const [moodErrorTick, setMoodErrorTick] = useState(0)
  const [activeNav, setActiveNav] = useState('calendar')

  const hasName = name.trim().length > 0
  const todaysEntry = entries[todayKey]
  const dateLabel = useMemo(
    () =>
      new Intl.DateTimeFormat(i18n.language, { dateStyle: 'long' }).format(
        new Date(),
      ),
    [i18n.language],
  )

  // ----- effects -----
  useEffect(() => {
    const saved = localStorage.getItem('language')
    if (saved) i18n.changeLanguage(saved)
  }, [i18n])

  useEffect(() => {
    localStorage.setItem('theme', isDark ? THEME.DARK : THEME.LIGHT)
    localStorage.setItem('userName', name)
    localStorage.setItem('entries', JSON.stringify(entries))
  }, [isDark, name, entries])

  // ----- handlers -----
  const handleLanguageChange = (event) => {
    const next = event.target.value
    i18n.changeLanguage(next)
    localStorage.setItem('language', next)
  }

  const handleNameSubmit = (event) => {
    event.preventDefault()
    const trimmed = nameInput.trim()
    if (!trimmed) return
    setName(trimmed)
    setNameInput('')
  }

  const handleEntrySubmit = (event) => {
    event.preventDefault()
    if (!mood) {
      setMoodError(true)
      setMoodErrorTick((v) => v + 1)
      return
    }

    const next = {
      mood,
      text: journalText.trim(),
      date: todayKey,
    }

    setEntries((prev) => ({ ...prev, [todayKey]: next }))
    setJournalText('')
    setMoodError(false)
  }

  return (
    <div
      className={`app ${isDark ? 'theme-dark' : 'theme-light'} ${
        hasName ? 'has-name' : ''
      }`}
    >
      <Topbar
        t={t}
        language={i18n.language}
        onLanguageChange={handleLanguageChange}
        isDark={isDark}
        onToggleTheme={() => setIsDark((value) => !value)}
        activeNav={activeNav}
        onNavSelect={setActiveNav}
      />

      <main className="content">
        <div id="today">
          {!hasName ? (
            <WelcomeCard
              t={t}
              nameInput={nameInput}
              onNameInputChange={(event) => setNameInput(event.target.value)}
              onNameSubmit={handleNameSubmit}
            />
          ) : (
            <EntryCard
              t={t}
              name={name}
              dateLabel={dateLabel}
              todaysEntry={todaysEntry}
              mood={mood}
              onMoodSelect={(label) => {
                setMood(label)
                setMoodError(false)
              }}
              moodError={moodError}
              moodErrorTick={moodErrorTick}
              journalText={journalText}
              onJournalTextChange={(event) => setJournalText(event.target.value)}
              onEntrySubmit={handleEntrySubmit}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
