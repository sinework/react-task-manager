import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react'


function App() {
  const [tasks,setTasks]=useState([
    {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
    },
    {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
    },
   
    {
    "userId": 1,
    "id": 11,
    "title": "vero rerum temporibus dolor",
    "completed": true
    },
    {
    "userId": 1,
    "id": 12,
    "title": "ipsa repellendus fugit nisi",
    "completed": true
    },
  
    {
    "userId": 2,
    "id": 25,
    "title": "voluptas quo tenetur perspiciatis explicabo natus",
    "completed": true
    },])

    const deleteTask=(id)=>{
      setTasks(tasks.filter((task)=>task.id!==id))
    }
  return (
    <div className="container">
      <Header ></Header>
      {tasks.length>0? <Tasks tasks={tasks} deleteOn={deleteTask}></Tasks>:'No tasks to show'}
     
    </div>
  );
}

export default App;
