import React, { useRef } from "react";
import styled from "styled-components";
import { useScroll, useTransform, motion } from "framer-motion";
import crash from "../assets/crash.jpeg";

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  height: auto;
  min-height: 150vh;
  padding: 8rem 9rem;

  @media (max-width: 1024px) {
    padding: 6rem 4rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1.5rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 3rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  max-width: 70%;
  height: auto;
  border-radius: 1rem;
  object-fit: cover;

  @media (max-width: 768px) {
    max-width: 90%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const LargeAnimatedText = styled(motion.div)`
  font-size: 5rem;
  font-weight: 800;
  line-height: 1.2;
  opacity: 0;

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

const AnimatedText = styled(motion.div)`
  font-size: 1.8rem;
  line-height: 1.4;
  opacity: 0;

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

const CrashDetection = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const { scrollYProgress: scroll1 } = useScroll({
    target: ref1,
    offset: ["start 70%", "start 40%"],
  });
  const opacity1 = useTransform(scroll1, [0, 1], [0, 1]);
  const y1 = useTransform(scroll1, [0, 1], [40, 0]);

  const { scrollYProgress: scroll2 } = useScroll({
    target: ref2,
    offset: ["start 95%", "start 40%"],
  });
  const opacity2 = useTransform(scroll2, [0, 1], [0, 1]);
  const y2 = useTransform(scroll2, [0, 1], [40, 0]);

  return (
    <Section>
      <ContentWrapper>
        <ImageContainer>
          <StyledImage src={crash} alt="crash" />
        </ImageContainer>

        <TextContainer>
          <LargeAnimatedText
            ref={ref1}
            style={{ opacity: opacity1, y: y1, transition: { duration: 0.8, ease: "easeOut" } }}
          >
            Crash<br />Detection<br />calls for<br />help when<br />you can't.
          </LargeAnimatedText>

          <AnimatedText
            ref={ref2}
            style={{ opacity: opacity2, y: y2, transition: { duration: 0.8, ease: "easeOut" } }}
          >
            iPhone 14 Pro can detect a severe car<br />
            crash, then call 911 and notify your<br />
            emergency contacts.
          </AnimatedText>
        </TextContainer>
      </ContentWrapper>
    </Section>
  );
};

export default CrashDetection;
