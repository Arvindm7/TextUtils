import React from "react"
import {useState} from "react"

export default function TextForm(props){

    
    const handleOnUpClick = ()=>{
        //console.log(" uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(" Converted to uppercase","success");
    }
    const handleOnCopyClick = ()=>{
       navigator.clipboard.writeText(text);
       document.getSelection().removeAllRanges()
       props.showAlert(" Copied to clipboard","success");
    }

    const handleOnLoClick = ()=>{
        //console.log(" uppercase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" converted to lowercase","success");
    }

    const handleOnClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert(" Text cleared","success");
    }

    const handleOnChange = (event)=>{
        //console.log(" on change")
        setText(event.target.value)
        
    }
    const handleCapitalizeWordClick = () => {
        let lowercase = text.toLowerCase();
        let words = lowercase.split(" ");
        let newWords = words.map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        });
        let newText = newWords.join(" ");
        setText(newText);
      };
    const [text , setText ] = useState('');
   
  
    return(
        <>
        <div className="container" style = {{color:props.mode==='light'?'#2b3136':'white'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">   
            <textarea className="form-control" id="myBox"  value = {text} onChange={handleOnChange} style = {{backgroundColor:props.mode ==='dark'?'#2b3136':'white',color:props.mode==='dark'?'white':'#2b3136' , border :'1px solid #6c7f8f' }} rows="9"></textarea>
            </div>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleOnUpClick}>Convert to upper case</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleOnLoClick}>Convert to lower case</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleOnClearClick}>Clear text</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleOnCopyClick}>Copy to clipboard</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalizeWordClick}>Make 1st letter capital</button>



        </div>
        <div className="container my-3" style = {{color:props.mode==='dark'?'white':'#2b3136'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0?text:"Noting to preview"}</p>
        </div>
        </> 

    )
}
