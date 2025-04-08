'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import * as Unicons from '@iconscout/react-unicons';
import TelefonSvg from '/public/Telefon.svg';
import Mail from '/public/Mail.svg';
import Fax from '/public/Fax.svg';
import WP from '/public/WP.svg';
import Konum from '/public/Konum.svg';

export default function Footer() {
    const { t, i18n } = useTranslation();
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isLargeTablet, setIsLargeTablet] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
            setIsLargeTablet(window.innerWidth >= 1024 && window.innerWidth < 1280);
        };
        
        // Initial check
        checkScreenSize();
        
        // Add event listener for window resize
        window.addEventListener('resize', checkScreenSize);
        
        // Cleanup
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <>
            <footer className="footer bg-white relative pt-24 pb-24">
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="py-[60px] px-0">
                                <div className="grid grid-cols-1">
                                    {isMobile ? (
                                        <div className="text-center">
                                            <p className='font-montserrat text-xl text-[#339933] font-bold '>{t('contactUs')}</p>
                                            <p className="font-montserrat text-sm text-[#969696] mt-3">{t('footerText')}</p>
                                            <p className="font-montserrat text-sm text-[#969696] mt-0">{t('footerText2')}</p>
                                        </div>
                                    ) : isTablet ? (
                                        <div className="text-center">
                                            <p className='font-montserrat text-xl text-[#339933] font-bold '>{t('contactUs')}</p>
                                            <p className="font-montserrat text-base text-[#969696] mt-3">{t('footerText')}</p>
                                            <p className="font-montserrat text-base text-[#969696] mt-0">{t('footerText2')}</p>
                                        </div>
                                    ) : isLargeTablet ? (
                                        <div className="text-center">
                                            <p className='font-montserrat text-2xl text-[#339933] font-bold '>{t('contactUs')}</p>
                                            <p className="font-montserrat text-base text-[#969696] mt-4">{t('footerText')}</p>
                                            <p className="font-montserrat text-base text-[#969696] mt-0">{t('footerText2')}</p>
                                        </div>
                                    ) : (
                                        <div className="text-center">
                                            <p className='font-montserrat text-3xl text-[#339933] font-bold '>{t('contactUs')}</p>
                                            <p className="font-montserrat text-lg text-[#969696] mt-4">{t('footerText')}</p>
                                            <p className="font-montserrat text-lg text-[#969696] mt-0">{t('footerText2')}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isMobile ? (
                    <div className='grid grid-cols-2 gap-3 font-montserrat px-12'>
                        <div className="flex items-center space-x-3">
                            <Image src={TelefonSvg} alt="Phone" className="w-3 h-3 mb-4" />
                            <div className="flex flex-col">
                                <p className="text-xs font-bold text-[#7F206D]">{t('contactPhone')}</p>
                                <p className="text-[10px] text-[#969696] mt-0.5">+90 242 344 4545</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Image src={Fax} alt="Fax" className="w-3 h-3 mb-4" />
                            <div className="flex flex-col">
                                <p className="text-xs font-bold text-[#7F206D]">{t("contactFax")}</p>
                                <p className="text-[10px] text-[#969696] mt-0.5">+90 242 345 1989</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Image src={WP} alt="Whatsapp" className='w-3 h-3 mb-4' />
                            <div className="flex flex-col">
                                <p className="text-xs font-bold text-[#7F206D]">{t("contactWhatsapp")}</p>
                                <p className="text-[10px] text-[#969696] mt-0.5">+90 549 807 6707</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Image src={Mail} alt="Mail" className="w-3 h-3 mb-4" />
                            <div className="flex flex-col">
                                <p className="text-xs font-bold text-[#7F206D]">{t("contactEmail")}</p>
                                <p className="text-[10px] text-[#969696] mt-0.5">info@elaratarim.com</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 col-span-2">
                            <Image src={Konum} alt="Address" className="w-3 h-3" />
                            <div className="flex flex-col">
                                <p className="text-xs font-bold text-[#7F206D]">{t("contactAddress")}</p>
                                <p className="text-[10px] text-[#969696] mt-0.5">Yenigün Mah. Köroğlu Blv. Yeni Dünya 2 Sitesi A1 Blok No:46 A1/A Muratpaşa/ANTALYA</p>
                            </div>
                        </div>
                    </div>
                ) : isTablet ? (
                    <div className='flex items-center justify-center space-x-12  font-montserrat'>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="flex items-center space-x-4">
                                <Image src={TelefonSvg} alt="Phone" className="w-4 h-4 mb-6" />
                                <div className="flex flex-col">
                                    <p className="text-xs font-bold text-[#7F206D]">{t('contactPhone')}</p>
                                    <p className="text-xs text-[#969696] mt-1">+90 242 344 4545</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Image src={Fax} alt="Fax" className="w-4 h-4 mb-6" />
                                <div className="flex flex-col">
                                    <p className="text-xs font-bold text-[#7F206D]">{t("contactFax")}</p>
                                    <p className="text-xs text-[#969696] mt-1">+90 242 345 1989</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="flex items-center space-x-4">
                                <Image src={WP} alt="Whatsapp" className='w-4 h-4 mb-6' />
                                <div className="flex flex-col">
                                    <p className="text-xs font-bold text-[#7F206D]">{t("contactWhatsapp")}</p>
                                    <p className="text-xs text-[#969696] mt-1">+90 549 807 6707</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Image src={Mail} alt="Mail" className="w-4 h-4 mb-6 ml-4" />
                                <div className="flex flex-col">
                                    <p className="text-xs font-bold text-[#7F206D]">{t("contactEmail")}</p>
                                    <p className="text-xs text-[#969696] mt-1">info@elaratarim.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="flex items-center space-x-4">
                                <Image src={Konum} alt="Address" className="w-4 h-4 mb-16" />
                                <div className="flex flex-col mb-2">
                                    <p className="text-xs font-bold text-[#7F206D]">{t("contactAddress")}</p>
                                    <p className="text-xs text-[#969696] mt-1">Yenigün Mah. Köroğlu Blv. <br/>Yeni Dünya 2 Sitesi A1 Blok No:46 A1/A <br/>Muratpaşa/ANTALYA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : isLargeTablet ? (
                    <div className='flex items-center justify-center space-x-20  font-montserrat'>
                        <div className="flex flex-col items-center space-y-5">
                            <div className="flex items-center space-x-5">
                                <Image src={TelefonSvg} alt="Phone" className="w-4 h-4 mb-8" />
                                <div className="flex flex-col">
                                    <p className="text-sm font-bold text-[#7F206D]">{t('contactPhone')}</p>
                                    <p className="text-sm text-[#969696] mt-1.5">+90 242 344 4545</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-5">
                                <Image src={Fax} alt="Fax" className="w-4 h-4 mb-8" />
                                <div className="flex flex-col">
                                    <p className="text-sm font-bold text-[#7F206D]">{t("contactFax")}</p>
                                    <p className="text-sm text-[#969696] mt-1.5">+90 242 345 1989</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-5">
                            <div className="flex items-center space-x-5">
                                <Image src={WP} alt="Whatsapp" className='w-4 h-4 mb-8' />
                                <div className="flex flex-col">
                                    <p className="text-sm font-bold text-[#7F206D]">{t("contactWhatsapp")}</p>
                                    <p className="text-sm text-[#969696] mt-1.5">+90 549 807 6707</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-5">
                                <Image src={Mail} alt="Mail" className="w-4 h-4 mb-8 ml-4" />
                                <div className="flex flex-col">
                                    <p className="text-sm font-bold text-[#7F206D]">{t("contactEmail")}</p>
                                    <p className="text-sm text-[#969696] mt-1.5">info@elaratarim.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-5">
                            <div className="flex items-center space-x-5">
                                <Image src={Konum} alt="Address" className="w-4 h-4 mb-20" />
                                <div className="flex flex-col mb-3">
                                    <p className="text-sm font-bold text-[#7F206D]">{t("contactAddress")}</p>
                                    <p className="text-sm text-[#969696] mt-1.5">Yenigün Mah. Köroğlu Blv. <br/>Yeni Dünya 2 Sitesi A1 Blok No:46 A1/A <br/>Muratpaşa/ANTALYA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex items-center justify-center space-x-36 font-montserrat'>
                        <div className="flex flex-col items-center space-y-6 ">
                            <div className="flex items-center space-x-7">
                                <Image src={TelefonSvg} alt="Phone" className="w-4 h-4 mb-9" />
                                <div className="flex flex-col">
                                    <p className="text-base font-bold text-[#7F206D]">{t('contactPhone')}</p>
                                    <p className="text-base text-[#969696] mt-2">+90 242 344 4545</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-7">
                                <Image src={Fax} alt="Fax" className="w-4 h-4 mb-9" />
                                <div className="flex flex-col">
                                    <p className="text-base font-bold text-[#7F206D]">{t("contactFax")}</p>
                                    <p className="text-base text-[#969696] mt-2">+90 242 345 1989</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-6">
                            <div className="flex items-center space-x-7">
                                <Image src={WP} alt="Whatsapp" className='w-4 h-4 mb-9' />
                                <div className="flex flex-col">
                                    <p className="text-base font-bold text-[#7F206D]">{t("contactWhatsapp")}</p>
                                    <p className="text-base text-[#969696] mt-2">+90 549 807 6707</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-7">
                                <Image src={Mail} alt="Mail" className="w-4 h-4 mb-9 ml-5" />
                                <div className="flex flex-col">
                                    <p className="text-base font-bold text-[#7F206D]">{t("contactEmail")}</p>
                                    <p className="text-base text-[#969696] mt-2">info@elaratarim.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-6">
                            <div className="flex items-center space-x-7">
                                <Image src={Konum} alt="Address" className="w-5 h-5 mb-24" />
                                <div className="flex flex-col mb-4">
                                    <p className="text-base font-bold text-[#7F206D]">{t("contactAddress")}</p>
                                    <p className="text-base text-[#969696] mt-2">Yenigün Mah. Köroğlu Blv. <br/>Yeni Dünya 2 Sitesi A1 Blok No:46 A1/A <br/>Muratpaşa/ANTALYA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </footer>
        </>
    )
}
