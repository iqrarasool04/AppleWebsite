import React from 'react';
import styled from 'styled-components';
import iphone14Video from "../assets/iphone14.mp4";

const Section = styled.section`
  position: relative;
  background-color: #000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Video = styled.video`
  position: relative;
  display: block;
  overflow: visible;
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5px;
  animation: fadeInUp 1.5s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(60px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const IntroSection = () => {
  return (
    <Section>
      <Video
        src = {iphone14Video}
        autoPlay
        muted
        playsInline
      />
    </Section>
  );
};

export default IntroSection;
