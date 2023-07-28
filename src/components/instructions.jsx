import React from "react";

export default function Instructions() {

    return (
    <>
        <div className="container my-container">
            <div className="instruction">
                <h3>Instructions</h3>
                <ul className="curved-round">
                    <li>Enter the range of numbers you want the target number to be between, and press Range</li>
                    <li>Enter your guess</li>
                    <li>See if your guess is too high or too low</li>
                    <li>Change your guess</li>
                    <li>The app will tell you when you are right, and how many guesses you had</li>
                </ul>
            </div>
        </div>
    </>
    )
}