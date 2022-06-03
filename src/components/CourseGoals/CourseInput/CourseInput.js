import React, { useState } from 'react';
import styled from 'styled-components';

import Button, { ClearButton } from '../../UI/Button/Button';

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "#fa7070" : "#ccc")};
    background: ${(props) => (props.invalid ? "#ffcac8" : "#d8e0e2")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    animation: ${(props) =>
      props.invalid ? "flash 600ms ease-in-out" : "none"};

    &:focus {
      outline: none;
      background: #fad0ec;
      border-color: #8b005d;
    }
  }

  @keyframes flash {
    0% {
      background-color: #ffcac8;
    }
    25% {
      background-color: #fac0be;
    }
    50% {
      background-color: #ffcac8;
    }
    75% {
      background-color: #fac0be;
    }
    100% {
      background-color: #ffcac8;
    }
  }
`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  console.log(isValid)

  return (
    <div className="form-container">
      <form onSubmit={formSubmitHandler}>
        <FormControl invalid={!isValid}>
          <label>Course Goal</label>
          <input type="text" onChange={goalInputChangeHandler} autoFocus />
        </FormControl>
        <Button type="submit">Add Goal</Button>
      </form>
      <ClearButton
        onDeleteAll={props.onDeleteAllItems}
        setValid={() => setIsValid(true)}
      />
    </div>
  );
};

export default CourseInput;
