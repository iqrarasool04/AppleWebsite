import React from "react";
import styled from "styled-components";
import logoImage from "../assets/logo.png";

const Wrapper = styled.div`
  background-color: black;
  height: 400px;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 7rem 7rem 0 7rem;

  @media (max-width: 1024px) {
    padding: 5rem 4rem 0 4rem;
    height: 350px;
  }

  @media (max-width: 768px) {
    padding: 3rem 2rem 0 2rem;
    height: auto;
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
    gap: 2rem;
    text-align: center;
  }
`;

const Logo = styled.img`
  height: 60px;

  @media (max-width: 768px) {
    height: 50px;
  }

  @media (max-width: 480px) {
    height: 40px;
  }
`;

const Text = styled.div`
  font-size: 1.4rem;
  font-weight: 400;

  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const TextSection = () => {
  return (
    <Wrapper>
      <TopLine />
      <Content>
        <Logo src={logoImage} alt="Logo" />
        <Text>
          When apps request access to your photos,<br />
          iPhone lets you call the shots by sharing just<br />
          the ones you want instead of your entire<br />
          library.
        </Text>
      </Content>
    </Wrapper>
  );
};

export default TextSection;
