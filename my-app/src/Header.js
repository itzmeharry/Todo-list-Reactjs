import React from 'react';
import "react-bootstrap";

const Header = (props) => {
    //const style ={backgroundColor:'lightblue'}
  return (
        // {/* used inline style */}
        // {/* <h1 style={style}>To Do List</h1>  */}
          <h1 className='me-auto'>{props.title}</h1> 
  )
}
 //header la endhume illa na apo default ah idhu work agum
Header.defaultProps = {
  title: "welcome to do list"
}
export default Header