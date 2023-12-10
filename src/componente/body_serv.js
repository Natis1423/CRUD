import React from "react";
import "./estilos/body.css"
import "./estilos/body_serv.css"
import { Link } from "react-router-dom";
const Body_serv = (props) => {
  return(
    
  
        <div className="kjdsa">
      
      <ul className="body">
      <li className="body1">
        <Link to="/inicio"> <img className="img1" src={props.ima1} alt="" /></Link>
           <p className="titu">{props.titu}</p>
        </li>
        <li className="body2">
        <Link to="/que_somos">  <img  className="img2" src={props.ima2} alt="" /></Link>
          <p className="titu2">{props.titu2}</p>
        </li>
      </ul>
    
      <div className="body_serv">
    
      <h1 className="ti1">{props.titulo}</h1>
  <h2 className="ti">{props.servicio}</h2>
  
 <div className="servi">
 <img  className="imagen" src={props.imagen} alt="" />
 <h3 className="descrip_serv">{props.descrip}</h3>
 </div>
 <div className="servi">
 <img  className="imagen" src={props.imagen1} alt="" />
 <h3 className="descrip_serv">{props.descrip1}</h3>
 </div>
 <div className="servi">
 <img  className="imagen" src={props.imagen2} alt="" />
 <h3 className="descrip_serv">{props.descrip2}</h3>
 </div>
 <div className="servi">
 <img  className="imagen" src={props.imagen3} alt="" />
 <h3 className="descrip_serv">{props.descrip3}</h3>
 </div>
 <div className="servi">
 <img  className="imagen" src={props.imagen4} alt="" />
 <h3 className="descrip_serv">{props.descrip4}</h3>
 </div>
 <div className="servi">
 <img  className="imagen" src={props.imagen5} alt="" />
 <h3 className="descrip_serv">{props.descrip5}</h3>
 </div>
 <div className="servi">
 <img  className="imagen" src={props.imagen6} alt="" />
 <h3 className="descrip_serv">{props.descrip6}</h3>
 </div>
 <div className="servi">
 <img  className="imagen" src={props.imagen7} alt="" />
 <h3 className="descrip_serv">{props.descrip7}</h3>
 </div>
 <div className="servi">
 <img  className="imagen" src={props.imagen8} alt="" />
 <h3 className="descrip_serv">{props.descrip8}</h3>
 </div>
 </div>
 </div>
 

 );
};

export default Body_serv