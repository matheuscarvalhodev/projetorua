import Menu from './componentes/menu';
import Adocao from './paginas/adocao';
import PaginaInicial from './paginas/paginaInicial';
import Contato from "./paginas/contato";
import Sobre from './paginas/sobre';
import Rodape from './componentes/rodape';
import Doacao from './paginas/doacao';


function App() {
  return (
    <div>
      <Menu/>
      <PaginaInicial id="inicial"/>
      <Sobre id="sobre"/>
      <Adocao id="adocao"/>
      <Doacao id="doacao"/>
      <Contato id="contato"/>
      <Rodape/>
    </div>
  );
}

export default App;
