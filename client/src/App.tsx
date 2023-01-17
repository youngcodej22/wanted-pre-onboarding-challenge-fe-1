import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import GlobalStyle from "./GlobalStyle";
import { Global } from "@emotion/react";

// * custom-hooks
import useLocalStorage from "./hooks/useLocalStorage";

// * components
import InsertForm from "./components/InsertForm";
import EditForm from "./components/EditForm";
import TodoList from "./components/TodoList";

const Header = styled.header`
  font-size: 2rem;
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [todos, setTodos] = useLocalStorage("todoList.todos", []);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedTodo, setEditedTodo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // * dependencies []: 비어있으면 렌더링 완료 후 한번만 실행됨
  useEffect(() => {
    // * 첫 rendering 이후 todos가 바뀔 떄마다 re-rendering
    filterHandler();
  }, [todos, status]);

  const addTodo = (todo) => {
    setTodos((prevState) => [...prevState, todo]);
  };

  const deleteTodo = (id) => {
    // * 클릭한 요소 외에 setTodos에 저장된 el들만 남겨라, 즉 클릭한 요소를 삭제
    setTodos((prevState) => prevState.filter((el) => el.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prevState) =>
      prevState.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : el
      )
    );
  };

  const updateTodo = (todo) => {
    setTodos((prevState) =>
      prevState.map((el) =>
        el.id === todo.id ? { ...el, text: todo.text } : el
      )
    );
    closeEditMode();
  };

  const closeEditMode = () => {
    setIsEditing(false);

    // * Tab키 focus
    previousFocusEl.focus();
  };

  const enterEditMode = (todo) => {
    setEditedTodo(todo);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  };

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <Global styles={GlobalStyle} />
      <Header>
        <h1>Todo List</h1>
      </Header>
      {isEditing && (
        <EditForm
          editedTodo={editedTodo}
          updateTodo={updateTodo}
          closeEditMode={closeEditMode}
        />
      )}
      <InsertForm addTodo={addTodo} setStatus={setStatus} />
      {todos && (
        <TodoList
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          enterEditMode={enterEditMode}
          filteredTodos={filteredTodos}
        />
      )}
    </div>
  );
}

export default App;
