'use client'

import Image from "next/image";
import headerImage from "../../../../public/home/headerImage.png";

import { motion, Variants } from 'framer-motion';

export default function Header () {
    return (
        <div id='header' className="header-container mt-20 w-screen flex flex-row justify-center items-center">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 100, y: 0 }}
            transition={{
                bounce: 0,
                duration: 1
              }}>
                <div className="h-full flex flex-col justify-center items-center h-1/4">
                    <h1 className="text-4xl md:text-8xl font-semibold p-2"><span className="primary">Thomas</span> Ravetto</h1>
                    <p className="text-xl md:text-4xl font-extralight p-2">I am a <span className="primary">Software Developer</span> based in Turin</p>
                </div>
            </motion.div>
            <Image
                src={headerImage}
                alt="Half face close-up image"
                className="header-image w-full h-full object-contain object-left absolute left-0 -z-10"
                height={1000}
                width={500}
            />
        </div>
    );
}