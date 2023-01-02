import "./Doacao.scss";
import {MdOutlineQrCode2} from "react-icons/md";

export default function Doacao({id}){
    return(
        <section id={id} className="inicial-doacao">
            <h1>Faça uma doação</h1>
            <div className="container">
                <img className="gatoFortuna" src="../imagens/gatoFortuna.png" alt=""/>
                <div className="textoGato">
                    <p>Adotar é um gesto de amor e carinho. Mas se não puder adotar, você pode fazer doações para ajudar um animalzinho que precisa! Remédios, roupinhas, ração. Qualquer ajuda é bem vinda para deixar a vida desses bichinhos mais alegre!</p>
                    <div className='principalCardDoacao'>
                        <div className='frontDoacao'>
                            <div className='textoDoacao'>
                            <p>Pode doar qualquer valor para o pix abaixo, ou se preferir, use o Qr-Code para uma transferencia mais segura <br/><br/></p>
                            <p>Pix: (93) 9 9999-9999 <br/><br/></p>
                            <p>Banco: Banco <br/><br/></p>
                            </div>
                            <p className="textoMouse">Passe o mouse em cima desse card para visualizar o QR-Code</p>
                        </div>
                        <div className='backDoacao'>
                            <MdOutlineQrCode2 size={200}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}