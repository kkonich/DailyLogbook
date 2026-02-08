import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      brand: 'Daily Logbook',
      navCalendar: 'Calendar',
      navEntries: 'My Entries',
      moodLabel: 'Mood:',
      moodValue: 'Good day',
      entryText: 'This is just a test.',
      editEntry: 'Edit Entry',
      backToCalendar: 'Back to calendar',
      toggleTheme: 'Toggle theme',
      lightMode: 'Light Mode',
      darkMode: 'Dark Mode',
      languageLabel: 'Language',
    },
  },
  de: {
    translation: {
      brand: 'Daily Logbook',
      navCalendar: 'Kalender',
      navEntries: 'Meine Einträge',
      moodLabel: 'Stimmung:',
      moodValue: 'Guter Tag',
      entryText: 'Das ist nur ein Test.',
      editEntry: 'Eintrag bearbeiten',
      backToCalendar: 'Zurück zum Kalender',
      toggleTheme: 'Theme wechseln',
      lightMode: 'Hell',
      darkMode: 'Dunkel',
      languageLabel: 'Sprache',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
