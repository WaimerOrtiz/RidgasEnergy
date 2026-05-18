'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  ArrowRight,
  Sun,
  Users,
  MapPin,
  Factory,
  Zap,
  CheckCircle2,
  ExternalLink,
  Mail,
  Phone,
  BarChart3,
  Globe,
  Battery
} from 'lucide-react'
import { submitContact } from '../actions'

const HERO_IMAGES = [
  '/images/hero7.jpg',
  '/images/hero8.jpg',
  '/images/hero9.jpg'
]

export default function Renovables() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#0B1F3A] z-50 border-b border-white/10">
        <div className="container nav-container" style={{ height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '800', color: 'white' }}>
            <Image src="/images/Logo.png" alt="Ridgas Energy Logo" width={40} height={40} />
            <span>RIDGAS ENERGY</span>
          </Link>
          <nav className="nav-links lg:flex hidden" style={{ display: 'flex', gap: '25px' }}>
            <Link href="/" className="text-white/70 hover:text-white text-sm font-medium">Inicio</Link>
            <Link href="/biotecnologia" className="text-white/70 hover:text-white text-sm font-medium">Biotecnología</Link>
            <Link href="/consultoria" className="text-white/70 hover:text-white text-sm font-medium">Consultoría</Link>
            <Link href="/renovables" className="text-[#F5B400] font-bold border-b-2 border-[#F5B400] pb-1 text-sm">Renovables</Link>
            <Link href="/blog" className="text-white/70 hover:text-white text-sm font-medium">Blog</Link>
          </nav>
          <Link href="#contacto" className="btn-primary" style={{ background: '#F5B400', color: '#0B1F3A', padding: '10px 24px', borderRadius: '4px', fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase' }}>
            Contáctanos
          </Link>
        </div>
      </header>

      <main>
        {/* HERO CON CARRUSEL */}
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
                backgroundImage: `linear-gradient(to right, rgba(11, 31, 58, 0.9) 0%, rgba(30, 58, 95, 0.7) 100%), url('${img}')`,
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
              <h1 className="text-white">Energía solar y soluciones energéticas</h1>
              <p className="subtitle">RIDGAS ENERGY desarrolla soluciones en energía solar como parte de una visión integral del sector energético.</p>
              <p>
                RIDGAS ENERGY desarrolla soluciones en energía solar como parte de una visión integral del sector energético.
              </p>
              <div className="hero-actions">
                <Link href="#servicios" className="btn-yellow">
                  Ver Soluciones <ArrowRight size={20} />
                </Link>
                <Link href="#contacto" className="btn-outline">
                  Cotizar Proyecto
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* VALOR AGREGADO */}
        <section id="servicios" className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
              <div>
                <h4 className="section-label">TRANSICIÓN REAL</h4>
                <h2 className="section-title">Energía Solar para un Nuevo Mundo</h2>
                <p className="section-desc">
                  No solo instalamos paneles; estructuramos modelos de negocio energéticos que generan rentabilidad y autonomía para empresas y comunidades.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px' }}>
                  <div className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div className="icon-box icon-yellow mb-4"><Battery size={20} /></div>
                    <h4 style={{ fontSize: '0.9rem', marginBottom: '10px' }}>Autonomía</h4>
                    <p style={{ fontSize: '0.8rem', fontWeight: 'normal', color: '#666' }}>Reduzca su dependencia de la red y estabilice costos.</p>
                  </div>
                  <div className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div className="icon-box icon-green"><Globe size={20} /></div>
                    <h4 style={{ fontSize: '0.9rem', marginBottom: '10px' }}>Sostenibilidad</h4>
                    <p style={{ fontSize: '0.8rem', fontWeight: 'normal', color: '#666' }}>Disminuya su huella de carbono con energía certificada.</p>
                  </div>
                </div>
              </div>
              <div className="bio-card-green" style={{ backgroundColor: '#E1F5FE', borderColor: '#B3E5FC' }}>
                <h3 className="bio-card-title" style={{ color: '#01579B' }}>Ejes Estratégicos</h3>
                <div className="bio-list" style={{ gridTemplateColumns: '1fr' }}>
                  {[
                    { icon: Sun, text: "Sistemas solares fotovoltaicos industriales y comerciales." },
                    { icon: Users, text: "Estructuración legal y técnica de Comunidades Energéticas." },
                    { icon: MapPin, text: "Gestión y habilitación de tierras para proyectos a gran escala." },
                    { icon: BarChart3, text: "Monitoreo y optimización de consumo energético." }
                  ].map((item, i) => (
                    <div key={i} className="bio-list-item" style={{ background: 'white', border: 'none' }}>
                      <item.icon size={18} className="text-[#01579B]" />
                      <span className="text-[#01579B]">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIONES DETALLADAS */}
        <section className="section bg-light">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
              {/* Soluciones Industriales (Ahora a la izquierda) */}
              <div className="bio-card-white">
                <div className="icon-box icon-yellow mb-6 !w-12 !h-12 !text-2xl" style={{ backgroundColor: 'rgba(245, 180, 0, 0.1)' }}>
                  <Factory size={24} />
                </div>
                <h3 className="bio-card-title">Soluciones Industriales</h3>
                <p className="mb-6 text-sm text-gray-600">
                  Sistemas On-Grid y Off-Grid para operaciones remotas y centros logísticos. Implementamos analítica predictiva para asegurar la resiliencia operativa y la máxima eficiencia en el consumo.
                </p>
                <div className="bio-list-item !bg-gray-50 !p-3">
                  <CheckCircle2 size={16} className="text-[#F5B400]" />
                  <span className="text-xs">Autoconsumo inteligente y gestión de excedentes</span>
                </div>
              </div>

              {/* Comunidades Energéticas (Ahora a la derecha) */}
              <div className="bio-card-white">
                <div className="icon-box icon-blue mb-6 !w-12 !h-12 !text-2xl">
                  <Users size={24} />
                </div>
                <h3 className="bio-card-title">Comunidades Energéticas</h3>
                <p className="mb-6 text-sm text-gray-600">
                  Modelos asociativos de innovación social y energética. Estructuramos redes de autogeneración compartida donde la analítica de datos permite una distribución equitativa y eficiente del recurso.
                </p>
                <div className="bio-list-item !bg-gray-50 !p-3">
                  <CheckCircle2 size={16} className="text-[#1E3A5F]" />
                  <span className="text-xs">Gobernanza energética basada en datos</span>
                </div>
              </div>

              {/* Hub Comercial Energético (Añadido) */}
              <div className="bio-card-white">
                <div className="icon-box icon-green mb-6 !w-12 !h-12 !text-2xl">
                  <Globe size={24} />
                </div>
                <h3 className="bio-card-title">Hub Comercial Estratégico</h3>
                <p className="mb-6 text-sm text-gray-600">
                  Conexión de alto nivel entre inversionistas globales, fondos de capital y desarrolladores de activos solares a gran escala. Facilitamos la viabilidad financiera de la transición.
                </p>
                <div className="bio-list-item !bg-gray-50 !p-3">
                  <CheckCircle2 size={16} className="text-[#2E7D32]" />
                  <span className="text-xs">Estructuración de PPA y gestión de CAPEX</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="section">
          <div className="container">
            <div className="contact-grid">
              <div>
                <h4 className="section-label">INICIE SU TRANSICIÓN</h4>
                <h2 className="section-title">¿Tiene un proyecto solar en mente?</h2>
                <p className="section-desc">Desde un estudio de factibilidad hasta la puesta en marcha, somos su aliado técnico.</p>

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
                      <label htmlFor="nombre">NOMBRE</label>
                      <input type="text" id="nombre" name="nombre" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="empresa">EMPRESA / COMUNIDAD</label>
                      <input type="text" id="empresa" name="empresa" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="correo">CORREO PROFESIONAL</label>
                    <input type="email" id="correo" name="correo" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mensaje">DETALLES DEL PROYECTO</label>
                    <textarea id="mensaje" name="mensaje" placeholder="Describa el área disponible, ubicación o necesidad energética..." required></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Solicitar Evaluación Energética
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-logo">
                <Image src="/images/Logo.png" alt="Ridgas Energy Logo" width={35} height={35} />
                RIDGAS ENERGY
              </div>
              <p className="footer-desc">Impulsando la transición energética con soluciones solares de alto impacto y rentabilidad.</p>
            </div>
            <div className="footer-col">
              <h5>CONTACTO</h5>
              <p>waimer.ortiz@ridgasenergy.com</p>
              <p>+57 317 427 0731</p>
            </div>
            <div className="footer-col">
              <h5>ENLACES</h5>
              <p><Link href="/">Inicio</Link></p>
              <p><Link href="/consultoria">Consultoría Técnica</Link></p>
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
