import {BrowserRouter,  Route, Routes } from "react-router-dom";
import Inicio from "./componente/pages/inicio";
import Servicios from "./componente/pages/servicios"
import Que_somos from "./componente/pages/que_somos";
import Login from "./componente/login";
import { Tcontext } from "./componente/context/TareaContext.js";
import Tarea from "./componente/pages/tareas.js";
import Admin from "./componente/admin";
import Formulario from "./formulario";



function App() {
  return (
<BrowserRouter>
<Tcontext>
<Routes>
<Route path="/inicio" element={<Inicio/>} />
<Route path="/servicios" element={<Servicios/>} />
<Route path="/que_somos" element={<Que_somos/>} />
<Route path="/formulario" element={<Formulario/>} />
<Route path="/login" element={<Login/>} />
<Route path="/admin" element={<Admin/>} />
<Route path="/tareas" element={<Tarea/>} />

  </Routes>
  </Tcontext>
  </BrowserRouter>
  );
}

export default App;
