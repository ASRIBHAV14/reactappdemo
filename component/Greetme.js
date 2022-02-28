import { Component, useState } from "react"
import React from 'react'

export default function Greetme(props) {
    const [message, setmessage] = useState("happy new year ");
    const [year, setYear] = useState(2022)
    const [foodlist, setfoodList] = useState(["pizza", "burger", "cheese macaroni", "french fries"]);
    var newFoodList = foodlist.map((food, index) => {
        return <li key={index}>fav:{food}</li>
    })

    const handleclick = function () {
        setmessage("happy Birthhhdayyy")
    }

    return (
        <div>
            <p>{message}  {props.name} {props.lname}</p>
            <button onClick={handleclick}>click me</button>
            {newFoodList}
        </div>
    )
}
