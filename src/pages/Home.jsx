import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    console.log(todo);
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    let filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };
  return (
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      <Form addTodo={addTodo} />
      <List sx={{ marginTop: "0.5em" }}>
        {todos.map((todo) => (
          <div key={todo.id}>
            <TodoItem todo={todo} deleteTodo={deleteTodo} />
          </div>
        ))}
      </List>
    </Container>
  );
};

export default Home;
