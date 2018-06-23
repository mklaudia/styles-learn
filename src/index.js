import React from "react";
import ReactDOM from "react-dom";
import { AppContainer, Title } from "./style.js";
import classNames from "classnames";

import "./styles.css";

function App() {
  let isHighlighted = true;

  return (
    <AppContainer>
      <Title>Hello CodeSandbox</Title>
      <h2 className={classNames("a", "b", { c: isHighlighted })}>
        Start editing to see some magic happen!
      </h2>
      <button type="button">OK</button>
    </AppContainer>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
