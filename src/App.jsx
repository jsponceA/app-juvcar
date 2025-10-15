import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import { Route, Routes } from "react-router";
import DefaultLayout from "@/layouts/DefaultLayout";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "@/components/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <ToastContainer position="top-right" />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
