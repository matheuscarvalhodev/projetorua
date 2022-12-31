import { FaPaw } from "react-icons/fa"
import Carousel from "../../componentes/carousel"
import "./Inicial.scss"
export default function PaginaInicial({id}){
    return(
        <section className="inicio-content" id={id}>
            <div className="principalInicial">
                <div><Carousel/></div>
                <div className="textoInicial">
                    <div className="iconePaw1">
                        <FaPaw size={50}/>
                    </div>
                    <h1>Projeto RUA</h1>
                    <h2>Resgate um amigo!</h2>
                    <div className="iconePaw2">
                        <FaPaw size={70}/>
                    </div>
                </div>
            </div>
        </section>
    )
}