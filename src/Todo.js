import React, { useState } from 'react';

function Todo() {
 const [todos, setTodos] = useState([]);
 const [input, setInput] = useState('');

 const addTodo = (e) => {
    e.preventDefault();
    if (todos.length < 5) {
        if (input.trim() === '' || todos.length >= 5) {
            return;
          }
      setTodos([...todos, { text: input, completed: false }]);
      setInput('');
    }
 };

 const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
 };

 const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
   };

   return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
      <button type="submit">Add</button>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} >
            <input type="checkbox" checked={todo.completed} onClick={() => toggleComplete(index)} readOnly />
            {todo.text}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
 );
}

export default Todo;