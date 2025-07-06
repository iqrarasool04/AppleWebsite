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

const TextSection = () => {
  return (
    <Wrapper>
      <TopLine />
      <Content>
        <Logo src={logoImage} alt="Logo" />
        <Text>When apps request access to your photos,<br/>iPhone lets you call the shots by sharing just<br/>
        the ones you want instead of youe entire<br/>library</Text>
      </Content>
    </Wrapper>
  );
};

export default TextSection;

