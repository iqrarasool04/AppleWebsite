import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import mainImg from "../assets/main.jpeg";
import zoomImg from "../assets/zoom.jpeg";

const Section = styled.section`
  background-color: black;
  color: #cecece;
  font-family: 'SF Pro', sans-serif;
  min-height: 200vh;
  padding: 4rem 0;
`;

const BigText = styled.h1`
  font-size: 6rem;
  margin-left: 18rem;
  margin-bottom: 6rem;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 4rem;
    margin-left: 6rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-left: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
    margin-left: 1rem;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 4rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 2rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 70%;
  overflow: hidden;
  height: 630px;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
  }

  img {
    width: 100%;
    display: block;
    height: auto;
  }
`;

const Magnet = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50%;
  width: 180px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  border-radius: 0;
  pointer-events: none;
  transform: translateX(-50%);

  @media (max-width: 480px) {
    width: 120px;
    height: 200px;
  }
`;

const ZoomedView = styled.div`
  width: 25%;
  margin-left: 50px;
  height: 630px;
  overflow: hidden;
  position: relative;

  @media (max-width: 1024px) {
    width: 40%;
    margin-left: 0;
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 400px; /* Set a height so image can appear */
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`;

const ZoomImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: auto;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 150%;
  }

  @media (max-width: 480px) {
    width: 130%;
  }
`;

const TextContainer = styled.div`
  margin-top: 4rem;
  padding: 0 4rem;
  margin-left: 18rem;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.6;

  @media (max-width: 1024px) {
    margin-left: 6rem;
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    margin-left: 2rem;
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    margin-left: 1rem;
    font-size: 1.2rem;
  }
`;

const ExtraTextContainer = styled.div`
  margin-top: 2rem;
  margin-left: 18rem;
  padding: 0 4rem;

  @media (max-width: 1024px) {
    margin-left: 6rem;
  }

  @media (max-width: 768px) {
    margin-left: 2rem;
  }

  @media (max-width: 480px) {
    margin-left: 1rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, #ffb6ff, #b344ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const SubText = styled.span`
  color: #86868b;
  font-size: 1.5rem;
  line-height: 1.2;
  display: inline-block;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ResolutionSection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const magnetScrollRange = 300;
  const zoom = 2;

  const magnetY = useTransform(scrollYProgress, [0, 1], [0, magnetScrollRange]);
  const zoomImageY = useTransform(scrollYProgress, [0, 1], [0, -magnetScrollRange * zoom + 400]);

  return (
    <Section ref={sectionRef}>
      <BigText>
        Up to 4x the<br />
        resolution. For<br />
        jaw-dropping<br />
        cropping.
      </BigText>

      <Content>
        <ImageWrapper>
          <img src={mainImg} alt="Main" />
          <Magnet style={{ y: magnetY }} />
        </ImageWrapper>

        <ZoomedView>
          <ZoomImage
            src={zoomImg}
            alt="Zoomed"
            style={{ x: -200, y: zoomImageY }}
          />
        </ZoomedView>
      </Content>

      <TextContainer>
        iPhone 14Pro raises the bar for<br />
        what 48 megapixels can do -<br />
        delivering 4x the resolution in<br />
        ProRAW for mind-blowing<br />
        detail in every crop.
      </TextContainer>

      <ExtraTextContainer>
        <GradientText>65% larger sensor</GradientText>
        <br />
        <SubText>than iPhone 13 Pro</SubText>
      </ExtraTextContainer>
    </Section>
  );
};

export default ResolutionSection;
