import MetaData from "@/components/MetaData";
import {
  IconAward,
  IconUsers,
  IconClock,
  IconHeart,
  IconCertificate,
  IconTool,
  IconPalette,
  IconShieldCheck,
} from "@tabler/icons-react";

const About = () => {
  return (
    <>
      <MetaData title="ACERCA DE" />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 py-20 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-6">
              Sobre <span className="text-brand">Nosotros</span>
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              Somos expertos en tapicería automotriz con años de experiencia
              transformando vehículos en obras de arte.
            </p>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Nuestra <span className="text-brand">Historia</span>
              </h2>
            </div>

            <div className="space-y-6 text-zinc-300 leading-relaxed">
              <p className="text-lg">
                <span className="text-brand font-bold">JUV CAR</span> nació de
                una pasión por la perfección en cada detalle del interior
                automotriz. Desde nuestros inicios, hemos estado comprometidos
                con ofrecer la más alta calidad en tapicería de cuero
                personalizada.
              </p>

              <p className="text-lg">
                Con más de una década de experiencia en el sector, hemos
                perfeccionado nuestras técnicas artesanales combinándolas con
                las últimas tecnologías para crear interiores únicos que
                reflejan la personalidad y el estilo de cada cliente.
              </p>

              <p className="text-lg">
                Cada proyecto es una nueva oportunidad para demostrar nuestro
                compromiso con la excelencia, utilizando únicamente materiales
                de primera calidad y aplicando los más altos estándares de
                acabado.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-brand/10 border-2 border-brand rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-brand group-hover:scale-110">
                  <span className="text-2xl font-bold text-brand transition-colors duration-300 group-hover:text-white">
                    2010
                  </span>
                </div>
                <h4 className="font-bold mb-2 transition-colors duration-300 group-hover:text-brand">
                  Fundación
                </h4>
                <p className="text-sm text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                  Inicio de JUV CAR con una visión clara de excelencia
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-brand/10 border-2 border-brand rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-brand group-hover:scale-110">
                  <span className="text-2xl font-bold text-brand transition-colors duration-300 group-hover:text-white">
                    2015
                  </span>
                </div>
                <h4 className="font-bold mb-2 transition-colors duration-300 group-hover:text-brand">
                  Expansión
                </h4>
                <p className="text-sm text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                  Nuevas técnicas y tecnologías incorporadas
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-brand/10 border-2 border-brand rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-brand group-hover:scale-110">
                  <span className="text-2xl font-bold text-brand transition-colors duration-300 group-hover:text-white">
                    2025
                  </span>
                </div>
                <h4 className="font-bold mb-2 transition-colors duration-300 group-hover:text-brand">
                  Liderazgo
                </h4>
                <p className="text-sm text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                  Referentes en tapicería automotriz premium
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-zinc-800 p-8 rounded-lg border border-zinc-700 transition-all duration-500 hover:border-brand hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-brand rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                <IconHeart size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
              <p className="text-zinc-400 leading-relaxed transition-colors duration-300 group-hover:text-zinc-300">
                Brindar servicios de tapicería automotriz de la más alta
                calidad, utilizando materiales premium y técnicas especializadas
                para superar las expectativas de nuestros clientes. Nos
                comprometemos a transformar cada vehículo en una experiencia
                única de confort y elegancia.
              </p>
            </div>

            <div className="bg-zinc-800 p-8 rounded-lg border border-zinc-700 transition-all duration-500 hover:border-brand hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-brand rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                <IconAward size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Nuestra Visión</h2>
              <p className="text-zinc-400 leading-relaxed transition-colors duration-300 group-hover:text-zinc-300">
                Ser reconocidos como el referente líder en tapicería automotriz,
                destacándonos por nuestra innovación, calidad excepcional y
                servicio personalizado. Aspiramos a establecer nuevos estándares
                en la industria y ser la primera opción para quienes buscan
                transformar sus vehículos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-zinc-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Nuestros <span className="text-brand">Valores</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo diario
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-brand to-brand-dark rounded-lg flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <IconAward size={36} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-brand">
                Calidad
              </h3>
              <p className="text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                Excelencia en cada detalle de nuestro trabajo
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-brand to-brand-dark rounded-lg flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <IconUsers size={36} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-brand">
                Profesionalismo
              </h3>
              <p className="text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                Equipo especializado y comprometido
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-brand to-brand-dark rounded-lg flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <IconClock size={36} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-brand">
                Puntualidad
              </h3>
              <p className="text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                Cumplimiento de tiempos acordados
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-brand to-brand-dark rounded-lg flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <IconHeart size={36} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-brand">
                Pasión
              </h3>
              <p className="text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                Amor por lo que hacemos en cada proyecto
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Nuestro <span className="text-brand">Equipo</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Artesanos especializados apasionados por la perfección
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-zinc-800 p-8 rounded-lg border border-zinc-700 transition-all duration-500 hover:border-brand hover:shadow-xl hover:shadow-brand/20">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <img
                    src="/logo_juan_5-removebg-preview.png"
                    alt="JUV CAR Team"
                    className="w-full rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">
                    Experiencia y Dedicación
                  </h3>
                  <p className="text-zinc-400 leading-relaxed mb-4">
                    Nuestro equipo está conformado por artesanos especializados
                    con más de 15 años de experiencia en tapicería automotriz.
                    Cada miembro ha sido cuidadosamente seleccionado por su
                    habilidad, atención al detalle y pasión por la excelencia.
                  </p>
                  <p className="text-zinc-400 leading-relaxed">
                    Nos mantenemos constantemente actualizados con las últimas
                    técnicas y tendencias en diseño automotriz para ofrecer a
                    nuestros clientes las mejores soluciones del mercado.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Roles */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 transition-all duration-500 hover:border-brand hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-1 group text-center">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-brand group-hover:scale-110">
                <IconUsers
                  size={32}
                  className="text-brand transition-colors duration-300 group-hover:text-white"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Maestros Tapiceros</h3>
              <p className="text-zinc-400 text-sm transition-colors duration-300 group-hover:text-zinc-300">
                Expertos con certificaciones internacionales en tapicería
                automotriz
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 transition-all duration-500 hover:border-brand hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-1 group text-center">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-brand group-hover:scale-110">
                <IconPalette
                  size={32}
                  className="text-brand transition-colors duration-300 group-hover:text-white"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Diseñadores</h3>
              <p className="text-zinc-400 text-sm transition-colors duration-300 group-hover:text-zinc-300">
                Creativos especializados en diseño de interiores automotrices
                personalizados
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 transition-all duration-500 hover:border-brand hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-1 group text-center">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-brand group-hover:scale-110">
                <IconShieldCheck
                  size={32}
                  className="text-brand transition-colors duration-300 group-hover:text-white"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Control de Calidad</h3>
              <p className="text-zinc-400 text-sm transition-colors duration-300 group-hover:text-zinc-300">
                Equipo dedicado a garantizar la perfección en cada detalle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-zinc-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Nuestro <span className="text-brand">Proceso</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Un proceso meticuloso que garantiza resultados excepcionales
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Step 1 */}
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700 transition-all duration-500 hover:border-brand hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-1 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-brand">
                      Consulta Inicial
                    </h3>
                    <p className="text-zinc-400 text-sm transition-colors duration-300 group-hover:text-zinc-300">
                      Evaluamos tus necesidades, preferencias y presupuesto.
                      Discutimos ideas, colores, materiales y diseños
                      personalizados.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700 transition-all duration-500 hover:border-brand hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-1 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-brand">
                      Diseño y Planificación
                    </h3>
                    <p className="text-zinc-400 text-sm transition-colors duration-300 group-hover:text-zinc-300">
                      Creamos un diseño detallado con muestras de materiales. Te
                      presentamos opciones y refinamos hasta lograr la visión
                      perfecta.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700 transition-all duration-500 hover:border-brand hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-1 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-brand">
                      Producción Artesanal
                    </h3>
                    <p className="text-zinc-400 text-sm transition-colors duration-300 group-hover:text-zinc-300">
                      Nuestros maestros tapiceros trabajan con precisión
                      milimétrica, combinando técnicas tradicionales con
                      tecnología moderna.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700 transition-all duration-500 hover:border-brand hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-1 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-brand">
                      Control de Calidad
                    </h3>
                    <p className="text-zinc-400 text-sm transition-colors duration-300 group-hover:text-zinc-300">
                      Inspección rigurosa de cada detalle. Verificamos costuras,
                      acabados y ajuste perfecto antes de la instalación.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700 transition-all duration-500 hover:border-brand hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-1 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-brand">
                      Instalación Profesional
                    </h3>
                    <p className="text-zinc-400 text-sm transition-colors duration-300 group-hover:text-zinc-300">
                      Instalamos la tapicería con cuidado extremo, asegurando un
                      ajuste perfecto y acabado impecable en tu vehículo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-700 transition-all duration-500 hover:border-brand hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-1 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    6
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-brand">
                      Entrega y Garantía
                    </h3>
                    <p className="text-zinc-400 text-sm transition-colors duration-300 group-hover:text-zinc-300">
                      Te entregamos tu vehículo transformado con garantía
                      completa de 2 años y seguimiento post-servicio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-brand">Certificaciones</span> y
              Reconocimientos
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Respaldados por estándares internacionales de calidad y excelencia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 transition-all duration-500 hover:border-brand hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-1 group text-center">
              <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-brand group-hover:scale-110">
                <IconCertificate
                  size={40}
                  className="text-brand transition-colors duration-300 group-hover:text-white"
                />
              </div>
              <h3 className="font-bold mb-2 transition-colors duration-300 group-hover:text-brand">
                ISO 9001
              </h3>
              <p className="text-sm text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                Gestión de Calidad Certificada
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 transition-all duration-500 hover:border-brand hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-1 group text-center">
              <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-brand group-hover:scale-110">
                <IconAward
                  size={40}
                  className="text-brand transition-colors duration-300 group-hover:text-white"
                />
              </div>
              <h3 className="font-bold mb-2 transition-colors duration-300 group-hover:text-brand">
                Maestro Tapicero
              </h3>
              <p className="text-sm text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                Certificación Internacional
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 transition-all duration-500 hover:border-brand hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-1 group text-center">
              <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-brand group-hover:scale-110">
                <IconShieldCheck
                  size={40}
                  className="text-brand transition-colors duration-300 group-hover:text-white"
                />
              </div>
              <h3 className="font-bold mb-2 transition-colors duration-300 group-hover:text-brand">
                Garantía Extendida
              </h3>
              <p className="text-sm text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                2 Años en Todos los Trabajos
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 transition-all duration-500 hover:border-brand hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-1 group text-center">
              <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-brand group-hover:scale-110">
                <IconTool
                  size={40}
                  className="text-brand transition-colors duration-300 group-hover:text-white"
                />
              </div>
              <h3 className="font-bold mb-2 transition-colors duration-300 group-hover:text-brand">
                Especialización
              </h3>
              <p className="text-sm text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                Cuero Premium y Exóticos
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 max-w-3xl mx-auto bg-zinc-800 p-8 rounded-lg border border-zinc-700 transition-all duration-500 hover:border-brand hover:shadow-xl hover:shadow-brand/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">
                Miembros de Asociaciones Profesionales
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-zinc-400">
                <div className="transition-colors duration-300 hover:text-brand cursor-default">
                  Asociación de Tapiceros Profesionales
                </div>
                <div className="transition-colors duration-300 hover:text-brand cursor-default">
                  Gremio de Artesanos del Cuero
                </div>
                <div className="transition-colors duration-300 hover:text-brand cursor-default">
                  Cámara de Comercio Automotriz
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Old (Now replaced above) */}
      <section className="py-20 bg-zinc-900" style={{ display: "none" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Nuestro <span className="text-brand">Equipo</span>
              </h2>
              <p className="text-zinc-400">
                Artesanos especializados con años de experiencia
              </p>
            </div>

            <div className="bg-zinc-800 p-8 rounded-lg border border-zinc-700">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <img
                    src="/logo_juan_5-removebg-preview.png"
                    alt="JUV CAR Team"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">
                    Experiencia y Dedicación
                  </h3>
                  <p className="text-zinc-400 leading-relaxed mb-4">
                    Nuestro equipo está conformado por artesanos especializados
                    con más de 15 años de experiencia en tapicería automotriz.
                    Cada miembro ha sido cuidadosamente seleccionado por su
                    habilidad, atención al detalle y pasión por la excelencia.
                  </p>
                  <p className="text-zinc-400 leading-relaxed">
                    Nos mantenemos constantemente actualizados con las últimas
                    técnicas y tendencias en diseño automotriz para ofrecer a
                    nuestros clientes las mejores soluciones del mercado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-black border-y border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-bold text-brand mb-2 transition-transform duration-300 group-hover:scale-110">
                15+
              </div>
              <div className="text-xl text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                Años de Experiencia
              </div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-brand mb-2 transition-transform duration-300 group-hover:scale-110">
                500+
              </div>
              <div className="text-xl text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                Vehículos Transformados
              </div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-brand mb-2 transition-transform duration-300 group-hover:scale-110">
                100%
              </div>
              <div className="text-xl text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                Clientes Satisfechos
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
