import "./rodape.scss";
import {FaCopyright} from 'react-icons/fa'

export default function Rodape(){
    return(
        <div className="rodape">
            <FaCopyright size={14}/>
            <h2>Todos os direitos reservados</h2>
        </div>
    )
}