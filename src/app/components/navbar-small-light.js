'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Link as Link1 } from 'react-scroll';
import * as Unicons from '@iconscout/react-unicons';
import { useTranslation } from 'react-i18next';

export default function NavbarSmallLight() {
   const { t, i18n } = useTranslation();
   const [isOpen, setMenu] = useState(true);
   const [navbarTop, setNavbarTop] = useState(false);
   const [isMounted, setIsMounted] = useState(false);
   const [langDropdown, setLangDropdown] = useState(false);

   useEffect(() => {
    setIsMounted(true);
    
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", windowScroll);
    }
    window.scrollTo(0, 0)

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", windowScroll);
      }
    };
   }, []);

    function windowScroll() {
        setNavbarTop(document.body.scrollTop >= -30 || document.documentElement.scrollTop >= -30)
    }

    const toggleMenu = () => {
        setMenu(!isOpen)
    }


    const getLanguageUrl = (lng) => {
   
        const currentUrl = new URL(window.location.href);
      
        currentUrl.searchParams.set('lng', lng);
        return currentUrl.toString();
    }

    return (
        <>
            <nav className={`${navbarTop === true ? 'is-sticky' : ''} navbar font-montserrat `} id="navbar">
                <div className="container flex flex-wrap items-center justify-end">
                    <a className="navbar-brand md:me-8 overflow-visible px-4" href="/">
                        <span className="inline-block dark:hidden">
                            <Image 
                                src="/images/logo.png" 
                                className="l-dark scale-75 sm:scale-90 md:scale-95 lg:scale-150" 
                                alt="" 
                                width={64} 
                                height={64}
                                style={{ objectFit: 'contain' }}
                            />
                            <Image 
                                src="/images/logo.png" 
                                className="l-light scale-75 sm:scale-90 md:scale-95 lg:scale-150" 
                                alt="" 
                                width={64} 
                                height={64}
                                style={{ objectFit: 'contain' }}
                            />
                        </span>
                        <Image 
                            src="/images/logo-light.png" 
                            className="hidden dark:inline-block scale-75 sm:scale-90 md:scale-95 lg:scale-150" 
                            alt="" 
                            width={113} 
                            height={113}
                            style={{ objectFit: 'contain' }}
                        />
                    </a>

                    <div className="nav-icons flex items-center lg_992:order-2 ms-auto lg:ms-4">
                      
                        {isMounted && (
                          <div className="relative mr-2">
                              <button 
                                  onClick={() => setLangDropdown(!langDropdown)}
                                  className="flex items-center gap-1 px-3 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition duration-200"
                              >
                                  {i18n.language === 'tr' ? 'TR' : 'EN'}
                                  <Unicons.UilAngleDown width={12}/>
                              </button>
                              {langDropdown && (
                                  <div className="absolute top-full right-0 mt-1 bg-white shadow-lg rounded-md overflow-hidden z-10">
                                      <a 
                                          href="?lng=en"
                                          onClick={() => setLangDropdown(false)}
                                          className="block px-4 py-2 text-xs text-left hover:bg-blue-100 transition duration-200"
                                      >
                                          EN
                                      </a>
                                      <a 
                                          href="?lng=tr"
                                          onClick={() => setLangDropdown(false)} 
                                          className="block px-4 py-2 text-xs text-left hover:bg-red-100 transition duration-200"
                                      >
                                          TR
                                      </a>
                                  </div>
                              )}
                          </div>
                        )}

                        <button data-collapse="menu-collapse" type="button" onClick={toggleMenu}
                            className="collapse-btn inline-flex items-center ms-3 text-slate-950 dark:text-white lg_992:hidden"
                            aria-controls="menu-collapse" aria-expanded="false">
                            <span className="sr-only">Navigation Menu</span>
                            <i className="mdi mdi-menu text-[24px]"></i>
                        </button>
                    </div>

                    <div className={`${isOpen === true ? 'navigation lg_992:order-1 lg_992:flex hidden ms-auto' : 'navigation lg_992:order-1 lg_992:flex ms-auto block'}`} id="menu-collapse">
                        <ul className="navbar-nav nav-light font-montserrat font-medium" id="navbar-navlist">
                            <li className={`nav-item`}>
                                <Link1 to="home" activeClass="active" spy={true} smooth={true} duration={500} offset={-200} className="nav-link cursor-pointer">
                                  {isMounted ? t('welcome') : 'Ana Sayfa'}
                                </Link1>
                            </li>
                            <li className={`nav-item`}>
                                <Link1 to="about" activeClass="active" spy={true} smooth={true} duration={500} offset={-200} className="nav-link cursor-pointer">
                                  {isMounted ? t('about') : 'Hakkımızda'}
                                </Link1>
                            </li>
                            <li className={`nav-item`}>
                                <Link1 to="blogs-news" activeClass="active" spy={true} smooth={true} duration={500} offset={-200} className="nav-link cursor-pointer">
                                  {isMounted ? t('blog') : 'Blog'}
                                </Link1>
                            </li>
                            <li className={`nav-item`}>
                                <Link1 to="footer" activeClass="active" spy={true} smooth={true} duration={500} offset={-200} className="nav-link cursor-pointer">
                                  {isMounted ? t('contact') : 'İletişim'}
                                </Link1>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
