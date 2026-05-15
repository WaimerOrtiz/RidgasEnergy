'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { 
  ArrowLeft, 
  Download, 
  Share2, 
  Mail, 
  MessageSquare,
  FileText,
  Clock,
  Calendar,
  ChevronRight,
  Bookmark
} from 'lucide-react'

const BLOG_POSTS_CONTENT: any = {
  '1': {
    title: "Optimización de Recobro en Campos Maduros mediante MEOR",
    category: "BIOTECNOLOGÍA / MEOR",
    date: "12 de Mayo, 2026",
    readTime: "12 min",
    image: "/images/hero1.png",
    content: `
      <h2 class="article-h2">El Desafío de los Campos Maduros</h2>
      <p class="article-p">En el panorama actual del Oil & Gas en Colombia, la declinación natural de los yacimientos maduros representa uno de los mayores retos operativos. Los métodos convencionales de recuperación secundaria a menudo alcanzan su límite técnico y económico. Aquí es donde la tecnología <strong>MEOR (Microbial Enhanced Oil Recovery)</strong> de Micro-bac® ofrece una alternativa de alta eficiencia y bajo CAPEX.</p>
      
      <div class="article-quote">
        "La biotecnología aplicada permite movilizar el crudo atrapado mediante la reducción de la tensión interfacial, sin la agresividad química de los métodos tradicionales."
      </div>

      <h2 class="article-h2">Mecanismo de Acción Biológica</h2>
      <p class="article-p">Nuestras soluciones utilizan consorcios bacterianos facultativos que actúan en tres frentes críticos:</p>
      <ul class="article-list">
        <li><strong>Producción de Biosurfactantes:</strong> Reducen la tensión interfacial pozo abajo, permitiendo que el crudo fluya por los poros del yacimiento.</li>
        <li><strong>Reducción de Viscosidad:</strong> Los subproductos metabólicos alteran las cadenas pesadas del hidrocarburo, facilitando su movilidad.</li>
        <li><strong>Remediación de Daño:</strong> Eliminación de depósitos orgánicos (parafinas) que obstruyen la vecindad del pozo.</li>
      </ul>

      <h2 class="article-h2">Resultados en Campo</h2>
      <p class="article-p">En aplicaciones recientes en la cuenca del Valle Medio del Magdalena, hemos observado incrementos sostenidos de producción entre el 15% y 25% tras ciclos controlados de inyección de Micro-bac®, con una reducción significativa en los costos de tratamiento químico de superficie.</p>
    `
  },
  '2': {
    title: "Sistemas de Potencia: Inversores Industriales en Proyectos On-Grid",
    category: "RENOVABLES",
    date: "08 de Mayo, 2026",
    readTime: "9 min",
    image: "/images/hero7.jpg",
    content: `
      <h2 class="article-h2">Eficiencia en la Conversión Energética</h2>
      <p class="article-p">La viabilidad de un proyecto solar a gran escala no depende solo de los paneles, sino de la inteligencia en la gestión de la potencia. Los inversores industriales de nueva generación son el cerebro que asegura la resiliencia operativa de la planta.</p>

      <h2 class="article-h2">Gestión de Excedentes y Red</h2>
      <p class="article-p">En proyectos On-Grid, la sincronización con la red nacional requiere sistemas de control de respuesta rápida. Ridgas Energy implementa analítica predictiva para gestionar los picos de producción y asegurar la inyección eficiente de excedentes, maximizando los retornos por venta de energía.</p>

      <div class="article-quote">
        "Un inversor bien dimensionado y monitoreado puede aumentar la vida útil del activo solar en un 30%."
      </div>
    `
  },
  '3': {
    title: "Estructuración de PPA para Comunidades Energéticas",
    category: "RENOVABLES",
    date: "02 de Mayo, 2026",
    readTime: "15 min",
    image: "/images/hero4.jpg",
    content: `
      <h2 class="article-h2">Modelos de Negocio en la Transición</h2>
      <p class="article-p">Las Comunidades Energéticas (CE) representan el futuro de la autogeneración en Colombia. La estructuración de contratos PPA (Power Purchase Agreement) es fundamental para garantizar la seguridad jurídica de los inversionistas y el beneficio social de las comunidades.</p>

      <h2 class="article-h2">Viabilidad Financiera</h2>
      <p class="article-p">Nuestro equipo de consultoría técnica y legal diseña modelos donde el riesgo se distribuye de forma equitativa, permitiendo que activos industriales compartan su infraestructura energética con comunidades locales bajo una gobernanza basada en datos y transparencia.</p>
    `
  },
  '4': {
    title: "Integridad de Activos: Control Microbiológico de la Corrosión",
    category: "INTEGRIDAD / BIOTECNOLOGÍA",
    date: "25 de Abril, 2026",
    readTime: "10 min",
    image: "/images/hero2.png",
    content: `
      <h2 class="article-h2">La Amenaza Silenciosa: MIC</h2>
      <p class="article-p">La Corrosión Inducida Microbiológicamente (MIC) es responsable de hasta el 40% de las fallas en líneas de transporte de hidrocarburos. El tratamiento tradicional con biocidas químicos suele ser insuficiente para penetrar el biofilm protector de las bacterias reductoras de sulfato (SRB).</p>

      <h2 class="article-h2">Inhibición por Competencia Biológica</h2>
      <p class="article-p">Utilizando la serie Corroso-Bac™ de Micro-bac®, establecemos consorcios bacterianos no corrosivos que desplazan a las bacterias dañinas mediante competencia por nutrientes, protegiendo el metal de forma natural y duradera.</p>
    `
  },
  '5': {
    title: "Analítica de Datos Aplicada a Facilidades de Superficie",
    category: "INGENIERÍA / DIGITAL",
    date: "18 de Abril, 2026",
    readTime: "8 min",
    image: "/images/hero5.png",
    content: `
      <h2 class="article-h2">Digital Twins en el Sector Energético</h2>
      <p class="article-p">La transformación digital no es una opción, es una necesidad operativa. En Ridgas Energy, creamos réplicas digitales (Digital Twins) de facilidades de superficie para simular escenarios de producción y predecir fallas antes de que ocurran.</p>

      <h2 class="article-h2">Mantenimiento Predictivo</h2>
      <p class="article-p">Mediante el uso de sensores IoT y algoritmos de Machine Learning, optimizamos las paradas de planta y el consumo de energía en los sistemas de bombeo e inyección, reduciendo el OPEX en hasta un 12% anual.</p>
    `
  }
}

export default function BlogPost() {
  const params = useParams()
  const id = params.id as string
  const post = BLOG_POSTS_CONTENT[id] || BLOG_POSTS_CONTENT['1']

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* NAVBAR */}
      <header className="bg-[#0B1F3A] border-b border-white/10">
        <div className="container nav-container">
          <Link href="/blog" className="logo-container">
            <Image src="/images/Logo.png" alt="Ridgas Energy Logo" width={40} height={40} />
            <span className="text-white">RIDGAS ENERGY</span>
          </Link>
          <Link href="/blog" className="flex items-center gap-2 text-[#A9BBD0] hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
            <ArrowLeft size={16} /> Volver al Blog
          </Link>
        </div>
      </header>

      <main className="py-20">
        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* CONTENIDO PRINCIPAL */}
            <div className="lg:col-span-2">
              <div className="mb-12">
                <div className="flex items-center gap-3 text-[#F5B400] font-black text-[10px] tracking-[0.3em] uppercase mb-6">
                  <ChevronRight size={14} /> {post.category}
                </div>
                <h1 className="text-[#0B1F3A] text-5xl font-black leading-tight mb-8">
                  {post.title}
                </h1>
                <div className="flex items-center gap-8 text-[#64748B] text-sm font-bold border-y border-slate-200 py-6">
                  <span className="flex items-center gap-2"><Calendar size={16} className="text-[#F5B400]" /> {post.date}</span>
                  <span className="flex items-center gap-2"><Clock size={16} className="text-[#F5B400]" /> {post.readTime} DE LECTURA</span>
                  <span className="flex items-center gap-2 text-[#0B1F3A]">POR: WAIMER ORTIZ</span>
                </div>
              </div>

              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-2xl border-4 border-white">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>

              {/* CUERPO DEL ARTÍCULO */}
              <div 
                className="article-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-16 pt-10 border-t border-slate-200 flex justify-between items-center">
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 bg-[#0B1F3A] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#F5B400] hover:text-[#0B1F3A] transition-all">
                    <Download size={18} /> Descargar Informe (PDF)
                  </button>
                </div>
                <div className="flex gap-4">
                  <button className="p-3 text-slate-400 hover:text-[#0B1F3A] transition-colors"><Share2 size={20} /></button>
                  <button className="p-3 text-slate-400 hover:text-[#0B1F3A] transition-colors"><Bookmark size={20} /></button>
                </div>
              </div>
            </div>

            {/* SIDEBAR TÉCNICO */}
            <div className="lg:col-span-1 space-y-10">
              {/* Card de Consultoría Directa */}
              <div className="bg-[#0B1F3A] p-10 rounded-[32px] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <FileText size={120} />
                </div>
                <h3 className="text-2xl font-black mb-6 leading-tight relative z-10">¿Necesita una evaluación técnica de su pozo o activo?</h3>
                <p className="text-[#A9BBD0] mb-8 text-sm leading-relaxed relative z-10">
                  Nuestros ingenieros analizan su reto específico y diseñan la solución microbiológica o energética óptima.
                </p>
                <Link href="/consultoria#contacto" className="flex items-center justify-between bg-[#F5B400] text-[#0B1F3A] px-6 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all">
                  Contactar Ingeniería <ArrowLeft className="rotate-180" size={16} />
                </Link>
              </div>

              {/* Artículos Relacionados */}
              <div>
                <h4 className="text-[#0B1F3A] font-black text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
                  <div className="w-8 h-1 bg-[#F5B400]"></div> ARTÍCULOS RELACIONADOS
                </h4>
                <div className="space-y-6">
                  {Object.values(BLOG_POSTS_CONTENT).slice(0, 3).map((item: any, i) => (
                    <Link href={`/blog/${i + 1}`} key={i} className="group flex gap-4 items-start">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                        <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <h5 className="text-[#0B1F3A] font-bold text-sm leading-snug group-hover:text-[#F5B400] transition-colors line-clamp-2">
                          {item.title}
                        </h5>
                        <span className="text-[10px] text-slate-400 font-bold uppercase">{item.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* NEWSLETTER TÉCNICO (Consistencia) */}
      <section id="newsletter" className="py-20 bg-[#F1F5F9]">
        <div className="container">
          <div style={{ 
            background: 'linear-gradient(135deg, #0B1F3A 0%, #1e293b 100%)', 
            borderRadius: '24px', 
            padding: '60px', 
            color: 'white', 
            display: 'grid',
            gap: '40px',
            alignItems: 'center',
            border: '1px solid rgba(245,180,0,0.2)'
          }} className="grid lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black mb-4">Suscríbase a los Reportes</h2>
              <p className="text-[#A9BBD0] text-sm">Reciba análisis de ingeniería y actualizaciones tecnológicas del mercado global.</p>
            </div>
            <form className="flex gap-4">
              <input 
                type="email" 
                placeholder="correo@empresa.com" 
                className="flex-1 bg-white/5 border border-white/10 p-4 rounded-xl outline-none"
              />
              <button className="bg-[#F5B400] text-[#0B1F3A] px-8 py-4 rounded-xl font-black uppercase text-xs">Unirse</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0B1F3A] py-10 border-t border-white/5">
        <div className="container flex flex-col md:flex-row justify-between items-center text-[10px] text-white/30 font-bold tracking-[0.2em]">
          <p>&copy; 2026 RIDGAS ENERGY SAS. TODOS LOS DERECHOS RESERVADOS.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="/" className="hover:text-white">INICIO</Link>
            <Link href="/blog" className="hover:text-white">BLOG</Link>
            <Link href="/consultoria" className="hover:text-white">CONSULTORÍA</Link>
          </div>
        </div>
      </footer>

      {/* ESTILOS GLOBALES DEL ARTÍCULO */}
      <style jsx global>{`
        .article-content {
          font-family: 'Georgia', serif;
          color: #1e293b;
          line-height: 1.8;
          font-size: 1.15rem;
        }
        .article-h2 {
          font-size: 2rem;
          font-weight: 900;
          color: #0B1F3A;
          margin: 60px 0 30px 0;
          letter-spacing: -1px;
        }
        .article-p {
          margin-bottom: 25px;
          font-size: 1.125rem;
        }
        .article-list {
          margin-bottom: 40px;
          list-style: none;
          padding: 0;
        }
        .article-list li {
          position: relative;
          padding-left: 30px;
          margin-bottom: 15px;
          font-size: 1.1rem;
        }
        .article-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #F5B400;
          font-weight: bold;
          font-size: 1.5rem;
          line-height: 1;
        }
        .article-quote {
          background: #F1F5F9;
          border-left: 6px solid #F5B400;
          padding: 40px;
          font-style: italic;
          font-size: 1.25rem;
          color: #0B1F3A;
          font-weight: 500;
          margin: 60px 0;
          border-radius: 0 16px 16px 0;
        }
      `}</style>
    </div>
  )
}
