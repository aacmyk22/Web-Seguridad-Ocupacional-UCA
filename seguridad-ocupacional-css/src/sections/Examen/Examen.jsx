import { useState, useRef, useEffect } from 'react'
import './Examen.css'

const FORM_URL =
  'https://forms.cloud.microsoft/pages/responsepage.aspx?id=hrQc_xLZ40mUNBIunEWJXhq6ZLvlw-JMlT4aQ_OVPWtUQUxJVjEzSzUyOTFYWjBNSzExTjNEM1lGMi4u&route=shorturl'

const STEPS = [
  'Lee los protocolos de seguridad del CSS.',
  'Presiona el botón para abrir el examen.',
  'Completa y envía el formulario.',
  'Al enviarlo, tu estado se actualizará automáticamente.',
]

const Examen = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const [completed, setCompleted] = useState(() => {
    try { return localStorage.getItem('examen_css_completado') === 'true' } catch { return false }
  })

  const iframeRef = useRef(null)
  const pollRef  = useRef(null)

  /* ── Poll iframe DOM for submission confirmation ── */
  const startPolling = () => {
    let attempts = 0
    const MAX = 40

    pollRef.current = setInterval(() => {
      attempts++
      try {
        const doc = iframeRef.current?.contentDocument
        if (doc) {
          const text = doc.body?.innerText || ''
          // Microsoft Forms shows these strings after submission
          if (
            text.includes('respuesta se ha guardado') ||
            text.includes('response was saved') ||
            text.includes('Thank you') ||
            text.includes('Gracias') ||
            text.includes('submitted') ||
            text.includes('enviado') ||
            // Fallback: look for the "Done" / checkmark page structure
            doc.querySelector('[data-automation-id="thankYouPage"]') ||
            doc.querySelector('.thank-you-page') ||
            doc.querySelector('[class*="thankYou"]')
          ) {
            markCompleted()
          }
        }
      } catch {
        // Cross-origin: can't read iframe — rely on postMessage below
      }
      if (attempts >= MAX) clearInterval(pollRef.current)
    }, 1500)
  }

  /* ── Listen for postMessage from Microsoft Forms ── */
  useEffect(() => {
    const handler = (e) => {
      if (!e.origin.includes('forms') && !e.origin.includes('microsoft')) return
      const msg = typeof e.data === 'string' ? e.data : JSON.stringify(e.data || '')
      if (
        msg.includes('submit') ||
        msg.includes('Submitted') ||
        msg.includes('Thank') ||
        msg.includes('Gracias')
      ) {
        markCompleted()
      }
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [])

  const markCompleted = () => {
    clearInterval(pollRef.current)
    try { localStorage.setItem('examen_css_completado', 'true') } catch {}
    setCompleted(true)
    setModalOpen(false)
  }

  const openModal = () => {
    setIframeLoaded(false)
    setModalOpen(true)
  }

  const closeModal = () => {
    clearInterval(pollRef.current)
    setModalOpen(false)
  }

  const handleIframeLoad = () => {
    setIframeLoaded(true)
    startPolling()
  }

  /* Lock body scroll when modal is open */
  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])

  /* Cleanup on unmount */
  useEffect(() => () => clearInterval(pollRef.current), [])

  return (
    <section id="examen" className="examen">
      <div className="container">
        <div className="examen-inner">
          <h2 className="section-title">Examen obligatorio</h2>

          {/* ── Status card ── */}
          <div className="examen-status-card">
            <div>
              <p className="examen-status-label">Estado del examen</p>
              {completed ? (
                <span className="examen-status-badge completado">COMPLETADO ✅</span>
              ) : (
                <span className="examen-status-badge pendiente">PENDIENTE ⏳</span>
              )}
            </div>
            <div className={`examen-status-icon ${completed ? 'completado' : ''}`}>
              {completed ? '✅' : '📋'}
            </div>
          </div>

          {/* ── Success banner (shown after completion) ── */}
          {completed && (
            <div className="examen-success">
              <div className="examen-success-icon">🎉</div>
              <h3>¡Examen enviado correctamente!</h3>
              <p>Tu participación ha sido registrada. Puedes cerrar esta página o revisar otros protocolos.</p>
            </div>
          )}

          {/* ── Steps ── */}
          <div className="examen-steps">
            <h3>Pasos a seguir</h3>
            <ol className="steps-list">
              {STEPS.map((step, i) => {
                const done = completed && i < 3
                return (
                  <li key={i} className={done ? 'done' : ''}>
                    <span className="step-num">{done ? '✓' : i + 1}</span>
                    <span>{step}</span>
                  </li>
                )
              })}
            </ol>
          </div>

          {/* ── CTA ── */}
          <button
            className="examen-cta"
            onClick={openModal}
            disabled={completed}
          >
            {completed ? 'Examen completado' : 'Realizar examen'}
          </button>
        </div>
      </div>

      {/* ── Modal ── */}
      {modalOpen && (
        <div className="examen-modal-overlay" onClick={closeModal}>
          <div className="examen-modal" onClick={(e) => e.stopPropagation()}>
            <div className="examen-modal-header">
              <h3>Examen de Seguridad Ocupacional</h3>
              <button className="examen-modal-close" onClick={closeModal} aria-label="Cerrar">✕</button>
            </div>
            <div className="examen-modal-body">
              {/* Loading overlay */}
              <div className={`examen-modal-loading ${iframeLoaded ? 'hidden' : ''}`}>
                <div className="loading-spinner" />
                <span>Cargando formulario…</span>
              </div>
              <iframe
                ref={iframeRef}
                src={FORM_URL}
                className="examen-iframe"
                title="Examen de Seguridad Ocupacional"
                onLoad={handleIframeLoad}
                allow="camera; microphone"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Examen
