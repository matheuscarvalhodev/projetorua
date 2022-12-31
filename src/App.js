import Menu from './componentes/menu';
import Adocao from './paginas/adocao';
import PaginaInicial from './paginas/paginaInicial';
import Contato from "./paginas/contato";
import Sobre from './paginas/FotoCarrosel';
import Rodape from './componentes/rodape';


function App() {
  return (
    <div>
      <Menu/>
      <PaginaInicial id="inicial"/>
      <Sobre id="sobre"/>
      <Adocao id="adocao"/>
      <Contato id="contato"/>
      <Rodape/>
    </div>
  );
}

export default App;
