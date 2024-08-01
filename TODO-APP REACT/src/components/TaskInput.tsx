import { useEffect, useState } from "react";
import Task from "./Task";

interface AddTask {
  addTask: (task: string) => void;
  editingTask: Task | null;
  onUpdateTask: (task: Task) => void;
}

const TaskInput = ({ addTask, editingTask, onUpdateTask }: AddTask) => {
  const [value, SetValue] = useState<string>("");

  // Effect to update value when editingTask changes
  useEffect(() => {
    if (editingTask) {
      SetValue(editingTask.text); // Assuming the task has a 'text' property
    } else {
      SetValue("");
    }
  }, [editingTask]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingTask) {
      onUpdateTask({ ...editingTask, text: value });
    } else {
      if (value == "") {
        return;
      }
      addTask(value);
    }
    SetValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="input">
      <input
        type="text"
        value={value}
        onChange={(e) => SetValue(e.target.value)}
      />

      <button className={editingTask ? "Update" : "Add"}>
        {editingTask ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TaskInput;
