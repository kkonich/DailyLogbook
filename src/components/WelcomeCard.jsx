function WelcomeCard({ t, nameInput, onNameInputChange, onNameSubmit }) {
  return (
    <section className="entry-card">
      <form className="name-form" onSubmit={onNameSubmit}>
        <h1>{t('welcomeTitle')}</h1>
        <p>{t('welcomePrompt')}</p>

        <div className="name-row">
          <input
            className="name-input"
            type="text"
            value={nameInput}
            onChange={onNameInputChange}
            placeholder={t('welcomePlaceholder')}
            aria-label={t('welcomePlaceholder')}
          />
          <button className="btn primary" type="submit">
            {t('welcomeCta')}
          </button>
        </div>
      </form>
    </section>
  )
}

export default WelcomeCard
