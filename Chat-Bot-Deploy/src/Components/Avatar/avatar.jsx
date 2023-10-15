import React from "react";
import AvatorLogo from "../../img/avatar.png";


export default function Avatar() {
    return (
        <div className="group flex justify-center items-center w-[170px] h-[170px] rounded-full m-auto mt-16 border-2 border-white bg-white shadow-xl shadow-gray-600 hover:scale-105 duration-300 hover:shadow-2xl cursor-pointer">
            <div className="w-30 h-30 border border-gray-300 shadow-lg shadow-gray-400 rounded-full">
                <img src={AvatorLogo} className=""></img>
            </div>
        </div>
    )
}