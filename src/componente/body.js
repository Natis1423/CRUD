import React from "react";
import "./estilos/header.css"
import "./estilos/body.css"
const Body = (props) => (
    <div className="kjdsa">
      
      <ul className="body">
      <li className="body1">
          <img className="img1" src={props.imagen1} alt="" />
           <p className="titu">{props.titu}</p>
        </li>
        <li className="body2">
          <img  className="img2" src={props.imagen2} alt="" />
          <p className="titu2">{props.titu2}</p>
        </li>
      </ul>
    
    </div>
)

export default Body