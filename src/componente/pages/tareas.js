import { useEffect, useState } from "react"
import { getTareas } from "../api/rutas.js";
import TareaTarjeta from "../components/task.js"
import {useTare } from "../context/TareaContext.js";
function Tarea(){
    const [taks,setTask]=useState([])
    useEffect(()=>{//Apenas se carge inicia esta parte 
        async function Load(){
            const respuesta=await getTareas()
            setTask(respuesta.data)
        } 
        Load()
    },[])
    function renderMin(){
        if (taks.length=== 0)return <h1>No hay registros</h1>
     
      return taks.map((t1)=>(<TareaTarjeta t1={t1} key={t1.id}/>) )
            
      
    }
return(
    <div>
        <h1> Los registros son</h1>
        {renderMin()}
    </div>
)
}
export default Tarea
