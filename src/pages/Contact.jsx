import MetaData from "@/components/MetaData";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconSend,
  IconBrandWhatsapp,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    vehicleModel: "",
    service: "",
    budget: "",
    message: "",
    newsletter: false,
    privacy: false,
  });

  // Vehicle models organized by brand
  const [vehicleModels] = useState([
    {
      brand: "Toyota",
      models: [
        { value: "toyota-yaris", label: "Toyota Yaris" },
        { value: "toyota-corolla", label: "Toyota Corolla" },
        { value: "toyota-camry", label: "Toyota Camry" },
        { value: "toyota-rav4", label: "Toyota RAV4" },
        { value: "toyota-hilux", label: "Toyota Hilux" },
        { value: "toyota-land-cruiser", label: "Toyota Land Cruiser" },
        { value: "toyota-prius", label: "Toyota Prius" },
        { value: "toyota-avanza", label: "Toyota Avanza" },
        { value: "toyota-rush", label: "Toyota Rush" },
      ],
    },
    {
      brand: "Hyundai",
      models: [
        { value: "hyundai-accent", label: "Hyundai Accent" },
        { value: "hyundai-elantra", label: "Hyundai Elantra" },
        { value: "hyundai-tucson", label: "Hyundai Tucson" },
        { value: "hyundai-santa-fe", label: "Hyundai Santa Fe" },
        { value: "hyundai-creta", label: "Hyundai Creta" },
        { value: "hyundai-grand-i10", label: "Hyundai Grand i10" },
      ],
    },
    {
      brand: "Nissan",
      models: [
        { value: "nissan-versa", label: "Nissan Versa" },
        { value: "nissan-sentra", label: "Nissan Sentra" },
        { value: "nissan-altima", label: "Nissan Altima" },
        { value: "nissan-x-trail", label: "Nissan X-Trail" },
        { value: "nissan-frontier", label: "Nissan Frontier" },
        { value: "nissan-kicks", label: "Nissan Kicks" },
        { value: "nissan-march", label: "Nissan March" },
      ],
    },
    {
      brand: "Kia",
      models: [
        { value: "kia-rio", label: "Kia Rio" },
        { value: "kia-forte", label: "Kia Forte" },
        { value: "kia-sportage", label: "Kia Sportage" },
        { value: "kia-sorento", label: "Kia Sorento" },
        { value: "kia-picanto", label: "Kia Picanto" },
        { value: "kia-seltos", label: "Kia Seltos" },
      ],
    },
    {
      brand: "Chevrolet",
      models: [
        { value: "chevrolet-spark", label: "Chevrolet Spark" },
        { value: "chevrolet-sail", label: "Chevrolet Sail" },
        { value: "chevrolet-cruze", label: "Chevrolet Cruze" },
        { value: "chevrolet-tracker", label: "Chevrolet Tracker" },
        { value: "chevrolet-captiva", label: "Chevrolet Captiva" },
        { value: "chevrolet-n300", label: "Chevrolet N300" },
      ],
    },
    {
      brand: "Suzuki",
      models: [
        { value: "suzuki-swift", label: "Suzuki Swift" },
        { value: "suzuki-baleno", label: "Suzuki Baleno" },
        { value: "suzuki-vitara", label: "Suzuki Vitara" },
        { value: "suzuki-alto", label: "Suzuki Alto" },
        { value: "suzuki-ertiga", label: "Suzuki Ertiga" },
      ],
    },
    {
      brand: "Mazda",
      models: [
        { value: "mazda-2", label: "Mazda 2" },
        { value: "mazda-3", label: "Mazda 3" },
        { value: "mazda-6", label: "Mazda 6" },
        { value: "mazda-cx3", label: "Mazda CX-3" },
        { value: "mazda-cx5", label: "Mazda CX-5" },
        { value: "mazda-bt50", label: "Mazda BT-50" },
      ],
    },
    {
      brand: "Mitsubishi",
      models: [
        { value: "mitsubishi-mirage", label: "Mitsubishi Mirage" },
        { value: "mitsubishi-lancer", label: "Mitsubishi Lancer" },
        { value: "mitsubishi-asx", label: "Mitsubishi ASX" },
        { value: "mitsubishi-montero", label: "Mitsubishi Montero" },
        { value: "mitsubishi-l200", label: "Mitsubishi L200" },
      ],
    },
    {
      brand: "Honda",
      models: [
        { value: "honda-city", label: "Honda City" },
        { value: "honda-civic", label: "Honda Civic" },
        { value: "honda-accord", label: "Honda Accord" },
        { value: "honda-crv", label: "Honda CR-V" },
        { value: "honda-hrv", label: "Honda HR-V" },
        { value: "honda-pilot", label: "Honda Pilot" },
      ],
    },
    {
      brand: "Volkswagen",
      models: [
        { value: "volkswagen-gol", label: "Volkswagen Gol" },
        { value: "volkswagen-polo", label: "Volkswagen Polo" },
        { value: "volkswagen-vento", label: "Volkswagen Vento" },
        { value: "volkswagen-jetta", label: "Volkswagen Jetta" },
        { value: "volkswagen-tiguan", label: "Volkswagen Tiguan" },
        { value: "volkswagen-amarok", label: "Volkswagen Amarok" },
      ],
    },
    {
      brand: "Ford",
      models: [
        { value: "ford-fiesta", label: "Ford Fiesta" },
        { value: "ford-focus", label: "Ford Focus" },
        { value: "ford-fusion", label: "Ford Fusion" },
        { value: "ford-ecosport", label: "Ford EcoSport" },
        { value: "ford-escape", label: "Ford Escape" },
        { value: "ford-ranger", label: "Ford Ranger" },
      ],
    },
    {
      brand: "Otros",
      models: [
        { value: "great-wall", label: "Great Wall" },
        { value: "chery", label: "Chery" },
        { value: "byd", label: "BYD" },
        { value: "jeep", label: "Jeep" },
        { value: "subaru", label: "Subaru" },
        { value: "isuzu", label: "Isuzu" },
        { value: "ssangyong", label: "SsangYong" },
        { value: "peugeot", label: "Peugeot" },
        { value: "renault", label: "Renault" },
        { value: "otro", label: "Otro modelo" },
      ],
    },
  ]);

  // Services options
  const [serviceOptions] = useState([
    { value: "tapiceria-completa", label: "Tapicería Completa" },
    { value: "reparacion-asientos", label: "Reparación de Asientos" },
    { value: "restauracion-clasicos", label: "Restauración de Clásicos" },
    { value: "personalizacion", label: "Personalización Premium" },
    { value: "limpieza-restauracion", label: "Limpieza y Restauración" },
    { value: "conversion-deportiva", label: "Conversión Deportiva" },
    { value: "consultoria", label: "Consultoría" },
  ]);

  // Budget options
  const [budgetOptions] = useState([
    { value: "500-1000", label: "$500 - $1,000" },
    { value: "1000-2500", label: "$1,000 - $2,500" },
    { value: "2500-5000", label: "$2,500 - $5,000" },
    { value: "5000-10000", label: "$5,000 - $10,000" },
    { value: "10000+", label: "Más de $10,000" },
    { value: "consultar", label: "Prefiero Consultar" },
  ]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.privacy) {
      toast.error("Debes aceptar la política de privacidad para continuar.");
      return;
    }
    // Aquí iría la lógica para enviar el formulario
    toast.success("¡Mensaje enviado! Nos pondremos en contacto pronto.");
    setFormData({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      vehicleModel: "",
      service: "",
      budget: "",
      message: "",
      newsletter: false,
      privacy: false,
    });
  };

  return (
    <>
      <MetaData title="CONTACTO" />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 py-20 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-brand">Contáctanos</span>
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
              Estamos listos para ayudarte a transformar tu vehículo. Escríbenos
              y recibe una cotización personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Ubicación */}
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 transition-all duration-300 hover:border-brand hover:shadow-lg hover:shadow-brand/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center flex-shrink-0">
                  <IconMapPin size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">Nuestra Ubicación</h3>
              </div>
              <div className="text-zinc-400 space-y-1">
                <p>Calle Principal #123</p>
                <p>Zona Industrial</p>
                <p>Ciudad, Estado 12345</p>
              </div>
            </div>

            {/* Teléfonos */}
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 transition-all duration-300 hover:border-brand hover:shadow-lg hover:shadow-brand/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center flex-shrink-0">
                  <IconPhone size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">Teléfonos</h3>
              </div>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-zinc-500">Principal:</p>
                  <a
                    href="tel:+15551234567"
                    className="text-zinc-300 hover:text-brand transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
                <div>
                  <p className="text-sm text-zinc-500">WhatsApp:</p>
                  <a
                    href="tel:+15551234568"
                    className="text-zinc-300 hover:text-brand transition-colors"
                  >
                    +1 (555) 123-4568
                  </a>
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Emergencias:</p>
                  <a
                    href="tel:+15551234569"
                    className="text-zinc-300 hover:text-brand transition-colors"
                  >
                    +1 (555) 123-4569
                  </a>
                </div>
              </div>
            </div>

            {/* Correo Electrónico */}
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 transition-all duration-300 hover:border-brand hover:shadow-lg hover:shadow-brand/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center flex-shrink-0">
                  <IconMail size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">Correo Electrónico</h3>
              </div>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-zinc-500">General:</p>
                  <a
                    href="mailto:info@juvcar.com"
                    className="text-zinc-300 hover:text-brand transition-colors"
                  >
                    info@juvcar.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Ventas:</p>
                  <a
                    href="mailto:ventas@juvcar.com"
                    className="text-zinc-300 hover:text-brand transition-colors"
                  >
                    ventas@juvcar.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Soporte:</p>
                  <a
                    href="mailto:soporte@juvcar.com"
                    className="text-zinc-300 hover:text-brand transition-colors"
                  >
                    soporte@juvcar.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Horarios */}
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 transition-all duration-300 hover:border-brand hover:shadow-lg hover:shadow-brand/10">
              <h3 className="text-xl font-bold mb-4">Horarios de Atención</h3>
              <div className="space-y-3 text-zinc-400">
                <div className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span className="text-brand font-semibold">
                    8:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span className="text-brand font-semibold">
                    9:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span className="text-zinc-500">Cerrado</span>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 transition-all duration-300 hover:border-brand hover:shadow-lg hover:shadow-brand/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <IconBrandWhatsapp size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">WhatsApp</h3>
              </div>
              <p className="text-zinc-400 mb-4">
                Chatea con nosotros directamente para consultas rápidas y
                cotizaciones inmediatas
              </p>
              <a
                href="https://wa.me/15551234568"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Chatear Ahora
              </a>
            </div>

            {/* Redes Sociales */}
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 transition-all duration-300 hover:border-brand hover:shadow-lg hover:shadow-brand/10">
              <h3 className="text-xl font-bold mb-4">Redes Sociales</h3>
              <p className="text-zinc-400 mb-4">
                Síguenos en nuestras redes para ver nuestros trabajos más
                recientes
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-zinc-700 rounded-lg flex items-center justify-center hover:bg-brand transition-all duration-300 hover:scale-110"
                >
                  <IconBrandFacebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-zinc-700 rounded-lg flex items-center justify-center hover:bg-brand transition-all duration-300 hover:scale-110"
                >
                  <IconBrandInstagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-zinc-700 rounded-lg flex items-center justify-center hover:bg-brand transition-all duration-300 hover:scale-110"
                >
                  <IconBrandTwitter size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-1 gap-12">
            {/* Contact Info Section Title */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Envíanos un <span className="text-brand">Mensaje</span>
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Completa el formulario y nos pondremos en contacto contigo lo
                antes posible
              </p>
            </div>

            {/* Contact Form */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-zinc-800 p-8 rounded-lg border border-zinc-700">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nombre y Apellido */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold mb-2"
                      >
                        Nombre <span className="text-brand">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors"
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-semibold mb-2"
                      >
                        Apellido <span className="text-brand">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors"
                        placeholder="Tu apellido"
                      />
                    </div>
                  </div>

                  {/* Email y Teléfono */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold mb-2"
                      >
                        Correo Electrónico <span className="text-brand">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold mb-2"
                      >
                        Teléfono <span className="text-brand">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Modelo de Vehículo */}
                  <div>
                    <label
                      htmlFor="vehicleModel"
                      className="block text-sm font-semibold mb-2"
                    >
                      Modelo de Vehículo
                    </label>
                    <select
                      id="vehicleModel"
                      name="vehicleModel"
                      value={formData.vehicleModel}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors"
                    >
                      <option value="">Selecciona tu modelo...</option>
                      {vehicleModels.map((group) => (
                        <optgroup key={group.brand} label={group.brand}>
                          {group.models.map((model) => (
                            <option key={model.value} value={model.value}>
                              {model.label}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>

                  {/* Servicio de Interés y Presupuesto */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-semibold mb-2"
                      >
                        Servicio de Interés
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors"
                      >
                        <option value="">Selecciona...</option>
                        {serviceOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-semibold mb-2"
                      >
                        Presupuesto Aproximado
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors"
                      >
                        <option value="">Selecciona...</option>
                        {budgetOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold mb-2"
                    >
                      Mensaje <span className="text-brand">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand transition-colors resize-none"
                      placeholder="Describe tu proyecto, necesidades específicas, o cualquier pregunta que tengas..."
                    />
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="newsletter"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 bg-zinc-900 border-zinc-700 rounded focus:ring-brand focus:ring-2 text-brand"
                      />
                      <label
                        htmlFor="newsletter"
                        className="text-sm text-zinc-400 cursor-pointer"
                      >
                        Deseo recibir noticias y promociones especiales
                      </label>
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacy"
                        name="privacy"
                        checked={formData.privacy}
                        onChange={handleChange}
                        required
                        className="mt-1 w-4 h-4 bg-zinc-900 border-zinc-700 rounded focus:ring-brand focus:ring-2 text-brand"
                      />
                      <label
                        htmlFor="privacy"
                        className="text-sm text-zinc-400 cursor-pointer"
                      >
                        Acepto la política de privacidad y términos de servicio{" "}
                        <span className="text-brand">*</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand hover:bg-brand-dark text-white font-bold px-6 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand/50 flex items-center justify-center gap-2 group"
                  >
                    <IconSend
                      size={20}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                    ENVIAR MENSAJE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-zinc-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Nuestra <span className="text-brand">Ubicación</span>
            </h2>
          </div>
          <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3750.1731987931335!2d-73.985467!3d40.75817!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e1!3m2!1ses!2sus!4v1760488285221!5m2!1ses!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de JUV CAR"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
