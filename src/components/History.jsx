import React from "react";

const History = ({ history, onClearHistory }) => {
    return (
        <div className="history-container">
            <h3>Riwayat Perhitungan</h3>
            {history.length === 0 ? (
                <p>Belum ada riwayat</p>
        ) : (
            <ul>
                {history.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        )}
        {history.length > 0 && (
            <button onClick={onClearHistory}>Hapus Riwayat</button>
        )}
        </div>
    );
};

export default History;