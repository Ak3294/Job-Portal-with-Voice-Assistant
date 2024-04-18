import React, { useState } from 'react';
import { FaMicrophoneAlt } from "react-icons/fa";

const Assistance = () => {
    const [transcript, setTranscript] = useState('');
    
    const speak = (text) => {
        const textToSpeak = new SpeechSynthesisUtterance(text);
        textToSpeak.rate = 1;
        textToSpeak.volume = 1;
        textToSpeak.pitch = 1;
        window.speechSynthesis.speak(textToSpeak);
    };

    const wishMe = () => {
        const day = new Date();
        const hour = day.getHours();

        if (hour >= 0 && hour < 12) {
            speak("Good Morning Boss...");
        } else if (hour >= 12 && hour < 17) {
            speak("Good Afternoon Master...");
        } else {
            speak("Good Evening Sir...");
        }
    };

    const takeCommand = (message) => {
        if (message.includes('hey Acube') || message.includes('hello Acube')) {
            speak("Hello Sir, How May I Help You?");
        } else if (message.includes("open google")) {
            window.open("https://google.com", "_blank");
            speak("Opening Google...");
        } else if (message.includes("open youtube")) {
            window.open("https://youtube.com", "_blank");
            speak("Opening Youtube...");
        } else if (message.includes("open facebook")) {
            window.open("https://facebook.com", "_blank");
            speak("Opening Facebook...");
        } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
            window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
            const finalText = "This is what I found on internet regarding " + message;
            speak(finalText);
        } else if (message.includes('wikipedia')) {
            window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
            const finalText = "This is what I found on Wikipedia regarding " + message;
            speak(finalText);
        } else if (message.includes('time')) {
            const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
            const finalText = time;
            speak(finalText);
        } else if (message.includes('date')) {
            const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
            const finalText = date;
            speak(finalText);
        } else if (message.includes('calculator')) {
            window.open('Calculator:///');
            const finalText = "Opening Calculator";
            speak(finalText);
        } else {
            window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
            const finalText = "I found some information for " + message + " on Google";
            speak(finalText);
        }
    };

    const handleSpeechRecognition = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.onresult = (event) => {
            const currentIndex = event.resultIndex;
            const transcript = event.results[currentIndex][0].transcript;
            setTranscript(transcript);
            takeCommand(transcript.toLowerCase());
        };

        recognition.start();
    };

    return (
        <section className="main">
            <div className="image-container">
                <div className="image">
                    <img src="audio.gif" alt="image" />
                </div>
                <h1><b>A C U B E</b></h1>
                <p>I'm a Virtual Assistant , How may I help you?</p>
            </div>
            <div className="input" style={{backgroundColor:'#662d91'}}>
                <button className="talk" onClick={handleSpeechRecognition}>
                <FaMicrophoneAlt />
                </button>
                <h1 className="content" style={{Color:'white'}}>{transcript ? transcript : "Click here to speak"}</h1>
            </div>
        </section>
    );
};

export default Assistance;
