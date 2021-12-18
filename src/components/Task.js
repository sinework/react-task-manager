import React from "react";
import {FaTimes} from 'react-icons/fa'

function Task(props) {
  return (
    <div id={props.id} className="task">
      <h3>{props.title}  <FaTimes style={{color:'red', cursor:'pointer'}} onClick={()=>{props.deleteOn(props.id)}}></FaTimes> </h3>
      <p>{props.id}</p>
    </div>
  );
}

export default Task;
