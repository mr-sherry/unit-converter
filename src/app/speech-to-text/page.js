"use client";

import { useEffect, useRef, useState } from "react";

export default function page() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef(null);

  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";

      recognition.onresult = (event) => {
        let text = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          text += event.results[i][0].transcript;
        }
        setTranscript(text);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error", event.error);
      };

      recognitionRef.current = recognition;
    } else {
      alert("Your browser does not support Speech Recognition. Try Chrome.");
    }
  }, []);

  const startListening = () => {
    setTranscript("");
    recognitionRef.current?.start();
    setListening(true);
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setListening(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Live Speech-to-Text</h1>

      <div className="flex gap-4">
        <button
          onClick={startListening}
          disabled={listening}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50"
        >
          🎤 Start
        </button>
        <button
          onClick={stopListening}
          disabled={!listening}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50"
        >
          ⏹ Stop
        </button>
      </div>

      <div className="mt-6 p-4 bg-white rounded-xl shadow-md w-full max-w-lg min-h-[120px]">
        <h2 className="text-lg font-semibold mb-2">Transcript:</h2>
        <p className="text-gray-700 whitespace-pre-wrap">
          {transcript || "Speak something..."}
        </p>
      </div>
    </div>
  );
}
