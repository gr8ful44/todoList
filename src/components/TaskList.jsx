import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, updateTaskCheck, switchToEditMode }) {
   return (
      <ul>
         {tasks
            .sort((a, b) => b.id - a.id)
            .map((task) => (
               <TaskItem
                  key={task.id}
                  task={task}
                  deleteTask={deleteTask}
                  updateTaskCheck={updateTaskCheck}
                  switchToEditMode={switchToEditMode}
               />
            ))}
      </ul>
   );
}

export default TaskList;
