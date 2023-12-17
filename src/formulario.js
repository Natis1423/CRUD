import { Form,Formik } from "formik"
import { useTare } from "./componente/context/TareaContext";
import React from 'react';
import './componente/estilos/formulario.css'

function Formulario() {
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
    <Form className="form" onSubmit={handleSubmit}>
      
        
      <h1 className='titulo'> REGISTRARME</h1>
      <label>
      Tipo de documento:  </label>
        <input className="input" type="text" name="Tipo_Documen" onChange={handleChange} value={values.Documento}/>
  
      
     
        <label>
        Numero de Documento:  </label>
        <input className="input" type="number" name="Documento" onChange={handleChange} value={values.Documento}/>
      <label>

        Primer nombre:  </label>
        <input className="input" type="text" name="Primer_Nom" onChange={handleChange} value={values.Primer_Nom}/>

      <label>
        Segundo nombre:  </label>
        <input className="input" name="Segundo_Nom" onChange={handleChange} value={values.Segundo_Nom}/>
   
      <label>
        Primer apellido:  </label>
        <input className="input"  type="text" name="Primer_Ape" onChange={handleChange} value={values.Primer_Ape}/>
   
      <label>
        Segundo apellido:  </label>
        <input className="input"  type="text" name="Segundo_Ape" onChange={handleChange} value={values.Segundo_Ape}/>
    
      <label>
        Teléfono:  </label>
        <input className="input" type="text" name="Tel" onChange={handleChange} value={values.Tel}/>
     
      <label>
        Correo Electrónico:  </label>
        <input className="input"  type="email" name="Correo_Elec" onChange={handleChange}value={values.Correo_Elec}/>
    
      <label>
        Ciudad:  </label>
        <input  className="input" type="text" name="Ciudad" onChange={handleChange}value={values.Ciudad} />
    
      <label>
        Dirección:</label>
        <input className="input" type="text" name="Direccion" onChange={handleChange}value={values.Direccion} />
      
      <label>
        Ocupación:</label>
        <input  className="input" type="text" name="Ocupacion" onChange={handleChange} value={values.Ocupacion}/>
      
      <label>
        Servicio en el que participa: </label>
        <input className="input"  type="text"  name="Serv_Participa" onChange={handleChange} value={values.Serv_Participa}/>
     
      <button className="boton3" type="submit" disabled={isSubmitting}>
           {isSubmitting ? "Enviando...": "Enviar"} 
           </button>
   
    </Form>
       )}
     </Formik>

    </div>
  );
}

export default Formulario;
