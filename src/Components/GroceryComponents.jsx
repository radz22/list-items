import {MdDarkMode} from 'react-icons/md'
import {LiaSun} from 'react-icons/lia'
import {v4 as uuid} from 'uuid'
import { useState, useRef } from 'react'
import GroceryItemComponent from './GroceryItemComponent'
const GroceryComponents = () => {
  const[background, setBackground] = useState(false)

 const changeBackground = () => {
  setBackground(!background)
 }



 const inputRef= useRef()
 const [item, setItem] = useState("")
 const [groceryItems, setGroceryItems] = useState([])
 const [erros, setErros] = useState("")

const handleAddItem = () => {
  
  if (item) {
  setGroceryItems([...groceryItems , {id: uuid(), user: item }])
  setItem("")
  setErros("")
  }else{
    setErros("Grocery item cannot be empty.")
    inputRef.current.focus();
  }

}
const handleEditItem = (ids, newItem) =>{
const updatedGroceryItems = groceryItems.map((items) =>{
  if(items.id === ids){
    return {...items ,  user: newItem}
  }
  return items;
})
setGroceryItems(updatedGroceryItems);
}


const handleDeleteText = (index) => {
  const updatedTexts = groceryItems.filter((item) => item.id !== index)
  setGroceryItems(updatedTexts)

};


const handleClear = () =>{
  setGroceryItems([])
}

  return (
  <>
      
      <section className={background ? 'black' : 'white'}>
     
      
       <div className="container-xxl">
        <div className="row">
          <div className="col-12">
             <div className='grocery-buddy d-flex align-items-center  flex-column'>
             <div onClick={changeBackground} className='d-flex justify-content-end w-100 mt-5'>
        {!background ? <LiaSun color='white' fontSize={40} className='bg'/> : <MdDarkMode color='white ' fontSize={40} className='bg'/>}
      </div>
          <h1 className='text-light mt-3'>List of Items</h1> 

       <div className='input-section '>

        <div className='input-container'>
        <input className='mt-5 input' ref={inputRef} type="text" placeholder='Enter an item...' value={item} onChange={(e) => setItem(e.target.value)}/>
     
        <button className='btn btn-success text-center ms-2' onClick={handleAddItem}>Add Item</button>

       
        </div>
       </div>
       <div>
       
          {erros ? <p className='text-danger fs-6 mt-1'>{erros}</p> : null}
        </div>
     
    
      <ul>
        {groceryItems.map((component) => (
          <>
             <GroceryItemComponent 
             key={component.id} 
             item={component} 
             handleEditItem={handleEditItem}
             handleDeleteText={handleDeleteText}/>

          </>
       
    
        ))}
      </ul>
        </ div>
       {groceryItems.length > 0 ? (
        <div className='text-center'>
          <button onClick={handleClear} className='btn btn-primary text-center'>Clear Grocery Items </button> 
          </div>
       )
         : null}


          </div>
        </div>
       </div>

        </section>
       
  </>
   
  )
}

export default GroceryComponents