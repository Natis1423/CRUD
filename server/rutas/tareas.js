import { Router } from "express";/*  */
import { getTarea,getTareas, createTareas,deleteTareas, createServici, createmanza, createmu, deleteman, deleteestabl,deletemujerymanzana } from "../controlador/ControladorTareas.js";
const router=Router();

router.get('/tarea',getTareas)
router.post('/tarea',createTareas)//crea tarea 
router.post('/servicio',createServici)//crea servicio 
router.post('/manzanas',createmanza)//crea manza 
router.post('/mujer',createmu)//crea mujeres  

router.put('/tarea/:Id_Mujere',createTareas)//parametro cualquiera 
router.get('/tarea:Id_Mujer',getTarea)//Parametro unico
router.delete('/tarea/:Cod_Serv',deleteTareas)//Elimina tarea
router.delete('/manzana/:Cod_Manzana',deleteman)
router.delete('/estable/:EstablecimientoCod_Establ', deleteestabl);
/* router.delete('/estable/:EstablecimientoCod_Establ',deleteestabl) */
router.delete('/mujerymanzana/:Id_Mujer', deletemujerymanzana);









export default router

