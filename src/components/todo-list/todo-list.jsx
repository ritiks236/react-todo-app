  import * as React from "react";
  import { Checkbox } from "../checkbox";
  import "./todo-list.scss";



  export const TodoList = (props) => {
    const { todos, setTodos } = props;

    const handleDelete = (id) => {
      const updatedTodos = todos.filter(todo => todo.id !== id);
      setTodos(updatedTodos);
    };


    const toggleCheck = (id) => {
      // Function to toggle task
      const index = todos.findIndex(todo => todo.id === id);
      const updatedTodos = [...todos];

      updatedTodos[index].checked = true;
      setTodos(updatedTodos);
      
    };



    const handleKeyUp = (e, id) => {
      if (e.keyCode === 13) {
        toggleCheck(id);
      }
    };

    return (
      <div className="todo-list">
        <span className="todo-list-title">Things to do:</span>
        {todos.length ? (
          <div className="todo-list-content">
            {todos.map((todoItem) => (
              <Checkbox
                key={todoItem.id}
                label={todoItem.label}
                checked={todoItem.checked}
                onClick={() => toggleCheck(todoItem.id)}
                onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
                onDelete={() => handleDelete(todoItem.id)}
              />
            ))}
          </div>
        ) : (
          <div className="no-todos">Looks like you&apos;re absolutely free today!</div>
        )}
      </div>
    );
  };
