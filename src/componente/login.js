import React from 'react';
import './estilos/login.css'
import { Crea } from './api/rutas';
import { Formik, Form } from 'formik';


function Login() {
  return (
   <Formik
   initialValues={{
    correo:"",
    contraseña:"",
    rol:""
   }}
   onSubmit={async (values,actions)=>{
    console.log(values)
    try{
        const respuest= await Crea (values)
        console.log(respuest)
        actions.resetForm()
    }
    catch(error){
        console.error(error)

    }
   }}
   >
 {({handleChange,handleSubmit,values,isSubmitting})=>(
              <Form onSubmit={handleSubmit}>

<div className='login'>
    
      <h1 className='titulo'> INICIAR SESION</h1>
      <input type="text" placeholder="Correo" name="correo" onChange={handleChange} value={values.correo}/>
      <input type="password" placeholder="Contraseña" name="contraseña" onChange={handleChange}  value={values.contraseña} />
      <input type="text" placeholder="rol" name='rol' onChange={handleChange}  value={values.rol}/>
      <button type="submit" disabled={isSubmitting}>
           {isSubmitting ? "Enviando...": "Iniciar sesion"} 
</button>
   
  
    </div>
    </Form>
 )}
    </Formik>
  );
}



export default Login;
