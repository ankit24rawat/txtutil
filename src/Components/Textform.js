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

     const removeVowel=()=>{
      
            let newText = text.replace(/[aeiou]/g,'');
         setText(newText)
 
     }

    const handleonchange=(event)=>{
      
        setText(event.target.value);
    }

    
        function addEmoji() {

            let sentence = text;
            let emojis = ["😊", "😄", "😁", "😆", "😎", "😍", "😂",  "😜", "😉", "😋", "😘", "😇" ,"😻", "🙌", "🎉", "🌟", "💖"];

            let words = sentence.split(" ");
            let sentenceWithEmojis = "";
        
            words.forEach((word, index) => {
                sentenceWithEmojis += word ;
                if (emojis[index % emojis.length]) {
                    sentenceWithEmojis += emojis[index % emojis.length] + " ";
                }
            });
        
            sentenceWithEmojis.trim(); // Trim to remove trailing space
            setText(sentenceWithEmojis)
           
            
        }
        
       
 
    const[text,setText]= useState('');
   

  return (
    <>
    <div className="container my-3"   style={{color: props.mode==='dark'?'white':'black'}}   >
           <h1  >{props.heading}</h1>
        <div className=" my-3" >
       
        <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
        </div>
        <button className='btn btn-primary mx-3'onClick={handleupclick}>Convert To Uppercase</button>
        <button className='btn btn-primary mx-3'onClick={handlelowclick}>Convert To Lowercase</button>
        <button className='btn btn-primary mx-3'onClick={removeVowel}>Remove Vowels</button>
        <button className='btn btn-primary mx-3'onClick={addEmoji}>Add Emojis</button>
    </div>
    
    <div className='container my-3'   style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length}words and {text.length}characters</p>
        <p>{0.008*text.split(" ").length}mintues read</p>

    </div>
    
    </>
  )
}
