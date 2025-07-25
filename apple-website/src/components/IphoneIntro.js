import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import iphoneImg from "../assets/iphoneBoundary.png";
import iphoneVideo from "../assets/iphoneScreen.mp4";

const Wrapper = styled.div`
  color: white;
  background: black;
  height: 800vh;
  font-family: sans-serif;
  position: relative;
  overflow: visible;
`;

const StickySection = styled(motion.div)`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  padding-left: 150px;
  z-index: 10;
  overflow: visible;

  @media (max-width: 768px) {
    padding-left: 40px;
  }

  @media (max-width: 480px) {
    padding-left: 20px;
  }
`;

const TextContent = styled(motion.div)`
  z-index: 2;
  transform-origin: left center;
`;

const TextBlock = styled.div`
  font-size: 5.5rem;
  font-weight: 600;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const IphoneTextHolder = styled.div`
  display: flex;
  align-items: center;
  font-size: 5.5rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const OShape = styled(motion.div)`
  height: 35px;
  border-radius: 80%;
  border: 8px solid white;
  background-color: transparent;
  margin: 0 4px;

  @media (max-width: 768px) {
    height: 25px;
    border-width: 6px;
  }

  @media (max-width: 480px) {
    height: 20px;
    border-width: 5px;
  }
`;

const ImageHolder = styled(motion.img)`
  position: absolute;
  top: 113%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 55vw;
  max-width: 900px;
  z-index: 1;
  pointer-events: none;
  -webkit-mask-image: linear-gradient(to bottom, white 65%, transparent 100%);
  mask-image: linear-gradient(to bottom, white 65%, transparent 100%);

  @media (max-width: 768px) {
    width: 70vw;
  }

  @media (max-width: 480px) {
    width: 80vw;
  }
`;


const VideoOverlay = styled(motion.video)`
  position: absolute;
  top: 120%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 55vw;
  max-width: 900px;
  height: auto;
  z-index: 2;
  pointer-events: none;
  object-fit: cover;
  clip-path: inset(1% 4% 8% 4% round 14% 14% 2% 2%);
  -webkit-mask-image: linear-gradient(to bottom, white 25%, transparent 100%);
  mask-image: linear-gradient(to bottom, white 25%, transparent 100%);

  @media (max-width: 768px) {
    width: 70vw;
  }

  @media (max-width: 480px) {
    width: 80vw;
  }
`;

const NewText = styled(motion.div)`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.75rem;
  font-weight: 500;
  z-index: 2;
  color: white;
  text-align: center;
  pointer-events: none;
  padding: 0 1rem;

  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const IphoneIntro = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const width = useTransform(scrollYProgress, [0.1, 0.5], [35, 100]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0.1, 0.5], [1, 1.4]);
  const newTextOpacity = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const y = useTransform(scrollYProgress, [0.65, 1], [0, -500]);

  return (
    <Wrapper ref={sectionRef}>
      <StickySection style={{ y }}>
        <TextContent style={{ opacity: textOpacity, scale: textScale }}>
          <TextBlock>Meet the</TextBlock>
          <IphoneTextHolder>
            <div>New iph</div>
            <OShape style={{ width }} />
            <div>ne</div>
          </IphoneTextHolder>
        </TextContent>

        <ImageHolder src={iphoneImg} style={{ opacity: imageOpacity }} />

        <VideoOverlay
          src={iphoneVideo}
          style={{ opacity: imageOpacity }}
          autoPlay
          muted
          loop
          playsInline
        />

        <NewText style={{ opacity: newTextOpacity }}>
          Introducing Dynamic Island, a truly Apple <br />
          innovation that's hardware and software and <br />
          something in between. It bubbles up music, <br />
          sports scores, FaceTime, and so much more <br />
          – all without taking you away from what <br />
          you're doing.
        </NewText>
      </StickySection>
    </Wrapper>
  );
};

export default IphoneIntro;

