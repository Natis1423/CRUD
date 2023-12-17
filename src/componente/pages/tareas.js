import React, { useEffect, useState } from "react";
import { getTareas } from "../api/rutas.js";
import "../estilos/tare.css"
import { Link } from "react-router-dom";
import admin from "../images/admin.png";
import { delemanza, getBorrar, deleteestablecimiento, deleteMujeresYManzanas } from "../api/rutas.js";

function Tarea() {
  const [tasks, setTasks] = useState([]);

  const Delete = async (Cod_Manzana) => {
    try {
      const respuesta = await delemanza(Cod_Manzana);
      console.log(respuesta);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (Cod_Serv) => {
    try {
      const respuesta = await getBorrar(Cod_Serv);
      console.log(respuesta);
    } catch (error) {
      console.error(error);
    }
  };

  const Deletees = async (EstablecimientoCod_Establ) => {
    try {
      const respuesta = await deleteestablecimiento(EstablecimientoCod_Establ);
      console.log(respuesta);
    } catch (error) {
      console.error(error);
    }
  };

  const Deletemymanzana = async (Id_Mujer) => {
    try {
      const respuesta = await deleteMujeresYManzanas(Id_Mujer);
      console.log(respuesta);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    async function Load() {
      const respuesta = await getTareas();
      setTasks(respuesta.data);
    }

    Load();
  }, []);

  return (
    <div className="admin-header">
      <img className="admin" src={admin} alt="" />
      <h1 className="admin-text">Administrador</h1>
      <Link to="/inicio">
        <button className="button">CERRAR SESIÓN</button>
      </Link>
      <div className="icono">🔍</div>

      <div className="section">
        <h2>MANZANAS</h2>
        {tasks.length === 0 ? (
          <h1>No hay registros</h1>
        ) : (
          <table>
            <thead>
              <tr>
                <th>NOMBRE</th>
                <th>LOCALIDAD</th>
                <th>DIRECCIÓN</th>
                <th>MUNICIPIO</th>
                <th>CODIGO MUJER</th>
                <th>ACCION</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((t1) => (
                <tr key={t1.Cod_Establ}>
                  <td>{t1.Nombre_Manzana}</td>
                  <td>{t1.Localidad}</td>
                  <td>{t1.Direccion2}</td>
                  <td>{t1.Municipio}</td>
                  <td>{t1.MujeresId_Mujer}</td>
                  <td>
                    <button className="AM" onClick={() => Delete(t1.Cod_Manzana)}>
                      Borrar
                    </button>
                    <button className="AM">Editar</button>
                    <Link to="/manzanas">
                      <button className="AM">Agregar Manzana</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="section">
        <h2 className="title">ESTABLECIMIENTOS</h2>
        <table className="table">
          <thead>
            <tr>
              <th>NOMBRE</th>
              <th>RESPONSABLE</th>
              <th>DIRECCIÓN</th>
              <th>ACCIÓN</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((t1) => (
              <tr key={t1.Cod_Establ}>
                <td>{t1.Nom_Establ}</td>
                <td>{t1.Responsable_Establ}</td>
                <td>{t1.Direccion1}</td>
                <td>
                  <button className="AS" onClick={() => Deletees(t1.Cod_Establ)}>
                    Borrar
                  </button>
                  <button className="AS">Editar</button>
                  <Link to="/estable">
                    <button className="AE">Agregar Establecimiento</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="section">
        <h2 className="title">SERVICIOS</h2>
        <table className="table">
          <thead>
            <tr>
              <th>NOMBRE</th>
              <th>CATEGORIA</th>
              <th>TIPO</th>
              <th>DESCRIPCIÓN</th>
              <th>CODIGO ESTABLECIMIENTO</th>
              <th>ACCIÓN</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((t1) => (
              <tr key={t1.Cod_Establ}>
                <td>{t1.Nom_Serv}</td>
                <td>{t1.Categ_Serv}</td>
                <td>{t1.Tipo_Serv}</td>
                <td>{t1.Descrip}</td>
                <td>{t1.EstablecimientoCod_Establ}</td>
                <td>
                  <button className="AM" onClick={() => handleDelete(t1.Cod_Serv)}>
                    Borrar
                  </button>
                  <button className="AM">Editar</button>
                  <Link to="/servi">
                    <button className="AS">Agregar Servicios</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2 className="title">MUJERES</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Tipo documento</th>
              <th>Documento</th>
              <th>Primer nombre</th>
              <th>Segundo nombre</th>
              <th>Primer apellido</th>
              <th>Segundo apellido</th>
              <th>Telefono</th>
              <th>Correo</th>
              <th>Ciudad</th>
              <th>Direccion</th>
              <th>Ocupacion</th>
              <th>Servicio que participa</th>
              <th>ACCIÓN</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((t1) => (
              <tr key={t1.Id_Mujer}>
                <td>{t1.Tipo_Documen}</td>
                <td>{t1.Documento}</td>
                <td>{t1.Primer_Nom}</td>
                <td>{t1.Segundo_Nom}</td>
                <td>{t1.Primer_Ape}</td>
                <td>{t1.Segundo_Ape}</td>
                <td>{t1.Tel}</td>
                <td>{t1.Correo_Elec}</td>
                <td>{t1.Ciudad}</td>
                <td>{t1.Direccion}</td>
                <td>{t1.Ocupacion}</td>
                <td>{t1.Serv_Participa}</td>
                <td>
                  <button className="AE" onClick={() => Deletemymanzana(t1.Id_Mujer)}>Borrar</button>
                  <button className="AE">Editar</button>
                <Link to="/formu"><button className="AE">Agregar mujer</button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tarea;

