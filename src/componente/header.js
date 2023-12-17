import React from "react";
import { Link } from "react-router-dom";
import "./estilos/header.css"
const Header = (props) => ( //CREAME UNA CONST PARA PODER ALMACENAR DATOS// 
    <div className="container_header">
    <div>
         <Link to="/login"> <button className=""> {props.sa} </button></Link>  
         <Link to="/formulario"> <button className="boton8"> {props.signup} </button></Link>  
         <Link to="/login"> <button className="boton8"> {props.login} </button></Link>  
            <h1 className="titu1" >{props.titulo}</h1>
            <h3 className="descrip">{props.descrip}</h3>
            </div>

    </div>
)

export default Header