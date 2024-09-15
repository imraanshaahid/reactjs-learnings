import React, {useState, useEffect} from "react";

function FunctionalComponentState(){
    const [color, setColor] = useState("red");
    const [count, setCount] = useState(0);


    // useState is a hooks used to manage the state in functional components

    useEffect(() => {
        // this hooks basically perform all the lifecycle of functional components
        // we can use this hooks to call backend API to get the response
        setTimeout(() =>{
            setCount((count) => count + 1);
        }, 1000)

    });


    return (
        <>
        <h1>this is my count value =  {count}</h1>
        <h1>my favorate colur is {color}</h1>
        <button type="button" onClick={() => setColor("blue")}> blue
        </button>

        <button type="button" onClick={() => setColor("pink")}> pink
        </button>
        </>
    )
}

export default FunctionalComponentState;