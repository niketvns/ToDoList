import React, { useState } from "react";

const DateTime = () => {

    let time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString();

    const [ctime, setTime] = useState(time);
    const [cdate, setDate] = useState(date);

    const changeDate = () => {
        time = new Date().toLocaleTimeString();
        date = new Date().toLocaleDateString();
        setDate(date);
        setTime(time);
    }

    setInterval(changeDate, 1000);

    return (
        <>
            <div>
                <p className="time">{ctime}</p>
                <p className="date">{cdate}</p>
            </div>
        </>
    );
};


export default DateTime;