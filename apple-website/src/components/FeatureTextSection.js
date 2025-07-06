import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import image from "../assets/image.png";

const Container = styled.div`
  background-color: black;
  width: 100%;
  min-height: 300vh;
  position: relative;
`;

const StickySection = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 500;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  line-height: 1.2;
  text-align: center;

  background-image: 
    url(${image}), 
    url(${image}); 
  background-repeat: no-repeat;
  background-size: cover, cover;
  background-position: top center, bottom center;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;

  position: relative;
  z-index: 3;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url(${image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom center;
    transform: scaleY(-1);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: -1;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 0 10px;
  }
`;

const TextWrapper = styled.div`
  position: relative;
  display: inline-block;
  padding: 0 1rem;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url(${image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom center;
    transform: scaleY(-1);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: -1;
    pointer-events: none;
  }
`;

const FeatureTextSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Container ref={ref}>
      <StickySection>
        <TextWrapper>
          <Text style={{ backgroundPositionY: bgY }}>
            A magical new way to interact with iPhone. Groundbreaking safety
            features designed to save lives. An innovative 48MP camera for
            mind-blowing detail. All powered by the ultimate smartphone chip.
          </Text>
        </TextWrapper>
      </StickySection>
    </Container>
  );
};

export default FeatureTextSection;
