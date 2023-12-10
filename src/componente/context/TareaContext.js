import {  useContext, useState } from "react";
import { getTareas,getBorrar, Crea } from "../api/rutas.js";
import { Mcontext } from "./context.js";

export const useTare=()=>{
    const contexto=useContext(Mcontext)
    if(!contexto){
        throw new Error("Falla en el contexto")
    }
    return contexto
}
export const createTarea=async(task)=>{
    try{
        const respuest= await Crea (task)
        console.log(respuest)
        
    }
    catch(error){
        console.error(error)
    }
}

export const Tcontext=({children})=>{
    const [task,setTask]=useState([])
    async function Load(){
        const respuesta=await getTareas()
        setTask(respuesta.data)
    } 
    const handleDelete=async(id)=>{
        try{
            const respuesta=await getBorrar(id)
            setTask(task.filter(t1=>t1.id!==id));
        }
        catch(error){
            console.error(error);
        }
     
    }
     return <Mcontext.Provider value={{task,Load,handleDelete,createTarea}}> 
        {children}
    </Mcontext.Provider>
}
