import React, { useState } from "react";
import NewToDoForm from "./NewToDoForm";
import ToDo from "./ToDo";
import { v4 as uuid } from "uuid";
//-----------------------------------------
//
const ToDoList = () => {
  const INITIAL_STATE = [
    { id: uuid(), task: "Finish App", completed: false },
    { id: uuid(), task: "Finish Testing", completed: false },
  ];

  const [todos, setTodos] = useState(INITIAL_STATE);

  const remove = (id) =>
    setTodos((todos) => todos.filter((todo) => todo.id !== id));

  const add = (addObj) => {
    setTodos((todos) => [...todos, { ...addObj, id: uuid() }]);
  };

  let todoContainer = todos.map((todo) => {
    return (
      <ToDo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        completed={todo.completed}
        handleRemove={remove}
      />
    );
  });
  return (
    <div>
      <h1>Todo List</h1>
      <NewToDoForm addToDo={add} />
      {todoContainer}
    </div>
  );
};
//-----------------------------------------
export default ToDoList;
