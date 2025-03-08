import React,{useState} from 'react'
import PropTypes from 'prop-types'
export default function About(props) {
    
  const [myStyle,setMyStyle]=useState({
    color: 'black',
    backgroundColor: 'white'
})
const [btntext,setbtntext] = useState('dark')
const  handleclick=() =>{
    if(myStyle.color=== 'white'){
        setMyStyle({
            color:'black',
            backgroundColor:'white'
            
        })
        setbtntext(" dark")
    }else{
        setMyStyle({
            color:'white',
            background:"black"
        })
        setbtntext(" light")
    }
}
  return (
    
    <div className={`container my-2 text-${props.mode==='dark'?'white':'black'}
  `}  >
      <h1 >About Us</h1>
      <div className={`
      accordion 
      `}
      id="accordionExample">
  <div className={`accordion-item 
    `} style={myStyle} >
    <h2 className="accordion-header bg-black">
      <button className={`
      accordion-button 
      `}  style={myStyle}
       type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      1. Text Transformation
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show"  data-bs-parent="#accordionExample">
      <div className="accordion-body" >
      <p className={`
      `}
      >TextUtils allows users to convert text to uppercase or lowercase with just a click. It simplifies text formatting for better readability and consistency.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item"  style={myStyle} >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={myStyle} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      2. Extra Space Removal
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
      <p  >The tool can detect and remove unnecessary extra spaces from the input text, ensuring clean and structured content.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item"  style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      3.Text Summary & Read Time
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
      <p>TextUtils provides a real-time summary of the text, including the word count, character count, and estimated reading time. </p>     </div>
    </div>
  </div>
</div>
<div>
  <button className='btn btn-dark mt-4' onClick={handleclick}>{btntext}</button>
</div>

     
    
    </div>

    
  )
}

About.propTypes = {
  mode:PropTypes.string,
  backgroundColor:PropTypes.string
}
About.defaultProps = {
  mode:"light",
  backgroundColor:"radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)"
}