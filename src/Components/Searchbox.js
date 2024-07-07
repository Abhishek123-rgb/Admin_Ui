import React from 'react';

export const Searchbox = ({handleSearchBox}) => {
  return (
    <div className='search-container'>
        <input placeholder='search by name email or role' onChange={(e) => handleSearchBox(e.target.value)} className='search-icon' type='text' />
    </div>
  )
}
