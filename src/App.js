// modules
import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

// components
import Signup from "./components/views/signup/Signup";
import Login from "./components/views/login/Login";
import Onboarding from "./components/views/onboarding/Onboarding";
import Todos from "./components/views/todos/Todos";
import Profile from "./components/views/profile/Profile";

// styles
import "./App.css";

function App() {
  return (
    <StyledApp>
      <Route exact path="/" render={routeProps => <Signup {...routeProps} />} />
      <Route
        exact
        path="/login"
        render={routeProps => <Login {...routeProps} />}
      />
      <Route
        exact
        path="/onboarding"
        render={routeProps => <Onboarding {...routeProps} />}
      />
      <Route
        exact
        path="/todos"
        render={routeProps => <Todos {...routeProps} />}
      />
      <Route
        exact
        path="/profile"
        render={routeProps => <Profile {...routeProps} />}
      />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  -webkit-animation: fadein 1.25s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 1.25s; /* Firefox < 16 */
  -ms-animation: fadein 1.25s; /* Internet Explorer */
  -o-animation: fadein 1.25s; /* Opera < 12.1 */
  animation: fadein 1.25s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default App;
