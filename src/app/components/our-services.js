'use client'
import React from 'react';
import Link from 'next/link';
import { useServices, services } from '../Data/data';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function OurServices({ title, desc }) {
    const { t } = useTranslation();
    const localizedServices = useServices();

    return (
        <section className="relative md:py-24 py-8 bg-white dark:bg-slate-800 " id="features">
            <div className="container lg mx-auto">
                {title || desc ?
                    <div className="grid grid-cols-1 pb-4 md:pb-8 text-center">
                        <h3 className="mb-2 md:mb-4 md:text-3xl text-2xl font-bold font-montserrat text-[#339933]">{title}</h3>
                        <p className="text-[#969696] text-lg max-w-screen font-montserrat-md mx-auto">{desc}</p>
                    </div>
                    : ''}


                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    {localizedServices.map((item, index) => {
                        const Icon = item.Icon;
                        return (
                            <div key={index} className="group relative lg:px-6 mt-4 rounded-xl overflow-hidden text-center">
                                <div className="relative overflow-hidden text-transparent -m-3">
                                    <div className="mx-auto flex align- justify-center items-center h-[100px] w-[150px] clip-path-hexagon mt-16">
                                        <div className="relative z-10 w-[100px] h-[100px]">
                                            <Image 
                                                src={Icon} 
                                                alt={item.title}

                                                style={{
                                                    objectFit: 'contain'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <Link href="/services" className="font-montserrat text-lg h5 hover:text-[#7f206D] " >
                                        {item.title}
                                    </Link>
                                    <p className="text-slate-400 mt-3 font-montserrat">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
};