import React, { useRef } from "react";
import styled from "styled-components";
import { useScroll, useTransform, motion } from "framer-motion";
import phoneCase from "../assets/phonecase.png";
import phonetop from "../assets/phonetop.jpg";

// Styled Components
const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  height: 150vh;
  padding: 2rem;

  @media (max-width: 1024px) {
    height: auto;
    padding: 4rem 2rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  margin-left: 8rem;
  position: relative;
  display: flex;
  justify-content: center;

  .screen-overlay {
    position: absolute;
    width: 73%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
    pointer-events: none;
    z-index: 1;
  }

  img.phone {
    max-width: 76%;
    height: auto;
    border-radius: 1rem;
    display: block;
    position: relative;
    z-index: 2;
  }

  @media (max-width: 1024px) {
    margin-left: 0;

    .screen-overlay {
    left: 10%;
    }
  }

  @media (max-width: 768px) {
    img.phone {
      max-width: 80%;
    }

    .screen-overlay {
      width: 80%;
      left: 11%;
    }
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    .screen-overlay {
      left: 13%;
    }
  }

  @media (max-width: 480px) {
    img.phone {
      max-width: 100%;
    }

    .screen-overlay {
      width: 90%;
      left: 11%;
    }
  }
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    gap: 2rem;
  }
`;

const AnimatedText = styled(motion.div)`
  font-size: 1.75rem;
  line-height: 1.4;
  opacity: 0;

  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, #ffb6ff, #b344ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 1.75rem;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const SubText = styled.span`
  color: #86868b;
  font-size: 1.2rem;
  line-height: 1.2;
  display: inline-block;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ScrollText = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "start 40%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <AnimatedText
      ref={ref}
      style={{
        opacity,
        y,
        transition: { duration: 0.8, ease: "easeOut" },
      }}
    >
      {children}
    </AnimatedText>
  );
};

// Main Component
const ScrollRevealText = () => {
  return (
    <Section>
      <ContentWrapper>
        <ImageContainer>
          <img src={phonetop} alt="screen" className="screen-overlay" />
          <img src={phoneCase} alt="phoneCase" className="phone" />
        </ImageContainer>

        <TextContainer>
          <ScrollText>
            Now your Lock Screen is always <br />
            glanceable, so you don't even <br />
            have to tap it to stay in the know.
          </ScrollText>
          <ScrollText>
            When iPhone is turned face <br />
            down or in your pocket, it goes <br />
            dark to save battery life.
          </ScrollText>
          <ScrollText>
            <GradientText>All-day battery life</GradientText>
            <br />
            <SubText>
              even with so many
              <br />
              new capabilities.
            </SubText>
          </ScrollText>
        </TextContainer>
      </ContentWrapper>
    </Section>
  );
};

export default ScrollRevealText;
