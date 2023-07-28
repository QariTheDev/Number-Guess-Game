import React from "react";
import { useState } from "react";
import Intro from "./intro";
import Instructions from "./instructions";

let real_num = 0;

export default function Form() {

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [value, setValue] = useState('');
    const [guesses, setGuesses] = useState(5);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showHigh, setShowHigh] = useState(false);
    const [showLow, setShowLow] = useState(false);
    const [showFailure, setShowFailure] = useState(false);
    const [showRange, setShowRange] = useState(false);

    const onChange = (e) => {
        if ((e.target.value >= 0 && e.target.value <= 100000000000)|| (!isNaN(e.target.value)) || (e.target.value !== '')) {
        setValue(e.target.value);
        }
    }
    const onMinChange = (e) => {
        setMin(e.target.value);
    };
    const onMaxChange = (e) => {
        setMax(e.target.value);
    };
    const setRange = () => {
        const newMin = parseInt(min);
        const newMax = parseInt(max);
        
        if (!isNaN(newMin) && !isNaN(newMax) && newMin <= newMax) {
          setMin(newMin);
          setMax(newMax);
          
          const newRandomNumber = Math.floor(Math.random() * (newMax - newMin + 1)) + newMin;
          real_num = newRandomNumber;
          
          console.log(real_num);
        }
        else {
            setShowRange(true);
            setTimeout(() => {
                setShowRange(false);
            }, 1500);
        }
    };
    const onClick = () => {
        const userGuess = value;

        if (guesses === 1) {
            setShowFailure(true);

            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
        else{
            if (userGuess === real_num.toString() || userGuess === real_num) {
                setShowSuccess(true);
                setTimeout(() => {
                    setShowSuccess(false);
                }, 2000);
            }
            else if (userGuess > real_num) {
                setGuesses(guesses - 1);
                setShowHigh(true);
                setTimeout(() => {
                    setShowHigh(false);
                }, 1500);
            }
            else if (userGuess < real_num) {
                setGuesses(guesses - 1);
                setShowLow(true);
                setTimeout(() => {
                    setShowLow(false);
                }, 1500);
            }

        }
    }

    return (
    <>  
    {showSuccess && <div className="w3-panel w3-pale-green w3-round">
                        <h3>Success!</h3>
                        <p>You guessed the number {real_num} Correctly in {5 - guesses + 1} tries.</p>
                    </div>}
    {showFailure && <div className="w3-panel w3-pale-red w3-round">
                        <h3>Failure!</h3>
                        <p>You failed to guess the number {real_num} in 5 tries.</p>
                    </div>}
    {showRange && <div className="w3-panel w3-pale-yellow w3-round">
                        <h3>Invalid Range!</h3>
                        <p>Enter a valid range.</p>
                    </div>}
        <Intro min={min} max={max} guesses={guesses} onMinChange={onMinChange} onMaxChange={onMaxChange} setRange={setRange} />
        <textarea className="form-style-3" placeholder="Guess The Number..." rows="2" cols="10" onChange={onChange} value={value}></textarea>
        <button className="submit" onClick={onClick}>Guess</button>
        {showHigh && <h3 className="high">Your guess {value} is Too High!</h3>}
        {showLow && <h3 className="low">Your guess {value} is Too Low!</h3>}
        <Instructions/>
    </>
    )
}