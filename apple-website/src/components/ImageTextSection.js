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

  @media (max-width: 1024px) {
    padding: 3rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    text-align: center;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  max-width: 600px;
  margin-left: 5rem;

  @media (max-width: 1024px) {
    margin-left: 2rem;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    max-width: 100%;
  }
`;

const Line = styled.h1`
  font-size: 5rem;
  margin: 0.5rem 0;
  font-weight: bold;

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

const Paragraph = styled.p`
  font-size: 2rem;
  margin-top: 1.5rem;
  line-height: 1.4;
  color: #999;

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

const RightContent = styled.div`
  flex: 1;
  max-width: 400px;
  margin-right: 5rem;
  text-align: center;

  @media (max-width: 1024px) {
    margin-right: 2rem;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-top: 2rem;
    max-width: 100%;
  }
`;

const RightImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 1.5rem;
  border-radius: 1rem;

  @media (max-width: 480px) {
    border-radius: 0.75rem;
  }
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

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    font-size: 1.4rem;
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
