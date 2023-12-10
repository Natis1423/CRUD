/* import './estilo/uno.css'
import React, { useState } from "react";

const Contar = function () {
    const [numero, setnumero] = useState(5);
    const aumentar = () => {
        setnumero(numero + 1)
    }
    return (
        <div>
            <h1> hola {numero}</h1>
            <button onClick={aumentar}>HOLITA</button>
            <form>
                <label >
                    Ingrese su correo
                    <input className='login'  type="email" name="password" required />
                </label>
                <label>
                    Ingrese su contraseña
                    <input type="password" name="password" required />
                </label>
                <button>Ingresar</button>
            </form>
        </div>
    )
}
export default Contar  */