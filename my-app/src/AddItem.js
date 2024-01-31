import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  const inputRef = useRef();
  return (
    <form action="" className='addForm' onSubmit={handleSubmit}>
      <div className='section-title'>
         <h2>Add Items</h2>
         <p>If you type the name in the box below to add items to Todolist and click the plus button, the items will be added to the list.</p>
      </div>
       
      <div className='row justify-content-center'>
              <div className='col-lg-6'>
                <div className='add-items'>
                      {/* <label htmlFor="addItem">Add Item</label> */}
                      <input type="text" className='InputBox'
                      id='addItem'
                      ref={inputRef}
                      placeholder='Add Item'
                      required 
                      value={newItem}
                      onChange={(e) => setNewItem(e.target.value)}
                      />
                      <button type='submit' className='plus-box'
                      aria-label='Add Item'
                      onClick={()=> inputRef.current.focus()} //()=> anonymous functio
                      >
                      <FaPlus />
                      </button>
                  </div>
              </div>
            </div>
    </form>
  )
}

export default AddItem