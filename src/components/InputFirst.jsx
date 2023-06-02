
const NavBar =({message,setMessage,displayMessage,inputFirst}) => {

const displayMessage =({message})=>{
    <p>{message}</p>
}

const inputFirst =({setMessage}) => {
    const handleChange=(e)=> {
        setMessage(e.target.value);
    }

return <input name="message" onChange={handleChange} />;
}
}
