import * as React from "react";
import { TodoForm } from "./components/todo-form";
import { TodoList } from "./components/todo-list";
import { TodoResults } from "./components/todo-results";
import "./index.scss";

const todosTemplate = [
  {
    id: 0,
    label: "Fix an ability to display all tasks",
    checked: true,
  },
  {
    id: 1,
    label: "Fix a layout, checkboxes should be listed in a column",
    checked: true,
  },
  {
    id: 2,
    label: "Fix an ability to add a new task",
    checked: true,
  },
  {
    id: 3,
    label: "Fix an ability to toggle a task",
    checked: true,
  },
  {
    id: 4,
    label: "Fix an ability to delete a task",
    checked: true,
  },
  {
    id: 5,
    label: "Fix an ability to count completed tasks",
    checked: true,
  },
];

export const App = () => {
  const [todos, setTodos] = React.useState([]);

  return (
    <div className="app">
      <TodoList todos={todos} setTodos={setTodos} />
      <TodoResults todos={todos} setTodos={setTodos} />
      <TodoForm todos={todos} setTodos={setTodos} />
    </div>
  );
};
