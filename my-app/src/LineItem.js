import React from 'react'
import {FaTrash} from "react-icons/fa";

const LineItem = ({purpose,setItems,checkName,funDelete}) => {
  return (
       <li key={purpose.id} className='list-group-item'> 
       <div class="todo-indicator bg-warning"></div>
         <div class="widget-content p-0">
           <div class="widget-content-wrapper border shadow p-3 bg-white rounded" style={{margin: '20px'}}>
            
                     <div class="widget-content-left mr-2">
                          <div class="custom-checkbox custom-control">
                      <input className='form-check-input' style={{width: '30px', height: '30px',border: '1px solid #86b7fe'}}
                      type="checkbox"  
                      checked={purpose.checked} 
                      onChange={() => checkName(purpose.id)}/>
                      </div>
                      </div>
                     
                      <div class="widget-content-left">
                    <label htmlFor="" className='widget-heading'
                    style={(purpose.checked)?{textDecoration:'line-through'}: null} 
                    onDoubleClick={() => checkName(purpose.id)}>{purpose.purpose}
                    </label>
                    </div>

                   


                    <div class="widget-content-right">
                      {/* set the icons */}
                      <button className='border-0 btn-transition btn btn-outline-danger'>
                          <FaTrash  role="button" tadex="0" 
                          onClick={() =>funDelete(purpose.id)} />
                      </button> 
                      </div>
                      </div>
           
           </div>

         </li>
       
         )
         
}

export default LineItem