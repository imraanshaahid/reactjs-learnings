import React, { useState } from "react";

function FormDropdown(){

    const[city, setCity] = useState("Mumbai");

    const handleChange = (event) =>{
        setCity(event.target.value);
    }

    const handleSubmit = ()=>{
        alert(city)
    }

    return(
        <form onSubmit={handleSubmit}>
            <select value={city} onChange={handleChange}>
                <option>Pune</option>
                <option>Mumbai</option>
                <option>Nagpur</option>
            </select>
        </form>
    )
}

export default FormDropdown;