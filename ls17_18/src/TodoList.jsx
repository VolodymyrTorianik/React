import React, { useState, useEffect, useId, useRef, useCallback, useMemo, useReducer } from "react";

const categories = ["Робота", "Особисте", "Навчання"];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
    case "LOAD":
      return action.payload;
    default:
      return state;
  }
};

const ToDoList = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [task, setTask] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const inputRef = useRef(null);
  const id = useId();

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    dispatch({ type: "LOAD", payload: savedTodos });
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTask = useCallback(() => {
    if (task.trim() === "") return;
    dispatch({
      type: "ADD",
      payload: { id: id + task, text: task, category, completed: false },
    });
    setTask("");
    inputRef.current.focus();
  }, [task, category, id]);

  const toggleTask = useCallback((id) => {
    dispatch({ type: "TOGGLE", payload: id });
  }, []);

  const deleteTask = useCallback((id) => {
    dispatch({ type: "DELETE", payload: id });
  }, []);

  const completedCount = useMemo(() => todos.filter((todo) => todo.completed).length, [todos]);

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        ref={inputRef}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Нове завдання"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <button onClick={addTask}>Додати</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            [{todo.category}] {todo.text}
            <button onClick={() => toggleTask(todo.id)}>✅</button>
            <button onClick={() => deleteTask(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
      <p>Виконаних завдань: {completedCount}</p>
    </div>
  );
};

export default ToDoList;

