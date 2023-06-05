import { useState } from "react";
import './InputFirst.css'

const InputFirst =() => {

const [message, setMessage] = useState("");

    return (
<div className="inputbox">
<p>Welcome {message} !</p>
<input type="text" name="message" placeholder="Write here your name" onChange={(e)=>setMessage(e.target.value)} />
</div>
);
};

export default InputFirst;
