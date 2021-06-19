import {
  ListItem,
  ListItemText,
  List,
  ListItemAvatar,
} from "@material-ui/core";
import "./Todo.css";
import React from "react";

function Todo(props) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar />
        <ListItemText primary={props.text} secondary="Deadline" />
      </ListItem>
    </List>
  );
}

export default Todo;
