import React,{ useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleonClick = ()=>{
        // console.log("Uppercase button was clicked"+text);
        let newText = text.toUpperCase()
        setText(newText)
    }
    const deleteonClick = ()=>{
        // console.log("Uppercase button was clicked"+text);
        let newText = ('')
        setText(newText)
    }
   
    const handleonChange = (Event) =>{
        // console.log("Change was initiated");
       
        setText(Event.target.value)
    }
    const handleonClick2 =()=>{
        let newText = text.toLowerCase()
        setText(newText)
        
    }
    const [text, setText] = useState('');

    const  CopiedonClick = () =>{
        //    console.log('I am copy');
           var text = document.getElementById("myBox")
           text.select();
           navigator.clipboard.writeText(text.value);
         
    }
    const handleextraspaces = ()=>{
        let  newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    // const [textColor,setTextColor] = useState('');

    // const handlecolor = () =>{
    //     if()
    // }
    
    // text="Enter the text here"; //wrong way to change the state
    // setText("Enter text"); //correct way to changr the state
    // const changecolor = ()=>{
    //     if(backgroundColor === "black"){
    //         color:"white";
    //     }
    //     else{
    //         color:'black'
    //     }
    // }
    return (
        <>
        <div className={`container bg-${props.color} text-${props.color}`}>
            <div className="mb-3 ">
                <h1 className={`text-${props.mode === 'dark'?'white':'black'}`}>{props.heading}</h1>
                <textarea className="form-control " value={text}  id="myBox" onChange={handleonChange} style={{backgroundColor: props.mode === 'dark' ? 'black' : 'white',
                    color: props.mode ==="dark"?"white":"black"
                 }} rows="8"></textarea>
                <button className="btn btn-dark mt-4 mx-2 " onClick={handleonClick}>Convert to UpperCase</button>
                <button className="btn btn-dark mt-4 mx-2" onClick={handleonClick2}>Convert to lowercase</button>
                <button className="btn btn-dark mt-4 mx-2" onClick={deleteonClick}>Delete text</button>
                <button className="btn btn-dark mt-4 mx-2"  onClick={CopiedonClick}>Copy</button>
                <button className="btn btn-dark mt-4 mx-2"  onClick={handleextraspaces}>Remove extra spaces</button>
            
            </div>
        </div>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your text summary is</h2>
        <p> {text.split(" ").length} Words and {text.length} characters</p>
        <p> {0.008*text.split(" ").length} minutes read </p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
        </>
    )
}

// TextForm.propTypes = {
//     heading : PropTypes.string.isRequired,
//     color:PropTypes.string,
//     mode:PropTypes.string
// };
// TextForm.defaultProps = {
//     heading:"Enter your text below",
//     color:"white",
//     mode:"dark"
// }