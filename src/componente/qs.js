import React from 'react';
import { Link } from 'react-router-dom';
import "../componente/estilos/qs.css"


const Qs =  (props) => {
  return (
    <div className="qs">
    <div className="texto">
    <div className="kjdsa">
      
      <ul className="body">
      <li className="body1">
        <Link to="/inicio"> <img className="img1" src={props.ima1} alt="" /></Link>
           <p className="titu">{props.titu}</p>
        </li>
        <li className="body2">
        <Link to="/servicios">  <img  className="img2" src={props.ima2} alt="" /></Link>
          <p className="titu2">{props.titu2}</p>
        </li>
      </ul>
    
    </div>
    <div className='que_somos'>
      <h1>{props.titulo}</h1>
      <p>
        {props.descripcion}
      </p>
    
    <div className="imagenes">
    <img  className="imagen" src={props.imagen1} alt="" />
      <div className="fila">
      <img  className="imagen" src={props.imagen2} alt="" />
      <img  className="imagen" src={props.imagen3} alt="" />
      </div>
      <div className="fila">
      <img  className="imagen" src={props.imagen} alt="" />
      </div>
      </div>
    </div>
  </div>
  </div>
);
};

export default Qs;

