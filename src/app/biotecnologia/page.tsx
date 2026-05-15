'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { 
  ArrowRight, 
  CheckCircle2, 
  Droplets, 
  ShieldCheck, 
  Zap, 
  FlaskConical, 
  Waves, 
  Leaf,
  ExternalLink,
  Mail,
  Phone,
  BarChart3,
  Microscope,
  Database
} from 'lucide-react'
import { submitContact } from '../actions'

const HERO_IMAGES = [
  '/images/hero1.png',
  '/images/hero2.png',
  '/images/hero3.jpg'
]

export default function Biotecnologia() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#0B1F3A] sticky top-0 z-50 border-b border-white/10">
        <div className="container nav-container" style={{ height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '800', color: 'white' }}>
            <Image src="/images/Logo.png" alt="Ridgas Energy Logo" width={40} height={40} />
            <span>RIDGAS ENERGY</span>
          </Link>
          <nav className="nav-links lg:flex hidden" style={{ display: 'flex', gap: '25px' }}>
            <Link href="/" className="text-white/70 hover:text-white text-sm font-medium">Inicio</Link>
            <Link href="/biotecnologia" className="text-[#F5B400] font-bold border-b-2 border-[#F5B400] pb-1 text-sm">Biotecnología</Link>
            <Link href="/consultoria" className="text-white/70 hover:text-white text-sm font-medium">Consultoría</Link>
            <Link href="/renovables" className="text-white/70 hover:text-white text-sm font-medium">Renovables</Link>
            <Link href="/blog" className="text-white/70 hover:text-white text-sm font-medium">Blog</Link>
          </nav>
          <Link href="#contacto" className="btn-primary" style={{ background: '#F5B400', color: '#0B1F3A', padding: '10px 24px', borderRadius: '4px', fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase' }}>
            Contáctanos
          </Link>
        </div>
      </header>

      <main>
        {/* HERO ESPECÍFICO CON CARRUSEL */}
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
                backgroundImage: `linear-gradient(to right, rgba(11, 31, 58, 0.95) 0%, rgba(46, 125, 50, 0.8) 100%), url('${img}')`,
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
                <span>•</span> TECNOLOGÍA MICRO-BAC <span>•</span> MEOR
              </div>
              <h1 className="text-white">Soluciones microbiológicas para recobro mejorado (EOR)</h1>
              <p className="subtitle">Tecnología microbiológica de Micro-bac International aplicada al incremento de producción y mejora del factor de recobro.</p>
              <p>
                RIDGAS ENERGY es el aliado estratégico en Colombia para la implementación de soluciones microbiológicas de Micro-bac International, diseñadas para maximizar el factor de recobro y la eficiencia operativa.
              </p>
              <div className="hero-actions">
                <Link href="#soluciones" className="btn-yellow">
                  Ver Soluciones <ArrowRight size={20} />
                </Link>
                <Link href="https://www.micro-bac.com" target="_blank" className="btn-outline">
                  Visitar Micro-bac <ExternalLink size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCCIÓN TÉCNICA */}
        <section id="soluciones" className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
              <div>
                <h4 className="section-label">¿QUÉ ES MEOR?</h4>
                <h2 className="section-title">Microbial Enhanced Oil Recovery</h2>
                <p className="section-desc">
                  La tecnología MEOR utiliza microorganismos vivos y sus productos metabólicos para mejorar la movilidad del crudo y facilitar su extracción en yacimientos maduros o complejos.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px' }}>
                  <div className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div className="icon-box icon-green mb-4"><BarChart3 size={20} /></div>
                    <h4 style={{ fontSize: '0.9rem', marginBottom: '10px' }}>Incremento de Recobro</h4>
                    <p style={{ fontSize: '0.8rem', fontWeight: 'normal', color: '#666' }}>Aumenta el porcentaje de crudo extraído del yacimiento.</p>
                  </div>
                  <div className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div className="icon-box icon-yellow"><Zap size={20} /></div>
                    <h4 style={{ fontSize: '0.9rem', marginBottom: '10px' }}>Reducción de Viscosidad</h4>
                    <p style={{ fontSize: '0.8rem', fontWeight: 'normal', color: '#666' }}>Mejora la movilidad del crudo pesado en el reservorio y aumenta la gravedad API.</p>
                  </div>
                </div>
              </div>
              <div className="bio-card-green" style={{ position: 'relative' }}>
                <h3 className="bio-card-title">Beneficios Operativos</h3>
                <ul className="exp-list" style={{ marginTop: '20px' }}>
                  <li style={{ color: '#2E7D32' }}>Bajo costo de implementación vs. EOR químico.</li>
                  <li style={{ color: '#2E7D32' }}>No requiere modificaciones mayores en superficie.</li>
                  <li style={{ color: '#2E7D32' }}>Respetuoso con el medio ambiente (Biodegradable).</li>
                  <li style={{ color: '#2E7D32' }}>Soluciones de largo plazo para pozos problema.</li>
                </ul>
                <div style={{ marginTop: '30px', padding: '20px', background: 'white', borderRadius: '8px', border: '1px solid #C8E6C9' }}>
                  <p style={{ fontSize: '0.85rem', color: '#2E7D32', fontWeight: '700' }}>
                    "La biotecnología no solo aumenta la producción, sino que prolonga la vida útil de los activos más allá de los métodos convencionales."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LÍNEAS DE PRODUCTOS - El núcleo de autoridad */}
        <section className="section bg-light">
          <div className="container">
            <h4 className="section-label">LÍNEAS DE PRODUCTO</h4>
            <h2 className="section-title">Soluciones Especializadas de Micro-bac®</h2>
            <p className="section-desc">Contamos con una gama completa de productos diseñados para cada reto en el campo.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
              {/* Línea Para-Bac */}
              <div className="bio-card-white">
                <div className="icon-box icon-green mb-6 !w-12 !h-12 !text-2xl">
                  <Droplets size={24} />
                </div>
                <h3 className="bio-card-title">Serie Para-Bac®</h3>
                <h4 className="text-sm font-bold text-[#2E7D32] mb-4 uppercase tracking-wider">Control de Parafinas y MEOR</h4>
                <p className="mb-6 text-sm text-gray-600">
                  Formulaciones específicas para eliminar depósitos de parafina (C16–C60) y mejorar la movilidad del crudo. Restaura la producción en pozos con flujo restringido.
                </p>
                <div className="bio-list-item !bg-gray-50 !p-3">
                  <CheckCircle2 size={16} className="text-[#2E7D32]" />
                  <span className="text-xs">Control de depósitos orgánicos</span>
                </div>
              </div>

              {/* Línea Integridad */}
              <div className="bio-card-white">
                <div className="icon-box icon-blue mb-6 !w-12 !h-12 !text-2xl">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="bio-card-title">Integridad de Activos</h3>
                <h4 className="text-sm font-bold text-[#1E3A5F] mb-4 uppercase tracking-wider">Corroso-Bac™ & Litho-Bac™</h4>
                <p className="mb-6 text-sm text-gray-600">
                  Inhibición microbiológica de la corrosión y control de incrustaciones minerales. Protege el equipo de fondo y superficie sin químicos agresivos.
                </p>
                <div className="bio-list-item !bg-gray-50 !p-3">
                  <CheckCircle2 size={16} className="text-[#1E3A5F]" />
                  <span className="text-xs">Extensión de vida útil de equipos</span>
                </div>
              </div>

              {/* Línea Biorremediación */}
              <div className="bio-card-white">
                <div className="icon-box icon-yellow mb-6 !w-12 !h-12 !text-2xl" style={{ backgroundColor: 'rgba(245, 180, 0, 0.1)' }}>
                  <Leaf size={24} />
                </div>
                <h3 className="bio-card-title">Línea M-1000®</h3>
                <h4 className="text-sm font-bold text-[#F5B400] mb-4 uppercase tracking-wider">Biorremediación Ambiental</h4>
                <p className="mb-6 text-sm text-gray-600">
                  Tratamiento natural para derrames de hidrocarburos en tierra y agua. Limpieza de tanques y lagunas de lodos de perforación de forma eficiente.
                </p>
                <div className="bio-list-item !bg-gray-50 !p-3">
                  <CheckCircle2 size={16} className="text-[#F5B400]" />
                  <span className="text-xs">Eliminación de pasivos ambientales</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* METODOLOGÍA */}
        <section className="section bg-dark">
          <div className="container text-center">
            <h4 className="section-label mx-auto">NUESTRO PROCESO</h4>
            <h2 className="section-title mx-auto !text-white">Implementación de Alta Precisión</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '60px' }}>
              {[
                { step: "01", icon: Microscope, title: "Diagnóstico", desc: "Análisis de laboratorio y evaluación de campo." },
                { step: "02", icon: Database, title: "Diseño", desc: "Selección del consorcio bacteriano adecuado." },
                { step: "03", icon: Waves, title: "Inyección", desc: "Aplicación controlada en el pozo o facilidad." },
                { step: "04", icon: BarChart3, title: "Seguimiento", desc: "Monitoreo continuo de resultados y producción." },
              ].map((item, i) => (
                <div key={i} className="footer-col" style={{ textAlign: 'center' }}>
                  <div style={{ width: '60px', height: '60px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', border: '1px solid rgba(255,255,255,0.1)', color: '#F5B400', fontSize: '1.5rem' }}>
                    <item.icon size={28} />
                  </div>
                  <h5 style={{ color: '#F5B400', marginBottom: '10px' }}>{item.step}. {item.title}</h5>
                  <p style={{ fontSize: '0.8rem', color: '#A9BBD0' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO - Reutilizado para consistencia */}
        <section id="contacto" className="section">
          <div className="container">
            <div className="contact-grid">
              <div>
                <h4 className="section-label">CONSULTE A UN EXPERTO</h4>
                <h2 className="section-title">¿Tiene un reto de producción?</h2>
                <p className="section-desc">Solicite una evaluación preliminar para determinar la viabilidad de la tecnología MEOR en su activo.</p>
                
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
                      <label htmlFor="empresa">EMPRESA</label>
                      <input type="text" id="empresa" name="empresa" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="correo">CORREO PROFESIONAL</label>
                    <input type="email" id="correo" name="correo" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mensaje">DESCRIPCIÓN DEL RETO</label>
                    <textarea id="mensaje" name="mensaje" placeholder="Describa el problema actual (parafinas, baja producción, etc.)..." required></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Enviar Consulta Técnica
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
              <p className="footer-desc">Expertos en biotecnología aplicada a la optimización de yacimientos maduros y control de integridad.</p>
            </div>
            <div className="footer-col">
              <h5>CONTACTO</h5>
              <p>waimer.ortiz@ridgasenergy.com</p>
              <p>+57 317 427 0731</p>
            </div>
            <div className="footer-col">
              <h5>RECURSOS</h5>
              <p><Link href="/">Volver al Inicio</Link></p>
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
