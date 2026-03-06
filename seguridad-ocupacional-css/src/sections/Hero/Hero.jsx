import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, ShieldCheck, Users } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Fondo con imagen y desenfoque */}
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      
      <div className="container hero-container">
        <div className="hero-layout">
          
          {/* LADO IZQUIERDO */}
          <motion.div 
            className="hero-text-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge-campus">● CAMPUS SEGURO</span>
            <h1>Seguridad Ocupacional <br /> en <span>CSS UCA</span></h1>
            <p>
              Infórmate acerca de la importancia de la seguridad ocupacional y protocolos a seguir 
              en los proyectos del Centro de Servicio Social: identificar peligros, usar el EPP 
              correcto y actuar a tiempo.
            </p>
            <div className="hero-actions">
              {/* Navegación a anclas de tu página */}
              <a href="#protocolos" className="btn-primary">Ver protocolos</a>
              <a href="#registro" className="btn-secondary">Realizar examen</a>
            </div>
          </motion.div>

          {/* LADO DERECHO: TARJETA SALTANDO */}
          <motion.div 
            className="hero-visual"
            animate={{ y: [0, -15, 0] }} // Animación de salto constante
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <div className="active-protocol-card">
              <div className="card-icon-box">
                <ClipboardCheck size={28} color="white" />
              </div>
              <h3>Protocolo Activo</h3>
              <p>
                "Completa tu capacitación obligatoria en protocolos de seguridad. Al llegar al 100% estaras listo para realizar el examen
                de certificación y registrar tu participación en el programa de Campus Seguro"
              </p>
              {/* Barra de progreso simplificada */}     
            </div>
          </motion.div>
        </div>

        {/* STATS */}
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-icon"><ClipboardCheck size={20}/></div>
            <div>
              <p>Índice de cumplimiento</p>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-icon"><Users size={20}/></div>
            <div>
              <p>Estudiantes capacitados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;