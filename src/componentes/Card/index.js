import { animais } from './adocao'
import './Card.scss'
export default function CardAdocao () {
    return(
        animais.map(
            (animal)=>( 
            <div key={animal.key} className='principalCard'>
                <div className='back'>
                    <img src={animal.image} alt="animal"/>
                </div>
                <div className='front'>
                <div className='textoAdocao'>
                    <p>Gênero: {animal.genero}</p>
                    <p>Vacinado? {animal.vacina}</p>
                    <p>Descrição: {animal.descricao}</p>
                    <div className='tipoAnimal'>
                        {animal.tipoAnimal}
                    </div>
                </div>
                </div>
            </div>
            )
        )
    )

}