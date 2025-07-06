import React from "react";
import styled from "styled-components";
import iphone4 from "../assets/iphone4.jpeg"; 

const Section = styled.div`
  background-color: black;
  color: white;
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  max-width: 1100px;
  width: 100%;
  text-align: center;
`;

const SmallText = styled.p`
  font-size: 2.5rem;
  text-align: left;
  color: #aaa;
  margin-left: 12rem;
  margin-bottom: 0;
`;

const LargeText = styled.h1`
  font-size: 12rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  background: linear-gradient(180deg, #ffe993, #eb831c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

const Image = styled.img`
  width: 100%;
  max-width: 1500px;
  height: auto;
  margin-top: 1rem;
`;

const BrilliantSection = () => {
  return (
    <Section>
      <Content>
        <SmallText>A display that's up to<br/>2x brighter in the sun.</SmallText>
        <LargeText>Brilliant.</LargeText>
        <Image src={iphone4} alt="iphone4" />
      </Content>
    </Section>
  );
};

export default BrilliantSection;
