'use client'
import React, { useState, useEffect } from 'react'

export default function Switcher() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (typeof window !== 'undefined') {
            if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                setIsDarkMode(true);
                document.documentElement.classList.add('dark');
            } else {
                setIsDarkMode(false);
                document.documentElement.classList.remove('dark');
            }
        }
    }, []);

    function toggleTheme() {
        if (typeof window === 'undefined') return;
        
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    }

    // Don't render anything until after mounting to prevent hydration mismatch
    if (!mounted) {
        return null;
    }

    return (
        <>
            <div className="fixed top-1/4 -right-3 z-50">
                <span className="relative inline-block rotate-90">
                    <input type="checkbox" className="checkbox opacity-0 absolute" id="chk" onChange={toggleTheme} checked={isDarkMode} />
                    <label className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" htmlFor="chk">
                        <i className="uil uil-moon text-[20px] text-yellow-500"></i>
                        <i className="uil uil-sun text-[20px] text-yellow-500"></i>
                        <span className={`ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] ${isDarkMode ? 'right-[2px]' : 'left-[2px]'} w-7 h-7`}></span>
                    </label>
                </span>
            </div>
        </>
    )
} 