import { queEsPrincipios } from '../../content/sections'
import './QueEs.css'

const QueEs = () => {

  return (
    <section id="que-es" className="que-es">
      <div className="container">
        <div className="que-es-content">
          <div className="que-es-text">
            <h2 className="section-title">¿Qué es la Seguridad Ocupacional?</h2>
            <p className="description">
              Es el conjunto de prácticas, protocolos y controles que aplicamos en los proyectos del Centro de Servicio Social para evitar
              incidentes, cuidar la salud de los estudiantes y de las comunidades donde intervenimos.
            </p>
            <div className="principios-list">
              {queEsPrincipios.map((principio, index) => (
                <div key={index} className="principio-item">
                  <div className="principio-icon">
                    {principio.iconUrl ? (
                      <img
                        src={principio.iconUrl}
                        alt={principio.iconAlt || principio.title}
                        width={28}
                        height={28}
                        loading="lazy"
                      />
                    ) : (
                      principio.icon
                    )}
                  </div>
                  <div className="principio-text">
                    <h3>{principio.title}</h3>
                    <p>{principio.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="que-es-stats">
            <div className="stat-card">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="stat-number">100%</div>
              <div className="stat-label">Proyectos con evaluación de riesgos</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <div className="stat-number">200+</div>
              <div className="stat-label">Estudiantes capacitados al año</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                </svg>
              </div>
              <div className="stat-number">0</div>
              <div className="stat-label">Incidentes graves en actividades</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QueEs

