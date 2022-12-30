import CardAdocao from '../../componentes/Card'
import './Adocao.scss'
import { FaPaw } from 'react-icons/fa'
export default function Adocao (){
    return (
        <div className='principalAdocao'> 
            <div className='tituloAdocao'>
                <div className='pata'>
                    <h1>Adoções</h1>
                    <FaPaw size={36}/>
                </div>
            </div>
            <div className='card'>
                <CardAdocao/>
            </div>
        </div>
    )

}