import React, { useEffect } from "react";
import { useState } from "react";
//? OnComplete is a callback
const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hadjer Imene BENSAOULA/>";

  useEffect(() => {
    let index = 0;
    //? Every 100 ms, setInterval runs:
    const interval = setInterval(() => {
      //? It sets text to a substring of fullText from 0 to index
      setText(fullText.substring(0, index));
      index++;
      //? When index becomes greater than the full text length:
      if (index > fullText.length) {
        //* It clears the interval (stops the typing loop).
        clearInterval(interval);
        //* Waits 1 second (setTimeout), then calls onComplete();
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval); //? ensures that if the component unmounts, the interval is cleared
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1"> |</span>
      </div>
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
