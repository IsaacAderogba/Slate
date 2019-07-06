// modules
import React from "react";
import styled from "styled-components";

// components

// styles
import { text, white, alt_background } from "../../~reusables/variables/colors";
import { small_space } from "../../~reusables/variables/spacing";
import { ButtonPrimary } from "../../~reusables/atoms/Buttons";
import { heading_3 } from "../../~reusables/variables/font-sizes";
import Todo from "./Todo";

const TodosBody = ({ user }) => {
  console.log(user);
  return (
    <StyledTodos>
      <div className="open-todos">
        <div className="header">
          <h1>Open Todos</h1>
          {user[0].emoji === "happy" && (
            <div className="emoji">
              <span role="img" aria-label="happy">
                🙂
              </span>
            </div>
          )}
          {user[0].emoji === "grinning_face" && (
            <div className="emoji">
              <span role="img" aria-label="grinning face">
                😁
              </span>
            </div>
          )}
          {user[0].emoji === "sticky_out_tongue" && (
            <div className="emoji">
              <span role="img" aria-label="sticky tongue face">
                😜
              </span>
            </div>
          )}
          {user[0].emoji === "Indifferent" && (
            <div className="emoji">
              <span role="img" aria-label="indifferent">
                😕
              </span>
            </div>
          )}
          {user[0].emoji === "Sad" && (
            <div className="emoji">
              <span role="img" aria-label="Sad">
                😔
              </span>
            </div>
          )}
          {user[0].emoji === "Angry" && (
            <div className="emoji">
              <span role="img" aria-label="Angry">
                😠
              </span>
            </div>
          )}
        </div>
        <div className="todos">
            {user[0].openTasks.map(todo => {
                return <Todo key={todo.id} todo={todo} color={user[0].theme} user={user} />
            })}
        </div>
      </div>
      <div className="closed-todos">
        <div className="header">
          <h1>Closed Todos</h1>
          <ButtonPrimary width="120px" color={user[0].theme}>
            Clear
          </ButtonPrimary>
        </div>
        <div className="todos">
        {user[0].closedTasks.map(todo => {
                return <Todo key={todo.id} todo={todo} color={user[0].theme} user={user} />
            })}
        </div>
      </div>
    </StyledTodos>
  );
};

const StyledTodos = styled.main`
  max-width: 800px;
  margin: 0 auto;

  .emoji {
    width: 36px;
    height: 36px;
    background: ${alt_background};
    border: 2px solid ${white};
    border-radius: 50%;
    text-align: center;

    span {
      font-size: 30px;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .open-todos {
    h1 {
      color: ${white};
      margin: ${small_space} 0;
    }
  }

  .closed-todos {
    h1 {
      color: ${text};
      margin: ${small_space} 0;
    }
  }

  @media only screen and (max-width: 500px) {
    h1 {
      font-size: ${heading_3};
    }
  }
`;

export default TodosBody;
