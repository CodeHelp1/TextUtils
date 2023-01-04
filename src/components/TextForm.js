import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);  
        props.showAlert("Converted to UpperCase!" , "success");     
    }

    const handleLoClick = () => {     
        let newText = text.toLowerCase();
        setText(newText);  
        props.showAlert("Converted to LowerCase!" , "success");   
    }

    const handleClearClick = () => {     
        let newText = ("");
        setText(newText);  
        props.showAlert("Clear your text!" , "success");    
    }

      const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML = "Speak"){
                window.speechSynthesis.cancel()
            }
        }
        props.showAlert("Converted to Voice!" , "success");
    }
    const handleCopy = () => {
    let text = document.getElementById("MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!" , "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!" , "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");

  return (
    <>
   <div className='container' style={{color: props.mode === 'dark' ? "white" : "#042743"}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{background: props.mode==='dark' ? '#042743' : 'white', color: props.mode === 'dark' ? "white" : "#042743"}} 
    id="MyBox" rows="8"></textarea>
    </div>
    <button className="btn btn-warning mx-2"onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-warning mx-2"onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-warning mx-2"onClick={handleClearClick}>Clear Text</button>
    <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>
    <button className="btn btn-warning mx-2"onClick={handleCopy}>Text Copy</button>
    <button className="btn btn-warning mx-2"onClick={handleExtraSpaces}>Remove Extra Spaces</button>

   </div>
   <div className="container my-3" style={{color: props.mode === 'dark' ? "white" : "#042743"}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length > 0 ? text: "Enter Something in the textbox above to preview it here"}</p>
   </div>
   </>
  )
}




  
