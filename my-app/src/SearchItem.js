import React from 'react'


const SearchItem = ({search,setSearch}) => {
  return (
    <form action="" className='search-form d-flex align-items-center ajaxform' onSubmit={
      (e)=> e.preventDefault()}>
                  <input type="text" 
                  id='search'
                  role='searchbox'
                  placeholder='Search Items' 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}/>
      </form>
    )
}

export default SearchItem