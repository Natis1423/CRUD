import React from "react";
import Header from "../header";
import Qs from "../qs";
import m2 from"../images/m2.jpeg"
import M4 from"../images/M4.jpg"
import Images from '../images/images.jpg'; 
import Fmñ from "../images/fmñ.jpg";
import Lm from "../images/lm.jpg";
import Sp from "../images/sp.jpg";  
import Maps from "../mapa";


function Que_somos() {
    return (
        <div>
        <Header
            titulo="Manzanas de cuidado"
            descrip="Aqui puedes encontrar mas informacion sobre nosotros"
            signup="REGISTRARSE"
            login="INICIAR SESION"
        />
      
       
    
        <Qs
         titu="INICIO"
         titu2="SERVICIOS"
         ima1={m2}
         ima2={M4}
 
        titulo="¿QUE SOMOS?"
        descripcion=" Las Manzanas del Cuidado son espacios de la ciudad en los que brindamos tiempo y servicios a las mujeres y a sus familias.
        En las Manzanas del Cuidado las cuidadoras tienen tiempo y servicios gratuitos para que puedan cumplir los sueños que pusieron en pausa por la sobrecarga en los trabajos de cuidado."
        imagen1={Images}
        imagen={Fmñ}
        imagen2={Lm}
        imagen3={Sp}
        />
       <Maps/>

        </div>
      
       
    )

}

export default Que_somos