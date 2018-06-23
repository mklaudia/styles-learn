import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import "./styles.css";

const AppContainer = styled.div`
  color: red;
`;

function App() {
  return (
    <AppContainer>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button type="button">OK</button>
    </AppContainer>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
