import Image from "next/image";
import headerImage from "../../../../public/home/headerImage - dimensioni medie.png";

export default function Header () {
    return (
        <div id='header' className="header-container mt-20 flex flex-row justify-center items-center">
            <div className="h-full flex flex-col justify-center items-center h-1/4">
                <h1 className="text-8xl font-semibold p-2"><span className="primary">Thomas</span> Ravetto</h1>
                <p className="text-4xl font-extralight p-2">I am a <span className="primary">Software Developer</span> based in Turin</p>
            </div>
            <Image
                src={headerImage}
                alt="Half face close-up image"
                className="header-image w-full h-full object-contain object-left absolute left-0 -z-10"
            />
        </div>
    );
}