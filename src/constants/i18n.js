import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      brand: 'Daily Logbook',
      navCalendar: 'Calendar',
      navToday: "Today's Entry",
      moodLabel: 'Mood:',
      moodValue: 'Good day',
      entryText: 'This is just a test.',
      editEntry: 'Edit Entry',
      backToCalendar: 'Back to calendar',
      toggleTheme: 'Toggle theme',
      lightMode: 'Light Mode',
      darkMode: 'Dark Mode',
      languageLabel: 'Language',
      welcomeTitle: 'Welcome!',
      welcomePrompt: 'Please enter your name to continue.',
      welcomePlaceholder: 'Your name',
      welcomeCta: 'Continue',
      greeting: 'Hello, {{name}}.',
      todayEntryTitle: "How was your day, {{name}}?",
      entryQuestion: 'How was your day, {{name}}?',
      journalLabel: 'Tell me about your day.',
      journalPlaceholder: 'Share a few thoughts (optional)',
      saveEntry: 'Save entry',
      moodRequired: 'Please select a mood.',
      mood: {
        Bad: 'Bad',
        Okay: 'Okay',
        Good: 'Good',
        Great: 'Great',
        Perfect: 'Perfect',
      },
      moodEmoji: {
        Bad: '😞',
        Okay: '🙂',
        Good: '😊',
        Great: '😄',
        Perfect: '🤩',
      },
    },
  },
  de: {
    translation: {
      brand: 'Daily Logbook',
      navCalendar: 'Kalender',
      navToday: 'Heutiger Eintrag',
      moodLabel: 'Stimmung:',
      moodValue: 'Guter Tag',
      entryText: 'Das ist nur ein Test.',
      editEntry: 'Eintrag bearbeiten',
      backToCalendar: 'Zurück zum Kalender',
      toggleTheme: 'Theme wechseln',
      lightMode: 'Hell',
      darkMode: 'Dunkel',
      languageLabel: 'Sprache',
      welcomeTitle: 'Willkommen!',
      welcomePrompt: 'Bitte gib deinen Namen ein, um fortzufahren.',
      welcomePlaceholder: 'Dein Name',
      welcomeCta: 'Weiter',
      greeting: 'Hallo, {{name}}.',
      todayEntryTitle: "Wie war dein Tag, {{name}}?",
      entryQuestion: 'Wie war dein Tag, {{name}}?',
      journalLabel: 'Erzähle etwas über deinen Tag.',
      journalPlaceholder: 'Ein paar Gedanken (optional)',
      saveEntry: 'Eintrag speichern',
      moodRequired: 'Bitte wähle eine Stimmung aus.',
      mood: {
        Bad: 'Schlecht',
        Okay: 'Okay',
        Good: 'Gut',
        Great: 'Sehr gut',
        Perfect: 'Perfekt',
      },
      moodEmoji: {
        Bad: '😞',
        Okay: '🙂',
        Good: '😊',
        Great: '😄',
        Perfect: '🤩',
      },
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

