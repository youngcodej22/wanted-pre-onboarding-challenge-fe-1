import { useState } from "react";
import { BsPlusSquare } from "react-icons/bs";
import styled from "@emotion/styled";

type Props = {
  setInputText: () => void;
};

const Form = styled.form``;
const InputWrap = styled.div``;
const TodoInput = styled.input``;
const TodoBtn = styled.button``;

const SelectWrap = styled.div`
  display: flex;
`;

const FilterTodo = styled.select``;

// * props.setInputText
const InsertForm = ({ addTodo, setStatus }) => {
  const [inputText, setInputText] = useState<string>("");

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    // * submit 클릭 시 새로고침을 막는다
    e.preventDefault();
    addTodo({
      text: inputText,
      completed: false,
      id: Date.now(),
    });

    // * input 초기화
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    // ! 여기에 onSubmit을 하는 이유는 button에서 캡쳐링이 일어나기 때문에
    <Form onSubmit={handleFormSubmit} className="todo">
      <InputWrap className="wrapper">
        <TodoInput
          type="text"
          id="todo"
          className="input"
          value={inputText}
          onInput={handleInputText}
          required
          autoFocus
          maxLength={60}
          placeholder="New todo"
        />
        <label className="label" htmlFor="todo">
          New todo
        </label>
      </InputWrap>
      <TodoBtn className="btn" aria-label="Add Todo" type="submit">
        <BsPlusSquare className="add-icon" />
      </TodoBtn>
      <SelectWrap>
        <FilterTodo
          onChange={statusHandler}
          name="todos"
          id=""
          className="select"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </FilterTodo>
      </SelectWrap>
    </Form>
  );
};

export default InsertForm;
