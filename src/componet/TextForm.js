//handling Events and State
import React, {useState} from 'react'

export default function TextForm(props) {

  const convertuppercase = ()=>{
    // console.log("uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText)
  }

  const convertlowerrcase = ()=>{
    // console.log("uppercase was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText)
  }

  const cleartext = ()=>{
    // console.log("uppercase was clicked" + text)
    let newText = '';
    setText(newText)
  }
  const handleonchange = (event)=>{
      setText(event.target.value);
  }
  const [text, setText] = useState('');//its called state...
  // text = "This is meet";//wrong way
  // setText("this is meet gami");this is also wrong way 
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonchange} id="my-box" rows="10" placeholder='Enter a Text '></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={convertuppercase}>UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={convertlowerrcase}>LowerCase</button>
        <button className="btn btn-secondary mx-1" onClick={cleartext}>clear</button>
    </div>
    <div className="container my-4">
      <h1>your text summary</h1>
      <p> words : {text.split(" ").length} , characters : {text.length} , minits : { 0.008 * text.split(" ").length}</p>
      <h2>Previw :</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
