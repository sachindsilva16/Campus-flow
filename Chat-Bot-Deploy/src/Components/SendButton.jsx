import React from "react";
import sendVectorIcon from "../img/send-button.svg";

export default function SendButtonIcon(props) {
    return (
        <button type={props.type} className={props.className}>
            <span className="inline-block align-text-bottom flex justify-center items-center">
                <img src={sendVectorIcon} className="invert h-7 w-7"/>
            </span>
        </button>
    );
}