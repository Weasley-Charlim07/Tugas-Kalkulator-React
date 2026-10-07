import "./App.css";
import { useState, useEffect } from "react";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import History from "./components/History";

const App = () => {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState(() => {
        const saved = localStorage.getItem("calc_history");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("calc_history", JSON.stringify(history));
    }, [history]);

    const handleButtonClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleClear = () => {
        setInput("");
    };

    const handleCalculate = () => {
        try {
            const result = String(Function(`'use strict'; return (${input})`)());
            const log = `${input} = ${result}`;

            setHistory((prev) => [log, ...prev]);
            setInput(result);
        }   catch (error) {
            setInput("Error");
        }
    };

    const handleClearHistory = () => {
        setHistory([]);
    };

    return (
        <div style={{ maxWidth: "320px", margin: "30px auto", textAlign: "center"}}>
            <h2>Kalkulator</h2>
            <Display input={input} />
            <Keypad
                onButtonClick={handleButtonClick}
                onClear={handleClear}
                onCalculate={handleCalculate}
            />
            <History history={history} onClearHistory={handleClearHistory} />
        </div>
    );
};

export default App;