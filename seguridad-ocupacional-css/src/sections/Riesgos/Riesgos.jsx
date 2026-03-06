import { riesgosItems } from '../../content/sections'
import Card from '../../components/ui/Card'
import './Riesgos.css'

const Riesgos = () => {
  return (
    <section id="riesgos" className="riesgos">
      <div className="container">
        <h2 className="section-title">Riesgos comunes</h2>
        <div className="riesgos-grid">
          {riesgosItems.map((riesgo) => (
            <Card
              key={riesgo.title}
              icon={
                riesgo.iconUrl ? (
                  <img
                    src={riesgo.iconUrl}
                    alt={riesgo.iconAlt || riesgo.title}
                    width={28}
                    height={28}
                    loading="lazy"
                  />
                ) : (
                  riesgo.icon
                )
              }
              title={riesgo.title}
              description={riesgo.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Riesgos

