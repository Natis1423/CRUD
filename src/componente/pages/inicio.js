import React from "react";
import Header from "../header";
import Body_ini from "../bod_ini";
import M3 from"../images/M3.jpg"
import M4 from"../images/M4.jpg"
import Maps from "../mapa";

function Inicio() {
    return (
        <div>
        <Header
            titulo="Manzanas de cuidado"
            descrip="Aqui puedes encontrar mas informacion sobre nosotros"
            signup="REGISTRARSE"
            login="INICIAR SESION"
        />
        <Body_ini
        titu="SERVICIOS"
        titu2="¿QUE SOMOS?"
        imagen1={M4}
        imagen2={M3}

        />
 
       <Maps/>
        </div>
      
       
    )

}

export default Inicio
