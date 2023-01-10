import React , {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = (event)=>{
        event.preventDefault();
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been converted to upper case" , "success");
        // console.log("handleUpClick" , text);
    }
    const handleLowClick = (event)=>{
        event.preventDefault();
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been converted to lower case" , "success");
        // console.log("handleLowClick" , text);
    }
    const handleCopyClick = (event)=>{
        event.preventDefault();
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard" , "success");
    }
    const handleClearClick = (event)=>{
        event.preventDefault();
        let newText = '';
        setText(newText);
        props.showAlert("Textarea has been cleaned" , "success");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const handlonchange = (event)=>{
        event.preventDefault();
        setText(event.target.value);
    }
    const [text , setText] = useState("Enter text here");
  return (
    <>

        <div className='container' style={{color : props.mode === 'dark' ? 'white' : 'black'  }}>
            <div className="form-group">
                <h1>{props.heading}</h1>
                <textarea style={{backgroundColor : props.mode === 'dark' ? '#13466e' : 'white' ,
                color : props.mode === 'dark' ? 'white' : 'black'  }} value={text} onChange={handlonchange} className="form-control" id="myBox" rows="8"></textarea>
            </div>         
            <button disabled = {text.length === 0} className="btn btn-primary  my-2" onClick={handleUpClick}>Convert to UPPERCASE</button>   
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>   
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy to Clipboard</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={speak}>Speak</button>   
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>   
        </div>
        <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : '#042743'  }}>
            <h2>Your text summary</h2>
            <p>
                {text.split(/\s+/).filter((elem)=>{return elem.length !== 0}).length} Words and {text.length} Characters
            </p>
            <p>
                {0.008*text.split(/\s+/).filter((elem)=>{return elem.length !== 0}).length} Minutes to read
            </p>
            <h3>Preview</h3>
            <p style={{backgroundColor: "lightblue"}} className = "px-2 py-2">{text.length > 0 ? text : "Nothing to preview"}</p>
        </div>
    
    </>
  )
}
