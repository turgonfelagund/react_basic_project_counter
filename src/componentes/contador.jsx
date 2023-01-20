import React from "react";
import "../hojas_de_estilo/contador.css"

function Contador({ contador }) {
    return(
        <div className="contador">
            {contador}
        </div>
    )
}

export default Contador