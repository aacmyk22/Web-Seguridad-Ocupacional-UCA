import React, { useState } from 'react';
import { protocolosItems } from '../../content/sections';
import Card from '../../components/ui/Card';
import './Protocolos.css';

const INFO_GUIAS = {
  sismo: {
    titulo: "Sismo en Campus o Sedes",
    clase: "sismo",
    regla: "Actúa rápido para reducir lesiones: agáchate, cúbrete y agárrate. Cuando termine el movimiento, evacúa con orden.",
    pasos: [
      { id: '1', icon: '🧘', t: 'AGÁCHATE', d: 'En manos y rodillas.' },
      { id: '2', icon: '🛡️', t: 'CÚBRETE', d: 'Bajo mesa firme.' },
      { id: '3', icon: '🤝', t: 'AGÁRRATE', d: 'Hasta que pare.' }
    ],
    si: ["Actúa para que lesiones no aumenten.", "Despeja accesos.", "Mantén la calma."],
    no: ["Usar ascensores.", "Deslizarse en cama/muebles.", "Ignorar medidas mínimas."],
    emergencia: "2210-6600, ext. 555"
  },
  incendio: {
    titulo: "Incendio en Actividades",
    clase: "incendio",
    regla: "Prioridad: alertar, evacuar y mantener una vía de escape. Solo usa extintor si el fuego es pequeño.",
    pasos: [
      { id: '1', icon: '🏃', t: 'POSICIÓNATE', d: 'A favor del viento.' },
      { id: '2', icon: '🔓', t: 'QUITA SEGURO', d: 'Tira de la anilla.' },
      { id: '3', icon: '🎯', t: 'APUNTA BASE', d: 'A la base del fuego.' }
    ],
    si: ["Alertar a los demás.", "Hacer computación.", "Evacuar ordenadamente."],
    no: ["Evitar los humos.", "Entrar en pánico.", "Perder el control."],
    emergencia: "413 857 2772"
  },
  laboratorio: {
    titulo: "Laboratorios y Bioseguridad",
    clase: "laboratorio",
    regla: "Uso obligatorio de EPP: Bata, guantes y gafas. Conocer ubicación de duchas y lavaojos.",
    pasos: [
      { id: 'A', icon: '🥼', t: 'PROTECCIÓN', d: 'Bata y guantes siempre.' },
      { id: 'B', icon: '🧼', t: 'LIMPIEZA', d: 'Lavar manos al salir.' },
      { id: 'C', icon: '🧪', t: 'RESIDUOS', d: 'Depositar en envases.' }
    ],
    si: ["FDS a la vista.", "Ventilar el área.", "Notificar derrames."],
    no: ["Comer o beber.", "Pipetear con la boca.", "Ignorar al responsable."],
    emergencia: "Ext. 123 - Lab"
  },
  campo: {
    titulo: "Trabajo de Campo y Visitas",
    clase: "campo",
    regla: "Realizar briefing previo, definir ruta y puntos de encuentro. Check-in/out obligatorio.",
    pasos: [
      { id: 'I', icon: '🗺️', t: 'PLANIFICA', d: 'Sigue la ruta definida.' },
      { id: 'II', icon: '🎒', t: 'EQUIPO', d: 'Botiquín y EPP listos.' },
      { id: 'III', icon: '📡', t: 'REPORTE', d: 'Mantener comunicación.' }
    ],
    si: ["Seguir al guía.", "Reportar incidentes.", "Respetar el entorno."],
    no: ["Separarse del grupo.", "Zonas no autorizadas.", "Ignorar clima."],
    emergencia: "Coordinación UCA"
  }
};

const Protocolos = () => {
  const [guiaActiva, setGuiaActiva] = useState(null);

  const abrirGuia = (titulo) => {
    const t = titulo.toLowerCase();
    if (t.includes('sismo')) setGuiaActiva('sismo');
    else if (t.includes('incendio')) setGuiaActiva('incendio');
    else if (t.includes('laboratorio')) setGuiaActiva('laboratorio');
    else if (t.includes('campo')) setGuiaActiva('campo');
  };

  const data = guiaActiva ? INFO_GUIAS[guiaActiva] : null;

  return (
    <section id="protocolos" className="protocolos">
      <div className="container">
        <h2 className="section-title">Protocolos clave</h2>
        <div className="protocolos-grid">
          {protocolosItems.map((p) => (
            <Card
              key={p.title}
              icon={p.iconUrl ? <img src={p.iconUrl} alt={p.title} width={28} height={28} /> : p.icon}
              title={p.title}
              description={p.description}
              align="center"
              footer={
                <button className="btn-guia" onClick={() => abrirGuia(p.title)}>
                  Guía
                </button>
              }
            />
          ))}
        </div>
      </div>

      {guiaActiva && (
        <div className="modal-overlay-creativo" onClick={() => setGuiaActiva(null)}>
          <div className="guia-premium" onClick={(e) => e.stopPropagation()}>
            <div className={`guia-header-premium header-${data.clase}`}>
              <button className="btn-regresar" onClick={() => setGuiaActiva(null)}>← Regresar</button>
              <h1>{data.titulo}</h1>
            </div>

            <div className="guia-body">
              <div className={`regla-oro-premium bg-${data.clase}`}>
                <div className="badge">REGLA DE ORO</div>
                <p>{data.regla}</p>
              </div>

              <div className="cards-dinamicas">
                {data.pasos.map(step => (
                  <div key={step.id} className="card-paso">
                    <div className="card-icon">{step.icon}</div>
                    <h3>{step.t}</h3>
                    <p>{step.d}</p>
                  </div>
                ))}
              </div>

              <div className="info-grid-creative">
                <div className="info-box-si">
                  <h5>✅ LO QUE SÍ HACER</h5>
                  <ul>{data.si.map((item, i) => <li key={i}>{item}</li>)}</ul>
                </div>
                <div className="info-box-no">
                  <h5>❌ LO QUE EVITAR</h5>
                  <ul>{data.no.map((item, i) => <li key={i}>{item}</li>)}</ul>
                </div>
              </div>

              <div className={`footer-emergency-premium bg-${data.clase}`}>
                <div className="emergency-label">EMERGENCIA</div>
                <div className="emergency-number">{data.emergencia}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Protocolos;