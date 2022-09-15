import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [dado1, setDado1] = useState(0);
  const [dado2, setDado2] = useState(0);
  const [isBusy, setBusy] = useState(false);

  const dados = ['dado1.png', 'dado2.png', 'dado3.png', 'dado4.png', 'dado5.png', 'dado6.png']

  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const onClick = useCallback(() => {
    setBusy(true)
    setTimeout(() => {
      setDado1(random(0,5));
      setDado2(random(0,5));
      setBusy(false)
    }, 600);
  }, []);

  const busyClass = isBusy ? 'rotate': '';

  console.log("render..")

  return (
    <div className="container">
      
      <div className="lista-dados">
        <img src={dados[dado1]} className={ busyClass } />
        <img src={dados[dado2]} className={ busyClass } />
      </div>

      <div className="boton-girar">
        <button onClick={onClick}>Girar</button>
      </div>
    </div>
  )
}

export default App
