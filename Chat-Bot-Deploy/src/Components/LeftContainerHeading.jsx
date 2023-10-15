import React from "react";

export default function LeftContainerHeading() {
    return (
        <div className="group text-white mt-8 font-typeWriting hover:scale-105 duration-300 hover:cursor-pointer hover:bg-white hover:text-black font-bold hover:rounded-md inline-block px-4 py-2 pl-6 text-center hover:shadow-lg hover:shadow-indigo-600">
            Way-WizarD
            <span className="inline-block ml-4 relative top-[2px] ">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M19 9l-7 7-7-7"></path>
                </svg>
            </span>

        </div>
    )
}