import { MOODS, MOOD_ASSETS } from '../constants/moods'

function EntryCard({
  t,
  name,
  dateLabel,
  todaysEntry,
  mood,
  onMoodSelect,
  moodError,
  moodErrorTick,
  journalText,
  onJournalTextChange,
  onEntrySubmit,
}) {
  return (
    <section className="entry-card">
      <h1>{t('todayEntryTitle', {name})}</h1>
      <p className="entry-date">{dateLabel}</p>
      <div className="divider" />

      {todaysEntry ? (
        <>
          
          <div className="mood">
            <span className="label">{t('moodLabel')}</span>
            <img
              className="mood-emoji"
              src={MOOD_ASSETS[todaysEntry.mood]}
              alt={t(`mood.${todaysEntry.mood}`)}
            />
          </div>

          {todaysEntry.text && (
            <p className="entry-text">{todaysEntry.text}</p>
          )}
        </>
      ) : (
        <form className="entry-form" onSubmit={onEntrySubmit}>
          <div className="entry-head">
            <div className="entry-head__top">
              <div
                key={moodErrorTick}
                className={`mood-picker ${moodError ? 'error' : ''}`}
                role="group"
                aria-label={t('moodLabel')}
              >
                {MOODS.map((label) => (
                  <button
                    key={label}
                    type="button"
                    className={`mood-pill ${mood === label ? 'active' : ''}`}
                    onClick={() => onMoodSelect(label)}
                    aria-label={t(`mood.${label}`)}
                    title={t(`mood.${label}`)}
                  >
                    <img
                      className="mood-emoji"
                      src={MOOD_ASSETS[label]}
                      alt={t(`mood.${label}`)}
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
          {moodError && (
            <p className="mood-error" role="alert">
              {t('moodRequired')}
            </p>
          )}

          <label className="journal-label" htmlFor="journal">
            {t('journalLabel')}
          </label>

          <textarea
            id="journal"
            className="journal-input"
            rows="4"
            value={journalText}
            onChange={onJournalTextChange}
            placeholder={t('journalPlaceholder')}
          />

          <div className="entry-actions">
            <button className="btn primary" type="submit">
              {t('saveEntry')}
            </button>
            <button className="btn" type="button" aria-label={t('cancel')}>
              {t('cancel')}
            </button>
          </div>
        </form>
      )}

    </section>
  )
}

export default EntryCard
