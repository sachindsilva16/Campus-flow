import React from "react";


export default function LeftNavigationSection() {
    return (
        <div className="menu mt-8 text-white font-typeWriting">
            <a href=""
                className=" py-4 px-12 pr-16 ml-8 inline-block border-1-4 hover:bg-gray-300 hover:text-black hover:scale-105 hover:text-bold transition-all duration-500 rounded-md">


                {/* <!-- VECTOR ICON  --> */}
                <span className="inline-block  mr-[14px] relative top-[3px]">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                        <path
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                        </path>
                    </svg>
                </span>
                HOME
            </a>
            <a href=""
                className="py-4 px-12 pr-16 ml-8 inline-block border-1-4 hover:bg-gray-300 hover:text-black hover:scale-105 hover:text-bold transition-all duration-500 rounded-md">
                <span className="inline-block  mr-[13px] relative top-[3px]">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                        <path
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                        </path>
                    </svg>
                </span>

                CHAT
            </a>
            <a href=""
                className="py-4 px-12 pr-16 ml-8 inline-block border-1-4 hover:bg-gray-300 hover:text-black hover:scale-105 hover:text-bold transition-all duration-500 rounded-md">
                <span className="inline-block  mr-[12px] relative top-[3px]">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                        <path
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                        </path>
                    </svg>
                </span>
                ABOUT
            </a>

            <a href="https://mychimpapp16.onrender.com" 
            target="_blank"
                className="py-4 px-12 pr-16 ml-8 inline-block border-1-4 hover:bg-gray-300 hover:text-black hover:scale-105 hover:text-bold transition-all duration-500 rounded-md">
                <span className="inline-block  mr-[12px] relative top-[3px]">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                        <path
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                        </path>
                    </svg>
                </span>
                CONTACT
            </a>
        </div>
    );
}