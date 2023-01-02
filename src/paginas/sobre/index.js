import './sobre.scss';
import { Carousel} from "react-responsive-carousel";
import { fotos } from './listaFoto';

export default function Sobre({id}){
    return(
        <section className='inicial-sectionSobre' id={id}>
            <div className='principalSobre'>
                <h1>Sobre o Projeto</h1>
                <div className='carouselTexto'>
                   <Carousel
                    infiniteLoop
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    showIndicators={false}
                    autoPlay={true}
                    interval={4000}
                    transitionTime={400}
                    autoFocus={false}
                    swipeable={true}
                    emulateTouch={true}
                    className="carouselSobre">
                        {
                         fotos.map(
                            (foto)=>(
                                <div  key={foto.key}>
                                    <div >
                                        <img src={foto.imagem} alt="Sobre"/>
                                    </div>
                                </div>
                            )
                         )   
                        }
                    </Carousel> 
                    <p>Ao analisar a quantidade de animais doméstico que estão precisando de um lar e de ajuda, surgiu a ideia de criar um projeto com o intuito de ajudar esses animais necessitados e conscientizar a sociedade sobre a questão da adoção e do abandono de animais, que é um problema recorrente na cidade. 
                    <br/><br/>O projeto R.U.A (Resgate um Amigo) propõe a construção de um site que auxilie e facilite o processo de adoção de animais abandonados, tornando assim um meio de comunicação efetivo e simples. O projeto está sendo desenvolvido com a parceria do CTA (Centro de Triagem Animal) e da SEMMA (Secretaria Municipal de Meio Ambiente) onde foram apresentados a proposta e a logo do projeto “Conforme o anexo - VI”. Através da criação do site, a contribuição para diminuição dos casos de abandono e maus tratos dos animais será de extrema importância.
                    </p>
                </div>
                
            </div>
        </section>
    )
}