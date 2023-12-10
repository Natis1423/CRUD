import { Router } from "express";
import { pool } from "../db.js";//Exporta la bbdd

const  ruticas=Router();
ruticas.get('/pin',async (req,res)=>{//el acceso lo hace con el /
const [rows]= await pool.query('select * from mujeres' )//Consulta el array es para que no me muestre toda la confg del Dom
console.log(rows)
res.json(rows)//respuesta en nformata json
})
export default ruticas
