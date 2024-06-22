import React, {userEffet, useState} from 'react';

import Login from './componetes/Login';
import Menu from './componetes/Menu';

function App() {


  const [conectado, setConectado]= useState(false);
  
  const acceder =(estado)=>{
    setConectado(estado)
  }

  return (
    conectado ? <Menu/> : <Login acceder={acceder}/>

  );
}

export default App;
