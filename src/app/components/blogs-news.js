'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { BlogsNewsdata } from '../Data/data';
import * as Unicons from '@iconscout/react-unicons';

export default function BlogsNews({ title, desc }) {
    const { t } = useTranslation();
    const data = BlogsNewsdata.slice(0, 3)
    return (
        <>
            <div id="blogs-news" className="container lg:py-24 py-16 bg-white">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl text-2xl font-bold  font-montserrat text-[#339933]">{title}</h3>

                    <p className="text-[#969696] max-w-xl mx-auto  font-montserrat">{desc}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px] mt-8">
                    {data.map((item, index) => (
                        <div className="blog relative rounded-md shadow shadow-slate-200 dark:shadow-gray-800 overflow-hidden" key={index}>
                            <Image src={item.image} alt="" width={0} height={0} sizes='100vw' style={{ width: "100%", height: "auto" }} />

                            <div className="content p-6">
                                <Link href={`blog-detail/${item.id}`} className="text-lg hover:text-[#7F206D] dark:text-white dark:hover:text-[#7F206D] transition duration-500 ease-in-out font-medium h5 font-montserrat">{item.title}</Link>
                                <p className="text-[#969696] mt-3 font-montserrat">{item.detail}</p>

                                <div className="mt-5">
                                    <Link
                                        href={`https://wa.me/905497356406?text=${encodeURIComponent(`Merhaba, "${item.title}" adlı ürün hakkında bilgi almak istiyorum.`)}`}
                                        target="_blank"
                                        className="hover:text-[#7F206D] dark:hover:text-[#7F206D] dark:text-white transition duration-500 inline-flex items-center gap-1 font-montserrat"
                                    >
                                        {t('buyNow')}<Unicons.UilArrowRight width={16} />
                                    </Link>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}
