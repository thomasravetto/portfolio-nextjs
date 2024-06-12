import Link from "next/link";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

export default function Footer () { 
    return (
        <footer className="flex justify-between items-center bg-black h-14">
            <div className="justify-self">
                <p className="pl-5">&copy; 2024 - Thomas Ravetto</p>
            </div>
            <div className="flex items-center">
                <Link className="px-10 py-5 medium" href={'https://medium.com/@thomasravetto'}>
                    <FaMedium/>
                </Link>
                <Link className="px-10 py-5 github" href={'https://github.com/thomasravetto'}>
                    <FaGithub/>
                </Link>
                <Link className="px-10 py-5 linkedin" href={'https://www.linkedin.com/in/thomasravetto1/'}>
                    <FaLinkedin/>
                </Link>
            </div>
        </footer>
    );
}