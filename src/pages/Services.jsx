import MetaData from "@/components/MetaData";
import {
  IconCheck,
  IconStar,
  IconTool,
  IconLeaf,
  IconWind,
  IconDiamond,
  IconBolt,
  IconShieldCheck,
  IconSparkles,
  IconHeadset,
} from "@tabler/icons-react";

const Services = () => {
  const services = [
    {
      icon: <IconCheck size={32} />,
      title: "Tapicería Completa",
      description:
        "Renovamos completamente el interior de tu vehículo con cuero de primera calidad. Incluye asientos delanteros y traseros, paneles de puertas y consola central.",
      features: [
        "Cuero genuino de alta calidad",
        "Variedad de colores y texturas",
        "Diseño personalizado",
        "Garantía de 2 años",
      ],
    },
    {
      icon: <IconStar size={32} />,
      title: "Asientos Personalizados",
      description:
        "Diseños únicos y ergonómicos adaptados a tus necesidades y estilo. Creamos asientos que combinan comodidad, estética y funcionalidad.",
      features: [
        "Diseño exclusivo",
        "Costuras personalizadas",
        "Colores a elección",
        "Acabados premium",
      ],
    },
    {
      icon: <IconTool size={32} />,
      title: "Reparaciones",
      description:
        "Reparamos y restauramos tapicería dañada con técnicas profesionales. Devolvemos la vida a tus asientos sin necesidad de reemplazarlos completamente.",
      features: [
        "Reparación de rasgaduras",
        "Restauración de color",
        "Eliminación de manchas",
        "Servicio rápido",
      ],
    },
  ];

  return (
    <>
      <MetaData title="SERVICIOS" />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 py-20 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-6">
              Nuestros <span className="text-brand">Servicios</span>
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              Especialistas en tapicería automotriz de alta calidad. Ofrecemos
              soluciones completas para transformar el interior de tu vehículo.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 hover:border-brand transition-all duration-500 hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-1"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-brand to-brand-dark p-12 flex items-center justify-center group">
                    <div className="text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      {service.icon}
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                    <p className="text-zinc-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 group">
                          <IconCheck
                            size={20}
                            className="text-brand flex-shrink-0 transition-transform duration-300 group-hover:scale-125"
                          />
                          <span className="text-zinc-300 transition-colors duration-300 group-hover:text-white">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Materials */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Materiales <span className="text-brand">Premium</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Solo trabajamos con los mejores materiales del mercado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Cuero Nappa */}
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 transition-all duration-500 hover:border-brand hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-brand/10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-brand group-hover:scale-110 group-hover:rotate-6">
                <IconLeaf
                  size={32}
                  className="text-brand transition-colors duration-300 group-hover:text-white"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-brand">
                Cuero Nappa
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed transition-colors duration-300 group-hover:text-zinc-300">
                Cuero premium de grano completo, suave al tacto y extremadamente
                duradero.
              </p>
            </div>

            {/* Cuero Perforado */}
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 transition-all duration-500 hover:border-brand hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-brand/10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-brand group-hover:scale-110 group-hover:rotate-6">
                <IconWind
                  size={32}
                  className="text-brand transition-colors duration-300 group-hover:text-white"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-brand">
                Cuero Perforado
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed transition-colors duration-300 group-hover:text-zinc-300">
                Cuero con perforaciones especiales que mejoran la ventilación y
                el estilo.
              </p>
            </div>

            {/* Alcantara */}
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 transition-all duration-500 hover:border-brand hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-brand/10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-brand group-hover:scale-110 group-hover:rotate-6">
                <IconDiamond
                  size={32}
                  className="text-brand transition-colors duration-300 group-hover:text-white"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-brand">
                Alcantara
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed transition-colors duration-300 group-hover:text-zinc-300">
                Material sintético de alta gama con textura única y resistencia
                superior.
              </p>
            </div>

            {/* Fibra de Carbono */}
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 transition-all duration-500 hover:border-brand hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-brand/10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-brand group-hover:scale-110 group-hover:rotate-6">
                <IconBolt
                  size={32}
                  className="text-brand transition-colors duration-300 group-hover:text-white"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-brand">
                Fibra de Carbono
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed transition-colors duration-300 group-hover:text-zinc-300">
                Material moderno y liviano perfecto para acabados deportivos y
                elegantes.
              </p>
            </div>
          </div>

          {/* Additional Materials Info */}
          <div className="mt-12 max-w-3xl mx-auto bg-zinc-800 p-8 rounded-lg border border-zinc-700 transition-all duration-500 hover:border-brand hover:shadow-xl hover:shadow-brand/20">
            <div className="text-center">
              <IconStar size={48} className="text-brand mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Calidad Certificada</h3>
              <p className="text-zinc-400 leading-relaxed">
                Todos nuestros materiales cuentan con certificaciones
                internacionales y garantía del fabricante. Importamos
                directamente de los mejores proveedores de Europa y Asia para
                asegurar autenticidad y calidad superior.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Section */}
      <section className="py-20 bg-black border-y border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Garantía <span className="text-brand">Total</span>
              </h2>
              <p className="text-zinc-300 max-w-2xl mx-auto leading-relaxed">
                Respaldamos nuestro trabajo con una garantía completa porque
                confiamos en la calidad de nuestros materiales y la excelencia
                de nuestro trabajo.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* 5 Years Warranty */}
              <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-700 transition-all duration-500 hover:border-brand hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-2 group text-center">
                <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-brand group-hover:scale-110">
                  <IconShieldCheck
                    size={40}
                    className="text-brand transition-colors duration-300 group-hover:text-white"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-brand">
                  5 Años de Garantía
                </h3>
                <p className="text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                  Cobertura completa en materiales y mano de obra
                </p>
              </div>

              {/* Free Maintenance */}
              <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-700 transition-all duration-500 hover:border-brand hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-2 group text-center">
                <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-brand group-hover:scale-110">
                  <IconSparkles
                    size={40}
                    className="text-brand transition-colors duration-300 group-hover:text-white"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-brand">
                  Mantenimiento Gratuito
                </h3>
                <p className="text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                  Servicios de limpieza y mantenimiento sin costo
                </p>
              </div>

              {/* 24/7 Support */}
              <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-700 transition-all duration-500 hover:border-brand hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-2 group text-center">
                <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-brand group-hover:scale-110">
                  <IconHeadset
                    size={40}
                    className="text-brand transition-colors duration-300 group-hover:text-white"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-brand">
                  Soporte 24/7
                </h3>
                <p className="text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                  Atención al cliente siempre disponible
                </p>
              </div>
            </div>

            {/* Warranty Details */}
            <div className="mt-12 bg-zinc-900 p-6 rounded-lg border border-zinc-700">
              <h4 className="text-lg font-bold mb-4 text-center">
                La garantía incluye:
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 group">
                  <IconCheck
                    size={20}
                    className="text-brand flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-125"
                  />
                  <span className="text-zinc-400 text-sm transition-colors duration-300 group-hover:text-zinc-300">
                    Reparación o reemplazo de materiales defectuosos
                  </span>
                </div>
                <div className="flex items-start gap-3 group">
                  <IconCheck
                    size={20}
                    className="text-brand flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-125"
                  />
                  <span className="text-zinc-400 text-sm transition-colors duration-300 group-hover:text-zinc-300">
                    Corrección de problemas de instalación
                  </span>
                </div>
                <div className="flex items-start gap-3 group">
                  <IconCheck
                    size={20}
                    className="text-brand flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-125"
                  />
                  <span className="text-zinc-400 text-sm transition-colors duration-300 group-hover:text-zinc-300">
                    Revisiones periódicas gratuitas
                  </span>
                </div>
                <div className="flex items-start gap-3 group">
                  <IconCheck
                    size={20}
                    className="text-brand flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-125"
                  />
                  <span className="text-zinc-400 text-sm transition-colors duration-300 group-hover:text-zinc-300">
                    Soporte técnico especializado
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-zinc-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Nuestro <span className="text-brand">Proceso</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Trabajamos de forma profesional y organizada para garantizar los
              mejores resultados
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-brand rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand/50">
                1
              </div>
              <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-brand">
                Consulta
              </h3>
              <p className="text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                Evaluamos tus necesidades y te asesoramos
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-brand rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand/50">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-brand">
                Diseño
              </h3>
              <p className="text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                Creamos un diseño personalizado para ti
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-brand rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand/50">
                3
              </div>
              <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-brand">
                Producción
              </h3>
              <p className="text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                Trabajamos con precisión y calidad
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-brand rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand/50">
                4
              </div>
              <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-brand">
                Entrega
              </h3>
              <p className="text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                Instalamos y entregamos tu vehículo renovado
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
