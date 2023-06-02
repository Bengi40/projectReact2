import { useState } from "react";

const InputFirst =() => {

const [message, setMessage] = useState("");

    return (
<div>
<p>Bienvenue {message} !</p>
<input 
type="text"
name="message" 
onChange={(e)=>setMessage(e.target.value)} />
</div>
);
};

export default InputFirst;
