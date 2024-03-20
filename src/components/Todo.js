import React, { useEffect, useState } from 'react'
import "./Todo.css"
import Addtask from './Addtask'
import Listtask from './Listtask'

const Todo = () => {    
    const [tasks, settasks] = useState([])

    const currentDate =new Date()
    const currentDay = currentDate.getDay();
    const day = ["Sunday" , "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    useEffect(()=>{
      document.title = `you have ${tasks.length} pending tasks`
    })

    const addTask = (title)=>{
        const newTask = [...tasks, {title}]
        settasks(newTask)
    };

    const removeTask = (index)=>{
      const newTask = [...tasks]
      newTask.splice(index,1)
      settasks(newTask)
    }

  return (
    <>
      <div className='todo-container'>

        <div className='header'>
          <h3>whoop's, it's {day[currentDay]}</h3>
          <p className='para'>Create your task's here</p>
          </div>

        <div className='add-task'>
            <Addtask addTask={addTask}/>
        </div>

        <div className='tasks'>
            {tasks.map((task, index)=>(
                <Listtask task={task} removeTask={removeTask}
                index = {index}
                key={index}
                />
            ))}
            
        </div>

      </div>
    </>
  )
}

export default Todo
