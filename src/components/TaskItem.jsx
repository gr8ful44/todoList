import React from "react";
import { useState } from "react";
import { PenFill, Trash3Fill } from "react-bootstrap-icons";

function TaskItem({ task, deleteTask, updateTaskCheck, switchToEditMode }) {
   const [isChecked, setIsChecked] = useState(task.checked);

   const handleCheckboxChange = (e) => {
      setIsChecked(!isChecked);
      updateTaskCheck(task.id);
   };

   return (
      <li className="daTaskWrapper">
         <div className="daTask checkbox-wrapper-11">
            <input
               className="checkbox"
               type="checkbox"
               checked={isChecked}
               neme={task.name}
               id={task.id}
               onChange={handleCheckboxChange}
            />
            <label htmlFor={task.id} className="listTxt">
               {task.name}
            </label>
            <div className="btnWrapper">
               <button
                  className="editBtn btn"
                  onClick={() => switchToEditMode(task)}
               >
                  <PenFill />
               </button>
               <button
                  className="delBtn btn"
                  onClick={() => deleteTask(task.id)}
               >
                  <Trash3Fill />
               </button>
            </div>
         </div>
      </li>
   );
}

export default TaskItem;
