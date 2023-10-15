import React from "react";
import SendButtonIcon from "./SendButton";

export default function MainChatContainer() {


    const [inputText, setInputText] = React.useState("");
    const [processedText, setProcessedText] = React.useState("");




    const handleSubmit = async (event) => {
        event.preventDefault();


        const response = await fetch('/preprocess/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ input_text: inputText })
        });

        const data = await response.json();
        setProcessedText(data.processed_text);



    }

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    }





    return (
        <div className="chat-area flex flex-col min-h-screen md:relative">
            <div className="flex-3">
            </div>
            <div className="messages flex-1 overflow-auto">

                <div className="message mb-4 flex">
                    <div className="flex-2">

                    </div>
                    <div className="flex-1 px-2">
                        {/* <div className="inline-block bg-gray-300 rounded-lg p-2 ml-6 px-6 text-gray-700 shadow-lg shadow-gray-500 font-typeWriting hover:-translate-y-0.5 duration-300 cursor-pointer">
                            <span></span>
                        </div> */}


                        {/*-------------------- FIRST CHAT BOX ----------------- */}
                        <a href="" className="typewrite inline-block bg-gray-300 rounded-lg p-2 ml-6 w-[425px] px-6 text-gray-700 shadow-lg shadow-gray-500 font-typeWriting hover:scale-105 duration-300 cursor-pointer select-none">
                            <span className="wrap" id="firstText"></span>
                        </a>
                    </div>
                </div>
                        {/*--------------------DEFAULT SEND TEXT MESSAGE----------------- */}


                <div className="message me mb-4 flex text-right font-typeWriting">
                    <div className="flex-1 px-2 hover:-translate-y-0.5 duration-300 cursor-pointer">
                        <div className="inline-block bg-blue-600 rounded-lg shadow-lg shadow-gray-500 p-2 px-6 text-white">
                            <span>I accept. Thank you very much.</span>
                        </div>
                    </div>
                </div>
                {/* REQUEST MESSAGE  */}





                {inputText && (
                    <div className="message me mb-4 flex text-right font-typeWriting">
                        <div className="flex-1 px-2 hover:-translate-y-0.5 duration-300 cursor-pointer">
                            <div className="inline-block bg-blue-600 rounded-lg shadow-lg shadow-gray-500 p-2 px-6 text-white">
                                <span>{inputText}</span>
                            </div>
                        </div>
                    </div>
                )

                }

                <div className="message mb-4 flex md:flex-col md:space-y-8">
                    <div className="flex-2"></div>
                    {processedText && (

                        JSON.parse(processedText).map((obj, index) => (
                            <div className="flex-1 md:flex-col  px-2 mb-8">
                                <div className="inline-block bg-gray-300 rounded-lg p-2 ml-6 px-6 text-gray-700 shadow-lg shadow-gray-500 font-typeWriting hover:-translate-y-0.5 duration-300 cursor-pointer ">
                                    <span>
                                        <div key={index}>
                                            <p className="font-bold animate-fadeIn1s">{obj.identifier}</p>
                                            <p className="animate-fadeIn3s"><span className="font-bold">Department:</span>{obj.department}</p>
                                            <p className="animate-fadeIn4s"><span className="font-bold">Building:</span>{obj.building}</p>
                                            <p className="animate-fadeIn4.5s"><span className="font-bold">Floor:</span>{obj.floor_Number}</p>
                                            <p className="animate-fadeIn5.5s"><span className="font-bold">Landmark:</span>{obj.landmark}</p>



                                        </div>




                                    </span>
                                </div>
                            </div>
                        ))
                    )}





                </div>








                {/* RESPONSE MESSAGE  */}


            </div>





            <div className="flex md:fixed md:w-[1200px] bottom-0 mt-0 mb-0 pt-4 bg-white ">


                <div className="write bg-white shadow rounded-lg">
                    <div className="text-center p-4 pr-0">
                        <span className="block text-center text-gray-400 hover:text-gray-800">
                            <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                stroke="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                                <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                </path>
                            </svg>
                        </span>
                    </div>
                </div>

                {/* ---------- */}




                {/*----------------------------- FORM FIELD ---------------------------- */}




                <form onSubmit={handleSubmit} action="/" method="POST"
                    className="flex flex-row w-full justify-between space-x-5" >

                    <input name="message"
                        className="w-full block outline-none px-4 py-4 md:mr-32 md:inline-block  font-typeWriting "
                        rows="1"
                        placeholder="Type a message..." autoFocus
                        value={inputText}
                        onChange={handleInputChange}

                    />


                    <div className="flex flex-row justify-between md:space-x-4 p-2  items-center md:ml-10 md:w-32 ">
                        <div className="flex-1 text-center">
                            <span className="text-gray-400 hover:text-gray-800">
                                <span className="inline-block align-text-bottom">



                                    {/* EMOJI  */}
                                    <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6 hover:-translate-y-0.4 duration-300 hover:bg-opacity-90 cursor-pointer">
                                        <path
                                            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13">
                                        </path>
                                    </svg>
                                </span>
                            </span>
                        </div>



                        <div className="flex-1">

                            {/* BUTTON  */}

                            <SendButtonIcon type="submit" className="bg-blue-400 w-10 h-10 rounded-full inline-block bg-gradient-to-r from-violet-600 to-indigo-500 flex justify-center items-center hover:-translate-y-0.5 duration-300 hover:bg-opacity-90" />

                        </div>
                    </div>
                </form>





            </div>
        </div >
    )
}
