import React from 'react';
import Botao from '../src/componentes/botao/index';
import Header from '../src/componentes/header/header';
import Notificacao from '../src/componentes/notificacao/index';
import '../src/global.css';

function App() {
  return (
      <React.Fragment>
        <Header />
        <Botao />
      </React.Fragment>
  );
}

export default App;
