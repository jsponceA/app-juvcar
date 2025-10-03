import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="bg-blue-400">
      <nav className="flex justify-center gap-4 p-4 text-white font-bold">
        <NavLink to="/" end>
          Inicio
        </NavLink>
        <NavLink to="/about" end>
          Nosotros
        </NavLink>
        <NavLink to="/services">Servicios</NavLink>
        <NavLink to="/contact">Contactanos</NavLink>
      </nav>
    </div>
  );
};

export default Header;
