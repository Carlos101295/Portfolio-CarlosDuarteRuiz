import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { projects } from '../data/projects.js'

export default function Home() {
  const railRef = useRef(null)

  const scrollByCards = (direction) => {
    const rail = railRef.current
    if (!rail) return
    const card = rail.querySelector('.card')
    const cardWidth = card ? card.getBoundingClientRect().width : 340
    const gap = 20
    const threshold = 4 // margen para redondeos de scroll
    const maxScrollLeft = rail.scrollWidth - rail.clientWidth

    const atStart = rail.scrollLeft <= threshold
    const atEnd = rail.scrollLeft >= maxScrollLeft - threshold

    if (direction === -1 && atStart) {
      rail.scrollTo({ left: maxScrollLeft, behavior: 'smooth' })
    } else if (direction === 1 && atEnd) {
      rail.scrollTo({ left: 0, behavior: 'smooth' })
    } else {
      rail.scrollBy({ left: direction * (cardWidth + gap), behavior: 'smooth' })
    }
  }

  return (
    <div className="page">
      <Header />

      <section className="hero hero-with-photo">
        <img
          src="/images/avatar.jpg"
          alt="Carlos Duarte Ruiz"
          className="hero-avatar"
        />
        <div className="hero-text">
          <h1>Carlos Duarte Ruiz</h1>
          <p className="hero-subtitle">Desarrollador de Aplicaciones Multiplataforma</p>
        </div>
      </section>

      <section className="rail-section">
        <div className="rail-heading">Proyectos ({projects.length})</div>

        <div className="rail-wrapper">
          <button
            type="button"
            className="rail-arrow rail-arrow-left"
            onClick={() => scrollByCards(-1)}
            aria-label="Ver proyectos anteriores"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="rail" ref={railRef} tabIndex={-1}>
            {projects.map((p) => (
              <Link key={p.id} to={`/proyecto/${p.id}`} className="card">
                <div className="card-bar">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="idx">{p.orden}</span>
                </div>
                {p.imagen ? (
                  <div className="card-image">
                    <img src={p.imagen} alt={p.nombre} />
                  </div>
                ) : (
                  <div className="card-image card-image-placeholder">Sin imagen</div>
                )}
                <div className="card-body">
                  <h3>{p.nombre}</h3>
                  <p>{p.resumen}</p>
                  <div className="stack-row">
                    {p.stack.slice(0, 5).map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="card-cta">Ver detalles →</span>
                </div>
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="rail-arrow rail-arrow-right"
            onClick={() => scrollByCards(1)}
            aria-label="Ver más proyectos"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
