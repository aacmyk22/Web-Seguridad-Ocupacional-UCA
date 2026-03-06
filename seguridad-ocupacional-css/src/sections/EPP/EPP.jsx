import { eppItems } from '../../content/sections'
import Card from '../../components/ui/Card'
import './EPP.css'

const EPP = () => {

  return (
    <section id="epp" className="epp">
      <div className="container">
        <h2 className="section-title">Equipos de Protección Personal (EPP)</h2>
        <div className="epp-grid">
          {eppItems.map((item) => (
            <Card
              key={item.title}
              icon={
                item.iconUrl ? (
                  <img
                    src={item.iconUrl}
                    alt={item.iconAlt || item.title}
                    width={28}
                    height={28}
                    loading="lazy"
                  />
                ) : (
                  item.icon
                )
              }
              title={item.title}
              description={item.description}
              align="center"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EPP

