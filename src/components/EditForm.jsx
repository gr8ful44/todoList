import React from "react";
import { useState, useEffect } from "react";
import { Plus } from "react-bootstrap-icons";

function EditForm({ editTask, updateTaskItem, closeEditMode }) {
   const [updateTaskName, setUpdateTaskName] = useState(editTask.name);

   useEffect(() => {
      const closeModal = (e) => {
         e.key === "Escape" && closeEditMode();
      };

      window.addEventListener("keydown", closeModal);

      return () => {
         window.removeEventListener("keydown", closeModal);
      };
   }, [closeEditMode]);

   const handleSubmit = (e) => {
      e.preventDefault();
      updateTaskItem({ ...editTask, name: updateTaskName });
   };

   return (
      <div
         role="dialog"
         aria-labelledby="editTask"
         onClick={(e) => {
            e.target === e.currentTarget && closeEditMode();
         }}
      >
         <form className="todo" onSubmit={handleSubmit}>
            <div className="todoWrapper">
               <input
                  type="text"
                  id="editTask"
                  className="input"
                  value={updateTaskName}
                  onInput={(e) => setUpdateTaskName(e.target.value)}
                  required
                  autoFocus
                  maxLength={120}
               />
               <label htmlFor="editTask" className="label">
                  Update Task
               </label>
            </div>
            <button
               className="addBtn plusBtn"
               aria-label="Add Task"
               type="submit"
            >
               <Plus />
            </button>
         </form>
      </div>
   );
}

export default EditForm;
