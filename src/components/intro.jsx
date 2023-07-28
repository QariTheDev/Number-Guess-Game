import React from "react";

export default function Intro({ min, max, guesses, onMinChange, onMaxChange, setRange}) {

    return (
    <>
        <div className='heading'>
            <b>Number Guessing Game</b>
        </div>
        <div className="container">
            <textarea className="range-1" rows="1" cols="3" onChange={onMinChange}>{min}</textarea>
            <p style={{color:"white", textShadow: "0 0 2px black"}}>-</p>
            <textarea className="range-2" rows="1" cols="3" onChange={onMaxChange}>{max}</textarea>
            <button className="range" onClick={setRange}>Range</button>
        </div>
      <p className='intro'>You Got {guesses}❤️</p>
      </>
    )
}