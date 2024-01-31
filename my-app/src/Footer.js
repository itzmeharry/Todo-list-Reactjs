import React from 'react'

const Footer = ({length}) => {
    const year= new Date();
  return (
    //<footer>Copyright &copy; {year.getFullYear()}</footer> //{} use panni methodsaium use pannikalam
<div className='footer-top'>
  {/* <div className='col-lg-6'> */}
    <div className='section'>
<footer><h2 className='footer-h2'> {length}  {length===1 ? "item" : "items"} are in the list. </h2></footer>
</div>
{/* </div> */}
</div>
    )
}

export default Footer