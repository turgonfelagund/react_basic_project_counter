import React from "react";
import "../hojas_de_estilo/boton.css"


function Boton({texto, botonDeClick, manejarClick}) {
    return(
        <button className={botonDeClick ? "boton_click" : "boton_reiniciar"} onClick={manejarClick}>
            {texto}
        </button>
    )
}

export default Boton;