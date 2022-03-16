import React, { useState } from "react";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

function Header() {
    // Added, live time
    setInterval(updateTime, 1000);
    var now = new Date().toLocaleTimeString();
    var nowDate = new Date().toLocaleDateString();
    var [time, setTime] = useState(now);
    var [day, setDay] = useState(nowDate);

    function updateTime() {
    now = new Date().toLocaleTimeString();
    setTime(now);
    }

    return <header>
    <h1 className="header-title"><AssignmentTurnedInIcon /> Keep <span className="personal-name">by Brylle</span></h1>
    <h2 className="header-time">Date: {day}</h2>
    <h2 className="header-time">Time: {time}</h2>
    </header>
}

export default Header;