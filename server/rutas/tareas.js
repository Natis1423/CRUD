import { Router } from "express";
import { getTarea,getTareas,createTareas,updateTareas,deleteTareas } from "../controlador/ControladorTareas.js";
const router=Router();

router.get('/tarea',getTareas)
router.post('/tarea',createTareas)//crea tarea
router.put('/tarea/:id_mujer',createTareas)//parametro cualquiera
router.get('/tarea:id_mujer',getTarea)//Parametro unico
router.delete('/tarea/:id_mujer',deleteTareas)//Elimina tarea

export default router

