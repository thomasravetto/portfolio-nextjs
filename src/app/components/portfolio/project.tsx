'use client'

import { motion, Variants } from 'framer-motion';
import { TbSailboat2 } from "react-icons/tb";

import { IProject } from "@/data/projects";
import Image from "next/image";
import Link from 'next/link';

const projectVariantsRight: Variants = {
    offscreen: {
        x: 300,
        opacity: 0
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
    }
}

const projectVariantsLeft: Variants = {
    offscreen: {
        x: -300,
        opacity: 0
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
    }
}

export default function Project ({project, left}: {project: IProject; left: boolean}) {
    const { image_path, date, title, subtitle, slug } = project;

    const lines = subtitle.split('\n');

    return (
        <motion.div className={`project-container p-2 w-10/12 py-4 cursor-pointer`}
                    initial={'offscreen'}
                    whileInView={'onscreen'}
                    viewport={{ once: true, amount: 0.8 }}
                    variants={left ? projectVariantsLeft : projectVariantsRight}>
                <Link href={slug !== "#contacts" ? `/projects/${slug}` : `/${slug}`} className={`w-full flex flex-col items-center text-center mb-20 md:mb-0 md:text-left ${left ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="w-1/2">
                        <div className="w-full">
                            <p className="primary text-2xl font-medium py-2">{date}</p>
                            <h2 className="text-4xl tracking-tighter font-semibold py-4">{title}</h2>
                            {
                                lines.map((line, index) => (
                                    <div key={index} className="text-gray-400 text-md tracking-tighter">
                                        <p>{line}</p>
                                        <br></br>
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                    <div className="w-8"></div>
                    <div className={`w-1/2`}>
                        {
                            slug !== '#contacts' ?
                            <Image
                                src={image_path}
                                alt={`Image showing the ${title} project`}
                                height={200}
                                width={200}
                                className="project-image rounded-3xl object-container w-full"
                                /> :
                            <div className='w-full h-full flex justify-center items-center'>
                                <TbSailboat2 className='text-8xl primary project-journey'/>
                            </div>
                        }
                    </div>
                </Link>
        </motion.div>
    );
}