import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Comprar from "./pages/Comprar";
import Arrendar from "./pages/Arrendar";
import PropiedadDetalle from "./pages/PropiedadDetalle";
import Privacidad from "./pages/Privacidad";
import Terminos from "./pages/Terminos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/comprar" element={<Comprar />} />
      <Route path="/arrendar" element={<Arrendar />} />
      <Route path="/propiedad/:id" element={<PropiedadDetalle />} />
      <Route path="/privacidad" element={<Privacidad />} />
      <Route path="/terminos" element={<Terminos />} />
    </Routes>
  );
}

export default App;
