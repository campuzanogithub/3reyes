import joker from './imagenes/joker.png';
import queen from './imagenes/queen.png';
import king from './imagenes/king.jpg';
import './miCss.css';

function App() {
  let nombres = ["joker","queen","king"];
  return (
    <div className = "contenedor">
        <div className="caja">
          <img src={joker}/>
          <div className="nombre">{nombres[0]}</div>
        </div>
        <div className="caja">
          <img src={queen}/>
          <div className="nombre">{nombres[1]}</div>
        </div>
        <div className="caja">
          <img src={king}/>
          <div className="nombre">{nombres[2]}</div>
        </div>
    </div>
  );
}

export default App;
