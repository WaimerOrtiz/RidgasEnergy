'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  ArrowRight,
  TrendingDown,
  CircleDot,
  Zap,
  Recycle,
  Mail,
  Phone,
  MapPin,
  Send,
  ExternalLink,
  Sun,
  FlaskConical,
  CheckCircle2
} from 'lucide-react'
import { submitContact } from './actions'

const HERO_IMAGES = [
  '/images/hero1.png',
  '/images/hero4.jpg',
  '/images/hero7.jpg'
]

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR - Estructura Original con Enlaces Nuevos */}
      <header>
        <div className="container nav-container">
          <Link href="/" className="logo-container">
            <Image src="/images/Logo.png" alt="Ridgas Energy Logo" width={40} height={40} />
            RIDGAS ENERGY
          </Link>
          <nav className="nav-links lg:flex hidden">
            <Link href="/">Inicio</Link>
            <Link href="/biotecnologia">Biotecnología</Link>
            <Link href="/consultoria">Consultoría</Link>
            <Link href="/renovables">Renovables</Link>
            <Link href="/blog">Blog</Link>
          </nav>

          <Link href="#contacto" className="btn-primary">
            Contáctanos
          </Link>
        </div>
      </header>

      <main>
        {/* HERO - Estructura Original con Carrusel */}
        <section className="hero" style={{ padding: 0, overflow: 'hidden' }}>
          {HERO_IMAGES.map((img, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `linear-gradient(to right, rgba(11, 31, 58, 0.95) 0%, rgba(30, 58, 95, 0.8) 100%), url('${img}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: currentImage === index ? 1 : 0,
                transition: 'opacity 1.5s ease-in-out',
                zIndex: currentImage === index ? 1 : 0
              }}
            />
          ))}

          <div className="container" style={{ position: 'relative', zIndex: 10, padding: '120px 20px' }}>
            <div className="hero-content">
              <div className="pill">
                <span>•</span> BIOTECNOLOGÍA <span>•</span> CONSULTORÍA TÉCNICA
              </div>
              <h1>Recobro mejorado (EOR) y optimización de producción en Oil & Gas</h1>
              <p className="subtitle">Tecnología microbiológica aplicada al incremento de producción y mejora del factor de recobro.</p>
              <p>
                RIDGAS ENERGY implementa soluciones de recobro mejorado mediante biotecnología, respaldadas por aplicaciones en campo y experiencia directa en problemas de producción.
              </p>
              <div className="hero-actions">
                <Link href="#contacto" className="btn-yellow">
                  Contáctanos <ArrowRight size={20} />
                </Link>
                <Link href="/biotecnologia" className="btn-outline">
                  Ver Soluciones
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* DESAFÍOS - Estructura Original */}
        <section className="section bg-light">
          <div className="container">
            <h4 className="section-label">DESAFÍOS DEL SECTOR</h4>
            <h2 className="section-title">Maximizando el potencial de sus activos</h2>
            <p className="section-desc">Identificamos y resolvemos los cuellos de botella que limitan su producción diaria.</p>

            <div className="problems-grid">
              {[
                { icon: TrendingDown, text: "Baja producción en pozos", color: "yellow" },
                { icon: CircleDot, text: "Bajo factor de recobro", color: "green" },
                { icon: Zap, text: "Alta viscosidad del crudo", color: "yellow" },
                { icon: Recycle, text: "Fallas en inyección de agua", color: "green" },
              ].map((item, i) => (
                <div key={i} className="card">
                  <div className={`icon-box ${item.color === 'yellow' ? 'icon-yellow' : 'icon-green'}`}>
                    <item.icon size={20} />
                  </div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICIOS - Gateway a las 3 hojas principales */}
        <section className="section">
          <div className="container">
            <h4 className="section-label">NUESTROS PILARES</h4>
            <h2 className="section-title">Soluciones Integrales de Ingeniería</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '50px' }}>
              {/* Servicio 1: Biotecnología */}
              <div className="bio-card-white" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="icon-box icon-green mb-6 !w-12 !h-12 !text-2xl">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="bio-card-title">Biotecnología (MEOR)</h3>
                <p className="mb-8 text-gray-600" style={{ flexGrow: 1 }}>
                  Implementación de tecnología microbiológica para el incremento de producción y mejora del factor de recobro con el respaldo de Micro-bac International.
                </p>
                <Link href="/biotecnologia" className="bio-link">
                  Saber más sobre Micro-bac <ArrowRight size={16} />
                </Link>
              </div>

              {/* Servicio 2: Consultoría */}
              <div className="bio-card-white" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="icon-box icon-blue mb-6 !w-12 !h-12 !text-2xl">
                  <FlaskConical size={24} />
                </div>
                <h3 className="bio-card-title">Consultoría Técnica</h3>
                <p className="mb-8 text-gray-600" style={{ flexGrow: 1 }}>
                  Diagnóstico especializado de problemas de producción en campo, auditoría de tratamientos químicos y optimización operativa.
                </p>
                <Link href="/consultoria" className="bio-link">
                  Saber más sobre Consultoría <ArrowRight size={16} />
                </Link>
              </div>

              {/* Servicio 3: Renovables */}
              <div className="bio-card-white" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="icon-box icon-yellow mb-6 !w-12 !h-12 !text-2xl" style={{ backgroundColor: 'rgba(245, 180, 0, 0.1)' }}>
                  <Sun size={24} />
                </div>
                <h3 className="bio-card-title">Energías Renovables</h3>
                <p className="mb-8 text-gray-600" style={{ flexGrow: 1 }}>
                  Estructuración de comunidades energéticas, gestión de tierras para granjas solares y soluciones fotovoltaicas industriales.
                </p>
                <Link href="/renovables" className="bio-link">
                  Saber más sobre Renovables <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCIA - Estructura Original */}
        <section className="section bg-dark">
          <div className="container">
            <div className="exp-grid">
              <div>
                <h4 className="section-label">EXPERIENCIA</h4>
                <h2 className="section-title">Más de 25 años de experiencia en campo</h2>
                <p className="section-desc">La base técnica de RIDGAS ENERGY proviene de más de 25 años de experiencia en la industria petrolera.</p>
                <ul className="exp-list">
                  <li>Tratamiento químico aplicado a producción</li>
                  <li>Optimización de procesos</li>
                  <li>Diagnóstico de problemas operacionales</li>
                  <li>Recuperación de inyectividad</li>
                </ul>
              </div>
              <div>
                <h4 className="section-label mb-6">TRAYECTORIA</h4>
                <h2 className="section-title !text-white mb-8">Trayectoria y Respaldo en<br />Operadoras del Sector</h2>
                <div className="companies-grid">
                  {[
                    "Ecopetrol", "Hocol", "Chevron", "OXY", "BP",
                    "Frontera Energy", "Parex Resources", "Gran Tierra Energy",
                    "Mansarovar Energy", "Champion Technologies", "ATP Ingeniería", "Sipecol"
                  ].map((company, i) => (
                    <div key={i} className="company-card">
                      {company}
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO - Estructura Original */}
        <section id="contacto" className="section">
          <div className="container">
            <div className="contact-grid">
              <div>
                <h4 className="section-label">CONTACTO</h4>
                <h2 className="section-title">Hablemos de su operación</h2>
                <p className="section-desc">Cuéntenos sobre su campo, el reto y el resultado que necesita. Le responderemos en menos de un día hábil.</p>

                <div className="contact-info">
                  {[
                    { icon: Mail, label: "CORREO", value: "waimer.ortiz@ridgasenergy.com" },
                    { icon: Phone, label: "TELÉFONO", value: "+57 3174270731" },
                  ].map((item, i) => (
                    <div key={i} className="contact-item">
                      <div className="contact-icon"><item.icon size={20} /></div>
                      <div className="contact-item-text">
                        <p>{item.label}</p>
                        <h4>{item.value}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="contact-form">
                <form action={submitContact}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="nombre">NOMBRE COMPLETO</label>
                      <input type="text" id="nombre" name="nombre" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="empresa">EMPRESA</label>
                      <input type="text" id="empresa" name="empresa" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="correo">CORREO</label>
                      <input type="email" id="correo" name="correo" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="telefono">TELÉFONO</label>
                      <input type="tel" id="telefono" name="telefono" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="mensaje">MENSAJE</label>
                    <textarea id="mensaje" name="mensaje" placeholder="Describa brevemente su proyecto o reto..." required></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                    Contactar <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER - Estructura Original */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-logo">
                <Image src="/images/Logo.png" alt="Ridgas Energy Logo" width={35} height={35} />
                RIDGAS ENERGY
              </div>
              <p className="footer-desc">Soluciones avanzadas para la optimización de producción en oil & gas y la transición energética.</p>
            </div>
            <div className="footer-col">
              <h5>CONTACTO</h5>
              <p>waimer.ortiz@ridgasenergy.com</p>
              <p>+57 317 427 0731</p>
            </div>
            <div className="footer-col">
              <h5>ENLACES</h5>
              <p><Link href="https://www.micro-bac.com" target="_blank">Micro-bac International</Link></p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Ridgas Energy SAS. Todos los derechos reservados.</p>
            <p>Energía que mueve el mundo.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
