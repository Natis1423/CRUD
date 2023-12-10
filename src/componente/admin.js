import React from "react";
import "../componente/estilos/admin.css"



const Admin = () => {
    return (
        <div className="admin-container">
          <header className="admin-header">
            <div className="admin-title">Administrador</div>
            <button className="logout-button">CERRAR SESIÓN</button>
          </header>
          <div className="section">
            <h2>Manzanas</h2>
            <input type="text" placeholder="Buscar..." className="search-input" />
            <table>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Nombre</th>
                  <th>Localidad</th>
                  <th>Dirección</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {/* Datos dinámicos de las manzanas */}
              </tbody>
            </table>
          </div>
          <div className="section">
            <h2>Cosecha</h2>
            <table>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {/* Datos dinámicos de la cosecha */}
              </tbody>
            </table>
          </div>
          <div className="section">
            <h2>Servicios</h2>
            <table>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Nombre</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {/* Datos dinámicos de los servicios */}
              </tbody>
            </table>
          </div>
        </div>
      );
    };
  
  export default Admin;