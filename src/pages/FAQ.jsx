import MetaData from "@/components/MetaData";
import {
  IconChevronDown,
  IconQuestionMark,
  IconCheck,
  IconTool,
  IconCurrencyDollar,
  IconStar,
  IconMapPin,
  IconCar,
  IconSparkles,
} from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqCategories = [
    {
      category: "Servicios y Procesos",
      icon: IconTool,
      questions: [
        {
          question: "¿Cuánto tiempo tarda el proceso de tapizado completo?",
          answer:
            "El tiempo varía según el tipo de vehículo y el trabajo solicitado. Un tapizado completo generalmente toma entre 3-5 días hábiles. Para trabajos más complejos como restauraciones de clásicos o personalizaciones premium, el tiempo puede extenderse de 1-2 semanas. Siempre te daremos un estimado preciso antes de comenzar.",
        },
        {
          question: "¿Ofrecen garantía en sus trabajos?",
          answer:
            "Sí, todos nuestros trabajos incluyen una garantía de 5 años que cubre defectos de fabricación y materiales. Además, ofrecemos mantenimiento gratuito durante el primer año para asegurar que todo se mantenga en perfectas condiciones.",
        },
        {
          question: "¿Puedo elegir el tipo de material y color?",
          answer:
            "Absolutamente. Tenemos una amplia variedad de materiales premium como cuero Nappa, cuero perforado, Alcantara, y fibra de carbono. Contamos con cientos de colores y texturas para que personalices tu vehículo según tus preferencias. Nuestros asesores te guiarán en el proceso de selección.",
        },
        {
          question: "¿Hacen trabajos de reparación menor o solo completos?",
          answer:
            "Realizamos todo tipo de trabajos, desde reparaciones menores (rasguños, quemaduras, costuras sueltas) hasta tapizados completos. Cada proyecto es importante para nosotros, sin importar su tamaño.",
        },
      ],
    },
    {
      category: "Presupuestos y Pagos",
      icon: IconCurrencyDollar,
      questions: [
        {
          question: "¿Cómo puedo obtener un presupuesto?",
          answer:
            "Puedes solicitar un presupuesto gratuito de tres formas: (1) Completando el formulario en nuestra página de contacto, (2) Llamando directamente a nuestros teléfonos, o (3) Visitándonos en nuestro taller. Para un presupuesto más preciso, recomendamos que traigas tu vehículo para una inspección gratuita.",
        },
        {
          question: "¿Cuál es el rango de precios para un tapizado completo?",
          answer:
            "Los precios varían según el tipo de vehículo, materiales seleccionados y complejidad del trabajo. Como referencia: Sedanes desde $1,500, SUVs desde $2,000, Pick-ups desde $1,800, y vehículos de lujo/deportivos desde $3,500. El presupuesto final se determina después de evaluar tu vehículo.",
        },
        {
          question: "¿Aceptan tarjetas de crédito o solo efectivo?",
          answer:
            "Aceptamos múltiples formas de pago: efectivo, tarjetas de crédito/débito, transferencias bancarias, y ofrecemos planes de financiamiento para trabajos mayores. Consulta con nuestro equipo sobre las opciones disponibles.",
        },
        {
          question: "¿Requieren depósito inicial?",
          answer:
            "Sí, solicitamos un depósito del 50% para reservar tu fecha y comenzar el proceso de pedido de materiales. El 50% restante se paga al finalizar el trabajo y realizar la entrega del vehículo.",
        },
      ],
    },
    {
      category: "Materiales y Calidad",
      icon: IconStar,
      questions: [
        {
          question: "¿Qué tipo de materiales utilizan?",
          answer:
            "Trabajamos exclusivamente con materiales premium certificados: cuero genuino Nappa de alta gama, cuero perforado para acabados deportivos, Alcantara auténtica importada, fibra de carbono, y telas automotrices de primera calidad. Todos nuestros materiales tienen certificación de durabilidad y resistencia UV.",
        },
        {
          question: "¿El cuero es genuino o sintético?",
          answer:
            "Ofrecemos ambas opciones según tu presupuesto y preferencias. Nuestro cuero genuino es de grado automotriz premium, mientras que nuestras opciones sintéticas de alta calidad ofrecen excelente durabilidad a un precio más accesible. Te explicaremos las diferencias para que tomes la mejor decisión.",
        },
        {
          question: "¿Los materiales son resistentes al desgaste y sol?",
          answer:
            "Sí, todos nuestros materiales están tratados con protección UV y están diseñados específicamente para uso automotriz. Son resistentes a la decoloración, grietas, y desgaste por uso continuo. Además, aplicamos tratamientos protectores adicionales sin costo.",
        },
        {
          question: "¿Pueden igualar el color original de mi vehículo?",
          answer:
            "En la mayoría de los casos sí. Tenemos un extenso catálogo de colores y podemos hacer mezclas personalizadas para igualar el color original de tu vehículo o el color específico que desees. También ofrecemos servicios de cambio de color completo.",
        },
      ],
    },
    {
      category: "Logística y Ubicación",
      icon: IconMapPin,
      questions: [
        {
          question: "¿Necesito dejar mi vehículo o puedo esperar?",
          answer:
            "Para trabajos completos es necesario dejar el vehículo, ya que requieren varios días. Para reparaciones menores que toman 2-4 horas, puedes esperar en nuestra cómoda área de espera con WiFi y café. Te mantendremos informado del progreso en todo momento.",
        },
        {
          question: "¿Ofrecen servicio de recolección y entrega a domicilio?",
          answer:
            "Sí, para trabajos mayores ofrecemos servicio de recolección y entrega dentro del área metropolitana sin costo adicional. Para áreas más distantes, consulta con nuestro equipo sobre la disponibilidad y posibles cargos.",
        },
        {
          question: "¿Dónde están ubicados?",
          answer:
            "Estamos ubicados en Calle Principal #123, Zona Industrial. Nuestro horario es de Lunes a Viernes de 8:00 AM - 6:00 PM, y Sábados de 9:00 AM - 4:00 PM. Contamos con amplio estacionamiento y fácil acceso.",
        },
        {
          question: "¿Puedo visitar el taller antes de contratar el servicio?",
          answer:
            "Por supuesto. De hecho, te invitamos a que nos visites para conocer nuestras instalaciones, ver trabajos en proceso, revisar muestras de materiales, y hablar directamente con nuestros especialistas. No necesitas cita previa para una visita.",
        },
      ],
    },
    {
      category: "Vehículos Especiales",
      icon: IconCar,
      questions: [
        {
          question: "¿Trabajan con vehículos clásicos o antiguos?",
          answer:
            "Sí, somos especialistas en restauración de vehículos clásicos y antiguos. Tenemos experiencia trabajando con modelos de diversas épocas y marcas, respetando la originalidad o personalizando según tus preferencias. Contamos con técnicas especializadas para estos vehículos.",
        },
        {
          question:
            "¿Pueden hacer tapizado para vehículos deportivos de alta gama?",
          answer:
            "Absolutamente. Trabajamos regularmente con vehículos deportivos y de lujo de marcas como Porsche, BMW M, Mercedes-AMG, Audi, y más. Utilizamos materiales y técnicas específicas que cumplen con los estándares de estos vehículos.",
        },
        {
          question: "¿Hacen trabajos en motos, lanchas o aviones?",
          answer:
            "Sí, aunque nos especializamos en automóviles, también realizamos tapizado para motocicletas, lanchas, y algunos trabajos de aviación ligera. Cada proyecto se evalúa individualmente para asegurar que podemos ofrecer la calidad que nos caracteriza.",
        },
        {
          question: "¿Trabajan con vehículos comerciales o flotillas?",
          answer:
            "Sí, ofrecemos servicios para vehículos comerciales, taxis, Uber/transporte, y flotillas empresariales. Contamos con descuentos especiales para múltiples vehículos y podemos coordinar un calendario de trabajo que no interrumpa tus operaciones.",
        },
      ],
    },
    {
      category: "Cuidado y Mantenimiento",
      icon: IconSparkles,
      questions: [
        {
          question: "¿Cómo debo cuidar el tapizado nuevo?",
          answer:
            "Te entregaremos un manual de cuidado completo y productos recomendados. En general: limpia regularmente con productos específicos para el material, evita exposición prolongada al sol directo cuando sea posible, y realiza mantenimiento preventivo cada 6 meses. Ofrecemos servicio de mantenimiento profesional.",
        },
        {
          question: "¿Qué productos de limpieza recomiendan?",
          answer:
            "Recomendamos productos específicos según el material: para cuero genuino usamos limpiadores y acondicionadores pH neutro, para Alcantara cepillos suaves especializados, y para telas protectores anti-manchas. Te proporcionaremos una lista detallada y podemos venderte los productos directamente.",
        },
        {
          question: "¿Ofrecen servicio de limpieza o mantenimiento posterior?",
          answer:
            "Sí, ofrecemos servicio de limpieza profunda y mantenimiento preventivo. El primer mantenimiento es gratuito durante el año de garantía. Después, puedes contratar paquetes de mantenimiento semestral o anual a precios preferenciales.",
        },
        {
          question: "¿Qué hago si se mancha o daña el tapizado?",
          answer:
            "Contacta con nosotros inmediatamente. Para manchas, evita frotar excesivamente y no uses productos no recomendados. Según el caso, podemos darte instrucciones telefónicas, programar una limpieza especializada, o si está cubierto por garantía, realizar la reparación sin costo.",
        },
      ],
    },
  ];

  return (
    <>
      <MetaData title="PREGUNTAS FRECUENTES" />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 py-20 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <div className="w-20 h-20 bg-brand rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
              <IconQuestionMark size={40} className="text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Preguntas <span className="text-brand">Frecuentes</span>
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              Encuentra respuestas a las preguntas más comunes sobre nuestros
              servicios, procesos y garantías.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center flex-shrink-0">
                    <category.icon size={28} className="text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">
                    <span className="text-brand">{category.category}</span>
                  </h2>
                </div>

                {/* Questions */}
                <div className="space-y-4">
                  {category.questions.map((faq, index) => {
                    const globalIndex = `${categoryIndex}-${index}`;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <div
                        key={index}
                        className="bg-zinc-800 rounded-lg border border-zinc-700 overflow-hidden transition-all duration-300 hover:border-brand hover:shadow-lg hover:shadow-brand/10"
                      >
                        {/* Question */}
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left transition-colors duration-300 hover:bg-zinc-700/50"
                        >
                          <div className="flex items-start gap-3 flex-1">
                            <IconCheck
                              size={20}
                              className="text-brand mt-1 flex-shrink-0"
                            />
                            <h3 className="text-lg font-semibold">
                              {faq.question}
                            </h3>
                          </div>
                          <IconChevronDown
                            size={24}
                            className={`text-brand flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Answer */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isOpen ? "max-h-96" : "max-h-0"
                          }`}
                        >
                          <div className="px-6 pb-4 pt-2">
                            <div className="pl-8 text-zinc-400 leading-relaxed border-l-2 border-brand/30">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-900 rounded-lg p-8 md:p-12 border border-zinc-700 text-center">
              <h2 className="text-3xl font-bold mb-4">
                ¿No Encontraste tu <span className="text-brand">Respuesta</span>
                ?
              </h2>
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
                Nuestro equipo está listo para resolver todas tus dudas.
                Contáctanos por WhatsApp, teléfono o correo electrónico.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://wa.me/15551234568"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-600/50"
                >
                  Chatear por WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand/50"
                >
                  Ir a Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
