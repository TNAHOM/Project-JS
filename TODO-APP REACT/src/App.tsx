import { useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import './App.css'
import Task from './components/Task'

const Todo = () => {
  const [currentTasks, setcurrentTasks] = useState<Task[]>([]);
  const [editTask, setEditTask] = useState<Task | null>(null);

  const addTask = (text: string) => {
    const addNewTask:Task = {
      id: currentTasks.length + 1,
      text:text
    }
    setcurrentTasks([...currentTasks, addNewTask])
  }

  const onUpdateTask = (updateTask: Task) =>{
    setcurrentTasks(currentTasks.map(currentTask =>
      currentTask.id == updateTask.id ? updateTask: currentTask
    ))
    setEditTask(null)
  }
  const deleteTask = (taskId: number) => {
    setcurrentTasks(currentTasks.filter((task) => task.id !== taskId));
  }
  
  return (
    <>
      <div className="container">
        <div className="inner">
          <h1>TODO APP REACT</h1>
          <div>
            <TaskInput
              addTask={addTask}
              onUpdateTask={onUpdateTask}
              editingTask={editTask}
            />
            <TaskList task={currentTasks} editTask={setEditTask} deleteTask={deleteTask}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
