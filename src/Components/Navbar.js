import React from 'react'
import PropTypes from 'prop-types'

// const changetheme = () =>{
//  color:'red';
//  backgroundColor:'dark';
   
// }


export default function Navbar(props) {

  // const  [myTheme,setmyTheme] = useState({
  //   color:'white',
  //   backgroundColor:'black'
  // })
  // const  [btntext,setbtntext] = useState('Dark')
  

// const changetheme = () =>{
//   if(btntext.color==='white'){
//     setmyTheme({
//       color:'white',
//       backgroundColor: 'black',
//       setbtntext('Dark'){
//   },
    
  
//   else{ 
//     setmyTheme({
//       color:'black',
//       backgroundColor:'white'
//     })
//    setbtntext('light')
//   }

// }
  return (
   <>
    <nav className={
    `navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid" >
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse"  id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link  active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  href="">{props.aboutText}</a>
            </li>
      
          
          </ul>
          <button className={`btn bg-light text-${props.mode==='light'?'dark':'dark'}`} onClick={props.togglemode}> Dark </button>
          
        </div>
      </div>
    </nav>
   </>
  )
}
Navbar.propTypes={
    title:PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired,
    toggleclick:PropTypes.string
}
Navbar.defaultProps = {
    title:'set title here ',
    aboutText:'About text here',
    toggleclick:'clicked button'
}