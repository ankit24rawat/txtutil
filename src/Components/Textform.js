import React, {useState} from 'react'

export default function Textform(props) {

    const handleupclick=()=>{
       let newText = text.toLocaleUpperCase();
        setText(newText)

    }
    
    const handlelowclick=()=>{
        let newText = text.toLocaleLowerCase();
         setText(newText)
 
     }
    const handleonchange=(event)=>{
      
        setText(event.target.value);
    }
 
    const[text,setText]= useState('');
   

  return (
    <>
    <div className="container my-3" >
           <h1 >{props.heading}</h1>
        <div className=" my-3" >
       
        <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        <button className='btn btn-primary'onClick={handleupclick}>Convert To Uppercase</button>
        <button className='btn btn-primary mx-3'onClick={handlelowclick}>Convert To Lowercase</button>
    </div>
    
    <div className='container my-3'>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length}words and {text.length}characters</p>
        <p>{0.008*text.split(" ").length}mintues read</p>

    </div>
    
    </>
  )
}
