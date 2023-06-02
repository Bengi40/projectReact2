import { useState } from "react";
import './InputFirst.css'

const InputFirst =() => {

const [message, setMessage] = useState("");

    return (
<div className="inputbox">
<p>Bienvenue {message} !</p>
<input 
type="text"
name="message" 
onChange={(e)=>setMessage(e.target.value)} />
</div>
);
};

export default InputFirst;
