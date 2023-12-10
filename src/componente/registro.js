import React from 'react';
import './estilos/registro.css';

function Registro() {
  return (
    <div className='registro'>
      <h1 className='titulo'>REGISTRARME</h1>
    <form className="formulario-registro">
      <input type="text" placeholder="Cédula" />
      <input type="text" placeholder="Dirección" />
      <input type="text" placeholder="Nombre Completo" />
      <input type="email" placeholder="Correo Electrónico" />
      <input type="text" placeholder="Teléfono" />
      <input type="password" placeholder="Contraseña" />
      <button type="submit">Registrar</button>
    </form>
    </div>
  );
}


export default Registro;