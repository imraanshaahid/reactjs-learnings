import React, { useState } from "react";
import FormDropdown from "./FormDropdown";

function MyForm(){

    const[username, setUsername] = useState("");
    const[age, setAge] = useState();


    const handleChangeName = (event) =>{
        setUsername(event.target.value);

    }

    const handleChangeAge = (event) =>{
        setAge(event.target.value);

    }

    const handleSubmit = () =>{
        alert("username = "+username + "Age=" +age)
        console.log("username=" + username)
        console.log("age=" + age)

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
            <input type="text" name="username" value={username} onChange={handleChangeName}/>       
            </label>

            <label>Enter your age:
            <input type="number" name="age" value={age} onChange={handleChangeAge}/>       
            </label>

            <FormDropdown/>

            <input type="submit"/>
        </form>
    )

}

export default MyForm;