import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Comprar from "./pages/Comprar";
import Arrendar from "./pages/Arrendar";
import PropiedadDetalle from "./pages/PropiedadDetalle";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/comprar" element={<Comprar />} />
      <Route path="/arrendar" element={<Arrendar />} />
      <Route path="/propiedad/:id" element={<PropiedadDetalle />} />
    </Routes>
  );
}

export default App;
