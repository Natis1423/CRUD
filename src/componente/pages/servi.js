import React from "react";
import { Form,Formik } from "formik"
import { useTare } from "../context/TareaContext";

import "../estilos/servi.css"
function Servi() {
   const {createServ}=useTare()
return (
  <div>
  <Formik
  
     initialValues={{
        Nom_Serv:"",
        Categ_Serv:"",
        Tipo_Serv:"",
        Descrip:"",
        EstablecimientoCod_Establ:""
     }}
     onSubmit={async (values,actions)=>{
      console.log(values)
      createServ(values)
      actions.resetForm()
     }}

     >
     {({handleChange,handleSubmit,values, isSubmitting})=>(
  <Form className="DEF" onSubmit={handleSubmit}>
    <label>
      
    <h1 className='ABC'> SERVICIOS</h1>
     Nombre:</label>
        <input type="text"  name="Nom_Serv" className="GHI"  onChange={handleChange} value={values.Nom_Serv}></input>
        <label >Categoria:</label>
        <input type="txt" name="Categ_Serv" className="GHI"  onChange={handleChange} value={values.Categ_Serv}></input>
        <label >Tipo:</label>
        <input type="txt" name="Tipo_Serv" className="GHI"  onChange={handleChange} value={values.Tipo_Serv}></input>
        <label >Descripcion:</label>
        <textarea type="txt" name="Descrip" className="GHI"  onChange={handleChange} value={values.Descrip}></textarea>
        <label >establecimiento:</label>
        <textarea type="txt" name="EstablecimientoCod_Establ" className="GHI"  onChange={handleChange} value={values.EstablecimientoCod_Establ}></textarea>
   
    <button className="GHI" type="submit" disabled={isSubmitting}>
         {isSubmitting ? "Enviando...": "Agregar Servicios"} 
         </button>
  </Form>
     )}
   </Formik>

  </div>
);
}
export default Servi