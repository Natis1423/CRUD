import React from "react";
import { Form,Formik } from "formik"
import { useTare } from "../context/TareaContext";
import "../estilos/estable.css"

function Estable(){
const {createTareaFunc}=useTare()
return (
  <div>
  <Formik
     initialValues={{
        Nom_Establ:"",
        Responsable_Establ:"",
        Direccion1:""
     }}
     onSubmit={async (values,actions)=>{
      console.log(values)
      createTareaFunc(values)
      actions.resetForm()
     }}

     >
     {({handleChange,handleSubmit,values, isSubmitting})=>(
  <Form className="MNO" onSubmit={handleSubmit}>
    <label>
    <h1 className="JKL">ESTABLECIMIENTO</h1>
     Nombre:</label>
    <input type="text" name="Nom_Establ" class="PQR"  onChange={handleChange} value={values.Nom_Establ}></input>
    <label>Responsable:</label>
    <input type="text" name="Responsable_Establ" class="PQR"  onChange={handleChange} value={values.Responsable_Establ}></input>
    <label>Dirección:</label>
    <input type="text" name="Direccion1" class="PQR" onChange={handleChange} value={values.Direccion1} ></input>
    <button className="PQR" type="submit" disabled={isSubmitting}>
         {isSubmitting ? "Enviando...": "Agregar Establecimiento"} 
         </button>
  </Form>
     )}
   </Formik>

  </div>
);
     }

export default Estable