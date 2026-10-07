import React from "react";

const Display = ({ input }) => {
    return (
        <div className="display-container">
            <input type="text" value ={input || "0"} readOnly />
        </div>
    );
};

export default Display;