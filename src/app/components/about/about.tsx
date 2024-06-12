import Image from "next/image";
import AboutMeImage from "../../../../public/home/aboutMeImage.png";

export default function About () {
    return (
        <div id="about_me" className="flex flex-col items-center">
            <h1 className="text-5xl font-semibold p-6">About <span className="primary">Me</span></h1>
            <div className="about_me_container w-full flex justify-center items-center">
                <Image className="about_me_image object-contain m-10 pb-12" src={AboutMeImage} height={800} width={350} alt="Thomas' image"/>
                <div className="about_me_content w-1/2">
                    <div className="about_me_text text-gray-500 text-lg">
                        <p>Hi! My name is Thomas, and I am a passionate Full-Stack Developer from Italy.</p>
                        <br></br>
                        <p>Since I was a child, I have had a love for technology that pushes me to explore and experiment. In the last few years,
                            I decided to deep-dive into the field of Web Development, particularly Back-End Development, where I am experimenting with new technologies
                            to better enhance my skills. As a self-taught Developer, I am currently working on various personal projects and seeking a role
                            where I can continue expanding my knowledge in this field.</p>
                        <br></br>
                        <p>If you scrolled this far, you hopefully already seen my portfolio. In case you didn&apos;t, <a href="#portfolio" className="primary underline">here it is.</a></p>
                    </div>
                    <br></br>
                    <a href="./files/FullStackDeveloper2024.pdf" target="_blank"><p className="bg-primary w-36 rounded-full p-2 font-semibold">DOWNLOAD CV</p></a>
                </div>
            </div>
        </div>
    );
}