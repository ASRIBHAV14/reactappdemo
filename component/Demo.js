import React, { useEffect, useState } from 'react'

export default function Demo() {
    const [count, setCoun] = useState(0);
    const [name, setName] = useState({ firstName: "", lastName: " " })
    const [items, setitems] = useState([])
    const [x, setx] = useState(0)
    const [y, sety] = useState(0)

    const handlefun = (event) => {
        setName({ ...name, firstName: event.target.value })
    }

    const handllun = (event) => {
        setName({ ...name, lastName: event.target.value })
        //rest operator is used for mutatig json states
    }

    const handitem = function () {
        setitems([...items, { id: items.length, value: Math.random() }])
    }

    useEffect(() => {
        console.log("use effect is called")
        window.addEventListener("mousemove", logmouseposition)
        return (() => {
            console.log("this is clearance code")
        })
    }, [count, name]
    )
    //we are using the second parameter in the useeffect as this shouldn't called everytime 
    //useeffect is same as component did mount
    //the function which we write in useeffect i.e., in return that is clearance code .this is similar to component did unmunt

    const logmouseposition = (event) => {
        console.log("logmouse position executed");
        setx(event.clientX);
        sety(event.clientY);
    }

    return (
        <div>
            <button onClick={() => setCoun((prevCount) => {
                return (prevCount + 1);
            })}>Increase count</button>
            <br />
            Count:{count}
            <br />
            <button onClick={() => setCoun((prevCount) => {
                return (prevCount - 1);
            })}>decrease count</button>
            <br />
            <br />
            <button onClick={handitem}>Do You want a random numer?</button>
            <br />
            <br />

            FirstName:  <input type="text" value={name.firstName} onChange={handlefun}></input>
            <br />
            LastName:<input type="text" value={name.lastName} onChange={handllun}></input>
            <br />
            <br />
            FirstName-{name.firstName},  Lastname:{name.lastName}
            <br />
            <br />
            {
                items.map((num, index) => {
                    return <li key={index}>{num.value}</li>
                })
            }
            <br />
            <p>
                Mouse position: x-{x}
                y-{y}
            </p>


        </div>
    )
}
