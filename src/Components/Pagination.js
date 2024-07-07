import React from 'react'

const Pagination = ({handleSelectedDeleted}) => {
  return (
    <div>
        <div className='pagination'>
            <button onClick={() => handleSelectedDeleted()}>Delete Selected</button>
        </div>
    </div>
  )
}

export default Pagination