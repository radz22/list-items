import React, { useState } from 'react'

const GroceryItemComponent = ({item, handleEditItem, handleDeleteText}) => {

const [isEditing, setIsEditing ] = useState(false)
const [newItem, setNewItem] = useState(item.any)

const onEdit =  () =>{
  handleEditItem(item.id, newItem)
  setIsEditing(false)
}

  return (
   <>
   <li className='mt-3'>
    
    {isEditing ? 
    <input type='type' 
    value={newItem} 
    onChange={(e) => setNewItem(e.target.value)}/>
    :<span>{item.user}</span>
    }


    <div className='d-flex gap-5 mt-3'>
      <button onClick={() => 
      {isEditing ? onEdit() : setIsEditing(true)
      }} 
      className='btn btn-warning text-dark'>

        {isEditing ? "Save" : "Edit"}
      
      </button>
      <button onClick={() => handleDeleteText(item.id)}
      className='btn btn-danger text-dark'>delete</button>
    </div>
   </li>

   </>
  )
}

export default GroceryItemComponent