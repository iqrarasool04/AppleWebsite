import React from "react";
import styled from "styled-components";
import logoImage from "../assets/logo.png";

const Wrapper = styled.div`
  background-color: black;
  height: 450px;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 7rem 7rem 0 7rem;

  @media (max-width: 768px) {
    padding: 4rem 2rem 0 2rem;
    height: auto;
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem 0 1rem;
  }
`;

const TopLine = styled.div`
  height: 2px;
  background-color: white;
  width: 100%;
  margin-top: 1rem;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
`;

const Logo = styled.img`
  height: 60px;

  @media (max-width: 480px) {
    height: 45px;
  }
`;

const Text = styled.div`
  font-size: 1.4rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const SimpleText = () => {
  return (
    <Wrapper>
      <TopLine />
      <Content>
        <Logo src={logoImage} alt="Logo" />
        <Text>
          iPhone is also designed from the ground up <br />
          to protect your privacy and put you in control <br />
          of what you share and who you share it with.
        </Text>
      </Content>
    </Wrapper>
  );
};

export default SimpleText;
