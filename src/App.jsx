import './App.css';
import logo from "./img/logo.png"
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0)

  const manejarClick = () => {
    setNumClicks(numClicks + 1)
    console.log('Click');
  }

  const reiniciarContador = () => {
    setNumClicks(0)
    console.log("Reiniciar");
  }

  return (
    <div className="App">
      <div className='logo_contenedor'>
        <img src={logo} alt="logo" className='logo' />
      </div>
      <div className='contenedor_principal'>
        <Contador
          contador={numClicks}
        ></Contador>
        <Boton
          texto="Click"
          botonDeClick={true}
          manejarClick={manejarClick}
        ></Boton>
        <Boton
          texto='Reiniciar'
          botonDeClick={false}
          manejarClick={reiniciarContador}
        ></Boton>
      </div>
    </div>
  );
}


export default App;
