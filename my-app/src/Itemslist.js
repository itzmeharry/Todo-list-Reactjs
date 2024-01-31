import React from 'react';
import LineItem from './LineItem';
const Itemslist = ({items,setItems,checkName,funDelete}) => {
  return (
<ul className='list-group list-group-flush'>
        {items.map((purpose) => (
          // using key , list kulla key ah pass pannanum apodhan state ah controll pannamudiyum
          <LineItem 
          purpose = {purpose}
          key ={purpose.id}
          setItems = {setItems}
          checkName ={checkName}
          funDelete ={funDelete}
          />
        ))}
      </ul>  )
}

export default Itemslist