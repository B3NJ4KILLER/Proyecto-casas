// function App() {
//   return (
//     <div className="bg-blue-900">
//       <h1 className="text-3xl font-bold underline">Hola Mundooooo</h1>
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Aquí agregaremos más rutas después, ej: <Route path="/comprar" element={<Comprar />} /> */}
    </Routes>
  );
}

export default App;
