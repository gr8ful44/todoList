import React from "react";
import { useState } from "react";
import { Bell } from "react-bootstrap-icons";

function TodoForm({ addTask }) {
   const [task, setTask] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      addTask({
         name: task,
         checked: false,
         id: Date.now(),
      });
      setTask("");
   };

   return (
      <form className="todo" onSubmit={handleSubmit}>
         <div className="todoWrapper">
            <input
               type="text"
               id="task"
               className="input"
               value={task}
               onInput={(e) => setTask(e.target.value)}
               required
               autoFocus
               maxLength={120}
            />
            <label htmlFor="task" className="label">
               Enter Task
            </label>
         </div>
         <button className="addBtn" aria-label="Add Task" type="submit">
            <Bell />
         </button>
      </form>
   );
}

export default TodoForm;
