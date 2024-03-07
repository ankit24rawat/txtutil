
import { useState } from 'react';
import './App.css';
import About from './Components/About';

import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';


function App() {

  const [mode,setmode] = useState('light');
  const [alert, setalert] = useState(null)

  

  const toggleMode= ()=>{
    if(mode ==='light')
    {
      setmode('dark')
      document.body.style.backgroundColor='#042743'
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
    <Navbar title="TextEditor" mode={mode} toggleMode={toggleMode}/>
    <Alert alert="this is the ["/>
    <Textform heading="Enter the text to analyze"  mode={mode}/  >
     
    {/* <About/> */}
    </>
  );
}

export default App;
