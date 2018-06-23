import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import classNames from "classnames";

import "./styles.css";

const AppContainer = styled.div`
  color: blue;
`;

function App() {
  let isHighlighted = true;

  return (
    <AppContainer>
      <h1>Hello CodeSandbox</h1>
      <h2 className={classNames("a", "b", { c: isHighlighted })}>
        Start editing to see some magic happen!
      </h2>
      <button type="button">OK</button>
    </AppContainer>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
