import React, { useState, useContext, createContext } from "react";

const UserContext = createContext();

function UseContext(){

    const [user, setUser] = useState("khan4545");

    return (
        <>
        <UserContext.Provider value = {user}>
        <h1>main component</h1>
        <Component2/>
        </UserContext.Provider>
        </>

    )
}

function Component2(){
    return (
        <>
        <h1>component 2</h1>
        <Component3/>
        </>
    )
}

function Component3(){
    return (
        <>
        <h1>component 3</h1>
        <Component4/>
        </>
    )
}

function Component4(){
    const user = useContext(UserContext);
    return (
        <>
        <h1>component 4 {user}</h1>
        </>
        
    )
}

export default UseContext;