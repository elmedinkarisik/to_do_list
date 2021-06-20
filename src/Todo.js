import {
  ListItem,
  ListItemText,
  List,
  Button,
  ListItemAvatar,
} from "@material-ui/core";
import "./Todo.css";
import React from "react";
import db from "./firebase";

function Todo(props) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar />
        <ListItemText primary={props.todo.todo} secondary="Deadline" />
      </ListItem>
      <Button
        onClick={(event) => db.collection("todos").doc(props.todo.id).delete()}
      >
        Delete To-Do
      </Button>
    </List>
  );
}

export default Todo;
