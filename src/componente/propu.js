
import { Form,Formik } from "formik"
import React from "react"
import Maps from "./mapa";
import { useTare } from "./context/TareaContext";

function Propu() {
    const {createp}=useTare()
    return (
      <div>
      <Formik
         initialValues={{
            ManzanasCod_Manzana:"",
             ServicioCod_Serv:"",
              dia:"", 
              hora:""
         }}
         onSubmit={async (values,actions)=>{
          console.log(values)
          createp(values)
          actions.resetForm()
         }}
  
         >
         {({handleChange,handleSubmit,values, isSubmitting})=>(
      <Form className="FIFA" onSubmit={handleSubmit}>
        <label>
          
        <h1 className='titulo'> REALIZAR PROPUESTA</h1>
          Codigo de manzana:  </label>
          <input className="YV" type="text" name="ManzanasCod_Manzana" onChange={handleChange} value={values.ManzanasCod_Manzana}/>
      
       
          <label>
          Codigo de servicio:  </label>
          <input className="YV" type="text" name="ServicioCod_Serv" onChange={handleChange} value={values.ServicioCod_Serv}/>
        <label>
  
          Dia:  </label>
          <input className="YV" type="date"  name="dia" onChange={handleChange} value={values.dia}/>
  
        <label>
         Hora  </label>
          <input className="YV"  type="time" name="hora" onChange={handleChange} value={values.hora}/>
     
    <Maps/>
       
        <button className="YV" type="submit" disabled={isSubmitting}>
             {isSubmitting ? "Enviando...": "Enviar"} 
             </button>

     
      </Form>
         )}
       </Formik>
  
      </div>
    );
  }
  
  export default Propu;

