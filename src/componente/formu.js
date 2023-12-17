import { Form,Formik } from "formik"
import { useTare } from "./context/TareaContext";
import React from 'react';
import "./estilos/manza.css"

function Formu() {
  const {createmujer}=useTare()
  return (
    <div>
    <Formik
       initialValues={{
        Tipo_Documen:"",
        Documento:"",
        Primer_Nom:"",
        Segundo_Nom:"",
        Primer_Ape:"",
        Segundo_Ape:"",
        Tel:"",
        Correo_Elec:"",
        Ciudad:"",
        Direccion:"",
        Ocupacion:"",
        Serv_Participa:""
       }}
       onSubmit={async (values,actions)=>{
        console.log(values)
        createmujer(values)
        actions.resetForm()
       }}

       >
       {({handleChange,handleSubmit,values, isSubmitting})=>(
    <Form className="FIFA" onSubmit={handleSubmit}>
      <label>
        
      <h1 className='titulo'> REGISTRARME</h1>
        Tipo de Documento:  </label>
        <input className="YV" type="text" name="Tipo_Documen" onChange={handleChange} value={values.Tipo_Documen}/>
    
     
        <label>
        Numero de Documento:  </label>
        <input className="YV"type="text" name="Documento" onChange={handleChange} value={values.Documento}/>
      <label>

        Primer nombre:  </label>
        <input className="YV" type="text" name="Primer_Nom" onChange={handleChange} value={values.Primer_Nom}/>

      <label>
        Segundo nombre:  </label>
        <input className="YV" name="Segundo_Nom" onChange={handleChange} value={values.Segundo_Nom}/>
   
      <label>
        Primer apellido:  </label>
        <input className="YV" type="text" name="Primer_Ape" onChange={handleChange} value={values.Primer_Ape}/>
   
      <label>
        Segundo apellido:  </label>
        <input className="YV"  type="text" name="Segundo_Ape" onChange={handleChange} value={values.Segundo_Ape}/>
    
      <label>
        Teléfono:  </label>
        <input className="YV" type="text" name="Tel" onChange={handleChange} value={values.Tel}/>
     
      <label>
        Correo Electrónico:  </label>
        <input className="YV" type="email" name="Correo_Elec" onChange={handleChange}value={values.Correo_Elec}/>
    
      <label>
        Ciudad:  </label>
        <input className="YV" type="text" name="Ciudad" onChange={handleChange}value={values.Ciudad} />
    
      <label>
        Dirección:</label>
        <input className="YV" type="text" name="Direccion" onChange={handleChange}value={values.Direccion} />
      
      <label>
        Ocupación:</label>
        <input  className="YV" type="text" name="Ocupacion" onChange={handleChange} value={values.Ocupacion}/>
      
      <label>
        Servicio en el que participa: </label>
        <input cclassName="YV"  type="text"  name="Serv_Participa" onChange={handleChange} value={values.Serv_Participa}/>
     
      <button className="YV" type="submit" disabled={isSubmitting}>
           {isSubmitting ? "Enviando...": "Enviar"} 
           </button>
   
    </Form>
       )}
     </Formik>

    </div>
  );
}

export default Formu;
