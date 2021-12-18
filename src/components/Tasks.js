import React from 'react'
import Task from "./Task"

function Tasks(props) {
    return (
        <>
        <ul>
        {props.tasks.map((task)=>(
               <Task id={task.id} title={task.title} deleteOn={props.deleteOn}></Task>
            
           
            ))}
        </ul>
            
        </>
    )
}

export default Tasks
