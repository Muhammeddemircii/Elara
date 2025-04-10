'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import OurServices from './our-services';
import HowStudy from './howStudy';

import * as Unicons from '@iconscout/react-unicons';

export default function About() {
    const [mounted, setMounted] = useState(false);

    const { t } = useTranslation();

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <section className="relative bg-white lg:mt-0" id="about">
                <div className="container mx-auto ">
                    <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
                        <div className="lg:col-span-5">
                            <div className="relative h-52 lg:hidden w-full  overflow-hidden ">
                                <Image src="/images/blog/2.jpg" className="rounded-lg shadow-lg relative" alt="" width={0} height={0} sizes='100vw' style={{ height: "auto", width: "100%" }} />
                            </div>
                            <div className="hidden h-full lg:block w-full mb-4">
                                <Image src="/images/aile.jpg" className="rounded-lg shadow-lg relative" alt="" width={0} height={0} sizes='100vw' style={{ height: "auto", width: "100%" }} />
                            </div>
                        </div>
                        <div className="lg:col-span-7">
                            <div className="lg:ms-7 ">
                                <h3 className="mb-4 md:text-2xl text-xl font-medium  text-[#339933] font-montserrat">{t('about')}</h3>

                                <p className="text-[#969696] max-w-2xl mx-auto font-montserrat">
                                    {t('aboutContent')}
                                </p>

                                <div className="relative mt-8">
                                    <Link href="/aboutus"
                                        className="py-2 px-5  font-normal tracking-wide border align-middle transition
                                         duration-500 ease-in-out text-base text-center font-montserrat bg-[#7F206D]
                                          hover:bg-[#7F206D] border-[#7F206D] hover:border-[#7F206D] text-white rounded-md inline-flex items-center gap-1">{t('readMore')} <Unicons.UilArrowRight width={16} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <OurServices title={mounted ? t("ourServices") : "Doğaya saygı, Geleceğe miras"} desc={mounted ? t("ourServicesContent") : "Elara Tarım olarak, yarınlarımız için üretiyoruz. Gelecek nesillere temiz, bereketli ve verimli topraklar bırakmak için doğaya duyduğumuz saygıyı üretimimizin merkezine koyuyoruz."} />
                <section className="relative md:py-24 py-16 md:pt-0 pt-0 bg-white ">
                <div className="container">
                    <div className="grid grid-cols-1 justify-center">
                        <div className="relative z-1">
                            <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                                <div className="lg:col-start-2 lg:col-span-10">
                                    <div className="relative">
                                        <Image src="/images/bogurtlenler.png" className="rounded-md shadow-lg" alt="" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} />
                                    </div>
                                </div>
                            </div>
                            <div className="content md:mt-8 font-montserrat">
                                <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                                    <div className="lg:col-start-2 lg:col-span-10">
                                        <h6 className="text-white font-bold mt-6 md:text-3xl text-2xl mb-8">{t('whyElara')}</h6>
                                        <div className="hidden lg:block">
                                            <div className="flex flex-row gap-8">
                                                <div className="section-title">
                                                    <h3 className="text-white text-lg md:text-xl leading-relaxed">{t('whyElaraContent')}</h3>
                                                </div>
                                                <div className="section-title">
                                                    <p className="text-white text-lg md:text-xl leading-relaxed">{t('whyElaraContent2')}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lg:hidden">
                                            <div className="flex flex-col gap-8 text-start px-6">
                                                <div className="section-title">
                                                    <h3 className="text-white text-lg md:text-xl leading-relaxed">{t('whyElaraContent')}</h3>
                                                </div>
                                                <div className="section-title">
                                                    <p className="text-white text-lg md:text-xl leading-relaxed">{t('whyElaraContent2')}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 end-0 start-0 h-4/5 md:h-2/3 bg-[#7F206D] transition-colors duration-500"></div>
            </section>
            <HowStudy />

            </section>


        </>
    )
};