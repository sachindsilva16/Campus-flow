import React from "react";
import sendVectorIcon from "../image";
import SendButtonIcon from "./SendButton";
import LeftContainerHeading from "./LeftContainerHeading";
import LeftNavigationSection from "./Left-Navigation-Container";
import StatusBar from "./nav-status-bar";
import ChatBodyTyperWriterHeading from "./Chat-heading";
import MainChatContainer from "./Chat-container";
import LeftContainer from "./Left-Container";
import MainMiddleContainer from "./MainMiddleContainer";


export default function App() {
    return (

        // --- [MAIN CONTAINER] --
        <div className="w-full h-screen">
            <div className="flex w-full h-screen">

                {/*--- [LEFT CONTAINER] ---*/}
                <LeftContainer />


                {/* MIDDLE CONTAINER  */}
                <MainMiddleContainer/>

            </div>
        </div>

    );
}
