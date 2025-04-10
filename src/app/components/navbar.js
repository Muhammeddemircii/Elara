'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../components/LanguageSwitcher';

import * as Unicons from '@iconscout/react-unicons';


export default function Navbar(props) {
    const { t } = useTranslation();
    const [isOpen, setMenu] = useState(true);
    const[navbarTop, setNavbarTop] = useState(false); 
    const [langDropdown, setLangDropdown] = useState(false);

    const pathname = usePathname()

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

    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <>
            <nav className={`${navbarTop === true ? 'is-sticky' : ''} navbar font-lexend `} id="navbar">
                <div className="container flex flex-wrap items-center justify-end">
                <a className="navbar-brand md:me-8" href="/">
                        <span className="inline-block dark:hidden">
                            <Image 
                                src="/images/logo.png" 
                                className="l-dark" 
                                alt="" 
                                width={64} 
                                height={64}
                                style={{ objectFit: 'contain' }}
                            />
                            <Image 
                                src="/images/logo.png" 
                                className="l-light" 
                                alt="" 
                                width={64} 
                                height={64}
                                style={{ objectFit: 'contain' }}
                            />
                        </span>
                        <Image 
                            src="/images/logo.png" 
                            className="hidden dark:inline-block" 
                            alt="" 
                            width={55} 
                            height={55}
                            style={{ objectFit: 'contain' }}
                        />
                    </a>

                    <div className="nav-icons flex items-center lg_992:order-2 ms-auto lg:ms-4">
                        <ul className="list-none menu-social mb-0">
                            <li className="inline">
                                 <Link href="/login" onClick={toggleMenu}
                                    className="h-9 w-9 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><Unicons.UilUser width={16}/></Link>
                            </li>
                        </ul>

          
                        <div className="relative mx-3">
                            <button 
                                onClick={() => setLangDropdown(!langDropdown)}
                                className="flex items-center gap-1 px-3 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition duration-200"
                            >
                                {i18n.language === 'tr' ? 'TR' : 'EN'}
                                <Unicons.UilAngleDown width={16}/>
                            </button>
                            {langDropdown && (
                                <div className="absolute top-full right-0 mt-1 bg-white shadow-lg rounded-md overflow-hidden z-10">
                                    <button 
                                        onClick={() => {
                                            changeLanguage('en');
                                            setLangDropdown(false);
                                        }} 
                                        className="w-full px-4 py-2 text-left hover:bg-blue-100 transition duration-200"
                                    >
                                        EN
                                    </button>
                                    <button 
                                        onClick={() => {
                                            changeLanguage('tr');
                                            setLangDropdown(false);
                                        }} 
                                        className="w-full px-4 py-2 text-left hover:bg-red-100 transition duration-200"
                                    >
                                        TR
                                    </button>
                                </div>
                            )}
                        </div>

                        <button data-collapse="menu-collapse" type="button"
                            className="btn collapse-btn inline-flex items-center ms-3 text-slate-950 dark:text-white lg_992:hidden"
                            aria-controls="menu-collapse" aria-expanded="false">
                            <span className="sr-only">Navigation Menu</span>
                            <i className="mdi mdi-menu text-[24px]"></i>
                        </button>
                    </div>
                    <div className={`${isOpen === true ? 'navigation lg_992:order-1 lg_992:flex hidden ms-auto ' : 'navigation lg_992:order-1 lg_992:flex ms-auto block'}`} id="menu-collapse">

                        <ul className="navbar-nav nav-light sidebar-nav" id="navbar-navlist">
                            <li className={`nav-item navbar-item ${pathname === '/' ? 'active' : ''}`}>
                                 <Link href="/" className={`nav-link ${pathname === '/' ? 'text-[#339933] font-bold' : 'text-[#339933]'}`}>{t('welcome')}</Link>
                            </li>
                            <li className={`nav-item navbar-item ${pathname === '/aboutus' ? 'active' : ''}`}>
                                 <Link href="/aboutus" className={`nav-link ${pathname === '/aboutus' ? 'text-[#339933] font-bold' : 'text-violet-600'}`}>{t('about')}</Link>
                            </li>
                            <li className={`nav-item navbar-item ${pathname === '/contactus' ? 'active' : ''}`}>
                                 <Link href="/contactus" className={`nav-link ${pathname === '/contactus' ? 'text-[#339933] font-bold' : 'text-violet-600'}`}>{t('contact')}</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav >

        </>
    )
}


