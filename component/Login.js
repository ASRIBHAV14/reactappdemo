import React, { useState } from 'react'

export default function Login(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let [buttonCap, setButtonCap] = useState("Login");
    let [text, settext] = useState("Logout");

    const handleLogEvent = function () {
        setIsLoggedIn(!isLoggedIn);
        let data = (isLoggedIn) ? "Loggedout" : "Loggedin";
        setButtonCap(data)
        settext(data)
    }
    return (
        <div>
            <h2>you  {text}</h2>
            <button onClick={handleLogEvent}>{buttonCap}</button>
        </div>
    )
}
