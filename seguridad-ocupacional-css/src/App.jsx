import { useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ContactBar from './components/layout/ContactBar'

import {
  Hero,
  Importancia,
  QueEs,
  Protocolos,
  EPP,
  Riesgos,
  Reportes,
  Registro,
} from './sections'
import './App.css'

function App() {
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search)
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [])

  return (
    <div className="App">
      <Header />
      <Hero />
      <Importancia />
      <QueEs />
      <Protocolos />
      <EPP />
      <Riesgos />
      <Reportes />
      <Registro />
      <ContactBar />
      <Footer />
    </div>
  )
}

export default App
