import { useState } from "react";
import EditForm from "./components/EditForm";
import TaskList from "./components/TaskList";
import TodoForm from "./components/TodoForm";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
   const [tasks, setTasks] = useLocalStorage("todo", []);
   // const [focus, setFocus] = useState(null);
   const [editTask, setEditTask] = useState(null);
   const [isEditing, setEditing] = useState(false);

   const addTask = (tasks) => {
      setTasks((prevState) => [...prevState, tasks]);
   };

   const deleteTask = (id) => {
      setTasks((prevState) =>
         prevState.filter((taskItem) => taskItem.id !== id)
      );
   };

   const updateTaskCheck = (id) => {
      setTasks((prevState) =>
         prevState.map((taskItem) =>
            taskItem.id === id
               ? { ...taskItem, checked: !taskItem.checked }
               : taskItem
         )
      );
   };

   const updateTaskItem = (task) => {
      setTasks((prevState) =>
         prevState.map((taskItem) =>
            taskItem.id === task.id
               ? { ...taskItem, name: task.name }
               : taskItem
         )
      );
      closeEditMode();
   };

   const closeEditMode = () => {
      setEditing(false);
      // focus.focus();
   };

   const switchToEditMode = (task) => {
      setEditTask(task);
      setEditing(true);
      // setFocus(document.activeElement);
   };

   return (
      <div className="App">
         <header>
            <h1 className="todoTitle">My Task List</h1>
         </header>
         {isEditing && (
            <EditForm
               editTask={editTask}
               updateTaskItem={updateTaskItem}
               closeEditMode={closeEditMode}
            />
         )}
         <TodoForm addTask={addTask} />
         {tasks && (
            <TaskList
               tasks={tasks}
               deleteTask={deleteTask}
               updateTaskCheck={updateTaskCheck}
               switchToEditMode={switchToEditMode}
            />
         )}
      </div>
   );
}

export default App;
