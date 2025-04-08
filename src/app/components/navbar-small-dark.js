'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Link as Link1 } from 'react-scroll';
import * as Unicons from '@iconscout/react-unicons';

export default function NavbarSmallLight() {
   const [isOpen, setMenu] = useState(true);
   const[navbarTop, setNavbarTop] = useState(false); 

   useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", windowScroll);
    }
    window.scrollTo(0, 0)
   }, []);

    function windowScroll() {
        setNavbarTop(document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50)
    }
    const toggleMenu = () => {
        setMenu(!isOpen)
    }
    return (
        <>
            <nav className={`${navbarTop === true ? 'is-sticky' : ''} navbar font-lexend `}id="navbar">
                <div className="container flex flex-wrap items-center justify-end">
                     <a className="navbar-brand md:me-8" href="/">
                        <Image 
                            src="/images/logo.png" 
                            className="inline-block dark:hidden" 
                            alt="" 
                            width={64} 
                            height={64}
                            style={{ objectFit: 'contain' }}
                        />
                        <Image 
                            src="/images/logo.png" 
                            className="hidden dark:inline-block" 
                            alt="" 
                            width={64} 
                            height={64}
                            style={{ objectFit: 'contain' }}
                        />
                    </a>

                    <div className="nav-icons flex items-center lg_992:order-2 ms-auto lg:ms-4">

                        <ul className="list-none menu-social mb-0">
                            <li className="inline">
                                <Link href="/login" 
                                    className="h-9 w-9 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><Unicons.UilUser width={16}/></Link>
                            </li>
                        </ul>

                        <button data-collapse="menu-collapse" type="button" onClick={toggleMenu}
                            className="collapse-btn inline-flex items-center ms-3 text-slate-950 dark:text-white lg_992:hidden"
                            aria-controls="menu-collapse" aria-expanded="false">
                            <span className="sr-only">Navigation Menu</span>
                            <i className="mdi mdi-menu text-[24px]"></i>
                        </button>
                    </div>
                    <div className={`${isOpen === true ? 'navigation lg_992:order-1 lg_992:flex hidden ms-auto' : 'navigation lg_992:order-1 lg_992:flex block ms-auto'}`} id="menu-collapse">
                        <ul className="navbar-nav" id="navbar-navlist">
                            <li className={`nav-item`}>
                                <Link1 to="home" activeClass="active" spy={true} smooth={true} duration={500} className="nav-link">Ana sayfa</Link1>
                            </li>
                            <li className={`nav-item`}>
                                <Link1 to="about" activeClass="active" spy={true} smooth={true} duration={500} className="nav-link">Hakkımızda</Link1>
                            </li>
                            <li className={`nav-item`}>
                                <Link1 to="contact" activeClass="active" spy={true} smooth={true} duration={500} className="nav-link">İletişim</Link1>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
