import React from "react";
import StatusBar from "./nav-status-bar";
import ChatBodyTyperWriterHeading from "./Chat-heading";
import MainChatContainer from "./Chat-container";

export default function MainMiddleContainer() {
    return (

        // MAIN MIDDLE CHAT CONTAINER
        <div className="flex-1 bg-gray-50 w-full md:ml-20">
            <div className="main-body container m-auto">
                <div className="h-full flex flex-col">
                    <div className="hidden md:block py-4 flex-2 flex flex-row">





                        {/*--------- MOBILE VERSION ------- */}
                        <div className="flex-1">

                            <span className="xl:hidden inline-block text-gray-700 align-bottom">
                                <span className="block h-6 w-6 p-1 rounded-full hover:bg-gray-400">
                                    <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </span>
                            </span>

                            <span className="lg:hidden inline-block ml-8 text-gray-700 align-bottom">
                                <span className="block h-6 w-6 p-1 rounded-full hover:bg-gray-400">
                                    <svg className="h-4 w-4" fill="none" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                                        </path>
                                    </svg>
                                </span>
                            </span>

                        </div>

                        {/* ----------------------- */}


                        {/* <!-- STATUS BAR  --> */}

                        {/* <StatusBar/> */}


                    </div>



                    {/* MAIN CHAT CONTAINER  */}

                    <div className="main flex flex flex-col md:ml-[200px] md:pt-4 md:pr-8">
                        <div className="hidden lg:block heading flex-2">


                            <ChatBodyTyperWriterHeading />


                            {/* <!-- CHAT CONTAINER  --> */}


                            <MainChatContainer />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}