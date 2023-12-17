import {BrowserRouter,  Route, Routes } from "react-router-dom";
import Inicio from "./componente/pages/inicio";
import Servicios from "./componente/pages/servicios"
import Que_somos from "./componente/pages/que_somos";
import Login from "./componente/login";
import { Tcontext } from "./componente/context/TareaContext.js";
import Tarea from "./componente/pages/tareas.js";
import Formulario from "./formulario";
import Manzanas from "./componente/pages/manzanas.js";
import Servi from "./componente/pages/servi.js";
import Estable from "./componente/pages/estable.js";
import Body_muj from "./mujeres.js";
import Formu from "./componente/formu.js";
import Propu from "./componente/propu.js";




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
<Route path="/tareas" element={<Tarea/>} />
<Route path="/manzanas" element={<Manzanas/>} />
<Route path="/servi" element={<Servi/>} />
<Route path="/estable" element={<Estable/>} />
<Route path="/muj" element={<Body_muj/>} />
<Route path="/formu" element={<Formu/>} />
<Route path="/propu" element={<Propu/>} />

  </Routes>
  </Tcontext>
  </BrowserRouter>
  );
}

export default App;
