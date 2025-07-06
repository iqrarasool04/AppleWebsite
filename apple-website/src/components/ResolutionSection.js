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
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 4rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 70%;
  overflow: hidden;
  height: 630px;
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
`;

const ZoomedView = styled.div`
  width: 25%;
  margin-left: 50px;
  height: 630px;
  overflow: hidden;
  position: relative;
`;

const ZoomImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 200%; 
  pointer-events: none;
`;

const TextContainer = styled.div`
  margin-top: 4rem;
  padding: 0 4rem;
  margin-left: 18rem;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.6;
`;

const ExtraTextContainer = styled.div`
  margin-top: 2rem;
  margin-left: 18rem;
  padding: 0 4rem;
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, #ffb6ff, #b344ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 2rem;
`;

const SubText = styled.span`
  color: #86868b;
  font-size: 1.5rem;
  line-height: 1.2;
  display: inline-block;
  margin-top: 0.5rem;
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

  const zoomImageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -magnetScrollRange * zoom + 400] 
  );

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
          <img
            src={mainImg}
            alt="Main"
            style={{ width: "100%", display: "block" }}
          />
          <Magnet style={{ y: magnetY }} />
        </ImageWrapper>

        <ZoomedView>
          <ZoomImage
            src={zoomImg}
            alt="Zoomed"
            style={{
                x: -200, 
                y: zoomImageY, 
            }}
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

