import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: black;
  color: white;
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
`;

const Text = styled.h1`
  font-size: 4rem;
  text-align: center;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const TextComponent = () => {
  return (
    <Wrapper>
      <Text>
        Always-On display.
        <br />
        Always at the ready.
      </Text>
    </Wrapper>
  );
};

export default TextComponent;

