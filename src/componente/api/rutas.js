import  axios from 'axios';

export const Crea=async (task)=>{
    await axios.post('http://localhost:8000/tarea',task)
}
export const createServici=async (task)=>{
    await axios.post('http://localhost:8000/servicio',task)
}
export const createman=async (task)=>{
    await axios.post('http://localhost:8000/manzanas',task)
}
export const createmuj=async (task)=>{
    await axios.post('http://localhost:8000/mujer',task)
}
export const createpro=async (task)=>{
    await axios.post('http://localhost:8000/propuesta',task)
}
export const getTareas=async ()=>
    await axios.get('http://localhost:8000/tarea');

    
export const getBorrar = async (Cod_Serv) => {
    try {
        if (Cod_Serv) {
            const respuesta = await axios.delete(`http://localhost:8000/tarea/${Cod_Serv}`);
            return respuesta.data;
        } else {
            console.error('No se puede:(');
            return null;
        }
    } catch (error) {
        console.error( error);
     
    }
};
export const delemanza = async (Cod_Manzana) => {
    try {
        if (Cod_Manzana) {
            const respuesta = await axios.delete(`http://localhost:8000/manzana/${Cod_Manzana}`);
            return respuesta.data;
        } else {
            console.error('No se puede:(');
            return null;
        }
    } catch (error) {
        console.error( error);
     
    }
};

export const deleteestablecimiento = async (EstablecimientoCod_Establ) => {
    try {
        if (EstablecimientoCod_Establ) {
            const respuesta = await axios.delete(`http://localhost:8000/estable/${EstablecimientoCod_Establ}`);
            return respuesta.data;
        } else {
            console.error('No se puede:(');
            return null;
        }
    } catch (error) {
        console.error( error);
     
    }
};
export const deleteMujeresYManzanas = async (Id_Mujer) => {
    try {
        if (Id_Mujer) {
            const respuesta = await axios.delete(`http://localhost:8000/mujerymanzana/${Id_Mujer}`);
            return respuesta.data;
        } else {
            console.error('No se puede:(');
            return null;
        }
    } catch (error) {
        console.error(error);
    }
};


