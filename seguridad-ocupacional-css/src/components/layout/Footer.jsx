import './Footer.css'

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/cssuca/',
    icon: (
      <img
        src="https://cdn.simpleicons.org/facebook/FFFFFF" // Cambiado a blanco para mejor contraste
        alt="Facebook"
        width="22"
        height="22"
        loading="lazy"
      />
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/CSSUCA',
    icon: (
      <img
        src="https://cdn.simpleicons.org/x/FFFFFF"
        alt="X"
        width="20"
        height="20"
        loading="lazy"
      />
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/cssuca/',
    icon: (
      <img
        src="https://cdn.simpleicons.org/instagram/FFFFFF"
        alt="Instagram"
        width="22"
        height="22"
        loading="lazy"
      />
    ),
  },
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h3>Centro de servicio social · UCA</h3>
          
          {/* Sección de Teléfonos limpia */}
          <div className="footer-phones">
            <svg className="phone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8.1 3.5 6.3 5.3c-.4.4-.6 1-.6 1.6 0 6 4.9 10.8 10.8 10.8.6 0 1.2-.2 1.6-.6l1.8-1.8c.4-.4.4-1 0-1.4l-2.2-2.2c-.4-.4-1-.4-1.4 0l-1 1c-.3.3-.7.4-1.1.3-1.6-.6-3-1.9-3.6-3.6-.1-.4 0-.8.3-1.1l1-1c.4-.4.4-1 0-1.4L9.5 3.5c-.4-.4-1-.4-1.4 0Z" />
            </svg>
            <span><strong>Teléfonos:</strong> 2210-6600 Ext. 427 y 2210-6680</span>
          </div>

          {/* Grid de Redes Sociales: Solo imágenes */}
          <div className="social-grid">
            {socialLinks.map((social) => (
              <a 
                key={social.label}
                href={social.href} 
                className="social-circle"
                target="_blank" 
                rel="noreferrer"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer