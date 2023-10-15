import React from "react";
import LeftContainerHeading from "./LeftContainerHeading";
import LeftNavigationSection from "./Left-Navigation-Container";
import Avatar from "./Avatar/avatar";


export default function LeftContainer() {
    return (
        <div className="hidden md:block md:h-screen md:fixed xl:fixed xl:block sm:flex-2 w-64 h-full bg-gradient-to-r from-violet-600 to-indigo-600 rounded-r-lg">
            <div className="user-profile text-center pb-4  ">
                <Avatar/>


                {/* LEFT-CONTAINER -- TOP HEADING */}
                <LeftContainerHeading />
            </div>





            {/* MENU BAR  */}

            <LeftNavigationSection />
        </div>
    )
}