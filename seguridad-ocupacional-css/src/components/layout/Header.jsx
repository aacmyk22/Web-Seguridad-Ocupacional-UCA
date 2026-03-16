import { useState } from 'react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="header-container">
        <a className="logo" href="#hero" aria-label="Inicio - Seguridad Ocupacional CSS UCA">
          <img
            src="/uc.png"
            alt="Logo CSS UCA"
            height="44"
            loading="lazy"
          />
        </a>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#importancia" onClick={() => setIsMenuOpen(false)}>Importancia</a>
          <a href="#que-es" onClick={() => setIsMenuOpen(false)}>¿Qué es?</a>
          <a href="#protocolos" onClick={() => setIsMenuOpen(false)}>Protocolos</a>
          <a href="#epp" onClick={() => setIsMenuOpen(false)}>EPP</a>
          <a href="#riesgos" onClick={() => setIsMenuOpen(false)}>Riesgos</a>
          <a href="#reportes" onClick={() => setIsMenuOpen(false)}>Reportes</a>

          <a href="#examen" onClick={() => setIsMenuOpen(false)}>Examen</a>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
