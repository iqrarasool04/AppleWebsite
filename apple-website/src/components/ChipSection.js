import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import chipImg from "../assets/chip.jpeg";

const Section = styled.section`
  background-color: black;
  color: white;
  padding: 4rem 2rem;
  font-family: 'SF Pro', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 150vh;
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Content = styled.div`
  max-width: 600px;
  margin-left: 7rem;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    margin-left: 4rem;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
    padding-top: 2rem;
  }
`;

const BigText = styled.h1`
  font-size: 6rem;
  margin-bottom: 1rem;
  font-family: 'SF Pro', sans-serif;
  color: #cecece;

  @media (max-width: 1024px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const SmallText = styled.p`
  font-size: 2rem;
  line-height: 1.2;
  font-family: 'SF Pro', sans-serif;
  color: #cecece;

  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Image = styled(motion.img)`
  position: absolute;
  top: 5rem;
  left: 7rem;
  width: 600px;
  z-index: 2;

  @media (max-width: 1024px) {
    width: 400px;
    top: 3rem;
    left: 4rem;
  }

  @media (max-width: 768px) {
    position: static;
    width: 80%;
    margin: 0 auto;
  }
`;

const BottomContainer = styled.div`
  font-size: 4.5rem;
  font-weight: bold;
  font-family: 'SF Pro', sans-serif;
  color: #cecece;
  line-height: 1.2;
  margin-top: 15rem;
  margin-left: 5rem;
  margin-bottom: 5rem;

  @media (max-width: 1024px) {
    font-size: 3rem;
    margin-left: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.4rem;
    text-align: center;
    margin: 4rem auto;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ChipSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["0.25 1", "0.65 1"] });

  const x = useTransform(scrollYProgress, [0, 1], [0, 700]);

  return (
    <Section ref={ref}>
      <TopContainer>
        <Image src={chipImg} style={{ x }} />
        <Content>
          <BigText>
            The<br />mastermind<br />behind it all.
          </BigText>
          <SmallText>
            Say hello to A16 Bionic, the ultimate<br />smartphone chip.
          </SmallText>
        </Content>
      </TopContainer>

      <BottomContainer>
        Thanks for getting our<br />Webflow cloneable.
      </BottomContainer>
    </Section>
  );
};

export default ChipSection;
