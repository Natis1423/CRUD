import React, { createContext, useContext, useState } from 'react';
import { createpro, getTareas, getBorrar, Crea, createServici, createman,createmuj,delemanza,deleteestablecimiento,deleteMujeresYManzanas} from "../api/rutas.js"


const Mcontext = createContext();

export const useTare = () => {
    const contexto = useContext(Mcontext);
    if (!contexto) {
        throw new Error("Falla en el contexto");
    }
    return contexto;
}

export const createTareaFunc = async (task) => {
    try {
        const respuesta = await Crea(task);
        console.log(respuesta);
    } catch (error) {
        console.error(error);
    }
}

export const createServ = async (task) => {
    try {
        const respuesta = await createServici(task);
        console.log(respuesta);
    } catch (error) {
        console.error(error);
    }
}
export const createp = async (task) => {
    try {
        const respuesta = await createpro(task);
        console.log(respuesta);
    } catch (error) {
        console.error(error);
    }
}
export const createm = async (task) => {
    try {
        const respuesta = await createman(task);
        console.log(respuesta);
    } catch (error) {
        console.error(error);
    }
}
export const createmujer = async (task) => {
    try {
        const respuesta = await createmuj(task);
        console.log(respuesta);
    } catch (error) {
        console.error(error);
    }
}
export const Tcontext = ({ children }) => {
    const [task, setTask] = useState([]);

    async function Load() {
        try {
            const respuesta = await getTareas();
            setTask(respuesta.data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleDelete = async (Cod_Serv) => {
        try {
        
            const respuesta = await getBorrar(Cod_Serv);

            setTask(task.filter(t1 => t1.Cod_Serv !== Cod_Serv));
        } catch (error) {
            console.error(error);
        }
    };
    const Delete = async (Cod_Manzana) => {
        try {
        
            const respuesta = await delemanza(Cod_Manzana);

            setTask(task.filter(t1 => t1.Cod_Manzana !== Cod_Manzana));
        } catch (error) {
            console.error(error);
        }
    };
   /*  const Deletees = async (EstablecimientoCod_Establ) => {
        try {
        
            const respuesta = await deleteestablecimiento(EstablecimientoCod_Establ);

            setTask(task.filter(t1 => t1.EstablecimientoCod_Establ !== EstablecimientoCod_Establ));
        } catch (error) {
            console.error(error);
        }

    }; */
    const Deletees = async (EstablecimientoCod_Establ) => {
        try {
            const respuesta = await deleteestablecimiento(EstablecimientoCod_Establ);
            setTask(task.filter(t1 => t1.EstablecimientoCod_Establ !== EstablecimientoCod_Establ));
        } catch (error) {
            console.error(error);
        }
    };
    
    const Deletemymanzana = async (Id_Mujer) => {
        try {
            const respuesta = await deleteMujeresYManzanas(Id_Mujer);
     
            setTask(task.filter(t1 => t1.Id_Mujer !== Id_Mujer));
        } catch (error) {
            console.error(error);
        }
    };
    
  
    

    return (
        <Mcontext.Provider value={{ task, createp, handleDelete, Load, createTareaFunc, createServ,createm ,createmujer,Delete,Deletees, Deletemymanzana}}>
            {children}
        </Mcontext.Provider>
    );
}
