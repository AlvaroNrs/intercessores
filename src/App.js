import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import Sobre from "./paginas/Sobre";
import NaoEncontrada from "./paginas/NaoEncontrada";
import Menu from "./componentes/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="*" element={<NaoEncontrada/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
