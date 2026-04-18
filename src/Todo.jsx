
// hook function used to store and manage the component//
import { useState } from "react";
import "./TodoList.css";
// package to use id
import { v4 as uuidv4 } from "uuid";

export default function TodoList() 
 {
    // defining the todo 
  let [todos, setTodos] = useState([
    { task: "simple task", id: uuidv4(),isDone:false }
  ]);
// defining the todo for new object 
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    // copying all data with spread method 
    setTodos ((prevTodo) => 
    {
        return [...prevTodo , {task :newTodo , id: uuidv4(),isDone:false}]
    });
    // creating the space in input bar 
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };
  // for deletion
  let deleteTodo = (id) =>
  {
   setTodos (todos.filter( (todo) => todo.id!= id ))
   
  }
  // to update in upper case 
let upperCaseAll = () =>
{
  setTodos((prevTodos) =>
  (
    prevTodos.map((todo) =>
    {
      return {
        ...todo,
        task: todo.task.toUpperCase(),
      };
    })
  ));
};
let UpperCaseOne = (id) =>
{
  setTodos((prevTodos) =>
  (
    prevTodos.map((todo) =>
    {
      if (todo.id == id)
      {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      }
      else {
        return todo; 
      }
    })
  ));
};
// mark as done//
let done = (id) =>
{
  setTodos((prevTodos) =>
  (
    prevTodos.map((todo) =>
    {
      if (todo.id == id)
      {
        return {
          ...todo,
          isDone :true,
        };
      }
      else {
        return todo; 
      }
    })
  ));
};
 
  
  
//console.log(newArr);
return (
  <div className="app">
    <h1 className="title"> Todo List </h1>

    <div className="inputSection">
      <input
        placeholder="Write a task..."
        value={newTodo}
        onChange={updateTodoValue}
      />
      <button onClick={addNewTask}>Add</button>
    </div>

    <div className="actions">
      <button onClick={upperCaseAll}>Uppercase All</button>
    </div>

    <ul className="todoList">
      {todos.map((todo) => (
        <li key={todo.id} className="todoItem">
          <span className={todo.isDone ? "done" : ""}>
            {todo.task}
          </span>

          <div className="buttons">
            <button onClick={() => done(todo.id)}>Done</button>
            <button onClick={() => UpperCaseOne(todo.id)}>Upper</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
 }