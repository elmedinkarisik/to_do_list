import {
  ListItem,
  ListItemText,
  List,
  ListItemAvatar,
  Button,
  Modal,
} from "@material-ui/core";
import "./Todo.css";
import React, { useState } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import db from "./firebase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();
  const classes = useStyles();

  const updateTodo = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button onClick={updateTodo}>Update To-Do</Button>
        </div>
      </Modal>
      <List className="todo__list">
        <ListItem>
          <ListItemAvatar />
          <ListItemText primary={props.todo.todo} secondary="Dummy Deadline" />
        </ListItem>
        <button onClick={(e) => setOpen(true)}>Edit To-Do</button>
        <DeleteForeverIcon
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
        />
      </List>
    </>
  );
}

export default Todo;
