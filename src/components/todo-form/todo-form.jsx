import * as React from "react";
import "./todo-form.scss";

export const TodoForm = (props) => {
  const { todos, setTodos } = props;
  const [task, setTask] = React.useState("");

  const handleAddTodo = () => {
    // Function to add todo
    const newTodo = {
      id: Date.now(),
      label: task,
      checked: null
    }  
    setTodos([...todos, newTodo]);
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input placeholder="Enter new task" value={task} onChange={(e) => setTask(e.target.value)} onKeyUp={handleKeyUp} />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
