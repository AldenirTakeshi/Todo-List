import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    let filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  const editTodo = (id, editedText) => {
    let todosArrays = [...todos];
    for (let i in todosArrays) {
      if (todosArrays[i].id == id) {
        todosArrays[i].text = editedText;
      }
    }
    // todosArrays.splice(id, 1, { text: editedText, id: id });
    setTodos(todos);
  };
  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <Form addTodo={addTodo} />
      <List sx={{ marginTop: "0.5em" }}>
        {todos.map((todo) => (
          <div key={todo.id}>
            <TodoItem editTodo={editTodo} todo={todo} deleteTodo={deleteTodo} />
          </div>
        ))}
      </List>
    </Container>
  );
};

export default Home;
