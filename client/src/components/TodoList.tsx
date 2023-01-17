import styled from "@emotion/styled";
import Todo from "./Todo";

type Props = {};

const TodoUl = styled.ul`
  display: grid;
  list-style-type: none;
  gap: 0.3em;
`;

const TodoList = ({
  // todos,
  // setTodos,
  deleteTodo,
  toggleTodo,
  enterEditMode,
  filteredTodos,
}) => {
  // console.log("test", todos);

  return (
    <TodoUl>
      {/* 최신 todo를 상단으로, b.id는 객체형태였기 때문에 b-a가 안된다 */}
      {filteredTodos
        .sort((a, b) => b.id - a.id)
        .map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            enterEditMode={enterEditMode}
          />
        ))}
    </TodoUl>
  );
};

export default TodoList;
