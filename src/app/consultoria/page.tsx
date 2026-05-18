'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  ArrowRight,
  ClipboardCheck,
  FlaskConical,
  Search,
  Microscope,
  Factory,
  Settings,
  Droplets,
  ExternalLink,
  Mail,
  Phone,
  BarChart3,
  CheckCircle2,
  Cpu,
  Zap,
  ShieldCheck,
  Globe
} from 'lucide-react'
import { submitContact } from '../actions'

const HERO_IMAGES = [
  '/images/hero4.jpg',
  '/images/hero5.png',
  '/images/hero6.jpg'
]

export default function Consultoria() {
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
            <Link href="/consultoria" className="text-[#F5B400] font-bold border-b-2 border-[#F5B400] pb-1 text-sm">Consultoría</Link>
            <Link href="/renovables" className="text-white/70 hover:text-white text-sm font-medium">Renovables</Link>
            <Link href="/blog" className="text-white/70 hover:text-white text-sm font-medium">Blog</Link>
          </nav>
          <Link href="#contacto" className="btn-primary" style={{ background: '#F5B400', color: '#0B1F3A', padding: '10px 24px', borderRadius: '4px', fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase' }}>
            Contáctanos
          </Link>
        </div>
      </header>

      <main>
        {/* HERO CON ENFOQUE EN ESTRATEGIA */}
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
                <span>•</span> ESTRATEGIA EN TRANSICIÓN ENERGÉTICA <span>•</span> +25 AÑOS
              </div>
              <h1 className="text-white">Diagnóstico técnico de problemas de producción en campo</h1>
              <p className="subtitle">RIDGAS ENERGY se apoya en experiencia directa en campo para identificar y resolver problemas reales de producción.</p>
              <p>
                Identificamos las causas raíz de la baja producción mediante ingeniería de detalle, abordando fenómenos de corrosión y emulsiones complejas desde el fondo de pozo hasta la superficie.
              </p>
              <div className="hero-actions">
                <Link href="#perfil" className="btn-yellow">
                  Conocer nuestro Enfoque <ArrowRight size={20} />
                </Link>
                <Link href="#contacto" className="btn-outline">
                  Solicitar Asesoría
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* DIFERENCIADOR - IA + INGENIERÍA */}
        <section id="perfil" className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center' }}>
              <div>
                <h4 className="section-label">NUESTRO DIFERENCIADOR</h4>
                <h2 className="section-title">Ingeniería de Petróleos Potenciada con IA</h2>
                <p className="section-desc">
                  No solo entendemos el yacimiento y la superficie; utilizamos el desarrollo de software y el modelado con IA para desmitificar la transición energética y tomar decisiones basadas en datos precisos.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px' }}>
                  <div className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div className="icon-box icon-blue mb-4"><Cpu size={20} /></div>
                    <h4 style={{ fontSize: '0.9rem', marginBottom: '10px' }}>Analítica Avanzada</h4>
                    <p style={{ fontSize: '0.8rem', fontWeight: 'normal', color: '#666' }}>Modelado inteligente de datos para optimización de procesos.</p>
                  </div>
                  <div className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div className="icon-box icon-green"><Globe size={20} /></div>
                    <h4 style={{ fontSize: '0.9rem', marginBottom: '10px' }}>Visión Global</h4>
                    <p style={{ fontSize: '0.8rem', fontWeight: 'normal', color: '#666' }}>Punto central entre la industria tradicional y las energías limpias.</p>
                  </div>
                </div>
              </div>
              <div className="bio-card-white" style={{ borderLeft: '4px solid #F5B400', padding: '40px' }}>
                <h3 className="bio-card-title">Capacidades Estratégicas</h3>
                <ul className="exp-list" style={{ marginTop: '20px' }}>
                  <li style={{ fontSize: '0.9rem' }}>Gerenciamiento de Tratamientos Químicos (Crudo, Gas, Agua).</li>
                  <li style={{ fontSize: '0.9rem' }}>Aseguramiento de Integridad de Facilidades.</li>
                  <li style={{ fontSize: '0.9rem' }}>Auditoría de Inyectividad y Diagnóstico de Daño de Formación.</li>
                  <li style={{ fontSize: '0.9rem' }}>Desarrollo de software aplicado a la industria.</li>
                  <li style={{ fontSize: '0.9rem' }}>Optimización Operativa de Sistemas de Levantamiento Artificial.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* LOGROS Y EXPERIENCIA */}
        <section className="section bg-light">
          <div className="container">
            <h4 className="section-label">EXPERIENCIA PROBADA</h4>
            <h2 className="section-title">Resultados que Respaldan nuestra Visión</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '50px' }}>
              <div className="card" style={{ display: 'block' }}>
                <h4 style={{ color: '#2E7D32', marginBottom: '15px', fontSize: '1.1rem' }}>Restauración de Producción</h4>
                <p style={{ fontSize: '0.9rem', color: '#555' }}>
                  Diagnóstico y solución de taponamiento en pozos inyectores, recuperando la inyectividad de agua y restaurando niveles de producción de crudo.
                </p>
              </div>
              <div className="card" style={{ display: 'block' }}>
                <h4 style={{ color: '#1E3A5F', marginBottom: '15px', fontSize: '1.1rem' }}>Dirección de Infraestructura</h4>
                <p style={{ fontSize: '0.9rem', color: '#555' }}>
                  Dirección y ejecución de construcción de plantas de inyección de agua y equipos de tratamiento cumpliendo plazos y presupuestos.
                </p>
              </div>
              <div className="card" style={{ display: 'block' }}>
                <h4 style={{ color: '#F5B400', marginBottom: '15px', fontSize: '1.1rem' }}>Optimización de Tratamiento Químico</h4>
                <p style={{ fontSize: '0.9rem', color: '#555' }}>
                  Reducción de hasta un 15% en OPEX mediante la auditoría técnica de dosificación, selección de química especializada y optimización predictiva de sistemas de inyección.
                </p>
                <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #EEE', fontSize: '0.75rem', fontWeight: 'bold', color: '#0B1F3A' }}>
                  INGENIERÍA DE DETALLE POTENCIADA CON IA
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRAYECTORIA CORPORATIVA */}
        <section className="section bg-dark">
          <div className="container">
            <h4 className="section-label">TRAYECTORIA</h4>
            <h2 className="section-title !text-white">Trayectoria y Respaldo en Operadoras del Sector</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginTop: '40px' }}>
              {["Ecopetrol", "Hocol", "Chevron", "OXY", "BP", "Frontera Energy", "Parex Resources", "Gran Tierra Energy", "Mansarovar Energy", "Champion Technologies", "ATP Ingeniería", "Sipecol"].map((partner, i) => (
                <div key={i} style={{ padding: '10px 25px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', fontSize: '0.9rem', color: '#D0D9E4' }}>
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="section">
          <div className="container">
            <div className="contact-grid">
              <div>
                <h4 className="section-label">INICIE LA CONVERSACIÓN</h4>
                <h2 className="section-title">¿Cómo podemos potenciar su activo?</h2>
                <p className="section-desc">Estructuremos juntos una solución que combine rigor técnico con visión de futuro.</p>

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
                    <label htmlFor="mensaje">RETOS U OPORTUNIDADES</label>
                    <textarea id="mensaje" name="mensaje" placeholder="Describa brevemente su requerimiento técnico o estratégico..." required></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Solicitar Consultoría Estratégica
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
              <p className="footer-desc">Hub comercial y consultoría estratégica para la optimización de la matriz energética.</p>
            </div>
            <div className="footer-col">
              <h5>CONTACTO</h5>
              <p>waimer.ortiz@ridgasenergy.com</p>
              <p>+57 317 427 0731</p>
            </div>
            <div className="footer-col">
              <h5>RECURSOS</h5>
              <p><Link href="https://www.linkedin.com/in/waimerortiz-ridgasenergy" target="_blank">LinkedIn Profile</Link></p>
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
