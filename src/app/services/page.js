'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Navbar = dynamic(()=>import('../components/navbar'), { ssr: false });
const Switcher = dynamic(()=>import('../components/Switcher'), { ssr: false });
const Footer = dynamic(()=>import('../components/footer'));
const ClientReview2 = dynamic (()=>import('../components/clientReview2'));
const OurServices = dynamic(()=>import('../components/our-services'));
import * as Unicons from '@iconscout/react-unicons';

export default function Services() {
    return (
        <>
            <Navbar />
            <section className="py-16 md:py-24 lg:py-28 w-full table relative bg-[url('/images/bg/bg-5.jpg')] bg-center bg-cover bg-no-repeat" id="home">
                <div className="absolute inset-0 bg-slate-950/80"></div>

                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center mt-4 md:mt-10">
                        <h3 className="font-medium leading-normal text-2xl md:text-3xl mt-4 md:mt-10 text-white font-lexend">Our Services</h3>
                    </div>
                </div>
            </section>
            <section >
                <OurServices />
            </section>

            <section className="relative  bg-gray-50 dark:bg-slate-800">
                <ClientReview2/>
                <div className="container lg:py-24 py-16">
                    <div className="grid grid-cols-1 text-center">
                        <Image 
                            src="/1_Böğürtlen.jpg" 
                            alt="Böğürtlen" 
                            width={500} 
                            height={300}
                            style={{ margin: 'auto' }}
                        />
                    </div>
                </div>
            </section>
            <Footer />
            <Switcher/>
        </>
    )
}
