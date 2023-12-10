import React from "react";
import Header from "../header";
import Body from "../body";
import Maps from "../mapa";
import m2 from "../images/m2.jpeg"
import M3 from "../images/M3.jpg"
import estu from"../images/estu.jpg"
import Body_serv from "../body_serv";
import emprender from"../images/emprender.jpg"
import descarga from "../images/descarga.jpg"
import ejercicio from "../images/ejercicio.jpg"
import psicologia from "../images/psicologia.jpg"
import juridica from "../images/juridica.jpg"
import ropa from "..//images/ropa.jpg"
import descarg from "../images/descarg.jpg"
import medi from "../images/medi.jpg"
function Servicios() {
    return (
        <div>
        <Header
            titulo="Manzanas de cuidado"
            descrip="Aqui puedes encontrar mas informacion sobre nosotros"
            signup="REGISTRARSE"
            login="INICIAR SESION"
        />
        <Body_serv
          titu="INICIO"
          titu2="¿QUE SOMOS?"
          ima1={m2}
          ima2={M3}
        titulo="SERVICIOS"
        servicio="En las manzanas del cuidado te brindamos variedad de servicios gratuitos"
        imagen={estu}
        descrip="ESTUDIAR"
        imagen1={emprender}
        descrip1="EMPRENDER"
        imagen2={descarga}
        descrip2="DESCANDAR"
        imagen3={ejercicio}
        descrip3="REALIZAR EJERCICIO"
        imagen4={psicologia}
        descrip4="ASESORIA PSICOLOGICA"
        imagen5={juridica}
        descrip5="ASESORIA JURIDICA"
        imagen6={ropa}
        descrip6="LAVAR ROPA"
        imagen7={descarg}
        descrip7="EMPLEARSE"
        imagen8={medi}
        descrip8="MEDITAR"
        
        
        
        />
       <Maps/>
        </div>
      
       
    )

}

export default Servicios

