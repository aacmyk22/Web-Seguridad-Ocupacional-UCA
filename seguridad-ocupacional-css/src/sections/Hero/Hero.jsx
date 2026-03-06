import { useState, useEffect } from 'react'
import { heroSlides, heroCopy } from '../../content/sections'
import './Hero.css'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slidesCount = heroSlides.length

  // Auto-avanzar el carrusel cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesCount)
    }, 5000)

    return () => clearInterval(interval)
  }, [slidesCount])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section id="inicio" className="hero">
      <div className="hero-carousel">
        {heroSlides.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={image.url} alt={image.alt} />
            <div className="hero-overlay"></div>
          </div>
        ))}

        {/* Indicadores */}
        <div className="carousel-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">{heroCopy.title}</h1>
        <p className="hero-subtitle">{heroCopy.subtitle}</p>
        <div className="hero-buttons">
          {heroCopy.actions.map((action) => (
            <a key={action.href} href={action.href} className="btn-link">
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
