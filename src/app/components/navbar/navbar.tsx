'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoImage from '../../../../public/firma_thomas_bianco.png'

interface NavBarLink {
    id: number,
    name: string
    href: string
}

const links: NavBarLink[] = [
    {
        id: 1,
        name: 'home',
        href: '/#homepage'
    },
    {
        id: 2,
        name: 'portfolio',
        href: '/#portfolio'
    },
    // {
    //     id: 3,
    //     name: 'blog',
    //     href: '/blog'
    // },
    {
        id: 4,
        name: 'about',
        href: '/#about_me'
    },
    {
        id: 5,
        name: 'contact',
        href: '/#contacts'
    },
]

export default function NavBar () {

    const [nav, setNav] = useState(false);

    // Function to hide nav on resize
    const handleResize = () => {
        if (window.innerWidth >= 768) {
            setNav(false);
        }
    };

    // Set up event listener for window resize
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        // Clean up the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="flex justify-between items-center w-screen h-20 z-10 px-4 text-white bg-black fixed top-0 nav">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-5xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href="/"
            rel="noreferrer"
          >
            <Image className="w-40" src={LogoImage} alt="Logo" width={100}/>
          </a>
        </h1>
      </div>

      <ul className="navbar hidden md:flex">
        {links.map(({ id, name, href }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-300 duration-200 link-underline"
          >
            <Link className="navbar-link" href={href}>{name}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="navbar flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black text-gray-300">
          {links.map(({ id, name, href }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link className="navbar-link" onClick={() => setNav(!nav)} href={href}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
    );
}