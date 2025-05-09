'use client'
import React from 'react'
import Link from 'next/link';
import dynamic from 'next/dynamic';
import ComfortablePricing from '../components/comfortable-pricing';

const Navbar = dynamic(()=>import('../components/navbar'), { ssr: false });
const Switcher = dynamic(()=>import('../components/Switcher'), { ssr: false });
const Footer = dynamic(()=>import('../components/footer'));
import * as Unicons from '@iconscout/react-unicons';

export default function Pricing() {
    return (
        <>
            {/* <body className="font-inter text-base text-slate-950 dark:text-white dark:bg-slate-900"> */}

                <Navbar />
                <section className="py-28 w-full table relative bg-[url('/images/bg/bg-5.jpg')] bg-bottom bg-no-repeat" id="home">
                    <div className="absolute inset-0 bg-slate-950/80"></div>

                    <div className="container">
                        <div className="grid grid-cols-1 pb-8 text-center mt-10">
                            <h3 className="font-medium leading-normal text-3xl mt-10 text-white font-lexend">Comfortable Pricing</h3>
                        </div>
                    </div>
                </section>

                <ComfortablePricing/>
                <div className="container lg:pb-24 pb-16">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-6 md:text-2xl text-xl font-medium">Have Question ? Get in touch!</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>

                        <div className="mt-6">
                             <Link href="/contactus" className="py-2 px-5 font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md items-center inline-flex gap-1"><Unicons.UilPhone width={16}/> Contact us</Link>
                        </div>
                    </div>
                </div>

                <Footer />
                <Switcher/>
            {/* </body> */}
        </>
    )
}
