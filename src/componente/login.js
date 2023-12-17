import React from 'react';
import './estilos/login.css'
import { Crea } from './api/rutas';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';


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
      <input className='input1' type="text" placeholder="NUMERO DE DOCUMENTO" name="correo" onChange={handleChange} value={values.correo}/>
      <input  className='input1' type="password" placeholder="CORREO" name="contraseña" onChange={handleChange}  value={values.contraseña} />
     <Link to="/tareas"> <button className='boton4' type="submit" disabled={isSubmitting}>
           {isSubmitting ? "Enviando...": "Iniciar sesion Admin"} 
</button></Link> 
<Link to="/muj"><button className='boton4' type="submit" disabled={isSubmitting}>
           {isSubmitting ? "Enviando...": "Iniciar sesion Mujer"} 
</button></Link> 
  
    </div>
    </Form>
 )}
    </Formik>
  );
}



export default Login;
