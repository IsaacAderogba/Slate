// modules
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// components/methods
import { toggleTodo } from "../../../store/actions/todosActions";

// styling
import { white, grey_gradient, text } from "../../~reusables/variables/colors";
import {
  medium_space_1,
  small_space
} from "../../~reusables/variables/spacing";
import { button_text } from "../../~reusables/variables/font-sizes";

const Todo = ({ todo, color, user, toggleTodo }) => {
  return (
    <StyledTodo themeColor={color}>
      <div
        onClick={() => toggleTodo(user, todo)}
        className={`box ${todo.completed}`}
      >
        <div>✓</div>
      </div>
      <p>{todo.todo}</p>
    </StyledTodo>
  );
};

const StyledTodo = styled.div`
  display: flex;
  align-items: center;
  background: ${white};
  min-height: 60px;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.11);
  margin-bottom: ${medium_space_1};

  .box {
    height: 36px;
    width: 36px;
    min-height: 36px;
    min-width: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    cursor: pointer;
    margin: 0 ${medium_space_1};
    background: ${props =>
      props.themeColor ? props.themeColor : grey_gradient};

    div {
      height: 30px;
      width: 30px;
      min-height: 30px;
      min-width: 30px;

      border-radius: 6px;
      background: ${white};
      color: ${white};
    }

    &.true {
      background: ${props =>
        props.themeColor ? props.themeColor : grey_gradient};
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        font-size: 32px;
      }
    }
  }

  p {
    font-size: ${button_text};
    color: ${text};
    margin-right: ${small_space};
  }

  @media only screen and (max-width: 500px) {
    min-height: 48px;
    margin: 12px 0 ${small_space} 0;

    .box {
      height: 24px;
      width: 24px;

      min-height: 24px;
        min-width: 24px;
      border-radius: 4px;
      margin: 0 ${small_space};

      div {
        height: 20px;
        width: 20px;

        min-height: 20px;
        min-width: 20px;
        border-radius: 4px;
      }

      &.true {
        div {
          font-size: 20px;
        }
      }
    }

    p {
      font-size: 14px;
      line-height: 1.4;
    }
  }
`;

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: (user, todo) => dispatch(toggleTodo(user, todo))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Todo);
