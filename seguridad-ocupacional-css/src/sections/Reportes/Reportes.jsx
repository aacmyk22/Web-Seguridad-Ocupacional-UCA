import { reportesContent } from '../../content/sections'
import './Reportes.css'

const Reportes = () => {

  return (
    <section id="reportes" className="reportes">
      <div className="container">
        <div className="reportes-card">
          <div className="reportes-content">
            <h2 className="section-title">Reportes e incidentes</h2>
            <p className="description">{reportesContent.description}</p>
            <ul className="tipos-list">
              {reportesContent.tipos.map((tipo, index) => (
                <li key={index} className="tipo-item">
                  <span className="tipo-icon">•</span>
                  <span>{tipo}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reportes-side">
            <div className="contact-card">
              <h3>Contacto de reporte</h3>
              <p>Envía el reporte a tu coordinador del CSS con estos datos mínimos:</p>
              <ul>
                <li>Correo/teléfono de tu encargado en la actividad</li>
                <li>Fecha, hora y lugar del evento</li>
                <li>Actividad que se realizaba y quiénes estaban</li>
              </ul>
            </div>

            <div className="checklist-card">
              <h4>Checklist rápido</h4>
              <ol>
                <li>Detén la actividad si hay riesgo.</li>
                <li>Atiende y documenta (foto, lugar, hora).</li>
                <li>Notifica a la coordinación del CSS.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reportes

