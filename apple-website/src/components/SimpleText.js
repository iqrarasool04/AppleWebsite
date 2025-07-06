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
`;

const Logo = styled.img`
  height: 60px;
`;

const Text = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
`;

const SimpleText = () => {
  return (
    <Wrapper>
      <TopLine />
      <Content>
        <Logo src={logoImage} alt="Logo" />
        <Text>iPhone is also designed from the ground up <br/>to protect your privacy and put you in control <br/>of what you share and who you share it with.</Text>
      </Content>
    </Wrapper>
  );
};

export default SimpleText;

