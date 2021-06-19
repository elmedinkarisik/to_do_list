import React, { useState } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";
import Todo from "./Todo";

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
      <h1>To-Do List Web-App</h1>
      <form>
        <FormControl>
          <InputLabel>Write a To-Do</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Item
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
