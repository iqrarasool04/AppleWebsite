import React, { useState } from "react";
import styled from "styled-components";
import iphone1 from "../assets/iphone.webp";
import iphone2 from "../assets/iphone2.webp";
import iphone3 from "../assets/iphone3.webp";

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem;
  background-color: black;
  color: white;
  flex-wrap: wrap;
`;

const LeftContent = styled.div`
  flex: 1;
  max-width: 600px;
  margin-left: 5rem;
`;

const Line = styled.h1`
  font-size: 5rem;
  margin: 0.5rem 0;
  font-weight: bold;
`;

const Paragraph = styled.p`
  font-size: 2rem;
  margin-top: 1.5rem;
  line-height: 1.4;
  color: #999;
`;

const RightContent = styled.div`
  flex: 1;
  max-width: 400px;
  margin-right: 5rem;
  text-align: center;
`;

const RightImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 1.5rem;
`;

const ArrowsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const ArrowButton = styled.button`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: #222;
  color: white;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #444;
  }
`;

const ImageTextSection = () => {
  const images = [iphone1, iphone2, iphone3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Section>
      <LeftContent>
        <Line>Your photo.</Line>
        <Line>Your font.</Line>
        <Line>Your widgets.</Line>
        <Line>Your iPhone.</Line>
        <Paragraph>
          iOS 16 lets you customize your Lock<br />
          Screen in fun new ways. Layer a photo to<br />
          make it pop. Track your Activity rings. And<br />
          see live updates from your favorite apps.
        </Paragraph>
      </LeftContent>

      <RightContent>
        <RightImage src={images[currentImageIndex]} alt="iPhone Display" />
        <ArrowsContainer>
          <ArrowButton onClick={handlePrev}>&lt;</ArrowButton>
          <ArrowButton onClick={handleNext}>&gt;</ArrowButton>
        </ArrowsContainer>
      </RightContent>
    </Section>
  );
};

export default ImageTextSection;
