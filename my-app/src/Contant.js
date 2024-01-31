import React from 'react'
import Itemslist from './Itemslist';

//LIST AND KEYS
const Contant = ({items,setItems,checkName,funDelete}) => { 
  return (
    /* <> idha vandhu fragment nu solluvanga inga irundha main ah direct ah 
     app.js la kuduthutan */
    <> 
      {/* javascript expresions */}
      {/* ternary operetor start */}
      {(items.length) ? ( 
      <Itemslist
      items = {items}
      setItems = {setItems}
      checkName ={checkName}
      funDelete ={funDelete} />
      // end
      ):(
        <p className='loading-p'>Your list is empty</p>
      )
}
    </>
  )
  }

export default Contant