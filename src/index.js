import React from "react";
import ReactDOM from "react-dom";
import { AppContainer, Title, Button } from "./style.js";
import classNames from "classnames";
import styled from "styled-components";

import "./styles.css";

const Img = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${props => props.imageSrc});
`;

function App() {
  let isHighlighted = true;

  return (
    <AppContainer>
      <Title>Hello CodeSandbox</Title>
      <h2 className={classNames("a", "b", { c: isHighlighted })}>
        Start editing to see some magic happen!
      </h2>
      <Button type="button">OK</Button>
      <Img imageSrc="https://www.w3schools.com/images/colorpicker.gif" />
    </AppContainer>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
