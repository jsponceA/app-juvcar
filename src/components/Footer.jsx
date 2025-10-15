import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-800 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="JUV CAR" className="h-12 w-auto" />
              <span className="text-xl font-bold text-brand">JUV CAR</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Interiores de cuero a medida con la más alta calidad y diseño
              personalizado.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-bold text-brand mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-zinc-400 text-sm">
                <IconPhone size={18} className="text-brand" />
                <a
                  href="tel:+15551234567"
                  className="hover:text-brand transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3 text-zinc-400 text-sm">
                <IconMail size={18} className="text-brand" />
                <a
                  href="mailto:info@juvcar.com"
                  className="hover:text-brand transition-colors"
                >
                  info@juvcar.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-zinc-400 text-sm">
                <IconMapPin size={18} className="text-brand" />
                <span>Tu dirección aquí</span>
              </li>
            </ul>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-bold text-brand mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-zinc-400 text-sm hover:text-brand transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-zinc-400 text-sm hover:text-brand transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-zinc-400 text-sm hover:text-brand transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-zinc-400 text-sm hover:text-brand transition-colors"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-zinc-400 text-sm hover:text-brand transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-800 mt-8 pt-8 text-center">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} JUV CAR. Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* Botones flotantes */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        {/* Botón de WhatsApp */}
        <a
          href="https://wa.me/15551234568"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 group"
          aria-label="WhatsApp"
        >
          <IconBrandWhatsapp size={24} />
        </a>

        {/* Botón de Llamar */}
        <a
          href="tel:+15551234567"
          className="bg-brand hover:bg-brand-dark text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
          aria-label="Llamar"
        >
          <IconPhone size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
