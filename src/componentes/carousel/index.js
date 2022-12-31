import "./Carousel.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import { animais } from "../Card/adocao";

export default function Carousel(){
    return(
        <div className="principal">
            <div className="cardCarousel">
                <ReactCarousel
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
                    className="carouselAdocao">
                        {
                            animais.map(
                                (animal)=>(
                                    <div className="slide" key={animal.key}>
                                        <div className="image-wrapper">
                                        <img src={animal.image} alt="Animais"/>
                                        </div>
                                    </div>
            
                                )
                            )
                        }
                </ReactCarousel>
            </div>
        </div>
    )
}

//for animal in animais: