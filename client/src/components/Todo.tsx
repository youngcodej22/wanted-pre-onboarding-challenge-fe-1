import { BsFillCheckSquareFill, BsPencilSquare, BsTrash } from "react-icons/bs";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useState } from "react";

type Props = {};

const TodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6em;
  font-size: var(--_size);
  border: 0.2em solid hsl(var(--muted) / 0.8);
  padding: 0.6em;
  border-radius: calc(var(--_radius) * 2);
`;

const TodoItemInner = styled.div`
  display: flex;
  align-items: center;
  --taskgroup-gap: 0.5em;
  gap: var(--taskgroup-gap);
`;

const Checkbox = styled.input`
  flex-shrink: 0;
  appearance: none;
  -webkit-appearance: none;
  border-radius: var(--_radius);
  width: 1em;
  height: 1em;
  background-color: hsl(var(--muted));
  border-radius: var(--_radius);
  box-shadow: 0 0 0.5em hsl(var(--accent) / 0.1),
    0 0 0 0.05em hsl(var(--accent) / 0.5), 0 0 0 -0.2em hsl(var(--accent));
  transition: box-shadow var(--_tspeed_fast) ease-in-out,
    background-color 80ms ease-in-out;

  &:focus {
    outline: none;
  }
  &:is(:focus-visible, :hover) {
    box-shadow: 0 0 0 hsl(var(--bg)), 0 0 0 0.05em hsl(var(--accent)),
      0 0 0 0.225em hsl(var(--accent) / 0.3);
  }

  &:checked {
    background-color: hsl(var(--accent));
    /* background-color: #ff6f47; */
  }
  &:checked + label {
    text-decoration: line-through;
  }
`;
const Label = styled.label`
  position: relative;
  cursor: pointer;
  text-align: left;
  line-height: 1.4;
`;
const Checkmark = styled.p`
  content: "";
  position: absolute;
  width: 1em;
  height: 1em;
  display: grid;
  place-items: center;
  top: 50%;
  color: hsl(var(--muted));
  border-radius: var(--_radius);
  transform: translate3d(calc(-100% - var(--taskgroup-gap)), -50%, 0);
  transition: background-color 80ms ease-in-out;

  svg {
    width: 0.75em;
    height: 0.75em;
  }
`;
const TodoBtn = styled.button`
  background: ${(props) => props.backgroundColor};

  svg {
    /* svg를 이벤트 대상으로 처리할 지 여부 */
    pointer-events: none;
  }
`;

const Todo = ({ todo, deleteTodo, toggleTodo, enterEditMode }) => {
  const [isChecked, setIsChecked] = useState(todo.completed);

  const handleDeleteTodo = () => {
    deleteTodo(todo.id);
  };

  const handleEditMode = () => {
    enterEditMode(todo);
  };

  const handleCheckboxChange = () => {
    // * setTodos의 저장된 item.id들과 내가 클릭한 <Todo />의 todo.id가 일치 하면 completed를 !false, 즉 true로 변경하라
    setIsChecked(!isChecked);
    toggleTodo(todo.id);

    // setTodos(
    //   todos.map((item) => {
    //     if (item.id === todo.id) {
    //       return {
    //         ...item,
    //         completed: !item.completed,
    //       };
    //     }

    //     return item;
    //   })
    // );
  };

  return (
    <TodoItem>
      <TodoItemInner>
        <Checkbox
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          name={todo.text}
          id={todo.id}
        />
        <Label htmlFor={todo.id}>
          {todo.text}
          <Checkmark>
            <BsFillCheckSquareFill />
          </Checkmark>
        </Label>
      </TodoItemInner>

      <TodoItemInner>
        <TodoBtn
          className="btn"
          aria-label={`Update ${todo.text}`}
          onClick={handleEditMode}
          backgroundColor="rgb(11, 212, 162)"
        >
          <BsPencilSquare />
        </TodoBtn>
        <TodoBtn
          className="btn"
          aria-label={`Delete ${todo.text}`}
          onClick={handleDeleteTodo}
          backgroundColor="#ff6f47;"
        >
          <BsTrash />
        </TodoBtn>
      </TodoItemInner>
    </TodoItem>
  );
};

export default Todo;
