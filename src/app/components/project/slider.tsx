import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface IImage {
    src: string,
    label: string
}

export default function Slider ({ images }: { images: IImage[] }) {
    return (
        <div className="carousel_container">
            <Carousel showArrows={true} autoPlay interval={5000} infiniteLoop showThumbs={false}>
                {images.map((image, index) => {
                return image.src.includes('.mp4') ?
                    ( <div  key={index}>
                        <video className="slider_video" width="800" height="800" controls>
                            <source src={image.src} type="video/mp4" />
                                <track
                                    srcLang="en"
                                    label="English"
                                />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                     ) :
                    ( <div  key={index}>
                        <Image src={image.src} alt={`Project ${index}`} width="800" height="800" />
                        <p className="legend">{image.label}</p>
                    </div> )
                })}
            </Carousel>
        </div>
    )
}