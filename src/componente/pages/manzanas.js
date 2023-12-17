import React from "react";
import { Form,Formik } from "formik"
import { useTare } from "../context/TareaContext";
import "../estilos/manza.css"
function Manzanas() {
    const {createm}=useTare()
    return (
      <div>
      <Formik
         initialValues={{
            Nombre_Manzana:"",
            Localidad:"",
            Direccion2:"",
            Municipio:"",
            MujeresId_Mujer:""
         }}
         onSubmit={async (values,actions)=>{
          console.log(values)
          createm(values)
          actions.resetForm()
         }}
  
         >
         {({handleChange,handleSubmit,values, isSubmitting})=>(
      <Form className="FIFA" onSubmit={handleSubmit}>
        <label>
          
        <h1 className='FEC'> Manzanas</h1>
          Nombre:  </label>
          <input className="YV" type="text" name="Nombre_Manzana" onChange={handleChange} value={values.Nombre_Manzana}/>
      
       
          <label>
          Localidad: </label>
         <input  className="YV" type="text" name="Localidad" onChange={handleChange} value={values.Localidad}/>
       
       
        <label>
        Dirección: </label>
          <input className="YV" type="text" name="Direccion2" onChange={handleChange} value={values.Direccion2}/>
  
        <label>
          Municipio: </label>
          <input className="YV" name="Municipio" onChange={handleChange} value={values.Municipio}/>
          <label>
          Codigo de mujer: </label>
          <input className="YV" name="MujeresId_Mujer" onChange={handleChange} value={values.MujeresId_Mujer}/>
     
       
       
        <button className="YV" type="submit" disabled={isSubmitting}>
             {isSubmitting ? "Enviando...": "Enviar"} 
             </button>
      </Form>
         )}
       </Formik>
  
      </div>
    );
  }
  
  export default Manzanas;
  