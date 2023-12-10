import { getBorrar } from "../api/rutas.js"
import { useTare, Tcontext } from "../context/TareaContext.js"
function TareaTarjeta({t1}){

    const handleDelete=async(id)=>{
        try{
            const respuesta=await getBorrar(id)
            console.log(respuesta)
        }
        catch(error){
            console.error(error);
        }
     
    }    
    return(
            <div>
            <h2>{t1.correo}</h2>
            <p>{t1.constraseña}</p>
            <p>{t1.rol}</p>
            <button onClick={()=>handleDelete(t1.id)}>Borrar</button>
            <button>Editar</button>
            </div>
        )
    }
    export default TareaTarjeta
    
