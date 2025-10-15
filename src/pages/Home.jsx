import MetaData from "@/components/MetaData";
import {
  IconArrowRight,
  IconCheck,
  IconStar,
  IconShieldCheck,
  IconAward,
} from "@tabler/icons-react";
import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <MetaData title="INICIO" />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920')] bg-cover bg-center opacity-20 animate-[zoom_20s_ease-in-out_infinite]"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              INTERIORES DE CUERO{" "}
              <span className="text-brand animate-pulse-slow">A MEDIDA</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
              Transformamos el interior de tu vehículo con los mejores
              materiales de cuero, diseño personalizado y acabados de primera
              calidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand/50 inline-flex items-center justify-center gap-2 group"
              >
                VER SERVICIOS
                <IconArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-brand hover:bg-brand text-brand hover:text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                CONTACTAR
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black border-y border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-bold text-brand mb-2 transition-transform duration-300 group-hover:scale-110">
                15+
              </div>
              <div className="text-sm text-zinc-400">Años de Experiencia</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-bold text-brand mb-2 transition-transform duration-300 group-hover:scale-110">
                500+
              </div>
              <div className="text-sm text-zinc-400">Vehículos Tapizados</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-bold text-brand mb-2 transition-transform duration-300 group-hover:scale-110">
                100%
              </div>
              <div className="text-sm text-zinc-400">Clientes Satisfechos</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-bold text-brand mb-2 transition-transform duration-300 group-hover:scale-110">
                24h
              </div>
              <div className="text-sm text-zinc-400">Respuesta Rápida</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">
              Nuestros <span className="text-brand">Servicios</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Especialistas en tapicería automotriz de alta calidad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-800 p-8 rounded-lg transition-all duration-500 border border-zinc-700 hover:border-brand hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-brand rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                <IconCheck size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Tapicería Completa</h3>
              <p className="text-zinc-400">
                Renovamos completamente el interior de tu vehículo con cuero de
                primera calidad.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-brand hover:text-brand-dark transition-colors mt-4 group"
              >
                <span>Saber más</span>
                <IconArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="bg-zinc-800 p-8 rounded-lg transition-all duration-500 border border-zinc-700 hover:border-brand hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-brand rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                <IconStar size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Asientos Personalizados
              </h3>
              <p className="text-zinc-400">
                Diseños únicos y ergonómicos adaptados a tus necesidades y
                estilo.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-brand hover:text-brand-dark transition-colors mt-4 group"
              >
                <span>Saber más</span>
                <IconArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="bg-zinc-800 p-8 rounded-lg transition-all duration-500 border border-zinc-700 hover:border-brand hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-brand rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                <IconShieldCheck size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Reparaciones</h3>
              <p className="text-zinc-400">
                Reparamos y restauramos tapicería dañada con técnicas
                profesionales.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-brand hover:text-brand-dark transition-colors mt-4 group"
              >
                <span>Saber más</span>
                <IconArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-zinc-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              ¿Por qué elegir <span className="text-brand">JUV CAR</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand rounded-lg flex items-center justify-center">
                  <IconCheck size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Calidad Premium</h3>
                  <p className="text-zinc-400">
                    Utilizamos únicamente cuero de la más alta calidad para
                    garantizar durabilidad y elegancia.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand rounded-lg flex items-center justify-center">
                  <IconCheck size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Equipo Especializado
                  </h3>
                  <p className="text-zinc-400">
                    Nuestros artesanos cuentan con años de experiencia en
                    tapicería automotriz.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand rounded-lg flex items-center justify-center">
                  <IconCheck size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Entrega Rápida</h3>
                  <p className="text-zinc-400">
                    Cumplimos con los tiempos acordados sin comprometer la
                    calidad del trabajo.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="logo.png"
                alt="Muestra de Tapicería"
                className="max-w-md w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-zinc-900 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e72f39' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-zinc-800 to-black border border-zinc-700 rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    ¿Listo para transformar tu vehículo?
                  </h2>
                  <p className="text-lg text-zinc-400 mb-6">
                    Contáctanos hoy y recibe una cotización personalizada sin
                    compromiso
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Link
                      to="/contact"
                      className="bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand/50 inline-flex items-center justify-center gap-2 group"
                    >
                      SOLICITAR COTIZACIÓN
                      <IconArrowRight
                        size={20}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                    <a
                      href="tel:+15551234567"
                      className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
                    >
                      <IconCheck size={20} />
                      LLAMAR AHORA
                    </a>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="w-32 h-32 bg-brand/10 rounded-full flex items-center justify-center animate-pulse-slow">
                    <IconAward size={64} className="text-brand" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
