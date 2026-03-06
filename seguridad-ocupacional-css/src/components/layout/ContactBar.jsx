import './ContactBar.css'

const links = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/cssuca/',
    icon: (
      <img
        src="https://cdn.simpleicons.org/facebook/ffffff"
        alt="Facebook"
        width="20"
        height="20"
        loading="lazy"
      />
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/CSSUCA',
    icon: (
      <img
        src="https://cdn.simpleicons.org/x/ffffff"
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
        src="https://cdn.simpleicons.org/instagram/ffffff"
        alt="Instagram"
        width="20"
        height="20"
        loading="lazy"
      />
    ),
  },
]

const ContactBar = () => {
  return (
    <div className="contact-bar">
      {links.map((link) => (
        <a
          key={link.label}
          className="contact-bar__link"
          href={link.href}
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}

export default ContactBar

