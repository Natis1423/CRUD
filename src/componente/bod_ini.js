import React from "react";
import { Link } from "react-router-dom";
import "./estilos/header.css"
import "./estilos/body.css"
const Body_ini = (props) => (
    <div className="kjdsa">
      
      <ul className="body">
      <li className="body1">
        <Link to="/servicios"> <img className="img1" src={props.imagen1} alt="" /></Link>
           <p className="titu">{props.titu}</p>
        </li>
        <li className="body2">
        <Link to="/que_somos">  <img  className="img2" src={props.imagen2} alt="" /></Link>
          <p className="titu2">{props.titu2}</p>
        </li>
      </ul>
    
    </div>
)

export default Body_ini