import { Form,Formik } from "formik"
import { useTare } from "./componente/context/TareaContext";
import React from 'react';
import './componente/estilos/formulario.css'

function Formulario() {
  const {createTarea}=useTare()
  return (
    <div>
    <Formik
       initialValues={{
        tipo_doc:"",
        doc:"",
        primer_nom:"",
        segundo_nom:"",
        primer_ape:"",
        segundo_ape:"",
        tel:"",
        correo_elec:"",
        ciudad:"",
        direccion:"",
        ocupacion:"",
        serv_participa:""
       }}
       onSubmit={async (values,actions)=>{
        console.log(values)
        createTarea(values)
        actions.resetForm()
       }}

       >
       {({handleChange,handleSubmit,values, isSubmitting})=>(
    <Form onSubmit={handleSubmit}>
      <label>
        Tipo de Documento:
        <input type="text" name="tipo_doc" onChange={handleChange} value={values.tipo_doc}/>
        </label>
     
        <label>
        Numero de Documento:
        <input type="text" name="doc" onChange={handleChange} value={values.doc}/>
      </label>
      <label>
        Primer nombre:
        <input type="text" name="primer_nom" onChange={handleChange} value={values.primer_nom}/>
      </label>
      <label>
        Segundo nombre:
        <input type="text" name="segundo_nom" onChange={handleChange} value={values.segundo_nom}/>
      </label>
      <label>
        Primer apellido:
        <input type="text" name="primer_ape" onChange={handleChange} value={values.primer_ape}/>
      </label>
      <label>
        Segundo apellido:
        <input type="text" name="segundo_ape" onChange={handleChange} value={values.segundo_ape}/>
      </label>
      <label>
        Teléfono:
        <input type="text" name="tel" onChange={handleChange} value={values.tel}/>
      </label>
      <label>
        Correo Electrónico:
        <input type="email" name="correo_elec" onChange={handleChange}value={values.correo_elec}/>
      </label>
      <label>
        Ciudad:
        <input type="text" name="ciudad" onChange={handleChange}value={values.ciudad} />
      </label>
      <label>
        Dirección:
        <input type="text" name="direccion" onChange={handleChange}value={values.direccion} />
      </label>
      <label>
        Ocupación:
        <input type="text" name="ocupacion" onChange={handleChange} value={values.ocupacion}/>
      </label>
      <label>
        Servicio en el que participa:
        <input type="text"  name="serv_participa" onChange={handleChange} value={values.serv_participa}/>
      </label>
      <button type="submit" disabled={isSubmitting}>
           {isSubmitting ? "Enviando...": "Enviar"} 
           </button>
   
    </Form>
       )}
     </Formik>

    </div>
  );
}

export default Formulario;
