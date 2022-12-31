import Menu from './componentes/menu';
import Adocao from './paginas/adocao';
import PaginaInicial from './paginas/paginaInicial';
import Contato from "./paginas/contato";


function App() {
  return (
    <div>
      <Menu/>
      <PaginaInicial id="inicial"/>
      <Adocao id="adocao"/>
      <Contato/>
    </div>
  );
}

export default App;
