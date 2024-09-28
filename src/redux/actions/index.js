export const increment = (number) => {
    console.log("inside action")
    return {
        type: 'INCREMENT',
        payload: number
    }
}

export const decrement = () =>{
    return {
        type: 'DECREMENT'
    }
}