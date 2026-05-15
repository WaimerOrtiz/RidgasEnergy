'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { 
  ArrowRight, 
  Calendar, 
  Clock,
  ChevronRight,
  Bookmark,
  FlaskConical,
  Filter,
  Search,
  Share2
} from 'lucide-react'

const CATEGORIES = [
  { id: 'todos', label: 'Todos los Sectores' },
  { id: 'biotecnologia', label: 'Biotecnología / MEOR' },
  { id: 'consultoria', label: 'Consultoría' },
  { id: 'renovables', label: 'Renovables' },
]

const BLOG_POSTS = [
  {
    id: 1,
    title: "Optimización de Recobro en Campos Maduros mediante MEOR",
    excerpt: "Análisis técnico sobre la implementación de consorcios microbianos para reducir la tensión interfacial y mejorar la movilidad del crudo.",
    image: "/images/hero1.png",
    date: "12 de Mayo, 2026",
    category: 'biotecnologia',
    categoryLabel: "BIOTECNOLOGÍA",
    readTime: "12 min"
  },
  {
    id: 2,
    title: "Sistemas de Potencia: Inversores Industriales en Proyectos On-Grid",
    excerpt: "Evaluación de la eficiencia en la conversión de energía y gestión de excedentes en grandes superficies industriales.",
    image: "/images/hero7.jpg",
    date: "08 de Mayo, 2026",
    category: 'renovables',
    categoryLabel: "RENOVABLES",
    readTime: "9 min"
  },
  {
    id: 3,
    title: "Estructuración de PPA para Comunidades Energéticas",
    excerpt: "Guía para la viabilidad financiera y legal de proyectos de autogeneración a gran escala en el mercado colombiano.",
    image: "/images/hero4.jpg",
    date: "02 de Mayo, 2026",
    category: 'renovables',
    categoryLabel: "RENOVABLES",
    readTime: "15 min"
  },
  {
    id: 4,
    title: "Integridad de Activos: Control Microbiológico de la Corrosión",
    excerpt: "Prevención de fallas en líneas de flujo mediante el uso de inhibidores biológicos de alta eficiencia.",
    image: "/images/hero2.png",
    date: "25 de Abril, 2026",
    category: 'biotecnologia',
    categoryLabel: "INTEGRIDAD",
    readTime: "10 min"
  },
  {
    id: 5,
    title: "Analítica de Datos Aplicada a Facilidades de Superficie",
    excerpt: "Modelado predictivo para la optimización de procesos en plantas de tratamiento de inyección de agua.",
    image: "/images/hero5.png",
    date: "18 de Abril, 2026",
    category: 'consultoria',
    categoryLabel: "INGENIERÍA",
    readTime: "8 min"
  }
]

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('todos')

  const filteredPosts = activeCategory === 'todos' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory)

  return (
    <div className="min-h-screen bg-[#F1F5F9]"> {/* Fondo Gris Azulado Suave (Slate 100) */}
      {/* NAVBAR */}
      <header className="bg-[#0B1F3A] sticky top-0 z-50 border-b border-white/10">
        <div className="container nav-container">
          <Link href="/" className="logo-container">
            <Image src="/images/Logo.png" alt="Ridgas Energy Logo" width={40} height={40} />
            <span className="text-white">RIDGAS ENERGY</span>
          </Link>
          <nav className="nav-links lg:flex hidden">
            <Link href="/" className="text-white/70 hover:text-white">Inicio</Link>
            <Link href="/biotecnologia" className="text-white/70 hover:text-white">Biotecnología</Link>
            <Link href="/consultoria" className="text-white/70 hover:text-white">Consultoría</Link>
            <Link href="/renovables" className="text-white/70 hover:text-white">Renovables</Link>
            <Link href="/blog" className="text-[#F5B400] font-bold border-b-2 border-[#F5B400] pb-1">Blog</Link>
          </nav>
          <Link href="#newsletter" className="btn-primary !bg-[#F5B400] !text-[#0B1F3A] !py-2 !px-4 text-sm font-black uppercase tracking-tighter">
            Newsletter
          </Link>
        </div>
      </header>

      <main>
        {/* HERO BLOG EDITORIAL */}
        <section style={{ padding: '80px 0 40px 0', background: 'linear-gradient(to bottom, #0B1F3A, #1e293b)', color: 'white' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '40px' }}>
              <div style={{ maxWidth: '800px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#F5B400', fontWeight: '900', fontSize: '0.7rem', letterSpacing: '3px', marginBottom: '15px' }}>
                  CENTRO DE INTELIGENCIA TÉCNICA
                </div>
                <h1 style={{ fontSize: '3.5rem', fontWeight: '900', lineHeight: '1', letterSpacing: '-2px' }}>
                  Insights Energéticos <span style={{ color: '#F5B400' }}>.</span>
                </h1>
              </div>
              <div className="lg:block hidden" style={{ textAlign: 'right' }}>
                <p style={{ color: '#A9BBD0', fontSize: '0.9rem', maxWidth: '300px' }}>
                  Analítica, biotecnología e ingeniería de vanguardia para la industria de activos reales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FILTROS TÉCNICOS */}
        <section style={{ position: 'sticky', top: '72px', zIndex: 40, background: '#0B1F3A', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '40px' }}>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: '20px 0',
                      fontSize: '0.65rem',
                      fontWeight: '800',
                      color: activeCategory === cat.id ? '#F5B400' : '#A9BBD0',
                      cursor: 'pointer',
                      position: 'relative',
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                      transition: 'all 0.3s'
                    }}
                  >
                    {cat.label}
                    {activeCategory === cat.id && (
                      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '3px', background: '#F5B400' }} />
                    )}
                  </button>
                ))}
              </div>
              <div className="lg:flex hidden" style={{ color: '#A9BBD0', gap: '10px', alignItems: 'center', fontSize: '0.75rem', fontWeight: 'bold' }}>
                <Filter size={14} /> FILTRAR POR SECTOR
              </div>
            </div>
          </div>
        </section>

        {/* GRID DE ARTÍCULOS - TARJETAS DE ALTA INGENIERÍA */}
        <section className="section" style={{ paddingTop: '60px' }}>
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {filteredPosts.map((post) => (
                <article key={post.id} className="group" style={{ 
                  background: '#0B1F3A', 
                  borderRadius: '16px', 
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.2)',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}>
                  {/* Imagen con Aspect Ratio Técnico */}
                  <div style={{ 
                    position: 'relative', 
                    height: '300px', 
                    overflow: 'hidden',
                  }}>
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      fill 
                      style={{ 
                        objectFit: 'cover',
                        transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)' 
                      }}
                      className="group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div style={{ 
                      position: 'absolute', 
                      top: '20px', 
                      right: '20px', 
                      background: '#F5B400', 
                      color: '#0B1F3A', 
                      padding: '4px 12px', 
                      borderRadius: '4px', 
                      fontSize: '0.6rem', 
                      fontWeight: '900', 
                      letterSpacing: '1px' 
                    }}>
                      {post.categoryLabel}
                    </div>
                  </div>
                  
                  {/* Contenido Editorial */}
                  <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#A9BBD0', fontSize: '0.7rem', marginBottom: '20px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={12} className="text-[#F5B400]" /> {post.date}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={12} className="text-[#F5B400]" /> {post.readTime}</span>
                    </div>
                    
                    <h3 style={{ 
                      fontSize: '1.8rem', 
                      color: 'white', 
                      fontWeight: '900', 
                      lineHeight: '1.1', 
                      marginBottom: '15px',
                      transition: 'color 0.3s ease'
                    }} className="group-hover:text-[#F5B400]">
                      {post.title}
                    </h3>
                    
                    <p style={{ fontSize: '0.95rem', color: '#A9BBD0', lineHeight: '1.6', marginBottom: '30px', fontWeight: '400' }}>
                      {post.excerpt}
                    </p>
                    
                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '25px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                      <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-[#F5B400] font-black uppercase text-[10px] tracking-[0.2em] group-hover:gap-4 transition-all">
                        Consultar Informe <ArrowRight size={14} />
                      </Link>
                      <button style={{ background: 'none', border: 'none', color: '#A9BBD0', cursor: 'pointer' }} className="hover:text-white transition-colors">
                        <Share2 size={16} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* NEWSLETTER TÉCNICO */}
        <section id="newsletter" className="section" style={{ paddingBottom: '100px' }}>
          <div className="container">
            <div style={{ 
              background: 'linear-gradient(135deg, #0B1F3A 0%, #1e293b 100%)', 
              borderRadius: '24px', 
              padding: '80px', 
              color: 'white', 
              gap: '60px',
              alignItems: 'center',
              boxShadow: '0 40px 100px rgba(0,0,0,0.3)',
              border: '1px solid rgba(245,180,0,0.2)'
            }} className="grid lg:grid-cols-2">
              
              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '20px', lineHeight: '1' }}>Suscríbase a los Reportes Técnicos</h2>
                <p style={{ fontSize: '1rem', color: '#A9BBD0', lineHeight: '1.6' }}>
                  Reciba mensualmente análisis de ingeniería, actualizaciones tecnológicas y visión estratégica del mercado energético global.
                </p>
              </div>

              <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <input 
                    type="email" 
                    placeholder="correo@empresa.com" 
                    style={{ flex: 1, padding: '18px 25px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', outline: 'none' }}
                  />
                  <button type="submit" style={{ 
                    background: '#F5B400', 
                    color: '#0B1F3A', 
                    padding: '18px 35px', 
                    borderRadius: '12px', 
                    fontWeight: '900', 
                    textTransform: 'uppercase', 
                    fontSize: '0.8rem',
                    letterSpacing: '1px',
                    border: 'none',
                    cursor: 'pointer'
                  }} className="hover:bg-white transition-colors">Suscribirse</button>
                </div>
                <p style={{ fontSize: '0.7rem', color: '#666' }}>Respetamos su privacidad. Sin spam, solo conocimiento técnico.</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER PREMIUM */}
      <footer style={{ background: '#0B1F3A', padding: '100px 0 40px 0', color: 'white', borderTop: '4px solid #F5B400' }}>
        <div className="container">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            <div className="col-span-2">
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                <Image src="/images/Logo.png" alt="Ridgas Energy Logo" width={50} height={50} />
                <span style={{ fontSize: '1.5rem', fontWeight: '900', letterSpacing: '-1px' }}>RIDGAS ENERGY</span>
              </div>
              <p style={{ color: '#A9BBD0', maxWidth: '400px', lineHeight: '1.7' }}>
                Ingeniería de vanguardia y biotecnología aplicada para la optimización de activos energéticos a nivel global.
              </p>
            </div>
            
            <div>
              <h5 style={{ color: '#F5B400', fontWeight: '900', fontSize: '0.7rem', letterSpacing: '2px', marginBottom: '30px' }}>CONTACTO</h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: '#A9BBD0', fontSize: '0.9rem' }}>
                <p>waimer.ortiz@ridgasenergy.com</p>
                <p>+57 317 427 0731</p>
                <p>Colombia - Operaciones Globales</p>
              </div>
            </div>

            <div>
              <h5 style={{ color: '#F5B400', fontWeight: '900', fontSize: '0.7rem', letterSpacing: '2px', marginBottom: '30px' }}>LEGAL</h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: '#A9BBD0', fontSize: '0.9rem' }}>
                <Link href="/" className="hover:text-white">Inicio</Link>
                <Link href="#" className="hover:text-white">Política de Privacidad</Link>
                <Link href="#" className="hover:text-white">Términos de Servicio</Link>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '100px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.6rem', fontWeight: 'bold', color: '#666', letterSpacing: '2px' }}>
            <p>&copy; 2026 RIDGAS ENERGY SAS. TODOS LOS DERECHOS RESERVADOS.</p>
            <p>DISEÑADO POR WAIMER ORTIZ</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
