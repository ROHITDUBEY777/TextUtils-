
 import About from './Components/About';
 import Navbar from './Components/Navbar';
 import TextForm from './Components/TextForm';
 import React, { useState } from 'react'
 function App() 
{  const [mode, setMode] = useState('light');
  
  const toggleMode = () => {
    if (mode === 'light') {
      
      setMode('dark');
      document.body.style.background = "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)";
      
      
 } else {
      setMode('light');
      document.body.style.background = "white"
      
    }
  };

 


  return (
    <>
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      
    <Navbar title="TEXTUTILS" aboutText="About" mode={mode} togglemode={toggleMode} />
         <TextForm heading="Enter the text to analyze" mode={mode} color={toggleMode} />
          
    
        <div >
        <About className={`container `} mode={mode}  />
        </div>
       
     
    </>
  );
}

export default App;
