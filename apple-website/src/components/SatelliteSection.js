import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import videoFile from "../assets/emergencyContact.mp4";

const Section = styled.section`
  background: black;
  
`;

const ScrollContainer = styled.div`
  height: 250vh;
  position: relative;
`;

const StickySection = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  padding-top: 50px;
`;

const VideoWrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: cover;
`;

const TextOverlay = styled(motion.div)`
  position: absolute;
  top: 30%;
  color: #cecece;
  font-size: 6rem;
  font-weight: bold;
  line-height: 1.1;
  font-family: 'SF Pro', sans-serif;
`;

const TopLeftText = styled(motion.div)`
  position: absolute;
  top: 10%;
  left: 11%;
  color: #cecece;
  font-size: 4.5rem;
  font-weight: bold;
  line-height: 1.2;
  z-index: 0;
`;

const BottomTextContainer = styled(motion.div)`
  height: 100vh;
  display: flex;
  justify-content: center;
  color: #cecece;
  font-size: 6rem;
  font-weight: bold;
  font-family: 'SF Pro', sans-serif;
  margin-top: -87px; 
  z-index: 2;
  position: relative;
`;

const BottomTextWrapper = styled.div`
  text-align: left;
`;

const BottomParagraph = styled.p`
  font-size: 2rem;
  font-weight: normal;
  margin-top: 1rem;
  color: #aaa;
`;

const SatelliteSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const maxShrinkPoint = 0.6;

  const videoScale = useTransform(scrollYProgress, [0, maxShrinkPoint], [1, 0.8]);
  const videoTranslateY = useTransform(scrollYProgress, [0, maxShrinkPoint], ["0%", "20%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const topLeftOpacity = useTransform(scrollYProgress, [0.3, maxShrinkPoint], [0, 1]);
  const topLeftY = useTransform(scrollYProgress, [0.3, maxShrinkPoint], [50, 0]);

  return (
    <Section>
      <ScrollContainer ref={containerRef}>
        <StickySection>
          <TopLeftText style={{ opacity: topLeftOpacity, y: topLeftY }}>
            Emergency SOS<br />via satellite.
          </TopLeftText>

          <VideoWrapper style={{ scale: videoScale, y: videoTranslateY }}>
            <StyledVideo autoPlay muted loop playsInline>
              <source src={videoFile} type="video/mp4" />
            </StyledVideo>

            <TextOverlay style={{ opacity: textOpacity }}>
              Vital new safety<br />features we hope<br />you’ll never need.
            </TextOverlay>
          </VideoWrapper>
        </StickySection>
      </ScrollContainer>

      <BottomTextContainer style={{ opacity: topLeftOpacity, y: topLeftY }}>
        <BottomTextWrapper>
            Peace of<br />mind when<br />you're off the<br />grid.
            <BottomParagraph>
            If you don't have cell service or Wi-Fi,<br/>iPhone lets you text emmergeny<br/>services over satellite.
            </BottomParagraph>
        </BottomTextWrapper>
      </BottomTextContainer>
    </Section>
  );
};

export default SatelliteSection;
