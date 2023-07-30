import {
  Avatar,
  Button,
  List,
  ListItem,
  Box,
  ListItemAvatar,
  ListItemText,
  Modal,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { useState } from "react";
import db from "./firebase";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: 400,
  bgcolor: "#fff",
  border: "1px solid #444",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

function Todo({ todo }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const updating = () => {
    db.collection("todos").doc(todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };
  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <h2
            style={{
              padding: "8px 0",
              backgroundColor: "#ddd",
              borderRadius: "6px",
            }}
          >
            edit me
          </h2>
          <input
            placeholder={todo.todo}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              outline: 0,
              padding: "8px",
              border: "1px solid #aaa",
              borderRadius: "6px",
              width: "90%",
              marginBottom: "8px",
            }}
            required
          />
          <Button
            sx={{ display: "block", marginLeft: "auto" }}
            variant="contained"
            onClick={updating}
          >
            Update
          </Button>
        </Box>
      </Modal>
      <List key={todo.id}>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>W</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={todo.todo}
            secondary={new Date().toLocaleTimeString()}
          />
          <Button
            variant="contained"
            color="success"
            onClick={() => setOpen(true)}
            sx={{ marginRight: "12px" }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => db.collection("todos").doc(todo.id).delete()}
          >
            Del
          </Button>
        </ListItem>
      </List>
    </>
  );
}

export default Todo;
