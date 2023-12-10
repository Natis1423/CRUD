import  axios from 'axios';

export const Crea=async (task)=>{
    await axios.post('http://localhost:8000/tarea',task)
}
export const getTareas=async ()=>
    await axios.get('http://localhost:8000/tarea');
    
export const getBorrar=async (id)=>
    await axios.delete(`http://localhost:8000/tarea/${id}`);
