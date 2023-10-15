import React from "react";


export default function StatusBar() {
    return (
        <div className="flex-1 text-right">
            <div className="inline-block text-gray-700">
                Status :<span
                    className="inline-block align-text-center w-3 ml-2 h-3 bg-green-400 rounded-full border-2 border-white"></span>
            </div>
        </div>
    );
}