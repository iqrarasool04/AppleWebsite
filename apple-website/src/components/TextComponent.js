import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: black;
  color: white;
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h1`
  font-size: 4rem;
  text-align: center;
`;

const TextComponent = () => {
  return (
    <Wrapper>
      <Text>Always-On display.<br/>Always at the ready.</Text>
    </Wrapper>
  );
};

export default TextComponent;
