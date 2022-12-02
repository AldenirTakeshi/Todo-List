import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";

export default function EditTodoDialog({
  editTodo,
  open,
  dialogHandler,
  todo,
}) {
  const [editdedText, setEditedText] = React.useState(todo.text);

  const textHendler = () => {
    editTodo(todo.id, editdedText);
    dialogHandler();
  };
  return (
    <Dialog
      open={open}
      onClose={dialogHandler}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
    >
      <DialogTitle id="alert-dialog-title">{"Editando Todo!"}</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          defaultValue={editdedText}
          onChange={(e) => setEditedText(e.target.value)}
        ></TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={dialogHandler}>Close</Button>
        <Button onClick={textHendler}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}
