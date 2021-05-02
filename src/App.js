import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(["Skuhaj veceru", "Uradi zadacu"]);
  const [input, setInput] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>To-Do List Web Application</h1>
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="What do you need to do?"
        />
        <button type="submit" onClick={addTodo}>
          Add Item
        </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
