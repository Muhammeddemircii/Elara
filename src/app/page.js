'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const NavbarSmallLight = dynamic(() => import('./components/navbar-small-light'));
/*const Switcher = dynamic(()=>import('./components/Switcher'));*/
const Footer = dynamic(() => import('./components/footer'));
const About = dynamic(() => import('./components/about'));
const OurServices = dynamic(() => import('./components/our-services'));
/*const ComfortablePricing = dynamic(()=>import('./components/comfortable-pricing'));*/
/*const ClientSreview = dynamic (()=>import('./components/clientsreview'));*/
const BlogsNews = dynamic(()=>import('./components/blogs-news'));
/*const GetInTouch = dynamic(()=>import('./components/get-in-touch'));*/
import * as Unicons from '@iconscout/react-unicons';

export default function Index() {


    return (
        <>
            <NavbarSmallLight />

            <section id="home" className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <div className="block lg:hidden w-full h-full">
                        <Image 
                            src="/images/bg/1.jpg" 
                            alt="Background" 
                            fill
                            priority
                            sizes="100vw"
                            style={{ 
                                objectFit: 'contain',
                                objectPosition: 'center center',
                            }}
                            className="w-full h-full"
                        />
                    </div>
                    
                    <div className="hidden lg:block w-full h-full">
                        <Image 
                            src="/images/bg/bg-6.jpg" 
                            alt="Background" 
                            fill
                            priority
                            sizes="100vw"
                            style={{ 
                                objectFit: 'cover',
                                objectPosition: 'center center',
                            }}
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </section>

            <About />
            {/*<ComfortablePricing  title="Our Comfortable Pricing" desc="Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page."/>*/}
            {/*<ClientSreview  className="lg:py-24 py-16"/>*/}
            <BlogsNews title="Blogs or News" desc="Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page."/>
            {/*<GetInTouch />*/}
    
            <Footer />
            {/*<Switcher/>*/}
        </>
    )
}
