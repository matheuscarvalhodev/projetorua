import './contato.scss'
import {GoLocation} from"react-icons/go"
import{BiWorld} from"react-icons/bi"
import {BsFillTelephoneFill,BsFillClockFill,BsCalendarWeek} from"react-icons/bs";
import { FaPaw } from 'react-icons/fa';
export default function Contato ({id}) {

    return(
        <section className='principalContato' id={id}>
            <div className='pata'>
                <FaPaw size={36}/>
                <h1>Contate-nos</h1>
            </div>
            <div className='infor'>
                <div className='fotoGato'>
                    <img src="../imagens/contato.png" alt="Contato"/>
                </div>
                <div className='Contato'>
                        <GoLocation/><p> Avenida Vinte e Quatro de Dezembro, 2892</p>
                        <p>Santa Terezinha, Oriximiná-PA.</p>
                        <BiWorld/><p>CEP: 68270-000</p>
                        <BsCalendarWeek/><p>Segunda a Sabado</p>
                        <BsFillClockFill/><p>Horário de Funcionamento: 08:00 - 18:00</p>
                        <BsFillTelephoneFill/><p>Contato: 93 9 99145-0833</p>
                </div>
            </div>
        </section>
    )
}