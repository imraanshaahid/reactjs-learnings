import { useSelector, useDispatch } from "react-redux";
import { increment , decrement } from "./redux/actions";

function Contact(){

    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <>
        <h1>this is contact component</h1>
        <h2>counter is {counter}</h2>
        <button onClick={() => dispatch(increment(2))}>+</button>
        
        <button onClick={() => dispatch(decrement())}>-</button>
        </>
    )
    
    
}

export default Contact;