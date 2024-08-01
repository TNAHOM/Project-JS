import Task from "./Task";

interface TaskProps {
  task: Task[];
  editTask: (task: Task) => void;
  deleteTask: (taskId: number) => void;
}

const TaskList = ({ task, editTask, deleteTask }: TaskProps) => {
  const taskDisplay = task.map((task) => (
    <div className="task" key={task.id}>
      <li>{task.text}</li>
      <div className="buttons">
        <button className="edit" onClick={() => editTask(task)}>Edit</button>
        <button className='delete' onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  ));

  return (
    <>
      <ol>{taskDisplay}</ol>
    </>
  );
};

export default TaskList;
