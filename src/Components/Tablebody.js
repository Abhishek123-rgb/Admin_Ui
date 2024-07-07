import React from 'react';

const Tablebody = ({ userdata, handleDelete, handleSelected, checkedvalue, setChecked }) => {
  return (
    <div>
      <div className='tablebody-container'>
        <div className='tablebody-header'>
          <input type='checkbox' />
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Role</h4>
          <h4>Action</h4>
        </div>
        {userdata && userdata.map((item, index) => (
          <div key={item.id} className='tablebody-row'>
            <input onChange={(e) => {handleSelected(item.id, e.target.checked); setChecked(e.target.checked)} } checked={checkedvalue} type='checkbox' />
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>{item.role}</p>
            <div className='action'>
              <button>edit</button>
              <button onClick={() => handleDelete(item.id)}>delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tablebody;
