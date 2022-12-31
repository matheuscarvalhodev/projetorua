import Menu from './componentes/menu';
import Adocao from './paginas/adocao';
import PaginaInicial from './paginas/paginaInicial';

function App() {
  return (
    <div>
      <Menu/>
      <PaginaInicial id="inicial"/>
      <Adocao id="adocao"/>
    </div>
  );
}

export default App;
