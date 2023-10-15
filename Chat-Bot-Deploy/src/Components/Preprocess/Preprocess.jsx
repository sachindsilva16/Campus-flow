import React from "react";
import SendButtonIcon from "../SendButton";


export default function InputFieldArea() {

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
        <div>
            <form onSubmit={handleSubmit}>
                <input name="message"
                    className="w-full block outline-none px-4 py-4 bg-transparent font-typeWriting "
                    rows="1"
                    placeholder="Type a message..."
                    autoFocustype="text"
                    value={inputText}
                    onChange={handleInputChange}
                />




                <div className="flex-2 w-32 p-2 flex content-center items-center">
                    <div className="flex-1 text-center">
                        <span className="text-gray-400 hover:text-gray-800">
                            <span className="inline-block align-text-bottom">
                                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
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


            {processedText && (
                <div>
                    <p>{processedText}</p>
                </div>
            )}
        </div>
    );
}