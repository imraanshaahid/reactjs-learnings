function Array2Example(){
    const myArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    return(
        <>
        { 
            myArray.map((name) =>
                <li key={name.toString}>
                    {name}
                </li>
            )
        }
        </>
    )
}

export default Array2Example;