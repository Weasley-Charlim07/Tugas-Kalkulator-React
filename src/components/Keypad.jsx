import React from "react";

const Keypad = ({ onButtonClick, onClear, onCalculate }) => {
    const buttons = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "0", ".", "=", "+"
    ];

    return (
        <div className="keypad-container">
            <button onClick={onClear} className="btn-clear">Clear</button>
            <div className="grid-buttons">
                {buttons.map((btn, index) => (
                    <button
                        key={index}
                        onClick={() => (btn === "=" ? onCalculate() : onButtonClick(btn))}
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Keypad;