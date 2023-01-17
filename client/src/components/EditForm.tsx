import { useState, useEffect } from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import styled from "@emotion/styled";

type Props = {};

const EditFormWrap = styled.div``;
const Form = styled.form``;
const InputWrap = styled.div``;
const Input = styled.input``;
const Label = styled.label``;
const EditedBtn = styled.button``;

const EditForm = ({ editedTodo, updateTodo, closeEditMode }) => {
  const [updatedTodoText, setUpdatedTodoText] = useState(editedTodo.text);

  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    };

    window.addEventListener("keydown", closeModalIfEscaped);

    return () => {
      window.removeEventListener("keydown", closeModalIfEscaped);
    };
  }, [closeEditMode]);

  const handleInput = (e) => {
    setUpdatedTodoText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTodo({ ...editedTodo, text: updatedTodoText });
  };

  return (
    <EditFormWrap
      role="dialog"
      aria-labelleby="editTodo"
      onClick={(e) => {
        e.target === e.currentTarget && closeEditMode();
      }}
    >
      <Form onSubmit={handleFormSubmit} className="todo">
        <InputWrap className="wrapper">
          <Input
            type="text"
            id="editTodo"
            className="input"
            value={updatedTodoText}
            onInput={handleInput}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Todo"
          />
          <Label htmlFor="editTodo" className="label">
            Update Todo
          </Label>
        </InputWrap>
        <EditedBtn
          className="btn"
          aria-label={`Confirm edited todo to now read ${updatedTodoText}`}
          type="submit"
        >
          <BsFillCheckSquareFill />
        </EditedBtn>
      </Form>
    </EditFormWrap>
  );
};

export default EditForm;
