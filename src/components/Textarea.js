import React, { useState } from 'react';

export default function Textarea(props) {
const [text, settext] = useState("Some Text");
const handleUpClick = ()=>{
console.log("Uppercase was clicked"+text);
let newText = text.toUpperCase();
settext(newText);
}
const handleLowClick = ()=>{
console.log("Lowercase was clicked"+text);
let newText = text.toLowerCase();
settext(newText);
}
const handleOnchange = (event)=>{
console.log("on change");
settext(event.target.value);

}

function handleTrim(){
    let newText = text.trimLeft(); 
    settext(newText);
}
return (
<>
    <div className="container my-4">

        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnchange} id="mybox" rows="12"></textarea>
        </div>
        <button class="btn btn-primary mx-3" onClick={handleUpClick}>To uppercase</button>
        <button class="btn btn-primary mx-3" onClick={handleLowClick}>To Lowercase</button>
        <button class="btn btn-primary" onClick={handleTrim}>To Trim</button>
    </div>

    <div className="container my-5">
        <h1>Text Summary</h1>
        <h3>{(text.split(" ")).length} words and {text.length} characters</h3>

    </div>
</>

)
}