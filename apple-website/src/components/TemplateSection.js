import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import img1 from "../assets/template1.jpg";
import img2 from "../assets/template2.jpg";
import img3 from "../assets/template3.jpg";
import img4 from "../assets/template4.jpg";

const Section = styled.section`
  background-color: #000;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'SF Pro', sans-serif;
`;

const Box = styled.div`
  background-color: #1a1a1a;
  width: 90%;
  max-width: 1000px;
  height: 300px;
  display: flex;
  overflow: hidden;
`;

const SmallBox = styled(Box)`
  height: 140px;
  margin-top: 3rem;
`;

const Left = styled.div`
  flex: 1 1 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;
`;

const Left1 = styled.div`
  display: flex;
  flex: 1 1 80%;
  margin-top: 2rem;
  margin-left: 2rem;
`;

const Heading = styled.h2`
  font-size: 1.15rem;
  color: white;
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const ButtonWrapper = styled.div`
  background: linear-gradient(270deg, #ff8a00, #e52e71, #9b00e8, #00c6ff, #ff8a00);
  background-size: 600% 600%;
  padding: 2px;
  display: inline-block;
  width: fit-content;
  transition: background-position 0.5s ease;

  &:hover {
    animation: gradientMove 3s linear infinite;
  }

  @keyframes gradientMove {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
`;

const Button = styled.button`
  background-color: #1a1a1a;
  color: white;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  display: inline-block;

  &:hover {
    background-color: #1a1a1a;
  }
`;

const Right = styled.div`
  flex: 1 1 40%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  height: 100%;
`;

const Right1 = styled.div`
  flex: 1 1 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
`;

const MotionImg = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const TemplateSection = () => {
  const boxRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: boxRef,
    offset: ["start end", "center center"],
  });

  const yDown = useTransform(scrollYProgress, [0, 1], ["-50px", "0px"]);
  const yUp = useTransform(scrollYProgress, [0, 1], ["50px", "0px"]);

  return (
    <Section>
      {/* First box with scroll animation */}
      <Box ref={boxRef}>
        <Left>
          <Heading>Take a look at our amazing premium Webflow Templates</Heading>
          <Heading>
            Other than having free Webflow cloneables, we create<br />
            cutting-edge premium Webflow templates too.
          </Heading>
          <ButtonWrapper>
            <Button>Wedoflow Templates</Button>
          </ButtonWrapper>
        </Left>
        <Right>
          <MotionImg src={img1} alt="Template 1" style={{ y: yDown }} />
          <MotionImg src={img2} alt="Template 2" style={{ y: yUp }} />
          <MotionImg src={img3} alt="Template 3" style={{ y: yDown }} />
          <MotionImg src={img4} alt="Template 4" style={{ y: yUp }} />
        </Right>
      </Box>

      {/* Second smaller box without animation */}
      <SmallBox>
        <Left1>
          <Heading>If you are looking for more free and premium Webflow templates, fell<br/>free to take a look on</Heading>
        </Left1>
        <Right1>
          <ButtonWrapper>
            <Button>Wedoflow.com</Button>
          </ButtonWrapper>
        </Right1>
      </SmallBox>
    </Section>
  );
};

export default TemplateSection;
