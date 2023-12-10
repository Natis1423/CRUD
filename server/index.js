import express  from "express";
import 'express-async-errors';
import { Port } from "./config.js";
import ruticas from "./rutas/rutas.js";
import tareas from "./rutas/tareas.js";
import cors from "cors"
const app=express();
app.use(express.json())
app.use(cors({ // Le decimos que solo se comunique con este servidor
    origin:'http://localhost:3000'
}));

app.use(ruticas);
app.use(tareas);
app.listen(Port)
console.log("holita");

