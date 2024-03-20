import React, { useState } from 'react'

const Addtask = ({addTask}) => {

    const [value,setValue] = useState("")

    const addItem = ()=>{
        addTask(value)
        setValue("")
    }
  return (
    <>
      <div className='input-container'>
        <input
         placeholder='Add a new task' 
         type='text' 
         className='input'
         value={value}
        onChange={(e)=>{
            setValue(e.target.value)
        }}
        />
        <button onClick={addItem} className='add-btn'>ADD</button>
      </div>
    </>
  )
}

export default Addtask
