import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <h1>ESTA SERA LA PAGINA DE INICIO</h1>
      <img src="/logo_juan_5-removebg-preview.png" alt="" className="" />
      <p className="text-blue-500 ">Bienvenido a nuestra página de inicio. Aquí encontrarás información sobre nuestros servicios y productos.</p>
      <Footer />
    </div>
  );
};

export default Home;
