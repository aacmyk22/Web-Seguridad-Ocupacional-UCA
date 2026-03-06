import './Card.css'

const Card = ({
  icon,
  title,
  description,
  children,
  footer,
  align = 'left',
  className = '',
}) => {
  const alignmentClass = align ? `ui-card--${align}` : ''
  const classes = ['ui-card', alignmentClass, className].filter(Boolean).join(' ')

  return (
    <article className={classes}>
      {icon && (
        <div className="ui-card__icon" aria-hidden="true">
          {icon}
        </div>
      )}
      <div className="ui-card__body">
        {title && <h3 className="ui-card__title">{title}</h3>}
        {description && <p className="ui-card__description">{description}</p>}
        {children}
      </div>
      {footer && <div className="ui-card__footer">{footer}</div>}
    </article>
  )
}

export default Card

