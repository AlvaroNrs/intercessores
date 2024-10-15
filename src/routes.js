import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import Sobre from "./paginas/Sobre";
import NaoEncontrada from "./paginas/NaoEncontrada";
import Menu from "./componentes/Menu";
import Footer from "./componentes/Footer";
import ComoJogar from "paginas/ComoJogar";
import Cartas from "paginas/Cartas";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/comoJogar" element={<ComoJogar/>} />
        <Route path="/cartas" element={<Cartas/>} />
        <Route path="*" element={<NaoEncontrada/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
