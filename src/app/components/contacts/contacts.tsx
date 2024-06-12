'use client'

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
    name: string;
    email: string;
    message: string;
  };

export default function Contacts () {

    const { register, handleSubmit } = useForm<FormData>();

    function onSubmit(data: FormData) {
        sendEmail(data);
    }

    return (
        <div className="h-fit p-5 md:p-12 flex flex-col items-center" id="contacts">
            <h1 className="text-5xl font-semibold p-6">Contact <span className="primary">Me</span></h1>
            <form className="w-1/2" id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                        <div className="mx-0 mb-1 sm:mb-4">
                            <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="text-black mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" {...register('name', { required: true })}/>
                        </div>
                        <div className="mx-0 mb-1 sm:mb-4">
                            <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autoComplete="email" placeholder="Your email address" className="text-black mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" {...register('email', { required: true })}/>
                        </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                        <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" cols={30} rows={5} placeholder="Write your message..." className="text-black mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" {...register('message', { required: true })}></textarea>
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="w-full bg-primary text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                </div>
            </form>
            <p className=" text-2xl p-6 font-medium">or</p>
            <div className="flex justify-between w-20">
                <Link href={'https://github.com/thomasravetto'}>
                    <FaGithub className="contact-icon" size={28}/>
                </Link>
                <Link href={'https://www.linkedin.com/in/thomasravetto1/'}>
                    <FaLinkedin className="contact-icon" size={28}/>
                </Link>
            </div>
        </div>
    );
}