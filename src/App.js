import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
import AddTask from "./components/AddTask";
import Task from "./components/Task";


function App() {
  const [showAddTask, setShowAddTask]= useState(true)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 3:30 pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 6th at 1:30 pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Grocery shopping",
      day: "Feb 5th at 2:30 pm",
      reminder: false,
    },
    ,
  ])

 //Add Task
 const addTask= (task)=> {
  const id = Math.floor(Math.random() * 10000 ) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
 }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id)=> {
    setTasks(tasks.map((task)=> task.id=== id ? {...task, reminder: !task.reminder} : task))
  }

  return (
   
    <div className="container">
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAddTask={showAddTask} title= "Task Tracker" />
      {showAddTask && <AddTask onAdd= {addTask} /> }
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete= {deleteTask} onToggle= {toggleReminder}/> : "Click Add button to start adding tasks!"}
    </div>
    
  );
}

export default App;
